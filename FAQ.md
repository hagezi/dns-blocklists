# FAQ

A practical guide to how these DNS blocklists get built, which version fits your setup, and why some domains are left unblocked on purpose. For a quick, scannable overview of every individual list, see the [Cheat Sheet](CHEATSHEET.md). If a term looks unfamiliar, the [Glossary](#glossary) at the bottom covers this FAQ, the Cheat Sheet, and the main README alike. Just want to know whether one specific domain is blocked and by which list? That's what the [Blocklist Lookup](#listlookup) is for.

## Table of Contents

1. [Quick setup guide](#quicksetup)
2. [Which list version should I use?](#whatshouldiuse)
3. [Can I use more than one list at the same time?](#combining)
4. [Which format should I use for my ad blocker or DNS server?](#formats)
5. [How do mini variants, NRD/DGA, and the bypass lists relate to each other?](#listrelationships)
6. [Why aren't ads blocked inside YouTube, Spotify, and other apps?](#inappads)
7. [How are referral domains handled?](#referral)
8. [Why aren't CMPs (cookie consent tools) blocked?](#cmps)
9. [Which lists are available on which DNS services?](#availablelists)
10. [How current is the data, and where can I get it?](#mirrors)
11. [Where does the data come from, and how are the lists built?](#sources)
12. [How do I check whether a domain is blocked, and by which list?](#listlookup)
13. [Getting help and reporting issues](#support)
14. [Licensing and liability](#licensing)
15. [Glossary](#glossary)

---

## <a name="quicksetup"></a> 1. Quick setup guide

Here's the fast track to getting protection running, no need to read the rest of the FAQ first.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://hagezi-mirror.dnsbunker.org/assets/images/dark/hagezi-dns-blocklists.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://hagezi-mirror.dnsbunker.org/assets/images/light/hagezi-dns-blocklists.svg">
  <img src="https://hagezi-mirror.dnsbunker.org/assets/images/light/hagezi-dns-blocklists.svg">
</picture>

1. **Pick a version.** Not sure? Start with [Pro](README.md#pro), it's the go-to recommendation for solid protection without much breakage. Check [section 2](#whatshouldiuse) if you want a different balance of strictness and risk.
2. **Figure out your setup.** Are you blocking DNS network-wide (Pi-hole, AdGuard Home, TechnitiumDNS, OPNsense) or using a browser content blocker (uBlock Origin, AdGuard browser extension)? Network-wide blocking protects every device on your network, while a browser blocker only covers that one browser.
3. **Grab the right format.** Check [section 4](#formats) for what your tool expects, then copy the matching list URL from the [README](README.md#overview) into your tool's blocklist or filter subscription settings.
4. **Add Threat Intelligence Feeds (TIF).** Add the [TIF](README.md#tif) list (or its medium/mini version if your tool struggles with size) alongside your main list for extra protection against malware and phishing, no matter which tier you picked.
5. **No self-hosted DNS server?** Use one of the [online DNS services](#availablelists) instead, they let you turn these lists on without running your own setup.
6. **Layer on a browser content blocker too.** DNS-level blocking catches most ads, trackers, and malware, but not everything, some ads and scripts load from otherwise legit domains. A browser content blocker like uBlock Origin or AdGuard closes that gap, see [section 6](#inappads) for why that matters especially inside apps like YouTube or Spotify.
7. **Test it out.** Browse normally for a day and note anything that behaves oddly.
8. **If something breaks, confirm the cause first.** A DNS-level block usually shows up as a failed page load with a name-resolution error ("server not found" or similar), not as a normal page error. Most DNS tools (Pi-hole, AdGuard Home, TechnitiumDNS) keep a query log where you can look up the exact domain and see that it was blocked. Once you know which domain is responsible, run it through the [Blocklist Lookup](#listlookup) to see exactly which list blocks it and with which rule, check [section 2](#whatshouldiuse) for known side effects (especially with Pro++ and Ultimate), unblock that domain in your tool, and see [section 13](#support) if you want to report a false positive or a missed domain.
9. **Keep it current.** These lists update regularly. If your tool doesn't auto-refresh subscribed lists, set a reminder to re-download, and check [section 10](#mirrors) if you want the freshest data possible.

**[Back to top](#table-of-contents)**

---

## <a name="whatshouldiuse"></a> 2. Which list version should I use?

Pick the version that fits how much technical help you have on hand and how much risk of breakage you're okay with. Rule of thumb: the stricter the list, the more protection you get, but also the higher the odds something you actually wanted to use gets blocked by accident.

The "risk of breakage" ratings below are a general guide, not exact error rates. They just show how aggressively each version filters domains, not a precise false-positive percentage.

| Version | Best for | Risk of breakage |
|:---|:---|:---|
| [Light](README.md#light) | No admin around to unblock stuff, or an ad blocker that can't handle big lists | Minimal. Built to avoid restrictions almost entirely |
| [Normal](README.md#normal) | Everyday use, same crowd as Light | Low. Restrictions are rare and usually minor |
| [Pro](README.md#pro) | The go-to default: setups with an admin nearby who can unblock things if needed | Low to moderate. Restrictions are uncommon and easy to work around |
| [Pro++](README.md#proplus) | Experienced users with an admin available | Moderate. Might include some false positives that limit functionality |
| [Ultimate](README.md#ultimate) | Very experienced users with an admin available | High. Deliberately blocks some popular trackers, which can limit app or website functionality |

> [!WARNING]
> Ultimate comes with a few documented side effects worth knowing before you switch:
> - **Meta/Facebook:** some Meta trackers get blocked, which limits Facebook and Facebook Messenger. WhatsApp's graph trackers are blocked too, affecting avatar creation, the in-app help center, and video effects. Everything else in WhatsApp still works fine.
> - **Windows/Xbox:** some Microsoft trackers get blocked, which affects things like Windows Spotlight and Xbox Live Achievements Activity History.
> - **Location and IP trackers:** blocking these is great for privacy, but it can trigger extra CAPTCHAs, wrong regional settings, or reduced functionality on some sites.
>
> Running into one of these issues? Check the known-unblock lists for [Meta](share/facebook.txt) and [Microsoft](share/microsoft.txt), or the general [known issues list](share/ultimate-known-issues.txt).

> [!IMPORTANT]
> **Whenever you can, pair your main list with the [Threat Intelligence Feeds (TIF)](README.md#tif) list.**
> - **Worth it at every tier.** Light carries effectively none of the TIF-covered domains. Normal, Pro, Pro++, and Ultimate already carry some as part of their normal build, but never the full feed, so adding TIF still closes real gaps. The [Cheat Sheet's Inclusion Matrix](CHEATSHEET.md#inclusionmatrix) shows how much overlap exists per tier.
> - **Too big for your tool?** Use the smaller [medium](README.md#tifmedium) or [mini](README.md#tifmini) version instead.
> - **Optional extras.** There's an [IPv4 list](README.md#tifips) you can run alongside the full, medium, or mini version. On AdGuard Home or AdGuard DNS, [Dandelion Sprout's Anti-Malware List](https://raw.githubusercontent.com/DandelionSprout/adfilt/master/Alternate%20versions%20Anti-Malware%20List/AntiMalwareAdGuardHome.txt) is worth adding too.

**Extra lists worth adding, depending on your goals:**

- **Security focus:** combine TIF with the [Dynamic DNS](README.md#dyndns) list (blocks dynamic DNS services often abused for phishing), the [Badware Hoster](README.md#hoster) list (blocks hosting providers whose infrastructure gets abused for malware a lot), the [Most Abused TLDs](README.md#tlds) list (blocks entire top-level domains with bad reputations, like `.top`, `.shop`, or `.gdn`), and either the [NRD](README.md#nrd) lists (broad) or the [DGA](README.md#nrd) lists (narrower, less noise), never both at once, see [section 5](#listrelationships).
- **Protecting kids:** combine the [Gambling](README.md#gambling), [Anti Piracy](README.md#piracy), [Safesearch](README.md#safesearch), [DoH/VPN/TOR/Proxy Bypass](README.md#bypass), [Social Networks](README.md#social), and [NSFW](README.md#nsfw) lists. Heads up: the Social Networks list only blocks traditional platforms (Facebook, Instagram, TikTok, X, Snapchat), not messaging apps like WhatsApp or streaming platforms like Twitch.

> [!NOTE]
> **You usually don't need to add the Fake, Pop-Up Ads, or Native Tracker lists separately, they're already baked in, though coverage varies by version:**
> - The [Fake](README.md#fake) list (scam shops, fake streaming sites, cost traps) isn't included in Light at all. That isn't an oversight: Light is built only from domains that appear on the supported Top 1M/10M lists, and fake shops or fake streaming sites generally don't rank there, so they never make the cut. It's fully included in Normal, Pro, Pro++, Ultimate, and in TIF, TIF medium, and TIF mini.
> - The [Pop-Up Ads](README.md#popupads) list is only partially covered in Light, Normal, and TIF. It's fully included in Pro, Pro++, and Ultimate.
> - The [Native Tracker](README.md#native) lists (device and app trackers for Amazon, Apple, Huawei, Microsoft, Samsung, TikTok, LG webOS, Roku, Vivo, OPPO/Realme, and Xiaomi) are integrated at four distinct strengths, not just "partial vs full": Light and Normal share the same baseline, blocking only native trackers that won't break functionality. Pro blocks more than that baseline while still staying out of your way. Pro++ blocks nearly all of them, which can cause some restrictions. Ultimate is the only tier that blocks every native tracker for maximum privacy. Want full native-tracker coverage without moving all the way to Ultimate? Add the specific [device lists](README.md#native) you actually need on top of your current tier instead.
>
> <a name="rebind"></a>Two more specialized lists are worth a separate mention, since most setups don't need them: [URL Shortener](README.md#urlshortener) (mainly for high-security setups, since it can break legit short links) and [DNS Rebind Protection](README.md#dnsrebind) (works with AdGuard, AdGuard Home, and AdGuard DNS, stops attackers from resolving external domains to your local network's private IP addresses). Other DNS blockers may already have their own rebind protection built in, check your tool's documentation first. If you do add this list, whitelist your local hostnames, since anything resolving to a local IP gets caught too, for example `@@||fritz.box^` in AdGuard. Only add these two lists if your setup really needs them.

**[Back to top](#table-of-contents)**

---

## <a name="combining"></a> 3. Can I use more than one list at the same time?

Yes for the add-on lists, no for the main tiers.

The five Multi tiers (Light, Normal, Pro, Pro++, Ultimate) build on each other: each one already contains everything the tiers below it block. Subscribing to two of them adds no protection at all, it just makes your tool download, parse, and hold the same domains twice. **Pick exactly one Multi tier.**

The same applies to the variants of a single list. Full, medium, and mini versions are alternatives, not building blocks: use Pro *or* Pro Mini, TIF *or* TIF Medium *or* TIF Mini, Gambling *or* Gambling Medium *or* Gambling Mini. Running the full list next to its own mini version is pure overhead, since the mini version contains nothing the full one doesn't, see [section 5](#listrelationships).

The standalone add-ons work the other way around. They cover categories the Multi tiers deliberately leave alone, so combining them is exactly how they're meant to be used. A typical setup is one Multi tier plus [TIF](README.md#tif) plus whichever category lists match your goals, see [section 2](#whatshouldiuse) for the usual combinations and the [Cheat Sheet](CHEATSHEET.md#combos) for ready-made ones.

There's one pairing to avoid among the add-ons: [NRD](README.md#nrd) and [DGA](README.md#nrd) aren't meant to run together, since DGA is a filtered subset of NRD. Pick one, see [section 5](#listrelationships).

**[Back to top](#table-of-contents)**

---

## <a name="formats"></a> 4. Which format should I use for my ad blocker or DNS server?

Most lists come in the same five formats. Just pick the row that matches your ad blocker or DNS server, the rest all contain the same data, just structured differently for that specific tool. A handful of specialty lists ship in fewer or different formats, those are called out right after the table.

There are five formats because different tools read blocklist files differently, the same way a Word document and a plain text file both hold text but aren't interchangeable. A browser-style ad blocker expects the classic filter-rule style shown in the Adblock format, a router package like DNSMasq expects its own short config lines, and a full DNS server expects a format like RPZ that's built into DNS server software itself. For the standard five formats of a given list, the actual domains being blocked are the same; only how they're written down changes. Some specialized lists have format-specific variants or exclusions, as noted below.

| Format | Use it with |
|:---|:---|
| Adblock | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (aggressive mode only), AdBlock-Fast, AdNauseam, Little Snitch Mini (see note below on size limits) |
| DNSMasq | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard (Asterisk) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard (Domains only) | DNSCloak, DNSCrypt, FRITZ!Box (FRITZ!OS v8.40 or newer), TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | Bind, Knot, PowerDNS, Unbound, and other software supporting Response Policy Zones |

A few lists don't follow this pattern, and a few come with extra technical requirements worth knowing about before you subscribe.

**Lists that don't use the five standard formats**

- **Most Abused TLDs** relies on exclusion rules that work differently from tool to tool. It ships as AdGuard, uBlock Origin, AdBlock, Wildcard Domains, and RPZ variants, with an aggressive/allowlist pair for the AdBlock and Wildcard formats, an aggressive variant for RPZ, and a ControlD folder.
- **NRD/DGA** lists only come as Adblock and plain domain lists.
- **DNS Rebind Protection** only works with AdGuard, AdGuard Home, and AdGuard DNS.
- **DoH IPs** and **TIF IPs** are IP-level lists rather than domain lists.
- **Badware Hoster** and **Most Abused TLDs** also ship as a ControlD folder you can import straight into a ControlD profile. Of the two referral lists (see [section 7](#referral)), only the Referral Allowlist has one.

**Legacy Subdomain and Host formats**

These two aren't part of the five above. They were moved out of the main repository into a separate [dns-blocklists-legacy](https://github.com/hagezi/dns-blocklists-legacy) repository.

- **Subdomains** (the full domain plus every subdomain spelled out) works with older tool versions like Blocky before v0.23 and Diversion before v5, plus PersonalBlocklist and pfBlockerNG.
- **Hosts** (with a compressed variant) works with AdAway, uMatrix, OpenSnitch, DNS66, NetGuard, and plain Linux hosts files.

Only a limited set of lists exists in them: Light, Normal, Pro, Pro++, Ultimate, TIF, the DoH-only bypass list, and the Native Tracker device lists in both formats, plus the two referral lists in Subdomains format only. Everything else, including every Mini variant, Fake, Pop-Up Ads, NRD/DGA, and the specialty lists, was never built this way. These formats also can't reliably catch dynamic or previously unknown subdomains, so treat them as a fallback for tools that need them, not a first choice.

**Requirements to check before you subscribe**

- **Little Snitch Mini has a rule-count limit**, so it can't handle the larger lists. It's offered for Light, Normal, Fake, Pop-Up Ads, Anti Piracy, Social Networks, Dynamic DNS, Badware Hoster, URL Shortener, Safesearch Not Supported, both Bypass lists, Gambling Medium, Gambling Mini, and every Mini tier (Pro Mini, Pro++ Mini, Ultimate Mini, TIF Mini). Not offered for the full Pro, Pro++, Ultimate, TIF, TIF Medium, Gambling, or NSFW lists.
- **TIF and TIF Medium** are both too big for AdGuard Mobile for iOS. In AdGuard Home (a different product), the full TIF list needs at least 2 GB of RAM and TIF Medium at least 1 GB. The full list's RPZ version is split into two files, and you need both. If even TIF Medium is too much, use **TIF Mini**.
- **The three [DoH/VPN/TOR/Proxy Bypass](README.md#bypass) lists** cover different scopes and aren't interchangeable, see [section 5](#listrelationships). Whichever one you pick, pair it with a firewall rule blocking outbound ports 53 and 853, otherwise devices can still reach unencrypted or TLS-based DNS servers directly.
- **DoH IPs and TIF IPs:** if you run AdGuard Home alongside either one, disable IPv6 resolution there, otherwise a device can slip past the block by resolving the same server over IPv6.

**[Back to top](#table-of-contents)**

---

## <a name="listrelationships"></a> 5. How do mini variants, NRD/DGA, and the bypass lists relate to each other?

A few lists in this collection sound similar or get recommended together, but they aren't interchangeable and aren't always meant to be combined. Here's how they actually relate.

**Mini variants aren't a universal category, each one is a size-optimized cut of exactly one specific list:**

- [Light](README.md#light) is the size-optimized version of **Normal**, it just isn't named "Normal Mini". Like the other size-optimized cuts, it only carries domains that also appear on the Top 1M/10M lists, which is why the [Fake](README.md#fake) list doesn't survive into it.
- [Pro Mini](README.md#promini), [Pro++ Mini](README.md#proplusmini), and [Ultimate Mini](README.md#ultimatemini) are each a cut of that exact tier only, limited to domains that also appear on the Umbrella, Cloudflare, Tranco, Chrome, BuiltWith, Majestic, or DomCop Top 1M/10M lists.
- [TIF Mini](README.md#tifmini) is a cut of **TIF Medium**, not the full TIF list directly.
- [Gambling Mini](README.md#gamblingmini) is a cut of **Gambling Medium**, not the full Gambling list directly.
- Light has no further mini version of its own, it's already the leanest tier in the Multi family.

> [!TIP]
> Pick the mini version of the tier you actually want. Grabbing a random "mini" list without matching it to your target tier defeats the purpose, since each one only contains that specific tier's domains, shrunk down.

**[NRD](README.md#nrd) and [DGA](README.md#nrd) are two alternatives, not two ingredients to combine.** DGA domains are already part of the full NRD list, just filtered down to the high-entropy subset likely generated by malware. That overlap only holds for the day ranges you actually load, though: `dga30` reaches back 30 days, so it's only fully covered once you stack the NRD bands out to `nrd35-29`. Pick NRD for broader coverage with more noise, or DGA alone for a narrower, lower-noise subset, not both at once.

**NRD and DGA also split their day ranges differently:**

- The full NRD list is split into five files, each covering a distinct, non-overlapping window: 7 days ago to yesterday, 14 to 8 days ago, 21 to 15 days ago, 28 to 22 days ago, and 35 to 29 days ago. These bands are meant to be stacked: for the last 14 days, combine `nrd7` and `nrd14-8`; for 21 days, add `nrd21-15`, and so on.
- The DGA list comes as three rolling windows instead: past 7, past 14, and past 30 days. Each one counts back from today rather than covering a separate slice, so `dga30` already contains everything in `dga14` and `dga7`. Pick the single file that matches how far back you want to go instead of combining them.

**The three [DoH/VPN/TOR/Proxy Bypass](README.md#bypass) lists build on each other:**

- [Bypass Full](README.md#bypass_all) covers encrypted DNS servers plus VPN, TOR, and proxy services, the broadest of the three.
- [DoH only](README.md#bypass_dns) is the narrower encrypted-DNS-only subset.
- [DoH IPs](README.md#bypass_ips) is the IPv4 companion specifically for the DoH-only list, not for VPN/TOR/proxy services, since those don't resolve to a fixed, enumerable IP set the same way encrypted DNS servers do.

**[Back to top](#table-of-contents)**

---

## <a name="inappads"></a> 6. Why aren't ads blocked inside YouTube, Spotify, and other apps?

Because there's nothing separate to block. DNS filtering works by refusing to resolve a domain, which only helps when the unwanted content comes from a domain of its own. Services like YouTube, Spotify, Twitch, Facebook, and plenty of mobile apps serve their ads from the same domains and servers as the actual content, so blocking the ad means blocking the service.

This isn't a gap in these particular lists. It's a limit of DNS-level filtering in general, and no DNS blocklist can work around it. What does work:

- A **browser content blocker** like [uBlock Origin](https://github.com/uBlockOrigin/), AdGuard, or [Ghostery](https://www.ghostery.com/) filters individual requests and page elements inside the page itself, so it can strip out ads served from the very same domain. That's exactly why the README recommends running one alongside DNS blocking, see [Recommendation](README.md#recommendation).
- On mobile, a **client-side blocker** installed on the device (the AdGuard app, for example) can do the same for app traffic.

What the lists do handle is everything that has a domain of its own: third-party ad and tracking networks, telemetry and analytics endpoints, malware and phishing domains, and the native trackers built into devices and operating systems. Treat DNS blocking as the network-wide baseline and a content blocker as the fine-tuned layer on top, see [section 1](#quicksetup).

**[Back to top](#table-of-contents)**

---

## <a name="referral"></a> 7. How are referral domains handled?

Referral domains are the affiliate and tracking links you often see on deal sites like Slickdeals, in emails, or in search results. Most of them stay unblocked on purpose, since they usually only fire when someone clicks a link, not automatically like ads do. A small number does get blocked from Pro upwards, and the breakdown below shows exactly which.

Blocking them would break things like the first result link in a search, and some of these domains double as newsletter unsubscribe links, so blocking them could trap you in unwanted emails instead of freeing you from them.

Here's the breakdown by list version:

- **Light and Normal:** all referral domains are allowed.
- **Pro:** most referral domains are still allowed, but a few get blocked if they're mainly used for other tracking or commonly tied to scam or spam links, even if they could technically also be used for link tracking.
- **Pro++ and Ultimate:** some referral domains that aren't used exclusively for link tracking get blocked, including a handful like `ad.doubleclick.net`, `adservice.google.*`, `app.adjust.*`, and `analytics.adjust.*`. The majority of referral domains that are still used mainly for link tracking stay allowed even at these tiers.

**Allowlist** (keeps all known link trackers unblocked):

| Format | Link |
|:---|:---|
| Adblock (AdGuard, AdGuard Home, uBlock Origin, etc.) | [Download](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/whitelist-referral.txt) |
| Adblock (Pi-hole v6+, TechnitiumDNS, etc.) | [Download](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/whitelist-referral-native.txt) |
| Wildcard<br>domains | [Download](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/whitelist-referral-onlydomains.txt) |
| ControlD<br>folder | [Download](https://github.com/hagezi/dns-blocklists/blob/main/controld/referral-allow-folder.json) |

Want to actually block referral domains anyway? (**Not recommended.**) Use the lists below. It's better to apply these in a browser content blocker like uBlock Origin instead of network-wide at the DNS level, since DNS-level blocking is a lot harder to fine-tune once it's live. Note that this list doesn't have a ControlD folder, only the Allowlist above does.

| Format | Link |
|:---|:---|
| Adblock | [Download](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/blocklist-referral-native.txt) |
| Wildcard<br>domains | [Download](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/blocklist-referral-onlydomains.txt) |

**[Back to top](#table-of-contents)**

---

## <a name="cmps"></a> 8. Why aren't CMPs (cookie consent tools) blocked?

Blocking CMPs network-wide breaks a ton of websites and actually takes away your ability to choose what you're consenting to. In practice, blocking a CMP usually just makes the site assume everything's accepted anyway, since it can no longer show you the consent choice in the first place ([see this discussion](https://github.com/hagezi/dns-blocklists/issues/1979#issuecomment-1870498567)).

Deciding whether to block or auto-allow a specific CMP is really a job for content blockers with dedicated filter lists, since those tools can tell which sites should be excluded from blocking a given CMP domain and which shouldn't. Take a look at the exclusion lists used by established cookie filter lists and it becomes pretty obvious why blanket DNS-level blocking just doesn't cut it here, it can't make the nuanced, per-site calls that a proper filter list can.

**[Back to top](#table-of-contents)**

---

## <a name="availablelists"></a> 9. Which lists are available on which DNS services?

Not every DNS provider offers every list. The services in this matrix let you pick individual lists; HaGeZi DNS, DNSBUNKER.org, Public RDNS, RobinGroppe.de, and OpenBLD.net run fixed combinations instead, so they aren't part of it. Here's what's currently available:

| List | AdGuard DNS | ControlD | RethinkDNS | DNSwarden |
|:---|:---:|:---:|:---:|:---:|
| Light | :x: | :green_circle: | :green_circle: | :green_circle: |
| Normal | :green_circle: | :green_circle: | :green_circle: | :green_circle: |
| Pro | :green_circle: | :green_circle: | :green_circle: | :green_circle: |
| Pro++ | :green_circle: | :green_circle: | :green_circle: | :green_circle: |
| Ultimate | :green_circle: | :green_circle: | :green_circle: | :green_circle: |
| TIF | :green_circle: | :green_circle: | :green_circle: | :green_circle: |
| Bypass | :green_circle: | :yellow_circle: | :green_circle: | :x: |
| Dynamic DNS | :green_circle: | :yellow_circle: | :green_circle: | :x: |
| Badware Hoster | :green_circle: | :notebook: | :green_circle: | :x: |
| Most Abused TLDs | :green_circle: | :notebook: | :x: | :x: |
| Anti Piracy | :green_circle: | :yellow_circle: | :x: | :x: |
| Gambling | :green_circle: | :yellow_circle: | :x: | :x: |
| Some other lists | :green_circle: | :x: | :x: | :x: |

**Legend:**

- :green_circle: Fully available as a native list on that service.
- :x: Not available.
- :yellow_circle: Included in ControlD's own native lists for that category, no separate list needed.
- :notebook: Available as a separate [ControlD folder](https://github.com/hagezi/dns-blocklists/tree/main/controld).

> [!NOTE]
> This table answers "can I get it there", not "how much of it do I get", which is why it uses different symbols than the [coverage matrix](CHEATSHEET.md#inclusionmatrix) in the Cheat Sheet. There's no scale here, a list is either offered or it isn't.

> [!NOTE]
> **"Some other lists" is not a promise of everything.** AdGuard DNS carries a wider selection than the other three services, but not literally every list published here, and its coverage of a category can be partial. The Native Tracker lists are the clearest example: only some of the device lists are offered there, not all twelve. The [AdGuard DNS section in the README](README.md#adguarddns) has the current selection.

Service availability, pricing, and plan limits can change. Check each provider's site for current details.

> [!NOTE]
> A few other free services bundle these lists with fixed presets instead of letting you pick individual versions: [HaGeZi DNS](https://github.com/hagezi/dns-servers) (EU resolvers running Pro + TIF), [DNSBUNKER.org](https://dnsbunker.org/) (Pro + TIF), [Public RDNS](https://public-rdns.com/) (aggressive, family-safe preset), [RobinGroppe.de](https://www.robingroppe.de/serverzeug/dns-server) (TIF only), and [OpenBLD.net](https://openbld.net/docs/get-started/third-party-filters/hagezi/) (Pro + TIF). Heads up: RethinkDNS only updates its copies once a week, so expect a bit of a lag compared to the source repository.

**[Back to top](#table-of-contents)**

---

## <a name="mirrors"></a> 10. How current is the data, and where can I get it?

The lists are rebuilt several times a day. Every source below serves the same lists, they just differ in how many of those builds they actually publish:

- **Repository sources.** [GitHub](https://github.com/hagezi/dns-blocklists) is the reference repository, with GitLab and Codeberg as its full repository mirrors. All three publish one build per day, in sync with each other.
- **Build mirror.** [hagezi-mirror.dnsbunker.org](https://hagezi-mirror.dnsbunker.org) is connected directly to the build system and publishes every build as soon as it finishes, which works out to a new version roughly every 4 to 8 hours.

| Source | What it is | Publishes |
|:---|:---|:---|
| [GitHub/jsDelivr](https://github.com/hagezi/dns-blocklists) | Reference repository | Once a day |
| [gitlab.com/hagezi/mirror](https://gitlab.com/hagezi/mirror) | Repository mirror | Once a day, in sync with GitHub |
| [codeberg.org/hagezi/mirror2](https://codeberg.org/hagezi/mirror2) | Repository mirror | Once a day, in sync with GitHub |
| [hagezi-mirror.dnsbunker.org](https://hagezi-mirror.dnsbunker.org) | Build mirror | Every build, roughly every 4 to 8 hours |

> [!TIP]
> Pick by how fresh you need the data. Once a day is plenty for most setups. If you want every build the moment it exists, use the build mirror at [hagezi-mirror.dnsbunker.org](https://hagezi-mirror.dnsbunker.org).

> [!NOTE]
> The GitHub repository occasionally gets compressed and reinitialized to keep its size down. That resets the commit history and invalidates existing forks, worth knowing if you maintain a fork or rely on commit history for tracking changes.

**[Back to top](#table-of-contents)**

---

## <a name="sources"></a> 11. Where does the data come from, and how are the lists built?

These lists aren't copies of upstream blocklists. A source listed in [Sources](https://github.com/hagezi/dns-blocklists/blob/main/sources.md) is an input to the build, not something that gets pulled in whole or copied word for word into a tier.

The published lists are generated from a continuously maintained domain database. That database combines evaluated upstream input with independently collected domains, project-maintained domain sets, tier-specific additions, reviewed network-log findings, and confirmed community reports. This curation helps close gaps in upstream coverage, add domains that matter at DNS level, and balance blocking coverage against compatibility.

This is a high-level overview. It does not document every source, rule, exception, validation method, or tier-specific decision, and the process can evolve as sources, domain data, and compatibility requirements change.

Here is the general process:

1. **Use established sources as input.**
   The maintained database is continuously informed by established upstream blocklists and privacy or security sources. Wherever possible, the project prefers the native lists maintained by their original projects, since those carry the clearest categorization and the shortest path back to whoever added an entry.

   Broad third-party compilations that have already merged multiple sources are used as well. They're treated as an additional signal rather than as a shortcut for pulling in many lists at once, and entries coming from them go through the same evaluation as everything else.

   Nothing from a source gets included unchanged. Every entry is looked at in context, and depending on its rule type, category, observed use, likely breakage, and target tier, it may be normalized, included in one tier but not another, replaced by project-maintained data, or dropped entirely.

   Data on newly registered domains (NRD) and algorithmically generated domains (DGA) feeds into the build as well. Fresh registrations and random-looking machine-generated names are a strong early warning signal, since malicious infrastructure often goes live well before upstream blocklists catch up with it. This data is used to flag suspicious new domains for review, not as a bulk import. The published [NRD and DGA lists](README.md#nrd) are a separate thing you can subscribe to directly, see [section 5](#listrelationships).

2. **Normalize rules that can be used at DNS level.**
   Upstream filter lists can contain rule types that a DNS resolver cannot apply directly, including URL-specific rules, cosmetic filters, exceptions, regular expressions, and wildcard patterns containing `*`.

   The database stores concrete domain names, not the original browser-filter patterns. Rules that already identify a concrete domain can be normalized and validated directly. Where a wildcard or regular-expression rule can be interpreted safely at domain level, it may be evaluated against the supported Top 1M and Top 10M domain-ranking datasets to identify matching real domains. The resulting candidates are stored as individual domain names.

   For example, an upstream wildcard rule like `log-*.example.com` isn't stored as-is in the maintained database. Instead, the wildcard portion is checked against the Top 1M/10M ranking datasets to find real, observed subdomains that fit the pattern, for example `log-a2d72.example.com`. Only matching concrete domains that actually show up in that ranking data get added to the maintained database as plain domain entries; the original wildcard pattern itself is never published.

   Rules that depend on URLs, paths, page context, exceptions, or ambiguous pattern logic are not blindly converted into DNS entries. This avoids treating broad browser-filter patterns as equally broad DNS blocks.

3. **Add and maintain project data.**
   Upstream sources are only part of the input. Independently collected domains, project-maintained domain sets, tier-specific additions, reviewed network-log findings, and confirmed community reports are incorporated into the maintained database.

   This work can add DNS-relevant domains absent from upstream lists, close coverage gaps, and account for cases that require different handling at DNS level than in browser-based content blockers.

4. **Evaluate and categorize domains.**
   Domains in the database are assessed by category, relevance, and expected compatibility impact. This distinguishes domains suitable for conservative blocking from domains that may affect website, app, or device functionality.

   Appearing in an external source is therefore not sufficient for inclusion. A domain's category, relevance, expected impact, and the intended tier determine whether it belongs in Light, Normal, Pro, Pro++, Ultimate, a separate list, or no published list.

   NRD and DGA data also help decide where a threat-related domain ends up. Some domains from the [TIF](README.md#tif) pool that show up in that data get picked up and carried into the regular tiers, so they're blocked even without TIF subscribed. That's part of why Normal, Pro, Pro++, and Ultimate already cover some TIF domains while never carrying the full feed, see [section 2](#whatshouldiuse). This happens domain by domain after review. The NRD and DGA lists themselves are never merged into a tier, which is why the [Inclusion Matrix](CHEATSHEET.md#inclusionmatrix) shows them as not included.

5. **Build each tier deliberately.**
   Light, Normal, Pro, Pro++, and Ultimate use the same maintained database, but they are designed for different trade-offs between blocking coverage and compatibility. They are not simply the same list with arbitrary numbers of entries removed.

   For the main tiers, domains appearing in one or more supported Top 1M or Top 10M ranking datasets are a primary selection signal. These datasets help prioritize domains with broad observed use and keep the lists effective without filling them with large numbers of obscure, inactive, or low-value entries.

   This is a selection principle, not a strict requirement. A domain can still be included where there is a strong reason, for example because it is part of maintained tier-specific data or has been confirmed through review.

   - **Light** is the smallest and most compatibility-focused tier. It is essentially a size-optimized version of Normal, limited to Normal domains that also appear in the supported Top 1M or Top 10M datasets, and aims to avoid meaningful restrictions.
   - **Normal** provides broad everyday blocking with a low risk of restrictions.
   - **Pro** extends coverage while keeping a balanced approach. It is the recommended default for users who can allowlist a domain if needed.
   - **Pro++** is the more aggressive sibling of Pro. It adds blocking that can cause some restrictions and is intended for more experienced users who can handle occasional false positives or manual allowlisting.
   - **Ultimate** is the most aggressive tier. It intentionally blocks additional domains, including some popular trackers, and can affect website, app, or device functionality.

   Pro Mini, Pro++ Mini, and Ultimate Mini are size-optimized versions of their respective full tiers. They contain only domains from the matching full tier that also appear in the supported Top 1M or Top 10M datasets. Light is already the compact version of Normal and therefore has no separate Mini variant; it is built the same way, which is why categories that rarely rank in those datasets, such as the fake shops and fake streaming sites in the [Fake](README.md#fake) list, don't survive into it.

6. **Clean up and validate the output.**
   Before publication, invalid, duplicate, and no-longer-appropriate entries are removed. Domains covered by allowlists or exclusions are omitted from the relevant build output. Issue reports, community feedback, network-log reviews, and ongoing maintenance help identify false positives and coverage gaps.

The base database currently contains around 45 million domains, including historical data from the supported Top 1M and Top 10M sources going back more than 24 months. This historical data helps identify domains with observed use over time, supports the safe conversion of suitable wildcard and regular-expression rules into concrete domains, and contributes to selecting relevant domains for the final lists. The database's size and composition change as it is maintained.

In short: being listed in [Sources](https://github.com/hagezi/dns-blocklists/blob/main/sources.md) does not mean that a source is copied wholesale into a tier. Upstream lists are important inputs, but the published lists result from ongoing data maintenance, rule normalization, evaluation, categorization, tier-specific selection, cleanup, and validation. Popularity data helps keep the main tiers focused and reasonably sized, while maintained project data and threat data such as NRD and DGA cover gaps that upstream lists and domain rankings alone may miss.

**[Back to top](#table-of-contents)**

---

## <a name="listlookup"></a> 12. How do I check whether a domain is blocked, and by which list?

Use the **Blocklist Lookup**: [hagezi-mirror.dnsbunker.org/listseek.php](https://hagezi-mirror.dnsbunker.org/listseek.php)

Paste in one domain or a whole batch, one per line, hit Search, and you get a table per domain showing every list that blocks it plus the exact rule doing the blocking. It streams the published lists live from the build mirror, so the answer always reflects the newest build. No downloading files and grepping through them yourself.

It's subdomain-aware, which is often the interesting part. Look up `region1.app-measurement.com` and the result shows the rule `||app-measurement.com^`, so you can tell the block comes from a wildcard on the parent domain rather than from an entry for that exact hostname.

What it's good for:

- **Something broke.** Your query log gives you the domain, the Lookup tells you which list is responsible. If it's a list you subscribe to, allowlist the domain or drop down to a less aggressive tier, see [section 2](#whatshouldiuse).
- **Picking or switching tiers.** Check a domain you depend on before you move. If it shows up under Pro++ but not under Pro, you know exactly what you'd be signing up for.
- **Before you report something.** A report that names the domain, the list, and the rule is much faster to act on, see [section 13](#support).
- **Checking coverage.** No results at all means no published list currently blocks that domain, which is exactly the case for a "should be blocked but isn't" report.

> [!NOTE]
> Two things the Lookup can't tell you:
> - **What your own setup does.** It reads the published lists, not your DNS server. Your own allowlist, extra lists from other projects, or a local copy that hasn't refreshed yet can all change what actually happens on your network.
> - **Whether a domain is harmful.** It reports what the lists contain, not a verdict on the domain itself.
>
> It also reads from the build mirror, which runs ahead of the GitHub, GitLab, and Codeberg copies by up to a day, see [section 10](#mirrors). If you pull your lists from one of those, a fresh match may not have reached your copy yet.

**[Back to top](#table-of-contents)**

---

## <a name="support"></a> 13. Getting help and reporting issues

Found a legitimate domain that got blocked, or spotted one that should be blocked but isn't? Report it through the [issue tracker](https://github.com/hagezi/dns-blocklists/issues) on GitHub. That's the fastest way to get a false positive fixed or a coverage gap closed. You can also reach out by email at [support@hagezi.org](mailto:support@hagezi.org).

To help get your report resolved quickly, include the exact domain, which list and tier you're using (for example Pro or Ultimate), and, for a false positive, what broke (a specific site, app, or feature) so it can be reproduced and checked. If your tool keeps a query log, a quick look there can confirm the exact domain responsible before you report it, and the [Blocklist Lookup](#listlookup) tells you which lists block it and with which rule.

Got general questions or just want to chat? Head to the [GitHub Discussions](https://github.com/hagezi/dns-blocklists/discussions) page. There's also a public [Matrix support chat](https://matrix.to/#/#hagezi-support:tchncs.de?via=tchncs.de) if you'd rather talk things through directly. Prefer to reach out personally? [support@hagezi.org](mailto:support@hagezi.org) works too.

**[Back to top](#table-of-contents)**

---

## <a name="licensing"></a> 14. Licensing and liability

The lists are published under the [GPL-3.0 license](https://www.gnu.org/licenses/gpl-3.0.html), so you can redistribute, modify, or adapt them, but only within the terms of that license. Check the license in the repository before redistributing the lists as part of your own product or service.

The maintainer ("the Provider") publishes the lists as-is, with no warranty of accuracy, completeness, or fitness for any particular purpose, and no guarantee that every malicious domain is caught or that no legitimate domain ever gets blocked by mistake. You use them entirely at your own risk, and the Provider isn't liable for damages from use or misuse, except in cases of willful misconduct, gross negligence, or death/personal injury caused by negligence.

Basically, treat these lists as one layer in a bigger security setup, not a standalone fix. They don't replace firewalls, antivirus or EDR tools, intrusion detection systems, or your own judgment about risk.

This FAQ entry is a plain-language summary and doesn't cover every detail. The [Disclaimer section](README.md#disclaimer) in the repository is the full, legally binding version. If anything here ever conflicts with it, the Disclaimer section governs.

**[Back to top](#table-of-contents)**

---

## <a name="glossary"></a> 15. Glossary

This glossary covers unfamiliar terms from this FAQ, the [Cheat Sheet](CHEATSHEET.md), and the main [README](README.md), since all three documents share it.

**Jump to:** [A](#gl-a) · [B](#gl-b) · [C](#gl-c) · [D](#gl-d) · [E](#gl-e) · [F](#gl-f) · [G](#gl-g) · [I](#gl-i) · [J](#gl-j) · [L](#gl-l) · [M](#gl-m) · [N](#gl-n) · [O](#gl-o) · [P](#gl-p) · [Q](#gl-q) · [R](#gl-r) · [S](#gl-s) · [T](#gl-t) · [U](#gl-u) · [V](#gl-v) · [W](#gl-w)

### <a name="gl-a"></a>A

| Term | What it means |
|:---|:---|
| AdBlock-Fast | A lightweight, open-source ad blocker available as a browser extension and mobile app. One of the tools supporting the Adblock format. |
| Adblock format | One of the formats these lists come in. Looks like classic ad blocker filter rules and works with tools like Pi-hole, AdGuard, AdGuard Home, and uBlock Origin. |
| adblock-lean | A lightweight ad-blocking script built specifically for OpenWrt routers. It's one of the network-wide DNS blockers this project points to for advanced home-networking setups, and it's also one of the tools behind the "Wildcard (Domains only)" format. |
| AdGuard / AdGuard Home / AdGuard DNS | Three different things with confusingly similar names. AdGuard is a browser extension or app that only protects that one browser or device. AdGuard Home is a separate DNS server you run yourself, often on something like a Raspberry Pi, protecting every device on your network at once. AdGuard DNS is neither of those, it's a hosted public DNS resolver you can point your devices at without running any server yourself, similar in role to ControlD, RethinkDNS, or DNSwarden. |
| Admin (network admin) | Whoever manages the DNS server or router setup and can manually unblock a domain if a blocklist accidentally breaks something. Some list versions assume you have one on hand, others are built so you don't need one. |
| AdNauseam | A browser extension built on uBlock Origin that blocks ads and additionally clicks them invisibly, so tracking profiles fill up with noise. Supports the Adblock format. |
| Allowlist (whitelist) | The opposite of a blocklist. Domains here always get through, even if a blocklist would otherwise catch them. To allowlist or unblock a domain means adding it to this exception list so it is no longer blocked. |

### <a name="gl-b"></a>B

| Term | What it means |
|:---|:---|
| Badware | Umbrella term for domains involved in anything harmful, from malware and scams to abusive hosting. It's used in list descriptions where several of those categories are meant at once and naming just one would be misleading, for example "ads, trackers, metrics, telemetry, and some badware" in the Light tier. |
| Blocklist (denylist) | A list of domains that get blocked so they can't load, usually to stop ads, trackers, or malware. |
| Blocklist Lookup | A web tool on the build mirror that checks one or more domains against every published list and shows which lists block them, and with which rule. Handy for tracking down a false positive or confirming coverage before reporting a domain, see [section 12](#listlookup). |
| Blocky | An open-source, self-hosted DNS proxy and ad blocker that supports the Wildcard (Asterisk) format (v0.23 or newer) and, in older versions, the legacy Subdomains format. Aimed at users comfortable with more advanced, config-file-based setups. |
| Brave (aggressive mode) | The Brave browser only applies these lists when its shielding is set to aggressive blocking. On the default setting it ignores most third-party domain rules, which is why every format table specifies "aggressive mode only". |
| Browser content blocker | A browser extension or app that can block or modify individual web requests and page elements. Unlike DNS blocking, it can apply URL-specific rules, cosmetic filters, and site-specific exceptions. |

### <a name="gl-c"></a>C

| Term | What it means |
|:---|:---|
| C2 server (command-and-control server) | A server attackers use to remotely control malware already running on infected devices. Threat Intelligence Feeds specifically target the domains these servers rely on. |
| CAPTCHA | The "prove you're human" challenge some sites show before letting you through. Blocking location and IP trackers can make sites less certain about a visitor, which sometimes triggers extra CAPTCHAs, a known Ultimate side effect, see [section 2](#whatshouldiuse). |
| Cisco Umbrella Top 1M | A ranking of the top 1 million most-visited domains, published by Cisco. It does double duty here: it's one of the seven ranking sources the build uses, and it's the basis for the roughly 10,000-page set the lists are tested against, checking that pages, navigation, images, and videos still work correctly. |
| Cloudflare Radar / Netcraft / SpamHaus | Three threat-intelligence sources whose combined data feeds the Most Abused TLDs list: Cloudflare Radar tracks internet traffic and abuse trends, Netcraft specializes in phishing and fraud detection, and SpamHaus maintains reputation blocklists for spam and malware sources. Not to be confused with the plain "Cloudflare" domain ranking listed under "Top 1M list". |
| CMP (Consent Management Platform/Provider) | The tech behind cookie consent pop-ups on websites, letting visitors choose what data a site can collect about them. Common examples include OneTrust, Cookiebot, and Usercentrics. |
| ControlD | A free and paid online DNS resolver service offering Light, Normal, Pro, Pro++, Ultimate, and TIF without your own DNS server. Some categories are covered by ControlD's own native lists instead, and a few lists ship as importable ControlD folders, see [section 9](#availablelists). |
| ControlD folder | A ControlD-specific feature for grouping custom rules into a reusable set you can apply across profiles. |
| Cosmetic filters | Browser-based filter rules that hide page elements visually (for example via CSS) rather than blocking a network request. A DNS resolver has no concept of page content, so it can't apply cosmetic filters at all, which is why they're never converted into DNS entries, see [section 11](#sources). |
| Crash/error tracker | Software development tools like Bugsnag, Crashlytics, Firebase, Instabug, and Sentry that apps use to automatically report crashes and bugs back to developers. They're a form of telemetry, so blocking them is a privacy feature, but the earliest tiers (Light, Normal) leave them unblocked to stay as compatible as possible. Pro is the first tier to block them. |
| Cryptojacking | When a website or app secretly uses your device's processing power to mine cryptocurrency in the background, usually without you noticing anything besides a slower device and a bigger power bill. |

### <a name="gl-d"></a>D

| Term | What it means |
|:---|:---|
| Defense-in-depth | A security strategy that layers multiple independent protections on top of each other, so if one layer fails, the others still catch the problem. These blocklists are meant to be one layer in that kind of setup, not a complete solution on their own, see [section 14](#licensing) and the repository's Disclaimer for how that plays out here. |
| Denyallow / domain modifier | A rule type in filter lists used to carve out exceptions from a blocking rule. These modifiers have a technical length limit, so you can't cram unlimited exceptions into one rule, that's why exclusion lists sometimes stay short on purpose. |
| DGA (Domain Generation Algorithm) | A technique malware uses to generate large numbers of random-looking domains on the fly, making them harder to block in advance. This project's DGA lists come as three rolling windows (past 7, 14, and 30 days) that overlap rather than stack, so pick one instead of combining them, see [section 5](#listrelationships). The same data is also used inside the build to flag suspicious domains for review, see [section 11](#sources). |
| DNS (Domain Name System) | The system that translates website names, like example.com, into the numeric IP addresses computers use to find each other. Every blocklist works by intercepting these translations for unwanted domains. |
| DNS rebind protection | A safeguard against DNS rebinding attacks, where an attacker tricks a public domain into suddenly pointing at a private, local IP address to sneak into your home network. Available for AdGuard, AdGuard Home, and AdGuard DNS. Some other DNS blockers already have their own version of this built in, worth checking before you add a separate list. |
| DNS resolver | The server that actually performs the DNS lookup for your device, sometimes also called a recursive resolver. AdGuard DNS, ControlD, RethinkDNS, and DNSwarden are all examples of resolvers that support these blocklists. |
| DNSCrypt (DNSCloak) | A protocol that authenticates and encrypts DNS traffic between a device and its resolver, distinct from DoH and DoT. DNSCloak and DNSCrypt (the client) are apps that implement it and are among the tools supporting the "Wildcard (Domains only)" format. |
| DNSMasq | A lightweight, widely used piece of software for DNS and DHCP, often running on routers or small home servers. One of the five formats these lists come in is built specifically for it. |
| DNSwarden | A free online DNS resolver service offering Light, Normal, Pro, Pro++, Ultimate, and TIF as ready-made DNS-over-HTTPS and DNS-over-TLS/QUIC endpoints, aimed at people who don't want to run their own DNS server. It doesn't support Bypass, DynDNS, Hoster, TLDs, Anti Piracy, or Gambling, see [section 9](#availablelists). |
| Do53 | The classic, unencrypted way of doing DNS, over port 53. The name literally means "DNS over port 53", as opposed to encrypted options like DoH or DoT. |
| DoH / DoT (DNS-over-HTTPS / DNS-over-TLS) | Methods of encrypting DNS traffic so it can't be read or tampered with in transit. DoT typically runs over port 853, which is why some bypass lists recommend also blocking that port at the firewall. These encrypted methods can also bypass DNS-level blocklists by routing around your configured resolver, which is why a dedicated bypass list exists. |
| DoH3 / DoQ | Newer variants of encrypted DNS that run over QUIC instead of the older TCP-based connection, making lookups faster. Some DNS providers offer this as an extra connection option alongside regular DoH. |
| Domain database (maintained database) | The continuously updated internal dataset, currently around 45 million domains, that every published list is generated from. It combines evaluated upstream input with independently collected domains, project-maintained domain sets, community reports, NRD and DGA threat data, and more than 24 months of Top 1M/10M ranking history, see [section 11](#sources). |
| Dynamic DNS (DynDNS) | A service that gives a constantly changing IP address (common with home internet connections) a fixed, memorable domain name. Frequently abused for phishing campaigns, which is why there's a dedicated blocklist for it. |

### <a name="gl-e"></a>E

| Term | What it means |
|:---|:---|
| eBlocker | A dedicated privacy hardware/software appliance for network-wide DNS blocking, listed alongside Pi-hole and AdGuard Home as one of the project's recommended self-hosted options, and one of the tools supporting the Adblock format. |
| EDR (Endpoint Detection and Response) | A category of security software that watches individual devices for suspicious behavior and can respond automatically, more advanced than classic antivirus. Another extra protection layer these blocklists complement rather than replace. |
| Entropy / high-entropy | A measure of how random or unpredictable a string of characters looks. A domain like `xj4k9qz2.com` has high entropy, since there's no readable pattern to it, while a domain like `news-site.com` has low entropy. Malware-generated domains tend to be high-entropy, which is exactly what the DGA lists filter for. |

### <a name="gl-f"></a>F

| Term | What it means |
|:---|:---|
| False positive | A domain that gets mistakenly blocked even though it isn't actually harmful or unwanted, usually breaking a website or app feature. |
| Filter subscription | The setting in an ad blocker or DNS tool where you paste a blocklist's URL so the tool automatically downloads and keeps that list current, instead of you updating it by hand. |
| Fingerprinting | A tracking method that combines lots of small technical details about your device or browser to recognize you again, without needing a classic cookie. |
| Fork | A personal copy of a Git repository that keeps a link back to the original. Because this repository gets compressed and reinitialized every now and then, existing forks are invalidated when that happens, see [section 10](#mirrors). |
| FRITZ!Box | A popular line of German home routers (by AVM) with built-in DNS filtering support. Needs FRITZ!OS v8.40 or newer to use the "Wildcard (Domains only)" format from this project. |

### <a name="gl-g"></a>G

| Term | What it means |
|:---|:---|
| Ghostery | A free browser extension that blocks trackers and ads at the page level. One of the content blockers this project recommends pairing with DNS-level blocking. |
| GPL-3.0 | The GNU General Public License, version 3, an open-source license that allows redistribution and modification of the licensed material, as long as any redistributed or modified version is also published under the same license terms. |

### <a name="gl-i"></a>I

| Term | What it means |
|:---|:---|
| IDS/IPS (Intrusion Detection/Prevention System) | Security tools that watch network traffic for attack patterns. An IDS just flags suspicious activity, an IPS can actively block it. Another example of the extra protection layers these blocklists don't replace on their own. |
| InviZible Pro | An Android app that routes device traffic through Tor, DNSCrypt, and a purpose-built firewall for extra privacy. One of the tools supporting the "Wildcard (Domains only)" format. |
| IPv4 / IPv6 | Two versions of the internet protocol that hand out IP addresses. IPv4 uses the older, shorter-style addresses, IPv6 the newer, much longer ones. Some blocklists also ship as plain IP lists, since a domain could otherwise slip past a domain-only block by resolving over IPv6. |

### <a name="gl-j"></a>J

| Term | What it means |
|:---|:---|
| jsDelivr | A free content delivery network (CDN) that mirrors files straight from GitHub and npm onto a fast global server network. Links with @latest always point to the newest version of a file. Since jsDelivr caches everything, it keeps serving files even if GitHub is temporarily down, which is why the project uses jsDelivr links for some of its lists. |

### <a name="gl-l"></a>L

| Term | What it means |
|:---|:---|
| Legacy formats (Subdomains/Hosts) | Two older formats that moved into a separate [dns-blocklists-legacy](https://github.com/hagezi/dns-blocklists-legacy) repository. Subdomains works with older Blocky/Diversion versions, PersonalBlocklist, and pfBlockerNG; Hosts (plus a compressed variant) with AdAway, uMatrix, OpenSnitch, DNS66, NetGuard, and plain Linux hosts files. Only a limited set of lists exists in them, see [section 4](#formats). |
| List tiers (Light/Normal/Pro/Pro++/Ultimate) | The five main strictness levels these blocklists come in, from Light (barely any restrictions) up to Ultimate (blocks aggressively, including some popular trackers). Each step up means more blocking power but also a higher chance something you actually wanted breaks. |
| Little Snitch Mini | A lightweight macOS/iOS firewall app with a rule-count limit, so it only supports the smaller lists in this collection, see [section 4](#formats). |
| Location and IP trackers | Trackers websites use to determine a visitor's IP address or geographic location, usually for hidden analytics and ad targeting. Ultimate blocks them, which is good for privacy but can cause wrong regional settings, extra CAPTCHAs, or reduced site functionality. |

### <a name="gl-m"></a>M

| Term | What it means |
|:---|:---|
| Malware | An umbrella term for malicious software of all kinds, viruses, trojans, spyware, you name it, that infects a device, steals data, or lets someone else control it remotely. |
| Meta (META) | The company behind Facebook, Instagram, Messenger, and WhatsApp. Ultimate blocks some of its trackers, which limits Facebook and Messenger and affects a few WhatsApp features, see [section 2](#whatshouldiuse). |
| Metrics | Usage measurements a site or app collects about how its own service is being used, such as page views, load times, or click paths. Related to telemetry and analytics, and blocked from the Light tier upwards. |
| Mirror | An exact copy of a project hosted elsewhere, for example on GitLab or Codeberg instead of GitHub. Acts as a backup source in case the main one is ever unreachable. |
| mobileconfig (Apple configuration profile) | A settings file for iOS, iPadOS, and macOS that installs an encrypted DNS server with one tap, instead of entering the settings by hand. Several of the DNS services listed here provide one. |

### <a name="gl-n"></a>N

| Term | What it means |
|:---|:---|
| Native tracker | Trackers baked directly into devices, apps, or operating systems, think Amazon, Apple, Samsung, or Windows. They run quietly in the background collecting usage data, no matter which website you're visiting. Coverage builds up in four steps across the tiers, see [section 2](#whatshouldiuse). |
| Network-wide blocking | Blocking domains for every device on a network at once, phones, laptops, smart TVs, everything, typically by changing the DNS server for the whole router. The opposite of a browser-only blocker, which only protects the browser it's installed in. |
| Normalization (normalized rules) | The build step that turns an upstream filter rule into a plain, concrete domain name a DNS resolver can act on. Rules already naming a concrete domain are normalized directly; wildcard or regular-expression rules only if they can be safely matched against the Top 1M/10M ranking datasets first, see [section 11](#sources). |
| NRD (Newly Registered Domain) | A domain registered very recently, typically within the last 7 to 35 days. Threat actors like fresh domains because security tools haven't flagged them yet. This project's NRD lists come as five non-overlapping day-range files meant to be stacked, see [section 5](#listrelationships). The same data is also used inside the build to flag suspicious domains for review, see [section 11](#sources). |

### <a name="gl-o"></a>O

| Term | What it means |
|:---|:---|
| OPNsense | An open-source firewall and routing platform that can apply the "Wildcard (Asterisk)" format directly, letting DNS blocking happen at the network's edge rather than on a separate device. |
| OpenWrt | An open-source, Linux-based firmware for routers, popular for advanced home-networking setups. adblock-lean, one of the network-wide DNS blockers this project points to, is built specifically to run on OpenWrt. |

### <a name="gl-p"></a>P

| Term | What it means |
|:---|:---|
| Phishing | Scam attempts where fake websites or messages try to trick you into handing over passwords, banking details, or other sensitive info. |
| Pi-hole | A popular, free, open-source tool for running your own DNS server at home that blocks ads and trackers network-wide, commonly installed on a Raspberry Pi. |
| Preset DNS services | Free resolvers that ship these lists as a fixed combination rather than letting you pick individual versions: HaGeZi DNS and DNSBUNKER.org (Pro + TIF), OpenBLD.net (Pro + TIF), Public RDNS (aggressive, family-safe) and RobinGroppe.de (TIF only), see [section 9](#availablelists). |

### <a name="gl-q"></a>Q

| Term | What it means |
|:---|:---|
| Query log | A record most DNS tools keep of every domain lookup a device has made, showing which ones were allowed and which were blocked. Usually the fastest way to confirm whether a broken site is caused by a DNS block, and which domain is responsible, see [section 1](#quicksetup). |
| QUIC | A newer, UDP-based network protocol that sets up connections faster and encrypts them more efficiently than classic TCP. It's the foundation behind DoH3 and DoQ. |

### <a name="gl-r"></a>R

| Term | What it means |
|:---|:---|
| Referral domain | A domain used in affiliate or tracking links, commonly found on deal websites, in emails, and in search results. These typically only activate when a link is clicked, unlike ad domains, which load automatically. |
| RethinkDNS | A free online DNS resolver service, also available as an Android/iOS app, offering Light, Normal, Pro, Pro++, Ultimate, TIF, Bypass, DynDNS, and Badware Hoster. It refreshes its copies only once a week, so it lags behind the source repository, see [section 9](#availablelists). |
| Root domain | The base part of a domain name without any subdomains, like `example.com` in `shop.example.com` or `cdn.example.com`. Some blocklists, like Badware Hoster, deliberately block at the root domain level, which means every subdomain underneath gets blocked too, including any legitimate ones hosted on the same provider. |
| RPZ (Response Policy Zone) | A DNS server feature (used by Bind, Knot, PowerDNS, and Unbound) that lets a resolver apply blocklists directly at the server level, instead of through a separate ad-blocking app. |

### <a name="gl-s"></a>S

| Term | What it means |
|:---|:---|
| Safesearch | A filter built into search engines that keeps explicit results out of the result list. It can only be enforced on engines that actually support it, which is why there's a list blocking the ones that don't. |
| Scam / fake shop | Fraudulent websites posing as fake online stores, bogus streaming sites, or hidden subscription traps, all designed to grab your money or your data. |
| Stamus Labs | A threat-research team whose data feeds this project's NRD and DGA (Newly Registered Domain / Domain Generation Algorithm) lists, and which is also used as a signal inside the build, see [section 11](#sources). They don't guarantee same-day updates, so the underlying data can occasionally lag by a few days. |

### <a name="gl-t"></a>T

| Term | What it means |
|:---|:---|
| TechnitiumDNS | A free, open-source, self-hosted DNS server that supports the "Wildcard (Domains only)" format and is one of the network-wide options this project recommends alongside Pi-hole and AdGuard Home. |
| TIF (Threat Intelligence Feeds) | A list built from security research sources that tracks domains actively known to be involved in malware, phishing, command-and-control servers, or other live threats. Worth adding on top of any tier, since none of the tiers include the full feed, see [section 2](#whatshouldiuse). Some TIF domains do get carried into the regular tiers during the build, which is why those tiers already cover part of the feed, see [section 11](#sources). |
| TLD (Top-Level Domain) | The last segment of a domain name, like .com, .net, or a country code like .de. Some TLDs, like .top, .shop, or .gdn, get abused for spam or scams way more often than others. |
| Top 1M list / Top 10M list | Rankings of the one million (or ten million) most-visited domains on the internet, used to identify domains with broad, observed use. Umbrella, Cloudflare, Tranco, Chrome, BuiltWith, Majestic, and DomCop each publish their own, and all seven feed into this project's build. Top 1M and Top 10M are usually named together as one combined ranking signal, see [section 11](#sources). |
| Tranco | A research-oriented ranking of the top million websites, built by averaging several other popularity rankings over a 30-day period, making it more stable and harder to manipulate than a single-source ranking. |

### <a name="gl-u"></a>U

| Term | What it means |
|:---|:---|
| uBlock Origin | A free, open-source ad and content blocker that runs as a browser extension. Works at the browser level, adding finer-grained filtering on top of a network-wide DNS blocklist. |
| Upstream (upstream source / upstream blocklist) | An externally maintained blocklist, filter list, or security feed used as raw input, as opposed to data this project maintains itself. Being listed as a source doesn't mean it's copied unchanged into a tier, see [section 11](#sources). |
| URL shortener | A service that turns a long link into a short one, like `example.com/x7Kq`. Handy, but it hides where a link actually leads, which is why a dedicated blocklist exists for high-security setups. |

### <a name="gl-v"></a>V

| Term | What it means |
|:---|:---|
| VPN/TOR/Proxy bypass | Techniques that reroute traffic outside the local network's normal DNS path, which can accidentally or deliberately skip past blocklists. |

### <a name="gl-w"></a>W

| Term | What it means |
|:---|:---|
| whotracks.me | A public research project cataloging tracker and privacy data gathered from real websites. The roughly 10,000-page test set is cross-referenced through its site list, so it and the Cisco Umbrella set refer to the same benchmark. |
| Wildcard (Asterisk) format | One of the two wildcard formats these lists come in. Each entry is written with a placeholder asterisk, like `*.example.com`, so a single line covers the domain and all its subdomains without listing them one by one. Used by tools like Blocky, Nebulo, NetDuma, OPNsense, and YogaDNS. |
| Wildcard (Domains only) format | The other wildcard format. Each entry is just the plain domain name, like `example.com`, with no asterisk, since these tools already treat a listed domain as covering all its subdomains automatically. Used by tools like DNSCloak, DNSCrypt, FRITZ!Box, TechnitiumDNS, adblock-lean, PersonalDNSfilter, and InviZible Pro. |

**[Back to top](#table-of-contents)**
