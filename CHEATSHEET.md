# :bookmark_tabs: Blocklists Cheat Sheet <a name="top"></a>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/hagezi/files@latest/assets/images/dark/blocklists-cheat-sheet.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://cdn.jsdelivr.net/gh/hagezi/files@latest/assets/images/light/blocklists-cheat-sheet.svg">
  <img src="https://cdn.jsdelivr.net/gh/hagezi/files@latest/assets/images/dark/blocklists-cheat-sheet.svg">
</picture>

A quick, scannable reference for every list in this collection: what it blocks, who it's best suited for, what to watch out for, and the actual file name. Click a list name to jump to its full section in the [README](README.md), except for the two referral lists, which are documented in the [FAQ](FAQ.md#referral) instead.

**Related FAQ sections:** [quick setup](FAQ.md#quicksetup) · [can I use more than one list?](FAQ.md#combining) · [which format for my tool](FAQ.md#formats) · [check a single domain or IP](FAQ.md#listlookup) · [glossary of terms](FAQ.md#glossary)

## :bookmark_tabs: Table of Contents <a name="toc"></a>

1. [Recommended Setups](#quickguide)
2. [Inclusion Matrix](#inclusionmatrix)
3. [Multi (all-in-one protection)](#cheat_multi)
4. [Security and Threat Protection](#cheat_security)
5. [Bypass and Access Control](#cheat_bypass)
6. [Content and Lifestyle Filters](#cheat_content)
7. [Native Trackers and Referral Domains](#cheat_native)

---

## Recommended Setups <a name="quickguide"></a><a name="combos"></a>

| If you want... | Use this |
|:----------------|:---------|
| The absolute basics, no admin available | [Light](README.md#light) + [TIF](README.md#tif) (or [TIF Mini](README.md#tifmini) for size) |
| Solid everyday protection, low breakage risk | [Normal](README.md#normal) + [TIF](README.md#tif) |
| A strong, balanced default (recommended) | [Pro](README.md#pro) + [TIF](README.md#tif) |
| More aggressive than Pro, admin available | [Pro++](README.md#proplus) + [TIF](README.md#tif) |
| Maximum privacy and aggressive blocking | [Ultimate](README.md#ultimate) + [TIF](README.md#tif) |
| Close to Normal, on a low-RAM device | [Light](README.md#light) + [TIF Mini](README.md#tifmini) |
| Pro/Pro++/Ultimate-level protection, low-RAM device | [Pro Mini](README.md#promini) / [Pro++ Mini](README.md#proplusmini) / [Ultimate Mini](README.md#ultimatemini) + [TIF Mini](README.md#tifmini) |
| Stronger native tracker coverage without going all the way to Ultimate | [Pro](README.md#pro)/[Pro++](README.md#proplus) + [TIF](README.md#tif) + the specific [Native Tracker](README.md#native) device lists you need |
| Zero native device/app tracking, no exceptions | [Ultimate](README.md#ultimate) |
| A safe network for kids | [Gambling](README.md#gambling) + [Anti Piracy](README.md#piracy) + [Safesearch](README.md#safesearch) + [DoH/VPN/TOR/Proxy Bypass](README.md#bypass) + [Social Networks](README.md#social) + [NSFW](README.md#nsfw) |
| Locked-down corporate or school network | [Pro++](README.md#proplus) + [Bypass Full](README.md#bypass_all) + [Dynamic DNS](README.md#dyndns) + [Badware Hoster](README.md#hoster) |
| Threat hunting / reduced attack surface | [TIF](README.md#tif) + [Dynamic DNS](README.md#dyndns) + [Badware Hoster](README.md#hoster) + [Most Abused TLDs](README.md#tlds) + [NRD](README.md#nrd) |
| Threat hunting with less noise | Same as above, but swap [NRD](README.md#nrd) for [DGA](README.md#nrd) |

> [!IMPORTANT]
> Pick exactly **one** Multi tier. The tiers build on each other, so running two of them together adds nothing, see [FAQ](FAQ.md#combining). The standalone add-ons are the opposite: they're meant to be stacked on top of your tier.

> [!TIP]
> TIF adds real value at every tier, including Pro++ and Ultimate. See the [Inclusion Matrix](#inclusionmatrix) right below for exactly how much overlap already exists per tier.

> [!TIP]
> Pair any DNS-level setup with a browser content blocker like [AdGuard](https://adguard.com), [uBlock Origin](https://github.com/uBlockOrigin/), or [Ghostery](https://www.ghostery.com/). DNS blocking can't touch ads served from a service's own domain, see [FAQ](FAQ.md#inappads) and [Recommendation](README.md#recommendation).

**[Back to top](#toc)**

---

## Inclusion Matrix <a name="inclusionmatrix"></a>

Which lists are already included (fully or partially) in each Multi tier, and how much of them. Read this first, it saves you from adding a list your tier already covers. The per-category tables further down then cover every list in detail.

| List | Light | Normal | Pro | Pro++ | Ultimate | TIF |
|:-----|:-----:|:------:|:---:|:-----:|:--------:|:---:|
| [Fake](README.md#fake) | :x: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| [Pop-Up Ads](README.md#popupads) | :orange_circle: | :yellow_circle: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :yellow_circle: |
| [TIF / Medium / Mini](README.md#tif) | :x: | :orange_circle: | :orange_circle: | :yellow_circle: | :yellow_circle: | :white_check_mark: |
| [Native Tracker](README.md#native) | :orange_circle: | :orange_circle: | :yellow_circle: | :green_circle: | :white_check_mark: | :x: |
| Crash/error trackers | :x: | :x: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x: |
| [Referral domains blocked](FAQ.md#referral) | :x: | :x: | :orange_circle: | :yellow_circle: | :yellow_circle: | :x: |
| All other standalone lists (Bypass, Safesearch, DynDNS, Hoster, Shortener, TLDs, Rebind, Piracy, Gambling, Social, NSFW, NRD/DGA, TIF IPs) | :x: | :x: | :x: | :x: | :x: | :x: |

**Legend.** It's a five-step scale, listed here from the least coverage to the most:

1. :x: **not included**, none of it is in this tier
2. :orange_circle: **partially included, step 1 of 3**, the smallest share
3. :yellow_circle: **partially included, step 2 of 3**
4. :green_circle: **partially included, step 3 of 3**, the largest share
5. :white_check_mark: **fully included**, all of it

> [!NOTE]
> Five things the symbols alone don't tell you:
> - **The three partial steps are relative within a row.** They tell you how the tiers compare to each other, not what share of a list you're getting. Native Tracker is the clearest example: Light and Normal share one baseline, Pro blocks more, Pro++ more again, and only Ultimate is complete.
> - **Mini variants aren't listed separately.** Each one matches its non-Mini tier's row exactly, just size-optimized, so read Pro Mini off the Pro column.
> - **Fake is :x: in Light** by design. Light only carries domains from the Top 1M/10M lists, and fake shops or fake streaming sites generally don't rank there, so they never make it in.
> - **The TIF cells mean overlap, not coverage of the feed.** No Multi tier reaches :white_check_mark: there, not even Ultimate, and Light's overlap is effectively none. Pairing TIF with your tier is worthwhile at every level.
> - **The referral row runs the other way around.** There, a higher step on the scale means more referral domains get *blocked*, and even Pro++ and Ultimate only block part of the category. If you'd rather keep all of them working, add the [Referral Allowlist](FAQ.md#referral).
>
> Full breakdown in the [FAQ](FAQ.md#whatshouldiuse).

> [!TIP]
> This matrix works list by list. If your question is about one specific **domain or IP** instead, the [Blocklist Lookup](https://hagezi-mirror.dnsbunker.org/listseek.php) checks it against every published list and shows which ones block it and with which rule, following CNAME chains along the way, see [FAQ](FAQ.md#listlookup).

**[Back to top](#toc)**

---

## :books: Multi (all-in-one protection) <a name="cheat_multi"></a>

| List | What It Blocks | Blocking Level / Risk of Breakage | Best For | Caveats | File Name (Adblock) |
|:-----|:----------------|:---------------|:---------|:--------|:---------------------|
| [Multi Light](README.md#light) | Ads, trackers, metrics, telemetry, some badware | Relaxed / Minimal | Low-RAM setups, or anywhere even Normal's low risk is too much | Size-optimized cut of Normal, which is why Fake isn't in it, see [Inclusion Matrix](#inclusionmatrix). No crash/error trackers until Pro | `light.txt` |
| [Multi Normal](README.md#normal) | Ads, trackers, telemetry, phishing, malware, scams, fakes, cryptojacking | Relaxed to Balanced / Low | The default for unattended setups with no admin around | No crash/error trackers until Pro | `multi.txt` |
| [Multi Pro](README.md#pro) | Same categories as Normal, wider net (recommended default) | Balanced / Low to moderate | Setups with an admin available | Blocks a few referral domains, see [Referral Allowlist](FAQ.md#referral). First tier with crash/error trackers | `pro.txt` |
| [Multi Pro Mini](README.md#promini) | Same categories as Pro | Balanced / Low to moderate | Pro-level protection on limited hardware | Size-optimized: Top 1M/10M domains only | `pro.mini.txt` |
| [Multi Pro++](README.md#proplus) | Same categories as Pro, more aggressive | Balanced to Aggressive / Moderate | Experienced users with an admin available | :warning: Some non-link-tracking referral domains blocked, though not the whole category, see [FAQ](FAQ.md#referral) | `pro.plus.txt` |
| [Multi Pro++ Mini](README.md#proplusmini) | Same categories as Pro++ | Balanced to Aggressive / Moderate | Pro++-level protection on limited hardware | Size-optimized: Top 1M/10M domains only | `pro.plus.mini.txt` |
| [Multi Ultimate](README.md#ultimate) | Strict cleanup, including some popular trackers | Aggressive / High | Very experienced users with an admin available | :warning: Some non-link-tracking referral domains blocked, see [FAQ](FAQ.md#referral). Can affect Facebook/WhatsApp, Microsoft/Xbox, and IP-based site behavior | `ultimate.txt` |
| [Multi Ultimate Mini](README.md#ultimatemini) | Same categories as Ultimate | Aggressive / High | Ultimate-level protection on limited hardware | Size-optimized: Top 1M/10M domains only | `ultimate.mini.txt` |

**[Back to top](#toc)**

---

## :closed_lock_with_key: Security and Threat Protection <a name="cheat_security"></a>

| List | What It Blocks | Best For | Caveats | File Name (Adblock) |
|:-----|:----------------|:---------|:--------|:---------------------|
| [Fake](README.md#fake) | Scams, fake shops, fake streaming sites | Anti-phishing baseline | Bundled into most tiers, see [Inclusion Matrix](#inclusionmatrix) | `fake.txt` |
| [Pop-Up Ads](README.md#popupads) | Pop-up ads | Anti-pop-up baseline | Bundled in with coverage varying by tier, see [Inclusion Matrix](#inclusionmatrix). Large list on its own | `popupads.txt` |
| [Threat Intelligence Feeds](README.md#tif) | Malware, cryptojacking, scams, spam, phishing, C2 domains | Security-focused setups with enough RAM | Recommended on top of any tier. :warning: Too big for the iOS AdGuard app, needs 2GB RAM in AdGuard Home, RPZ split into 2 files | `tif.txt` |
| [TIF Medium](README.md#tifmedium) | Same as TIF, trimmed down | Setups that can't handle the full TIF list | Reduced coverage compared with full TIF. :warning: Too big for the iOS AdGuard app, needs 1GB RAM in AdGuard Home | `tif.medium.txt` |
| [TIF Mini](README.md#tifmini) | Same as TIF Medium, trimmed further (not the full list directly) | Setups that can't handle TIF Medium | Reduced coverage, smaller than TIF Medium | `tif.mini.txt` |
| [TIF IPs](README.md#tifips) | IPv4 companion to TIF | Firewalls and IP-level coverage | :warning: Disable IPv6 resolution in AdGuard Home | `tif-ips.txt` |
| [NRD](README.md#nrd) | Every newly registered domain, no filtering | Users comfortable maintaining an allowlist | :warning: Aggressive, expect higher false positives. Data from Stamus Labs. Five stackable day-range files, see note below | `nrd7.txt` through `nrd35-29.txt`, 5 files |
| [DGA](README.md#nrd) | High-entropy newly registered domains only | Users who want just the malware subset | :warning: Aggressive, though narrower than NRD. Data from Stamus Labs. Three overlapping windows, see note below | `dga7.txt`, `dga14.txt`, `dga30.txt` |
| [Dynamic DNS](README.md#dyndns) | Dynamic DNS services abused for phishing | Security-focused admins | None | `dyndns.txt` |
| [Badware Hoster](README.md#hoster) | Hosting providers abused for malware | Admins who accept some collateral damage | :warning: Blocks legit sites on the same hosts. ControlD folder available | `hoster.txt` |
| [Most Abused TLDs](README.md#tlds) | Entire high-abuse TLDs (`.top`, `.shop`, `.gdn`) | Strong anti-spam and anti-scam filtering | :warning: Aggressive, some legit sites get caught. AdGuard, uBlock Origin, Wildcard, and RPZ variants plus a ControlD folder also exist, see [README](README.md#tlds) | `spam-tlds-adblock.txt`, `spam-tlds-adblock-aggressive.txt`, `spam-tlds-adblock-allow.txt` |
| [DNS Rebind Protection](README.md#dnsrebind) | Local-network rebind attacks | AdGuard, AdGuard Home, and AdGuard DNS users | Whitelist your local hostnames, see [FAQ](FAQ.md#rebind) for the syntax. Other DNS blockers may already have their own rebind protection | `dns-rebind-protection.txt` |

> [!NOTE]
> **NRD and DGA are alternatives, not a pair.** DGA is the high-entropy subset of NRD, so pick one rather than running both. NRD's five files are non-overlapping day-range bands meant to be stacked: `nrd7` + `nrd14-8` covers 14 days, add `nrd21-15` for 21 days, and so on. DGA's three files are rolling windows that overlap rather than stack, so pick the single one that reaches back as far as you want. Full breakdown in the [FAQ](FAQ.md#listrelationships).

**[Back to top](#toc)**

---

## :outbox_tray: Bypass and Access Control <a name="cheat_bypass"></a>

| List | What It Blocks | Best For | Caveats | File Name (Adblock) |
|:-----|:----------------|:---------|:--------|:---------------------|
| [Bypass Full](README.md#bypass_all) | Encrypted DNS, VPN, TOR, and proxy services, the broadest of the three | Corporate or parental lockdown | Also block ports 53 and 853 outbound at the firewall. See [how the three bypass lists relate](FAQ.md#listrelationships) | `doh-vpn-proxy-bypass.txt` |
| [Bypass, DoH only](README.md#bypass_dns) | Encrypted DNS servers only, narrower than Full | Setups that only need to stop encrypted DNS | Same port-blocking requirement (53 and 853) | `doh.txt` |
| [Bypass, DoH IPs](README.md#bypass_ips) | IPv4 addresses of encrypted DNS servers | IP-level firewall coverage | Companion to DoH only, not to Full. :warning: Disable IPv6 resolution in AdGuard Home | `doh-ips.txt` |
| [Safesearch Not Supported](README.md#safesearch) | Search engines that skip Safesearch | Parental or admin Safesearch enforcement | None | `nosafesearch.txt` |
| [URL Shortener](README.md#urlshortener) | All known link shorteners | High-security environments | :warning: Can break legit short links | `urlshortener.txt` |

**[Back to top](#toc)**

---

## :underage: Content and Lifestyle Filters <a name="cheat_content"></a>

| List | What It Blocks | Best For | Caveats | File Name (Adblock) |
|:-----|:----------------|:---------|:--------|:---------------------|
| [Anti Piracy](README.md#piracy) | Piracy and illegal streaming or download sites | Network-wide piracy filtering | None | `anti.piracy.txt` |
| [Gambling](README.md#gambling) | Gambling sites and content | Parental or workplace filtering | None | `gambling.txt` |
| [Gambling Medium](README.md#gamblingmedium) | Same as Gambling, trimmed down | Setups that can't handle the full list | Reduced coverage compared with the full list | `gambling.medium.txt` |
| [Gambling Mini](README.md#gamblingmini) | Same as Gambling Medium, trimmed further (not the full list directly) | Setups that can't handle Gambling Medium | Reduced coverage: Top 1M/10M domains only | `gambling.mini.txt` |
| [Social Networks](README.md#social) | Facebook, Instagram, TikTok, X, Snapchat | Digital detox and focus filtering | Doesn't touch WhatsApp or Twitch | `social.txt` |
| [NSFW](README.md#nsfw) | Adult content | Workplace and school networks | None | `nsfw.txt` |

**[Back to top](#toc)**

---

## :calling: Native Trackers and Referral Domains <a name="cheat_native"></a>

| List | What It Blocks | Best For | Caveats | File Name (Adblock) |
|:-----|:----------------|:---------|:--------|:---------------------|
| [Native Tracker](README.md#native) | Device, app, and OS trackers (Amazon, Apple, Huawei, Microsoft, Samsung, TikTok, LG webOS, Roku, Vivo, OPPO/Realme, Xiaomi) | Extra device-specific coverage on top of any tier | Already bundled in at four strengths, see [Inclusion Matrix](#inclusionmatrix). May need manual unblocking per device | `native.amazon.txt` through `native.xiaomi.txt`, 12 files for 11 vendors (TikTok ships a normal and an aggressive version), see [README](README.md#native) |
| [Referral Allowlist](FAQ.md#referral) | Not a blocklist, keeps affiliate and tracking links working | Pro++ and Ultimate users | The only referral list with a ControlD folder | `whitelist-referral.txt`, `whitelist-referral-native.txt` |
| [Referral Blocklist](FAQ.md#referral) | Referral and affiliate tracking domains | Advanced users, a browser blocker is the better tool | :warning: Aggressive and opt-in, not recommended for DNS-level use. Breaks search results and newsletter unsubscribe links. No ControlD folder | `blocklist-referral-native.txt` |

See the FAQ's [referral breakdown](FAQ.md#referral) for exactly which domains get blocked at which tier. Note that even Pro++ and Ultimate only block some non-link-tracking referral domains, not the entire referral category.

**[Back to top](#toc)**

---

> [!NOTE]
> Entry counts and inclusion status can shift as the lists get rebuilt. Always check the [live README](README.md) and [FAQ](FAQ.md) for current numbers and policy details.

---

Back to the [Table of Contents](README.md#toc) of the main README.
