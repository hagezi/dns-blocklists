import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const PAGE = process.env.LISTSEEK_URL || "https://hagezi-mirror.dnsbunker.org/listseek.php";
const GH = process.env.GITHUB_API_URL || "https://api.github.com";
const UA = "hagezi-dns-blocklists-listseek-lookup (+https://github.com/hagezi/dns-blocklists)";
const MARKER = "<!-- listseek-lookup";
const DRY = process.env.DRY_RUN === "1";
const MAX_DOMAINS = 150;
const BATCH = 50;
const RDAP_MAX = 10;
const DETAIL_MAX = 20;
const OPEN_MAX = 5;
const ROWS_MAX = 12;
const SUMMARY_LISTS = 6;
const COMMENT_LIMIT = 64000;
const NEW_DAYS = 30;

const REPORTED = {
  "multi light": ["light"],
  "multi normal": ["multi"],
  "multi pro": ["pro"],
  "multi pro mini": ["pro.mini"],
  "multi pro++": ["pro.plus"],
  "multi pro++ mini": ["pro.plus.mini"],
  "multi ultimate": ["ultimate"],
  "multi ultimate mini": ["ultimate.mini"],
  "fake": ["fake"],
  "pop-up ads": ["popupads"],
  "threat intelligence feeds": ["tif"],
  "threat intelligence feeds medium": ["tif.medium"],
  "threat intelligence feeds mini": ["tif.mini"],
  "threat intelligence feeds ips": ["tif-ips"],
  "doh/vpn/tor/proxy bypass": ["doh-vpn-proxy-bypass"],
  "doh bypass": ["doh", "doh.top"],
  "doh bypass ips": ["doh-ips"],
  "safesearch not supported": ["nosafesearch"],
  "dynamic dns": ["dyndns"],
  "badware hoster": ["hoster"],
  "most abused tlds": ["spam-tlds*"],
  "anti piracy": ["anti.piracy"],
  "gambling": ["gambling*"],
  "social networks": ["social"],
  "nsfw": ["nsfw"],
  "native tracker": ["native.*"],
  "referral": ["blocklist-referral-native", "whitelist-referral*"],
  "url shortener": ["urlshortener", "whitelist-urlshortener"],
};

const SKIP = new Set(["0.0.0.0", "127.0.0.1", "::", "::1", "localhost"]);
const IPV4 = /^\d{1,3}(?:\.\d{1,3}){3}(?:\/\d{1,2})?$/;
const IPV6 = /^[0-9a-f]*:[0-9a-f]*:[0-9a-f:.]*(?:\/\d{1,3})?$/i;
const LABEL = "(?:\\*|[\\p{L}\\p{N}_](?:[\\p{L}\\p{N}_-]*[\\p{L}\\p{N}_])?)";
const DOMAIN = new RegExp(`^${LABEL}(?:\\.${LABEL})+$`, "u");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const lc = (s) => String(s ?? "").toLowerCase();
const uniq = (a) => [...new Set(a)];
const now = () => Math.floor(Date.now() / 1000);
const day = (ts) => new Date(ts * 1000).toISOString().slice(0, 10);
const stamp = (ts) => new Date(ts * 1000).toISOString().slice(0, 16).replace("T", " ") + " UTC";
const clean = (s) => String(s ?? "").replace(/[\p{Cc}\p{Cf}]+/gu, " ");
const code = (s) => "`" + clean(s).replace(/`/g, "'").trim() + "`";
const cell = (s) => String(s).replace(/\|/g, "\\|");
const html = (s) => clean(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const plain = (s, n = 80) => clean(s).replace(/[^\p{L}\p{N} .,&'()+\/-]/gu, "").replace(/\s+/g, " ").trim().slice(0, n);
const hostName = (s) => lc(s).replace(/[^a-z0-9.-]/g, "");
const isNrd = (stem) => /^(nrd|dga)/i.test(stem);
const specMatch = (spec, stem) => (spec.endsWith("*") ? stem.startsWith(spec.slice(0, -1)) : stem === spec);
const short = (s, n) => (String(s).length > n ? String(s).slice(0, n - 1) + "…" : String(s));
const statusName = (s) => (s === "Dead" ? "Dead (no DNS)" : s);
const lookupUrl = (items) => `${PAGE}?domains=${encodeURIComponent(items.join("\n"))}`;
const log = (s) => console.log(s);
const warn = (s) => console.log(`::warning::${s}`);

function age(ts) {
  const d = Math.floor((now() - ts) / 86400);
  if (d < 1) return "today";
  if (d < 60) return `${d} day${d === 1 ? "" : "s"} ago`;
  const m = Math.floor(d / 30.44);
  if (m < 24) return `${m} months ago`;
  return `${Math.floor(d / 365.25)} years ago`;
}

async function gh(method, path, body) {
  const headers = { accept: "application/vnd.github+json", "x-github-api-version": "2022-11-28", "user-agent": UA };
  if (process.env.GITHUB_TOKEN) headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  if (body) headers["content-type"] = "application/json";
  const res = await fetch(GH + path, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) throw new Error(`GitHub ${method} ${path}: ${res.status} ${(await res.text()).slice(0, 300)}`);
  return res.status === 204 ? null : res.json();
}

async function listseek(params) {
  const url = `${PAGE}?${new URLSearchParams({ api: "1", ...params })}`;
  let last = "";
  for (let attempt = 1; attempt <= 4; attempt++) {
    let wait = 5 * attempt;
    try {
      const res = await fetch(url, {
        headers: { accept: "application/json", "user-agent": UA },
        signal: AbortSignal.timeout(90000),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data && !data.error) return data;
      last = `${res.status} ${data?.error ?? ""}`.trim();
      if (res.status !== 429 && res.status < 500) break;
      wait = Number(res.headers.get("retry-after")) || (res.status === 429 ? 60 : wait);
    } catch (e) {
      last = e.message;
    }
    if (attempt < 4) await sleep(Math.min(wait, 90) * 1000);
  }
  throw new Error(`listseek ${params.rdap ? "RDAP" : "search"} failed: ${last}`);
}

function sections(body) {
  const heads = [...body.matchAll(/^###[ \t]+(.+?)[ \t]*$/gm)];
  return heads.map((m, i) => {
    const end = i + 1 < heads.length ? heads[i + 1].index : body.length;
    return [m[1].trim(), body.slice(m.index + m[0].length, end).trim()];
  });
}

function hostOf(token) {
  let h = token
    .replace(/\[\.\]|\(\.\)|\{\.\}|\[dot\]|\(dot\)/gi, ".")
    .replace(/^h[tx]{2}ps?(?:\[:\]|:)\/\//i, "")
    .replace(/^[a-z][a-z0-9+.-]*:\/\//i, "")
    .replace(/^(?:@@)?\|\|/, "");
  if (IPV4.test(h) || IPV6.test(h)) return lc(h);
  h = h.split(/[\/?#^$]/)[0].replace(/^[^@]*@/, "");
  if (/^\[[0-9a-f:]+\]/i.test(h)) h = h.slice(1, h.indexOf("]"));
  else if ((h.match(/:/g) ?? []).length === 1) h = h.split(":")[0];
  return lc(h).replace(/\.+$/, "");
}

function candidate(h) {
  if (!h || h.length > 253 || SKIP.has(h)) return false;
  if (IPV4.test(h) || IPV6.test(h)) return true;
  if (!DOMAIN.test(h)) return false;
  const tld = h.slice(h.lastIndexOf(".") + 1);
  return tld === "*" || (tld.length >= 2 && !/^\d+$/.test(tld));
}

function extract(text) {
  const src = String(text ?? "").replace(/^\s*```.*$/gm, " ").replace(/_No response_/gi, " ");
  const seen = new Set();
  const out = [];
  for (const part of src.split(/[\s,;]+/)) {
    const token = part.replace(/^[("'`<{]+|[)"'`>}:!?.]+$/g, "").replace(/^\[(?!\.\])|(?<!\[\.)\]$/g, "");
    const h = hostOf(token);
    if (!candidate(h) || seen.has(h)) continue;
    seen.add(h);
    out.push(h);
  }
  return out;
}

function parseIssue(issue) {
  const body = String(issue.body ?? "").replace(/\r\n?/g, "\n");
  const sec = sections(body);
  const labels = (issue.labels ?? []).map((l) => lc(typeof l === "string" ? l : l.name));
  const field = sec.find(([h]) => /^which domain\(s\)/i.test(h));
  let kind = null;
  if (field) kind = /unblock|allow/i.test(field[0]) ? "allow" : "deny";
  else if (labels.includes("allow")) kind = "allow";
  else if (labels.includes("deny")) kind = "deny";
  if (!kind) return null;
  const listField = sec.find(([h]) => /^which blocklist\(s\)/i.test(h))?.[1] ?? "";
  const reported = /^_no response_$/i.test(listField)
    ? []
    : uniq(listField.split(/,\s*|\n+/).map((s) => s.trim()).filter(Boolean)).slice(0, 30);
  const domains = extract(field ? field[1] : issue.title);
  if (!field && domains.length === 0) return null;
  return { kind, domains, reported };
}

async function findComment(repo, number) {
  for (let page = 1; page <= 30; page++) {
    const list = await gh("GET", `/repos/${repo}/issues/${number}/comments?per_page=100&page=${page}`);
    const hit = list.find((c) => c.user?.type === "Bot" && String(c.body ?? "").startsWith(MARKER));
    if (hit) return hit;
    if (list.length < 100) return null;
  }
  return null;
}

async function lookup(domains) {
  const out = { lists: {}, queried: 0, missing: new Set(), failed: new Set(), partial: false, stale: 0, invalid: 0, results: new Map() };
  for (let i = 0; i < domains.length; i += BATCH) {
    const d = await listseek({ domains: domains.slice(i, i + BATCH).join("\n"), nrd_dga: "1" });
    Object.assign(out.lists, d.lists ?? {});
    out.queried = Math.max(out.queried, d.queried ?? 0);
    (d.missing ?? []).forEach((x) => out.missing.add(x));
    (d.failed ?? []).forEach((x) => out.failed.add(x));
    out.partial ||= Boolean(d.partial);
    out.stale = Math.max(out.stale, d.stale ?? 0);
    out.invalid += d.invalid ?? 0;
    for (const r of d.results ?? []) if (!out.results.has(r.display)) out.results.set(r.display, r);
  }
  out.results = [...out.results.values()];
  return out;
}

const isAddress = (r) => Boolean(r.cidr) || IPV4.test(r.core) || String(r.core).includes(":");

async function registrations(results) {
  const map = new Map();
  const targets = results.filter((r) => !isAddress(r) && !String(r.display).includes("*"));
  if (targets.length === 0 || targets.length > RDAP_MAX) return null;
  for (const r of targets) {
    const core = lc(r.core);
    const known = [...map.values()].find((x) => x?.name && (core === lc(x.name) || core.endsWith("." + lc(x.name))));
    if (known) {
      map.set(r.id, known);
      continue;
    }
    try {
      map.set(r.id, (await listseek({ rdap: r.core })).rdap ?? null);
    } catch (e) {
      warn(e.message);
      map.set(r.id, null);
    }
  }
  return map;
}

function analyse(r, lists) {
  const label = (stem) => lists[stem]?.label ?? stem;
  const files = (test) => r.rows.filter((x) => test(x.kind)).flatMap((x) => x.files ?? []);
  const block = files((k) => k === "block");
  const allow = files((k) => k !== "block");
  const perm = block.filter((f) => !isNrd(f.list));
  const nrd = block.filter((f) => isNrd(f.list));
  let status;
  if (r.dead) status = "Dead";
  else if (perm.length && allow.length) status = "Blocked + allow rule";
  else if (perm.length) status = "Blocked";
  else if (nrd.length) status = allow.length ? "NRD/DGA + allow rule" : "NRD/DGA only";
  else if (allow.length) status = "Allow rule only";
  else status = "Not listed";
  return {
    status,
    blockedBy: uniq([...perm, ...nrd].map((f) => label(f.list))),
    allowedBy: uniq(allow.map((f) => label(f.list))),
  };
}

function shortList(labels) {
  if (labels.length === 0) return "—";
  const head = labels.slice(0, SUMMARY_LISTS).join(", ");
  return labels.length > SUMMARY_LISTS ? `${head} +${labels.length - SUMMARY_LISTS} more` : head;
}

function statusText(s) {
  return s.startsWith("Blocked") ? `**${s}**` : statusName(s);
}

function ruleHost(rule) {
  const m = String(rule).replace(/^@@/, "").match(/^\|\|([^\^$\/|]+)/);
  return m ? lc(m[1]) : null;
}

function matchText(r, x, pattern) {
  if (x.via) return `${(r.cname ?? []).includes(x.via) ? "CNAME" : "via"} ${code(x.via)}`;
  if (pattern) return "pattern";
  const h = ruleHost(x.rule);
  const core = lc(r.core);
  if (!h || h.includes("*")) return "wildcard";
  if (h === core) return "exact";
  if (core.endsWith("." + h)) return `parent ${code(h)}`;
  return "rule";
}

function reportedState(r, name) {
  const specs = REPORTED[lc(name)];
  if (!specs) return null;
  const hit = (test) => r.rows.some((x) => test(x.kind) && (x.files ?? []).some((f) => specs.some((s) => specMatch(s, f.list))));
  return { blocks: hit((k) => k === "block"), allows: hit((k) => k !== "block") };
}

function reportedLine(r, kind, reported) {
  if (reported.length === 0) return null;
  const parts = reported.map((name) => {
    const st = reportedState(r, name);
    const shown = plain(name, 60);
    if (!st) return `${shown}: not mapped`;
    const { blocks, allows } = st;
    const state = blocks && allows ? "**blocks**, allow rule too" : blocks ? "**blocks**" : allows ? "allow rule" : "not listed";
    return `${shown}: ${state}`;
  });
  return `**${kind === "allow" ? "Reported lists" : "Lists in use"}:** ${parts.join(" · ")}`;
}

function regLine(x) {
  if (!x) return null;
  const name = hostName(x.name ?? x.query);
  if (!x.registered && !x.expires && !x.registrar) return x.error ? `**Registration:** no RDAP data for ${code(name)}` : null;
  const parts = [];
  if (x.registered) parts.push(`registered ${day(x.registered)} (${age(x.registered)})`);
  if (x.expires) parts.push(`expires ${day(x.expires)}`);
  if (x.registrar) parts.push(`registrar ${plain(x.registrar)}`);
  const hold = (x.status ?? []).filter((s) => /hold|redemption|pending delete/i.test(s)).map((s) => plain(s, 40));
  if (hold.length) parts.push(`status ${hold.join(", ")}`);
  const fresh = x.registered && now() - x.registered < NEW_DAYS * 86400 ? " ⚠️ newly registered" : "";
  return `**Registration** (${code(name)}): ${parts.join(", ")}${fresh}`;
}

function regCell(x) {
  if (!x?.registered) return "—";
  return day(x.registered) + (now() - x.registered < NEW_DAYS * 86400 ? " ⚠️" : "");
}

function ruleRows(r, lists) {
  const label = (stem) => lists[stem]?.label ?? stem;
  const type = { block: "block", allow: "exception", whitelist: "allowlist" };
  const pattern = String(r.display).includes("*");
  const rows = r.rows.slice(0, ROWS_MAX).map((x) => {
    const where = (x.files ?? []).map((f) => label(f.list) + (f.since > 0 ? ` (added ${day(f.since)})` : ""));
    const via = matchText(r, x, pattern);
    return `| ${cell(code(short(x.rule, 140)))} | ${type[x.kind] ?? plain(x.kind, 20)} | ${cell(where.join(", "))} | ${cell(via)} |`;
  });
  if (rows.length === 0) return [];
  const more = r.rows.length - ROWS_MAX;
  return [
    "| Rule | Type | Lists | Match |",
    "| --- | --- | --- | --- |",
    ...rows,
    ...(more > 0 ? ["", `_${more} more rule${more === 1 ? "" : "s"} not shown._`] : []),
  ];
}

function domainBlock(r, a, ctx, reg, open) {
  const lines = [];
  const facts = [];
  const rl = reportedLine(r, ctx.kind, ctx.reported);
  if (rl) facts.push(rl);
  const g = regLine(reg);
  if (g) facts.push(g);
  if (r.cname?.length) facts.push(`**CNAME chain:** ${[r.core, ...r.cname].map(code).join(" → ")}`);
  if (r.unicode) facts.push(`**Unicode form:** ${code(r.unicode)}`);
  if (r.lookalike) facts.push("⚠️ **Look-alike:** the Unicode form mixes scripts, a common phishing technique.");
  if (r.removed?.length) {
    const label = (stem) => ctx.lists[stem]?.label ?? stem;
    const items = r.removed.slice(0, 5).map((x) => `${code(x.rule)} from ${label(x.list)} on ${day(x.removed)}`);
    facts.push(`**Recently removed:** ${items.join("; ")}${r.removed.length > 5 ? "; …" : ""}`);
  }
  if (r.dead) facts.push("No DNS records (A/AAAA/NS/SOA) found; the domain may no longer exist (possible NXDOMAIN).");
  if (r.notes?.includes("nrd")) facts.push("Listed on an NRD or DGA list (newly registered or algorithmically generated domains).");
  if (r.notes?.includes("truncated")) facts.push("listseek found more matching rules than it returns; open listseek for the full set.");
  if (r.incomplete) facts.push("⚠️ Lookup incomplete: not every list could be searched in time.");
  const head = `${statusText(a.status)} · [open in listseek](${lookupUrl([r.display])})`;
  if (ctx.collapse) {
    lines.push(`<details${open ? " open" : ""}><summary><code>${html(r.display)}</code> — ${html(statusName(a.status))}</summary>`, "");
  } else {
    lines.push(`#### ${code(r.display)}`, "");
  }
  lines.push(head, "");
  const table = ruleRows(r, ctx.lists);
  if (table.length) lines.push(...table, "");
  if (facts.length) lines.push(...facts.map((f) => `- ${f}`), "");
  if (ctx.collapse) lines.push("</details>", "");
  return lines;
}

function render(ctx, mode) {
  const { kind, data, regs, total, checked, key } = ctx;
  const results = data.results;
  const analysed = results.map((r) => [r, analyse(r, data.lists)]);
  const counts = {};
  for (const [, a] of analysed) counts[a.status] = (counts[a.status] ?? 0) + 1;
  const updated = Math.max(0, ...Object.values(data.lists).map((l) => l.updated ?? 0));
  const out = [
    `${MARKER} v1 key=${key} -->`,
    "### listseek lookup",
    "",
    `Automated check of the ${results.length === 1 ? "requested domain" : `${results.length} requested domains`} against the current HaGeZi lists via [listseek](${lookupUrl(results.map((r) => r.display))}). It is meant to help with triage and does not decide on this ${kind === "allow" ? "allowlist" : "denylist"} request.`,
    "",
    Object.entries(counts).map(([s, n]) => `**${statusName(s)}:** ${n}`).join(" · "),
    `Searched ${data.queried} lists including NRD/DGA${updated ? ` · lists last synced ${stamp(updated)}` : ""}`,
    "",
  ];
  const warnings = [];
  if (total > checked) warnings.push(`Only the first ${checked} of ${total} domains were checked.`);
  if (data.partial || data.failed.size || data.missing.size)
    warnings.push(`The lookup is incomplete${data.failed.size + data.missing.size ? ` (${data.failed.size + data.missing.size} lists could not be searched)` : ""}; some hits may be missing.`);
  if (data.stale) warnings.push(`${data.stale} list index${data.stale === 1 ? " is" : "es are"} being rebuilt, results may lag behind the latest list update.`);
  if (data.invalid) warnings.push(`listseek ignored ${data.invalid === 1 ? "1 entry that is not a valid domain" : `${data.invalid} entries that are not valid domains`}.`);
  if (warnings.length) out.push("> [!WARNING]", ...warnings.map((w) => `> ${w}`), "");
  const mapped = ctx.reported.filter((n) => REPORTED[lc(n)]);
  const extra = [];
  if (mapped.length) extra.push(kind === "allow" ? "Blocked in reported lists" : "Blocked in lists in use");
  if (regs) extra.push("Registered");
  out.push(
    `| ${["Domain", "Status", "Blocked by", "Allow rules", ...extra].join(" | ")} |`,
    `|${" --- |".repeat(4 + extra.length)}`,
    ...analysed.map(([r, a]) => {
      const cols = [code(r.display) + (r.lookalike ? " ⚠️" : ""), statusText(a.status), shortList(a.blockedBy), shortList(a.allowedBy)];
      if (mapped.length) {
        const hits = mapped.filter((n) => reportedState(r, n).blocks).map((n) => plain(n, 60));
        cols.push(hits.length ? hits.join(", ") : "none");
      }
      if (regs) cols.push(regCell(regs.get(r.id)));
      return `| ${cols.map(cell).join(" | ")} |`;
    }),
    "",
  );
  if (mode === "full" && results.length <= DETAIL_MAX) {
    const dctx = { ...ctx, lists: data.lists, collapse: results.length > 1 };
    for (const [r, a] of analysed) out.push(...domainBlock(r, a, dctx, regs?.get(r.id), results.length <= OPEN_MAX));
  }
  out.push(`<sub>Checked ${stamp(now())}. This comment is updated when the domain list of the issue is edited.</sub>`);
  return out.join("\n");
}

function emptyComment(kind, key) {
  return [
    `${MARKER} v1 key=${key} -->`,
    "### listseek lookup",
    "",
    `No domains were found in the domain field of this ${kind === "allow" ? "allowlist" : "denylist"} request. Please list the domains one per line, for example \`ads.example.com\`.`,
    "",
    `<sub>Checked ${stamp(now())}. This comment is updated when the domain list of the issue is edited.</sub>`,
  ].join("\n");
}

async function main() {
  const event = process.env.GITHUB_EVENT_PATH ? JSON.parse(await readFile(process.env.GITHUB_EVENT_PATH, "utf8")) : {};
  const repo = process.env.GITHUB_REPOSITORY || "hagezi/dns-blocklists";
  const manual = !event.issue;
  const issue = event.issue ?? (await gh("GET", `/repos/${repo}/issues/${Number(process.env.ISSUE_NUMBER || event.inputs?.issue)}`));
  if (issue.pull_request) return log("pull request, skipped");
  if (event.action === "edited" && !event.changes?.body) return log("body unchanged, skipped");
  const parsed = parseIssue(issue);
  if (!parsed) return log("not an allowlist or denylist request, skipped");
  const { kind, domains, reported } = parsed;
  const key = createHash("sha256").update(JSON.stringify([kind, domains.map(lc), reported])).digest("hex").slice(0, 16);
  const existing = DRY && !process.env.GITHUB_TOKEN ? null : await findComment(repo, issue.number);
  if (!manual && existing && String(existing.body).includes(`key=${key}`)) return log("domains unchanged, skipped");
  let body;
  if (domains.length === 0) {
    if (event.action === "edited" && !existing) return log("no domains, skipped");
    body = emptyComment(kind, key);
  } else {
    const use = domains.slice(0, MAX_DOMAINS);
    let data;
    try {
      data = await lookup(use);
    } catch (e) {
      warn(e.message);
      return;
    }
    if (data.results.length === 0) {
      body = emptyComment(kind, key);
    } else {
      const regs = await registrations(data.results);
      const ctx = { kind, reported, data, regs, total: domains.length, checked: use.length, key };
      body = render(ctx, "full");
      if (body.length > COMMENT_LIMIT) body = render(ctx, "table");
      if (body.length > COMMENT_LIMIT) body = body.slice(0, COMMENT_LIMIT);
    }
  }
  if (DRY) {
    if (process.env.DRY_OUT) await writeFile(process.env.DRY_OUT, body);
    else log(body);
    return log(`dry run: ${existing ? "would update comment " + existing.id : "would create comment"} on #${issue.number}`);
  }
  if (existing) {
    await gh("PATCH", `/repos/${repo}/issues/comments/${existing.id}`, { body });
    log(`updated comment ${existing.id} on #${issue.number}`);
  } else {
    const c = await gh("POST", `/repos/${repo}/issues/${issue.number}/comments`, { body });
    log(`created comment ${c.id} on #${issue.number}`);
  }
}

main().catch((e) => {
  console.log(`::error::${e.message}`);
  process.exitCode = 1;
});
