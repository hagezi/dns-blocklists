[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)![GitHub last commit](https://img.shields.io/github/last-commit/hagezi/dns-blocklists)![GitHub issues](https://img.shields.io/github/issues/hagezi/dns-blocklists)![GitHub closed issues](https://img.shields.io/github/issues-closed/hagezi/dns-blocklists)![GitHub repo size](https://img.shields.io/github/repo-size/hagezi/dns-blocklists)[![shields.io Stars](https://img.shields.io/github/stars/hagezi/dns-blocklists)](https://github.com/hagezi/dns-blocklists/stargazers)

## :zap: DNS Blocklists, let's make the internet a nicer place!

### Built with :heartbeat: for a safer, cleaner internet. It always looks impossible until someone just goes ahead and does it.

**What this is:** a set of DNS blocklists that block ads, trackers, telemetry, phishing, malware, scams, and other unwanted domains network-wide. They work for any region and with every common DNS server, ad blocker, and content blocker.

Like this project? If it's helped you out, drop a :star: (top right) and join the stargazers club! Every star genuinely helps.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/hagezi/files@latest/assets/images/dark/hagezi-dns-blocklists.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://cdn.jsdelivr.net/gh/hagezi/files@latest/assets/images/light/hagezi-dns-blocklists.svg">
  <img src="https://cdn.jsdelivr.net/gh/hagezi/files@latest/assets/images/light/hagezi-dns-blocklists.svg">
</picture>

**New here?** Start with [Multi PRO](#pro) plus the [Threat Intelligence Feeds](#tif) list, pick the [format that matches](#formatguide) your tool, and follow the [quick setup guide](FAQ.md#quicksetup). Unsure which version fits you? See [which list version should I use](FAQ.md#whatshouldiuse).

> [!NOTE]
> **About the cleaning tools below.** The five Multi versions are named after cleaning tools, and you'll see that wording throughout this page: Light is the hand brush, Normal the broom, Pro the big broom, Pro++ the sweeper, and Ultimate the ultimate sweeper. The bigger the tool, the more thoroughly it cleans, and the more likely it is to sweep up something you wanted to keep.

---

### :bookmark_tabs: Table of Contents <a name="toc"></a>

1. [Overview](#overview): [Which format do I need?](#formatguide)
2. [Multi LIGHT](#light), hand brush: basic protection
3. [Multi NORMAL](#normal), broom: all-round protection
4. [Multi PRO](#pro), big broom: extended protection (recommended): [Full](#pro) - [Mini](#promini)
5. [Multi PRO++](#proplus), sweeper: advanced protection (more aggressive): [Full](#proplus) - [Mini](#proplusmini)
6. [Multi ULTIMATE](#ultimate), ultimate sweeper: maximum protection (most aggressive): [Full](#ultimate) - [Mini](#ultimatemini)
7. [Fake](#fake), block scams, traps, and fake sites!
8. [Pop-Up Ads](#popupads), stop annoying and malicious pop-ups!
9. [Threat Intelligence Feeds](#tif), a serious security boost (recommended): [Full](#tif) - [Medium](#tifmedium) - [Mini](#tifmini) - [IPs](#tifips)
10. [Newly Registered Domains (NRD/DGA)](#nrd), a favorite tool of threat actors for launching attacks!
11. [Dynamic DNS (DynDNS)](#dyndns), guard against dynamic DNS abuse!
12. [Badware Hoster](#hoster), guard against malicious hosting services!
13. [Most Abused TLDs](#tlds), block known shady top-level domains!
14. [DNS Rebind Protection](#dnsrebind), stop attackers from pointing domains at your local network!
15. [DoH/VPN/TOR/Proxy Bypass](#bypass), stop people from sneaking around your DNS: [Full](#bypass_all) - [DoH only](#bypass_dns) - [DoH IPs](#bypass_ips)
16. [Safesearch not supported](#safesearch), block search engines that skip Safesearch!
17. [URL Shortener](#urlshortener), block link shorteners!
18. [Anti Piracy](#piracy), block piracy sites!
19. [Gambling](#gambling), block gambling content: [Full](#gambling) - [Medium](#gamblingmedium) - [Mini](#gamblingmini)
20. [Social Networks](#social), block access to social networks!
21. [NSFW](#nsfw), block adult content!
22. [Native Tracker](#native), block built-in trackers from devices, apps, and OSes!
23. [Blocklist Lookup](#listlookup), check any domain against every list!
24. [Blocklists Cheat Sheet](CHEATSHEET.md), quick reference table for every list at a glance
25. [Recommendation](#recommendation): [Which list version should I actually use?](FAQ.md#whatshouldiuse)
26. [Online DNS Services](#dnsservices): [HaGeZi DNS](#hagezidns) - [DNS Bunker](#dnsbunker)
27. [About](#about): [Repository](#repository) - [Referral Domains](#referral) - [Support](#support)
28. [FAQ](FAQ.md), frequently asked questions, including the [quick setup guide](FAQ.md#quicksetup) and the [glossary](FAQ.md#glossary)
29. [Discussions](https://github.com/hagezi/dns-blocklists/discussions)
30. [Update Interval/Official Mirrors](#mirrors)
31. [Sources](sources.md)
32. [Disclaimer](#disclaimer)
33. [Contact](#contact)

---

### :books: **Multi, cleans up the internet and protects your privacy!** <a name="overview"></a>

This is an all-in-one DNS blocklist that comes in **several versions (light, normal, pro, pro++, and ultimate)**. You can run it standalone, and it works for any region. It blocks ads, trackers, metrics, telemetry, fake sites, phishing, malware, scams, cryptojacking, and other junk. It's built on [various source blocklists](sources.md), but that doesn't mean it's just a pile of lists glued together. Everything here has been optimized and extended so it actually cleans up the internet across the board.

Curious about the sources? Check out: [Which sources are used for the lists and how are they compiled?](FAQ.md#sources)

#### **Blocklist versions at a glance:** <a name="inclusion-matrix"></a>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/hagezi/files@latest/assets/images/dark/inclusion-matrix.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://cdn.jsdelivr.net/gh/hagezi/files@latest/assets/images/light/inclusion-matrix.svg">
  <img src="https://cdn.jsdelivr.net/gh/hagezi/files@latest/assets/images/light/inclusion-matrix.svg">
</picture>

For a full inclusion matrix that also covers the standalone lists, see the [Cheat Sheet](CHEATSHEET.md#inclusionmatrix).

#### **Main lists at a glance:** <a name="blocking-intensity"></a>

| List | Blocking type | Risk of breakage | Entries | Size-optimized<br>version |
|:--------|:--------------|:-----------------|--------:|-----------------------:|
| :green_book:[Light](#light)        | Relaxed             | Minimal          | 37933    | - |
| :blue_book:[Normal](#normal)       | Relaxed/Balanced    | Low              | 192721    | Light: 37933 |
| :ledger:[Pro](#pro)                | Balanced            | Low to moderate  | 226420      | Mini: 51736 |
| :orange_book:[Pro++](#proplus)     | Balanced/Aggressive | Moderate         | 250509  | Mini: 62044 |
| :closed_book:[Ultimate](#ultimate) | Aggressive          | High             | 276931 | Mini: 76790 |
| :closed_lock_with_key:[TIF](#tif)  | Threats only        | Low              | 2173533      | Medium: 321135<br>Mini: 173615 |

The first five build on each other, so pick exactly one of them. TIF works differently: it's an add-on covering malware, phishing, and other live threats, and it's worth running alongside any tier. The size-optimized versions are alternatives to their full list, never something you add on top. Entry counts change with every build.

> [!TIP]
> :information_desk_person: [Not sure which version fits you? Check this out.](FAQ.md#whatshouldiuse)

#### **Which format do I need?** <a name="formatguide"></a>

Most lists below are published in the same five standard formats. Pick the row that matches your tool. Within these five, the blocked domains are the same, only the way they're written down changes.

| Format | Use it with |
|:-------|:------------|
| Adblock | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (aggressive mode only), AdBlock-Fast, AdNauseam, Little Snitch Mini (smaller lists only) |
| DNSMasq | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard Asterisk | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard Domains | DNSCloak, DNSCrypt, FRITZ!Box (FRITZ!OS v8.40 or newer), TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | Bind, Knot, PowerDNS, Unbound, and other software supporting Response Policy Zones |

A handful of lists don't follow this pattern, because their content or their exclusion rules can't be expressed the same way in every format. Those are [Most Abused TLDs](#tlds) (its own set of format variants), [DNS Rebind Protection](#dnsrebind) (AdGuard only), [NRD/DGA](#nrd) (Adblock and plain domains only), and the IP lists for [TIF](#tifips) and [DoH](#bypass_ips). Each of those sections spells out what's available.

The legacy Subdomains and Hosts formats live in a [separate repository](https://github.com/hagezi/dns-blocklists-legacy). For the complete format-to-tool breakdown, see the [FAQ](FAQ.md#formats).

---

### :green_book: **Multi LIGHT**, **basic protection** <a name="light"></a>

Hand brush edition. Cleans up the internet and protects your privacy without going overboard. Blocks ads, trackers, metrics, telemetry, and some badware. Basically a size-optimized version of Multi NORMAL, built only from domains that appear on Top 1M/10M lists (Umbrella, Cloudflare, Tranco, Chrome, BuiltWith, Majestic, DomCop).

> [!NOTE]
> This version shouldn't cause any real restrictions. Great if there's no admin around to unblock stuff for you, or if your ad blocker chokes on big lists.

> [!IMPORTANT]
> Doesn't block error trackers like Bugsnag, Crashlytics, Firebase, Instabug, Sentry, and similar app crash reporters. Those only get blocked starting with the Pro version.

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 37933 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/light.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/light.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/light.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/light-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/light.txt) |

---

### :blue_book: **Multi NORMAL**, **all-round protection** <a name="normal"></a>

Broom edition. Cleans up the internet and protects your privacy. Blocks ads, trackers, metrics, telemetry, phishing, malware, scams, fakes, cryptojacking, and other junk.

> [!NOTE]
> This one mostly won't cause restrictions either. Good pick if you don't have an admin handy to unblock anything.

> [!IMPORTANT]
> Doesn't block error trackers like Bugsnag, Crashlytics, Firebase, Instabug, Sentry, and similar app crash reporters. Those only get blocked starting with the Pro version.

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 192721 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/multi.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/multi.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/multi.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/multi-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/multi.txt) |

---

### :ledger: **Multi PRO**, **extended protection (recommended)** <a name="pro"></a>

Big broom edition. Cleans up the internet and protects your privacy. Blocks ads, trackers, metrics, telemetry, phishing, malware, scams, fakes, cryptojacking, and other junk.

> [!NOTE]
> Restrictions here are rare. Works best if you've got an admin nearby who can unblock something if needed. This is my personal go-to recommendation for solid ad blocking with good privacy without much hassle.

> [!WARNING]
> **Referral domains (affiliate and tracking links):**
> Most referral domains are still allowed here, but a handful get blocked anyway, mainly ones that double as regular trackers or are commonly tied to scam and spam links. Details: [Referral domains](FAQ.md#referral)

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 226420 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/pro.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/pro.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/pro.txt) |

#### :ledger: **Multi PRO mini (best for browser/mobile ad blockers)** <a name="promini"></a>

A size-optimized version made for DNS or browser blockers, like devices with limited RAM. This only contains domains from the full Pro list that appear on Top 1M/10M lists (Umbrella, Cloudflare, Tranco, Chrome, BuiltWith, Majestic, DomCop).

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 51736 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/pro.mini.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/pro.mini.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro.mini.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro.mini-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/pro.mini.txt) |

---

### :orange_book: **Multi PRO++**, **advanced protection (more aggressive)** <a name="proplus"></a>

Sweeper edition. This one cleans up the internet aggressively and protects your privacy hard. Blocks ads, trackers, metrics, telemetry, phishing, malware, scams, fakes, cryptojacking, and other junk.

> [!WARNING]
> This is the more aggressive sibling of Multi PRO. It might block a few legit domains by mistake, so it's best for experienced users. Ideally have an admin ready to unblock things that break.

> [!WARNING]
> **Referral domains (affiliate and tracking links):**
> More referral domains get blocked than in Pro, specifically the ones that aren't used exclusively for link tracking. The bulk of the category still stays allowed. Details: [Referral domains](FAQ.md#referral)

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 250509 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/pro.plus.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/pro.plus.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro.plus.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro.plus-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/pro.plus.txt) |

#### :orange_book: **Multi PRO++ mini** <a name="proplusmini"></a>

Built the same way as [Pro mini](#promini), but from the full Pro++ list: only its domains that appear on the Top 1M/10M lists make the cut. For DNS or browser blockers on limited hardware.

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 62044 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/pro.plus.mini.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/pro.plus.mini.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro.plus.mini.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro.plus.mini-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/pro.plus.mini.txt) |

---

### :closed_book: **Multi ULTIMATE**, **maximum protection (most aggressive)** <a name="ultimate"></a>

Ultimate sweeper edition. Strictly cleans up the internet and locks down your privacy. Blocks ads, trackers, metrics, telemetry, phishing, malware, scams, fakes, cryptojacking, and other junk.

> [!CAUTION]
> This is a stricter version of Multi PRO++. It contains domains that can limit app or website functionality, including some popular trackers that will cause hiccups. Only use this if you know what you're doing, and make sure someone can unblock things when needed.

> [!WARNING]
> **Referral domains (affiliate and tracking links):**
> Same as Pro++: referral domains that aren't used exclusively for link tracking are blocked, the rest of the category stays allowed. Details: [Referral domains](FAQ.md#referral)
>
> **Facebook:**
> Ultimate blocks some META trackers, which limits Facebook and Facebook Messenger app functionality. It also blocks WhatsApp's graph trackers, which can mess with avatar creation, the in-app help center, and video effects. Other than that, WhatsApp works fine. If you use META apps alongside Ultimate, unblock these domains as needed: [META Tracker](share/facebook.txt)
>
> **Windows/Xbox:**
> Some Microsoft trackers are blocked too, which can affect things like Windows Spotlight and Xbox Live Achievements Activity History. Check here for details on which domains to unblock for which feature: [Microsoft Tracker](share/microsoft.txt).
>
> **Location and IP trackers:**
> Certain trackers that websites use to pin down your IP or location get blocked. Great for privacy, but it might trigger wrong regional settings, extra CAPTCHAs, or reduced site functionality here and there. These trackers are usually used for hidden analytics and ad targeting.
>
> **Anything else:**
> More known quirks are listed [here](share/ultimate-known-issues.txt).

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 276931 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/ultimate.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/ultimate.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/ultimate.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/ultimate-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/ultimate.txt) |

#### :closed_book: **Multi ULTIMATE mini** <a name="ultimatemini"></a>

Built the same way as [Pro mini](#promini), but from the full Ultimate list: only its domains that appear on the Top 1M/10M lists make the cut. For DNS or browser blockers on limited hardware.

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 76790 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/ultimate.mini.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/ultimate.mini.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/ultimate.mini.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/ultimate.mini-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/ultimate.mini.txt) |

---

### :trollface: **Fake, blocks scams, traps, and fake sites!** <a name="fake"></a>

This blocklist targets fake stores, fake streaming sites, rip-offs, subscription traps, and similar scams.

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 16935 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/fake.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/fake.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/fake.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/fake-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/fake.txt) |

---

### :tada: **Pop-Up Ads, stops annoying and malicious pop-ups!** <a name="popupads"></a>

Targets pop-up ads that range from annoying to outright malicious.

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 50618 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/popupads.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/popupads.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/popupads.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/popupads-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/popupads.txt) |

---

### :closed_lock_with_key: **Threat Intelligence Feeds, a serious security boost (recommended)** <a name="tif"></a>

This blocklist targets malware, cryptojacking, scams, spam, and phishing. It blocks domains known for spreading malware, running phishing attacks, and hosting command-and-control servers.

> [!WARNING]
> This list is huge and can eat up a lot of memory depending on your ad blocker. If that's an issue, grab the medium or mini version instead.
> It's too big for the iOS AdGuard mobile app, and AdGuard Home needs at least 2 GB RAM.
> The RPZ version had to be split into two files because of its size, you need both.

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ<br>(split) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 2173533 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/tif.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/tif.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/tif.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/tif-onlydomains.txt) | :one: [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/tif-1.txt)<br>:two: [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/tif-2.txt) |

#### :closed_lock_with_key: **Threat Intelligence Feeds, medium version (best for browser/mobile ad blockers)** <a name="tifmedium"></a>

A medium-sized version of the TIF list, built for ad blockers that struggle with the full-size version. Includes only the most important feeds.

> [!WARNING]
> Too big for the iOS AdGuard mobile app. AdGuard Home needs at least 1 GB RAM.

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 321135 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/tif.medium.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/tif.medium.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/tif.medium.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/tif.medium-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/tif.medium.txt) |

#### :closed_lock_with_key: **Threat Intelligence Feeds, mini version** <a name="tifmini"></a>

A size-optimized version of the TIF Medium list, for ad blockers that even struggle with that one.

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 173615 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/tif.mini.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/tif.mini.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/tif.mini.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/tif.mini-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/tif.mini.txt) |

#### :closed_lock_with_key: **Threat Intelligence Feeds, IPs** <a name="tifips"></a>

There's also an IPv4 version of this list, in [plain IP format](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/ips/tif.txt) for firewalls and [AdGuard Home format](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/tif-ips.txt), which extends the regular TIF list.

> [!TIP]
> If you use the IP list in AdGuard Home, it'll block any domain that resolves to a blocked IP. To stop domains from slipping through via IPv6, turn off IPv6 resolution in AdGuard Home:
> `Settings > DNS settings > DNS server configuration > Disable resolving of IPv6 addresses`

---

### :new: **Newly Registered Domains (NRD/DGA)** <a name="nrd"></a>

Newly registered domains (NRDs) are a favorite tool for threat actors running phishing, malware, and command-and-control operations, since these domains are easy to throw away and help dodge detection.

There are two variants:
- **NRDs:** every newly registered domain, no filtering.
- **Entropy NRDs/DGAs:** only newly registered domains with high entropy, meaning they were likely generated by a Domain Generation Algorithm (DGA). These have a random-looking structure and are commonly used by malware for resilient command-and-control channels.

> [!WARNING]
> These lists are big and resource-heavy. They can spike memory usage and include false positives, since some legit domains are new too. Use with care and whitelist important services if needed.

> [!CAUTION]
> Use these at your own risk. NRD lists come as-is, with no guarantees, no support, and no formal process for fixing false positives.

> [!IMPORTANT]
> The base data comes from [Stamus Labs](https://www.stamus-networks.com/stamus-labs/subscribe-to-threat-intel-feed).
> Stamus Labs doesn't promise daily updates, so the data can sometimes lag by a few days.
>
> Current status of the data:
> - Stamus Labs: :green_circle: - Fri, 04 Sep 2026 04:24:48 UTC / 10698202 domains

#### :new: **NRDs:** all newly registered domains, unfiltered

| Time<br>period | Entries | Format<br>Adblock | Format<br>Domains |
|:--------------:|--------:|:-----------------:|:-----------------:|
| 7 days ago to yesterday    | 2701529 | [Link](https://cdn.jsdelivr.net/gh/hagezi/nrd@latest/adblock/nrd7.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/nrd@latest/domains/nrd7.txt) |
| 14 days ago to 8 days ago  | 2422056 | [Link](https://cdn.jsdelivr.net/gh/hagezi/nrd@latest/adblock/nrd14-8.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/nrd@latest/domains/nrd14-8.txt) |
| 21 days ago to 15 days ago | 2938162 | [Link](https://cdn.jsdelivr.net/gh/hagezi/nrd@latest/adblock/nrd21-15.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/nrd@latest/domains/nrd21-15.txt) |
| 28 days ago to 22 days ago | 2743031 | [Link](https://cdn.jsdelivr.net/gh/hagezi/nrd@latest/adblock/nrd28-22.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/nrd@latest/domains/nrd28-22.txt) |
| 35 days ago to 29 days ago | 2851498 | [Link](https://cdn.jsdelivr.net/gh/hagezi/nrd@latest/adblock/nrd35-29.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/nrd@latest/domains/nrd35-29.txt) |

> [!NOTE]
> The five files are non-overlapping bands, so stack them for wider coverage: `nrd7` plus `nrd14-8` covers the last 14 days, add `nrd21-15` for 21 days, and so on.

> [!TIP]
> Besides the formats here, NRDs are also available elsewhere:
> - Wildcard (Asterisk): [Cebeerre/dnsblocklists](https://github.com/Cebeerre/dnsblocklists)

#### :capital_abcd: **Entropy NRDs/DGAs:** only newly registered, high-entropy domains generated by DGAs

> [!NOTE]
> These domains are already part of the full NRD list, just filtered down.

| Time<br>period | Entries | Format<br>Adblock | Format<br>Domains |
|:--------------:|--------:|:-----------------:|:-----------------:|
| Past 7 days    | 536423 | [Link](https://cdn.jsdelivr.net/gh/hagezi/nrd@latest/adblock/dga7.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/nrd@latest/domains/dga7.txt) |
| Past 14 days   | 1058050 | [Link](https://cdn.jsdelivr.net/gh/hagezi/nrd@latest/adblock/dga14.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/nrd@latest/domains/dga14.txt) |
| Past 30 days   | 2423292 | [Link](https://cdn.jsdelivr.net/gh/hagezi/nrd@latest/adblock/dga30.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/nrd@latest/domains/dga30.txt) |

---

### :lock_with_ink_pen: **Dynamic DNS (DynDNS), guards against dynamic DNS abuse!** <a name="dyndns"></a>

Blocks dynamic DNS services that get abused for phishing campaigns and other shady activity.

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 1534 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/dyndns.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/dyndns.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/dyndns.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/dyndns-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/dyndns.txt) |

---

### :computer: **Badware Hoster, guards against malicious hosting services!** <a name="hoster"></a>

Blocks known hosting providers that repeatedly host badware through user-uploaded content.

> [!IMPORTANT]
> This list blocks the root domains of hosting providers that keep showing up in threat feeds because of malicious subdomains. That means legit sites hosted there will get blocked too, so think it through before using this one.
>
> If you use this list, you're on your own for unblocking any subdomains you actually need.

> [!CAUTION]
> Blocking whole hosting providers is overkill for most setups and can break legit services. In high-security environments though, that trade-off might make sense.

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ | ControlD |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1237 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/hoster.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/hoster.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/hoster.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/hoster-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/hoster.txt) | [Link](https://github.com/hagezi/dns-blocklists/blob/main/controld/badware-hoster-folder.json) |

---

### :crystal_ball: **Most Abused TLDs, blocks known shady top-level domains!** <a name="tlds"></a>

Blocks the most abused top-level domains, combining data from Cloudflare Radar, Netcraft, and SpamHaus.

> [!WARNING]
> This list blocks entire top-level domains (like *.top, *.shop, *.gdn) that have a bad reputation overall. Yes, that means some legit sites get caught in the crossfire too, but it's really effective against spam, scams, phishing, malware, and other garbage. Know what you're signing up for.
>
> Only well-known, reputable domains that show up on the supported top lists (Umbrella, Cloudflare, Tranco, Chrome, BuiltWith, Majestic, DomCop) or are essential for popular apps get considered for exclusion. Illegal domains, including piracy sites, stay blocked no matter what. Anything that doesn't clearly qualify gets reviewed case by case, and if there's no good reason to unblock it, it stays blocked. If you need access to something specific, add it to your personal allowlist.
>
> This selective approach exists because AdGuard and uBlock Origin have technical limits on rule length when using denyallow/domain modifiers. Trying to exclude every legit domain would eventually break important rules, so exclusions have to stay limited and carefully picked.

This list doesn't follow the usual five-format pattern, since the exclusion rules work differently from tool to tool.

| Format | Link | Notes |
|:-------|:-----|:------|
| AdGuard | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/spam-tlds.txt) | For AdGuard and AdGuard Home |
| uBlock Origin | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/spam-tlds-ublock.txt) | For uBlock Origin and Adblock Plus |
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/spam-tlds-adblock.txt) | For Pi-hole and TechnitiumDNS. Spam TLDs with no exclusions |
| Adblock<br>(Aggressive)<br>+ Allowlist | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/spam-tlds-adblock-aggressive.txt)<br>[Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/spam-tlds-adblock-allow.txt) | For Pi-hole and TechnitiumDNS. Use both together |
| Wildcard<br>Domains<br>+ Allowlist | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/spam-tlds-onlydomains.txt)<br>[Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/spam-tlds-allow-onlydomains.txt) | For DNSCrypt. Use both together |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/spam-tlds-rpz.txt) | Spam TLDs with no exclusions |
| RPZ<br>(Aggressive) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/spam-tlds-rpz-aggressive.txt) | All spam TLDs, matching the AdGuard and uBlock Origin versions |
| ControlD | [Link](https://github.com/hagezi/dns-blocklists/blob/main/controld/spam-tlds-combined-folder.json) | Importable ControlD folder |

---

### :shield: **DNS Rebind Protection, stops attackers from pointing domains at your local network!** <a name="dnsrebind"></a>

DNS Rebind Protection stops attackers from messing with DNS responses to make a domain point to a private or local IP address. This blocks malicious scripts from using DNS rebinding attacks to reach your internal network.

> [!IMPORTANT]
> This only works with AdGuard/AdGuard Home, and it's also selectable in AdGuard DNS.
> Other DNS blockers may already have their own rebind protection built in.
>
> Since rebind protection blocks anything resolving to a local IP, your internal hostnames might get caught too.
> In AdGuard, whitelist your local domains, something like: `@@||fritz.box^`

| Format | Link |
|:-------|:-----|
| AdGuard | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adguard/dns-rebind-protection.txt) |

---

### :outbox_tray: **DoH/VPN/TOR/Proxy Bypass, stop people from sneaking around your DNS!** <a name="bypass"></a>

Blocks common ways to bypass your DNS setup.

> [!NOTE]
> To make sure your DNS server is actually the one being used, you'll need to redirect or block standard DNS traffic (TCP/UDP 53) and also block DNS over TLS/QUIC (TCP/UDP 853) outbound.

**This list comes in two flavors:**

#### :outbox_tray: **Complete edition: encrypted DNS servers, VPN, TOR, proxies** <a name="bypass_all"></a>

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 16502 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/doh-vpn-proxy-bypass.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/doh-vpn-proxy-bypass.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/doh-vpn-proxy-bypass.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/doh-vpn-proxy-bypass-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/doh-vpn-proxy-bypass.txt) |

#### :outbox_tray: **Encrypted DNS servers only** <a name="bypass_dns"></a>

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 3341 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/doh.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/doh.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/doh.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/doh-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/doh.txt) |

#### :outbox_tray: **Encrypted DNS server IPs** <a name="bypass_ips"></a>

There's also an IPv4 version in [plain IP format](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/ips/doh.txt) for firewalls, and an [AdGuard Home format](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/doh-ips.txt).

> [!TIP]
> If you use the IP list in AdGuard Home, it'll block any domain that resolves to a blocked IP. To stop domains from slipping through via IPv6, turn off IPv6 resolution in AdGuard Home:
> `Settings > DNS settings > DNS server configuration > Disable resolving of IPv6 addresses`

---

### :mag: **Safesearch not supported, blocks search engines that skip Safesearch!** <a name="safesearch"></a>

Blocks search engines that don't support Safesearch.

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 204 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/nosafesearch.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/nosafesearch.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/nosafesearch.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/nosafesearch-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/nosafesearch.txt) |

---

### :link: **URL Shortener, blocks link shorteners!** <a name="urlshortener"></a>

Blocks every known URL/link shortener out there.

> [!WARNING]
> Not really meant for everyday setups. Blocking all URL shorteners makes the most sense in high-security environments, since shorteners can hide where a link actually leads and help enable attacks. In lower-risk settings, keeping an eye on things or just being careful usually does the job.
>
> If you use this list, you're on your own for unblocking any domains you actually need.

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 9871 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/urlshortener.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/urlshortener.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/urlshortener.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/urlshortener-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/urlshortener.txt) |

---

### :skull: **Anti Piracy, blocks piracy sites!** <a name="piracy"></a>

Blocks sites and services mainly used for illegally distributing copyrighted content.

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 48501 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/anti.piracy.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/anti.piracy.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/anti.piracy.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/anti.piracy-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/anti.piracy.txt) |

---

### :slot_machine: **Gambling, blocks gambling content!** <a name="gambling"></a>

Blocks gambling-related sites.

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 461086 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/gambling.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/gambling.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/gambling.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/gambling-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/gambling.txt) |

#### :slot_machine: **Gambling, medium version** <a name="gamblingmedium"></a>

A medium-sized version for ad blockers that have trouble with the full gambling list.

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 138690 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/gambling.medium.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/gambling.medium.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/gambling.medium.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/gambling.medium-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/gambling.medium.txt) |

#### :slot_machine: **Gambling, mini version** <a name="gamblingmini"></a>

A size-optimized version of the Gambling Medium list. Only contains domains that appear on Top 1M/10M lists (Umbrella, Cloudflare, Tranco, Chrome, BuiltWith, Majestic, DomCop).

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 84783 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/gambling.mini.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/gambling.mini.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/gambling.mini.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/gambling.mini-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/gambling.mini.txt) |

---

### :speech_balloon: **Social Networks, blocks access to social networks!** <a name="social"></a>

Blocks social networks like Facebook, Instagram, TikTok, X (formerly Twitter), Snapchat, and others.

> [!NOTE]
> This list won't block messaging apps like WhatsApp or streaming platforms like Twitch. It's strictly aimed at classic social networking sites.

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 902 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/social.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/social.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/social.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/social-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/social.txt) |

---

### :underage: **NSFW, blocks adult content!** <a name="nsfw"></a>

Blocks adult content.

| Entries | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 125626 | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/nsfw.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/nsfw.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/nsfw.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/nsfw-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/nsfw.txt) |

---

### :calling: **Native Tracker, blocks built-in trackers from devices, apps, and OSes!** <a name="native"></a>

Blocks the native trackers baked into devices, services, and operating systems that quietly track what you do.

> [!IMPORTANT]
> Native tracker lists cover everything used to monitor user activity, which can occasionally limit functionality too. They're integrated across all the standard tiers (Light, Normal, Pro, Pro++, Ultimate) at four increasing blocking levels:
>
> - Light and Normal: the baseline. Only native trackers that won't break functionality, for a smooth experience.
> - Pro: blocks more than the baseline, while still staying out of your way.
> - Pro++ (aggressive): blocks nearly all of them, which might cause some restrictions or limit certain features.
> - Ultimate: the most thorough option, blocking all native trackers for max privacy.
>
> Pick whichever tier matches how aggressive you want to be about native tracker blocking.
>
> When combining native tracker lists with the standard lists, you might need to manually unblock a specific tracker here or there.

| Device/Service | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:-------|:--------:|:--------:|:---------:|:--------:|:--------:|
| Amazon (Devices, Shopping, Video) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.amazon.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.amazon.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.amazon.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.amazon-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.amazon.txt) |
| Apple (iOS, macOS, tvOS) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.apple.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.apple.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.apple.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.apple-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.apple.txt) |
| Huawei (Devices) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.huawei.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.huawei.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.huawei.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.huawei-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.huawei.txt) |
| Microsoft (Windows, Office, MSN) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.winoffice.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.winoffice.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.winoffice.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.winoffice-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.winoffice.txt) |
| Samsung | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.samsung.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.samsung.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.samsung.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.samsung-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.samsung.txt) |
| TikTok (Fingerprinting) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.tiktok.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.tiktok.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.tiktok.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.tiktok-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.tiktok.txt) |
| TikTok (Fingerprinting) Aggressive | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.tiktok.extended.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.tiktok.extended.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.tiktok.extended.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.tiktok.extended-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.tiktok.extended.txt) |
| LG webOS | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.lgwebos.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.lgwebos.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.lgwebos.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.lgwebos-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.lgwebos.txt) |
| Roku | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.roku.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.roku.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.roku.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.roku-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.roku.txt) |
| Vivo | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.vivo.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.vivo.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.vivo.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.vivo-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.vivo.txt) |
| OPPO/Realme | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.oppo-realme.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.oppo-realme.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.oppo-realme.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.oppo-realme-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.oppo-realme.txt) |
| Xiaomi | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.xiaomi.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.xiaomi.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.xiaomi.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.xiaomi-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.xiaomi.txt) |

---

### :mag_right: **Blocklist Lookup, check any domain against every list!** <a name="listlookup"></a>

Not sure whether a domain is blocked, or which list is responsible for it? The **Blocklist Lookup** answers both: [hagezi-mirror.dnsbunker.org/listseek.php](https://hagezi-mirror.dnsbunker.org/listseek.php)

Paste in one domain or a whole batch, one per line, hit Search, and you get a table per domain listing every list that blocks it along with the exact rule. It streams the published lists live from the build mirror, so the results always reflect the newest build.

It's subdomain-aware too: look up `region1.app-measurement.com` and you'll see the match comes from `||app-measurement.com^`, a wildcard on the parent domain, not an entry for that exact hostname.

Handy for hunting down a false positive, comparing what happens to a domain across tiers before you switch, or checking whether something is covered at all before you report it.

> [!NOTE]
> The Lookup reads the published lists, not your own setup, and it doesn't judge whether a domain is harmful. Your local allowlist, extra lists from other projects, or a copy that hasn't refreshed yet can all make your network behave differently. More detail in the [FAQ](FAQ.md#listlookup).

---

### :bulb: **Recommendation** <a name="recommendation"></a>

For network-wide DNS blocking, I'd recommend [AdGuard Home](https://adguard.com), [Pi-hole](https://pi-hole.net/), [TechnitiumDNS](https://technitium.com/dns/), [Blocky](https://github.com/0xERR0R/blocky) (if you're comfortable with advanced setups), [adblock-lean](https://github.com/lynxthecat/adblock-lean) (for OpenWrt), or [eBlocker](https://eblocker.org/).

DNS blockers do a great job protecting your privacy by cutting off trackers, metrics, and telemetry. They can also block most ads, malware, scams, and fake sites, but they can't catch everything since some of that stuff doesn't work through DNS.

That's why I **also** recommend pairing this with a browser content blocker like [AdGuard](https://adguard.com), [uBlock Origin](https://github.com/uBlockOrigin/), or [Ghostery](https://www.ghostery.com/).

Check out Yokoffing's [Recommended Filters for uBlock Origin](https://github.com/yokoffing/filterlists) for good content blocker filter lists.

> [!TIP]
> :information_desk_person: [Still not sure which version to pick?](FAQ.md#whatshouldiuse)

---

### :department_store: **Online DNS Services** <a name="dnsservices"></a>

Don't run your own DNS server at home, or want extra protection for your phone when it's off your home network? These DNS services have you covered.

> [!TIP]
> [Which lists are available on which DNS services?](FAQ.md#availablelists)

#### :department_store: **AdGuardDNS, limited free / unlimited trial / paid** <a name="adguarddns"></a>

On [AdGuardDNS](https://adguard-dns.io) you can use:

- Normal, Pro, Pro++, Ultimate
- Threat Intelligence Feeds (TIF), Most Abused TLDs, Badware Hoster, DynDNS, DNS Rebind Protection, URL Shortener
- DoH/VPN/TOR/Proxy Bypass
- Gambling
- Anti Piracy
- Native Tracker (Apple, OPPO & Realme, Samsung, Vivo, Windows/Office, Xiaomi)
- NSFW (Parental Control > Block adult websites)
- Allowlist Referral

#### :department_store: **ControlD, free / paid** <a name="controld"></a>

On [ControlD](https://controld.com) you can use Light, Normal, Pro, Pro++, Ultimate, and TIF.

**Free:**

| Blocklists | DNS-over-HTTPS | DNS-over-TLS/QUIC | Legacy DNS | Apple |
|:-----------|:---------------|:-------------|:-------------|:---:|
| Light | `https://freedns.controld.com/x-hagezi-light` | `x-hagezi-light.freedns.controld.com` | 76.76.2.37<br>76.76.10.37<br>2606:1a40::37<br>2606:1a40:1::37 | [Link](https://api.controld.com/mobileconfig/x-hagezi-light?type=free&exclude_common=1) |
| Normal | `https://freedns.controld.com/x-hagezi-normal` | `x-hagezi-normal.freedns.controld.com` | 76.76.2.40<br>76.76.10.40<br>2606:1a40::40<br>2606:1a40:1::40 | [Link](https://api.controld.com/mobileconfig/x-hagezi-normal?type=free&exclude_common=1) |
| Pro | `https://freedns.controld.com/x-hagezi-pro` | `x-hagezi-pro.freedns.controld.com` | 76.76.2.41<br>76.76.10.41<br>2606:1a40::41<br>2606:1a40:1::41 | [Link](https://api.controld.com/mobileconfig/x-hagezi-pro?type=free&exclude_common=1) |
| Pro Plus | `https://freedns.controld.com/x-hagezi-proplus` | `x-hagezi-proplus.freedns.controld.com` | 76.76.2.42<br>76.76.10.42<br>2606:1a40::42<br>2606:1a40:1::42 | [Link](https://api.controld.com/mobileconfig/x-hagezi-proplus?type=free&exclude_common=1) |
| Ultimate | `https://freedns.controld.com/x-hagezi-ultimate` | `x-hagezi-ultimate.freedns.controld.com` | 76.76.2.45<br>76.76.10.45<br>2606:1a40::45<br>2606:1a40:1::45 | [Link](https://api.controld.com/mobileconfig/x-hagezi-ultimate?type=free&exclude_common=1) |
| TIF | `https://freedns.controld.com/x-hagezi-tif` | `x-hagezi-tif.freedns.controld.com` | 76.76.2.46<br>76.76.10.46<br>2606:1a40::46<br>2606:1a40:1::46 | [Link](https://api.controld.com/mobileconfig/x-hagezi-tif?type=free&exclude_common=1) |

**Paid:**

Check out Yokoffing's [ControlD Config Guide](https://github.com/yokoffing/Control-D-Config) for good [ControlD](https://controld.com) settings.

**Automation:**

[controld-hagezi-sync](https://github.com/0x11DFE/controld-hagezi-sync): automatically syncs HaGeZi folder blocklists to ControlD profiles via API. Supports TOML config, dry-run mode, multi-profile mappings, and daily GitHub Actions syncs.

#### :department_store: **HaGeZi DNS (EU: Germany/Finland, balanced blocking), free** <a name="hagezidns"></a>

HaGeZi DNS runs free, non-commercial public resolvers for Europe, mixing privacy and security with minimal restrictions using the Multi Pro and Threat Intelligence Feed lists.

More details in the [project repository](https://github.com/hagezi/dns-servers).

**Blocks ads, trackers, analytics, metrics, telemetry, phishing, malware, scams, fakes, cryptojacking, and other harmful domains:**

| Location           | Protocols     | Endpoint/URL                          | Apple<br>Config        | Recommended for    |
|--------------------|---------------|-------------------------------------|-----------------------|-------------------------|
| Germany, Falkenstein| DoH/DoH3      | `https://root.hagezi.org/dns-query`   | [Link](https://raw.githubusercontent.com/hagezi/dns-servers/refs/heads/main/mobileconfig/root-hagezi-org.mobileconfig) [QR](/mobileconfig/root-hagezi-org.mobileconfig.png)    | AT, BA, BE, BG, CH, CZ, DE, DK, FR, GB, HU, IE, IT, LU, NL, PL, RO, SI, SK |
|                    | DoT/QUIC      | `root.hagezi.org`                     |                       |                         |
|                    | Do53      | `188.34.161.210`<br>`2a01:4f8:c17:1c66::1` |                       |                         |
| Germany, Nuremberg| DoH/DoH3      | `https://wurzn.hagezi.org/dns-query`   | [Link](https://raw.githubusercontent.com/hagezi/dns-servers/refs/heads/main/mobileconfig/wurzn-hagezi-org.mobileconfig) [QR](/mobileconfig/wurzn-hagezi-org.mobileconfig.png)    | AT, BA, BE, BG, CH, CZ, DE, DK, ES, FR, GB, GR, HR, HU, IE, IT, LU, MD, MK, MT, NL, PL, PT, RO, RS, SI, SK, TR, UA |
|                    | DoT/QUIC      | `wurzn.hagezi.org`                     |                       |                         |
|                    | Do53      | `159.69.155.94`<br>`2a01:4f8:1c1c:d363::1` |                       |                         |
| Finland, Helsinki   | DoH/DoH3      | `https://juuri.hagezi.org/dns-query`  | [Link](https://raw.githubusercontent.com/hagezi/dns-servers/refs/heads/main/mobileconfig/juuri-hagezi-org.mobileconfig) [QR](/mobileconfig/juuri-hagezi-org.mobileconfig.png)    | DK, EE, FI, LT, LV, NO, SE |
|                    | DoT/QUIC      | `juuri.hagezi.org`                    |                       |                         |
|                    | Do53      | `95.217.163.17`<br>`2a01:4f9:c013:dc4e::1` |                       |                         |

**Blocks ONLY phishing, malware, scams, fakes, cryptojacking, and other harmful domains:**

| Location           | Protocols     | Endpoint/URL                          | Apple<br>Config        | Recommended for    |
|--------------------|---------------|-------------------------------------|-----------------------|-------------------------|
| Germany, Nuremberg| DoH/DoH3      | `https://ctif.hagezi.org/dns-query`  | [Link](https://raw.githubusercontent.com/hagezi/dns-servers/refs/heads/main/mobileconfig/ctif-hagezi-org.mobileconfig) [QR](/mobileconfig/ctif-hagezi-org.mobileconfig.png) | AT, BA, BE, BG, CH, CZ, DE, DK, ES, FR, GB, GR, HR, HU, IE, IT, LU, MD, MK, MT, NL, PL, PT, RO, RS, SI, SK, TR, UA |
|                    | DoT/QUIC      | `ctif.hagezi.org`                     |                       |                         |
|                    | Do53      | `162.55.58.40`<br>`2a01:4f8:1c19:6c19::1` |                       |                         |

#### :department_store: **DNSBUNKER.org (EU: Germany, balanced blocking), free** <a name="dnsbunker"></a>

[DNSBUNKER.org](https://dnsbunker.org/) is a hardened, privacy-first DNS resolver based in Germany.

| Blocklists | DNS-over-HTTPS/3 | DNS-over-TLS/QUIC | Apple |
|:-----------|:---------------|:------------------|:--------|
| Pro + TIF | `https://dnsbunker.org/dns-query` | `dnsbunker.org` | [Link](https://dnsbunker.org/doh.mobileconfig) |

#### :department_store: **Public RDNS (EU: Finland, family-safe, aggressive blocking), free** <a name="publicrdns"></a>

[Public RDNS](https://public-rdns.com/) is a free, no-log recursive resolver for families that uses HaGeZi lists to aggressively block ads, trackers, malware, NSFW content, piracy, gambling, and other unwanted domains.

More info on the [project page](https://public-rdns.com).

#### :department_store: **RobinGroppe.de (EU: Germany, threat blocking), free** <a name="robingroppe"></a>

[RobinGroppe.de DNS](https://www.robingroppe.de/serverzeug/dns-server) is a free, privacy-focused DNS service. It doesn't log your queries and protects your connection by blocking malware, phishing, and other online threats using the HaGeZi Threat Intelligence Feeds.

#### :department_store: **RethinkDNS, free** <a name="rethinkdns"></a>

On [RethinkDNS](https://rethinkdns.com) you can use Light, Normal, Pro, Pro++, Ultimate, TIF, Bypass, DynDNS, and Badware Hoster.

> [!NOTE]
> RethinkDNS only updates its lists once a week.

| Blocklists | DNS-over-HTTPS | DNS-over-TLS/QUIC |
|:-----------|:---------------|:-------------|
| Light + TIF | `https://sky.rethinkdns.com/1:AAkACAQA` | `1-aaeqacaeaa.max.rethinkdns.com` |
| Normal + TIF | `https://sky.rethinkdns.com/1:AAkACAgA` | `1-aaeqacaiaa.max.rethinkdns.com` |
| Pro + TIF  | `https://sky.rethinkdns.com/1:AAoACBAA` | `1-aafaacaqaa.max.rethinkdns.com` |
| Pro plus + TIF | `https://sky.rethinkdns.com/1:AAoACAgA` | `1-aafaacaiaa.max.rethinkdns.com` |
| Ultimate + TIF | `https://sky.rethinkdns.com/1:gAgACABA` | `1-qaeaacaaia.max.rethinkdns.com` |

#### :department_store: **DNSwarden, free** <a name="dnswarden"></a>

On [DNSwarden](https://dnswarden.com/customfilter.html) you can use Light, Normal, Pro, Pro++, Ultimate, and TIF.

| Blocklists | DNS-over-HTTPS | DNS-over-TLS/QUIC |
|:-----------|:---------------|:------------------|
| Light + TIF | `https://dns.dnswarden.com/00000000000000000000048` | `00000000000000000000048.dns.dnswarden.com` |
| Normal + TIF | `https://dns.dnswarden.com/00000000000000000000028` | `00000000000000000000028.dns.dnswarden.com` |
| Pro + TIF  | `https://dns.dnswarden.com/00000000000000000000018` | `00000000000000000000018.dns.dnswarden.com` |
| Pro plus + TIF | `https://dns.dnswarden.com/0000000000000000000000o` | `0000000000000000000000o.dns.dnswarden.com` |
| Ultimate + TIF | `https://dns.dnswarden.com/0000000000000000000000804` | `0000000000000000000000804.dns.dnswarden.com` |

#### :department_store: **OpenBLD.net, free** <a name="openbld"></a>

[OpenBLD.net](https://openbld.net/docs/get-started/third-party-filters/hagezi/) combines the Pro list with the TIF blocklist.

| Blocklists | DNS-over-HTTPS |
|:-----------|:---------------|
| Pro + TIF  | `https://ric.openbld.net/dns-query/hagezi` |

---

### :loudspeaker: **About** <a name="about"></a>

<p align="center"><a href="https://github.com/hagezi/dns-blocklists/graphs/contributors"><img src="https://contrib.rocks/image?repo=hagezi/dns-blocklists&max=1" /></a></p>
<p align="center"><i><b>"If the plan doesn't work, change the plan, not the goal."<br>There's no place like 127.0.0.1!</b></i></p>

These blocklists are built on [various sources](sources.md) plus my own denylists and extensions. The goal has always been to avoid false positives as much as possible without giving up effectiveness. Dead entries get pruned regularly to keep the lists lean.
Built with :heartbeat: for a safer, cleaner internet.

Every list gets tested against 10,000 websites from the Cisco Umbrella Top 1 million list. I check whether pages load properly, content displays correctly, navigation works, images load, videos play, and so on.

So no, these aren't just random lists stitched together from other sources. They've been optimized and extended to genuinely clean up the internet across every category. Curious how? Check out: [Which sources are used and how are the lists compiled?](FAQ.md#sources)

Here's how each version performed against that same 10,000-page set, which is also cross-referenced through [whotracks.me](https://whotracks.me/websites.html). All pages were opened and fully loaded in batch via Edge with privacy features turned off, and cookies accepted.

| **List**     | Total queries | Blocked queries | % blocked | % gap to light |
|-------------:|--------------:|----------------:|----------:|---------------:|
| **Ultimate** | 299646        | 131093          | 43.75     | 12.85          |
| **Pro++**    | 299646        | 119681          | 39.94     | 9.05           |
| **Pro**      | 299646        | 97508           | 32.54     | 1.65           |
| **Normal**   | 299646        | 93258           | 31.12     | 0.23           |
| **Light**    | 299646        | 92576           | 30.90     |                |
| **----**     | 299646        | 67888           | 22.66     | -8.24          |

Give it a try, share your feedback, and [report anything that should (or shouldn't) be blocked](https://github.com/hagezi/dns-blocklists/issues). Want to check a specific domain first? Use the [Blocklist Lookup](#listlookup).

#### :octocat: Repository <a name="repository"></a>

The repository gets compressed (reinitialized) every now and then to keep its size in check. Heads up, this invalidates forks and wipes the commit history.

#### :cyclone: Referral Domains <a name="referral"></a>

Wondering how referral domains (affiliate and tracking links) are handled? Here's the answer: [FAQ on referral domains](FAQ.md#referral)

#### :dizzy: Support <a name="support"></a>

This project only exists because of a genuinely supportive community. It's free for everyone and stays up to date thanks to ongoing care, updates, and contributions from people who actually want to make things better.

Feedback, ideas, domain reports, false-positive reports, whatever you've got, it's all appreciated. Every bit of help, big or small, makes the internet a little safer and cleaner for everyone.

Before you report a domain, run it through the [Blocklist Lookup](#listlookup). A report that names the exact list and rule is a lot quicker to act on.

See: [Getting help and reporting issues](FAQ.md#support)

**Thanks for being part of this!**

---

### :floppy_disk: Update Interval/Official Mirrors <a name="mirrors"></a>

The lists are rebuilt several times a day, but not every source publishes every build. There are two kinds of sources here, and the difference is only how often a finished build shows up:

- **Repository sources.** GitHub is the reference repository, and GitLab and Codeberg are its full repository mirrors. All three publish one build per day, in sync with each other.
- **Build mirror.** [hagezi-mirror.dnsbunker.org](https://hagezi-mirror.dnsbunker.org) is connected directly to the build system and publishes every build as soon as it finishes, which works out to a new version roughly every 4 to 8 hours.

| Source | What it is | Publishes |
|:---|:---|:---|
| [GitHub/jsDelivr](https://github.com/hagezi/dns-blocklists) | Reference repository | Once a day |
| [gitlab.com/hagezi/mirror](https://gitlab.com/hagezi/mirror) | Repository mirror | Once a day, in sync with GitHub |
| [codeberg.org/hagezi/mirror2](https://codeberg.org/hagezi/mirror2) | Repository mirror | Once a day, in sync with GitHub |
| [hagezi-mirror.dnsbunker.org](https://hagezi-mirror.dnsbunker.org) | Build mirror | Every build, roughly every 4 to 8 hours |

> [!TIP]
> All four sources serve the same lists, so pick by how fresh you need the data. Once a day is plenty for most setups. If you want every build the moment it exists, use the build mirror at [hagezi-mirror.dnsbunker.org](https://hagezi-mirror.dnsbunker.org).

---

### :warning: Disclaimer <a name="disclaimer"></a>

> [!IMPORTANT]
> **Scope.** This disclaimer applies to these DNS blocklists and to the related lists published by the project, including the NRD/DGA lists and the legacy format lists (together, "the Lists"). The Lists are created and maintained by HaGeZi ("the Provider"). This disclaimer does not extend to any other service the Provider may separately operate (e.g., public DNS resolvers or the Blocklist Lookup), which may be subject to its own terms.
>
> **No warranty.** The Lists are provided free of charge, "as is" and "as available," with no warranty of any kind, express, implied, or statutory. The Provider makes no promises about accuracy, completeness, timeliness, reliability, or fitness for any particular purpose. There's no guarantee that every malicious or unwanted domain is covered, and no guarantee that legitimate domains won't get blocked by mistake. The Lists are compiled in part from third-party sources; the Provider does not control and is not responsible for errors originating in those sources.
>
> **No accusation, no endorsement.** A domain showing up on a list is a technical filtering decision, not a legal finding and not a claim that whoever operates it did anything wrong. Categorization is based on third-party threat data, public rankings, and observed behavior, and any of that can be outdated or simply wrong. Brand names, domain names, and trademarks mentioned in the Lists or in this documentation belong to their respective owners and are used for identification only. If you operate a domain and think it's listed by mistake, ask for a review through the [issue tracker](https://github.com/hagezi/dns-blocklists/issues) or by mail at [support@hagezi.org](mailto:support@hagezi.org). Review and removal requests are handled on a best-effort basis, with no guaranteed response time.
>
> **Assumption of risk.** Using the Lists is entirely at your own risk. The Provider disclaims any and all direct, indirect, incidental, or consequential liability for damages arising from using, misusing, or being unable to use the Lists, except where such damages result from willful misconduct or gross negligence on the Provider's part, or from death or personal injury caused by the Provider's negligence. Mandatory statutory liability that can't be excluded by agreement stays unaffected, whatever the wording above says.
>
> **A supplement, not a substitute.** The Lists are meant to be one part of a broader defense-in-depth strategy, not the whole thing. They don't replace your own responsibility to do due diligence, run your own risk assessments, or use additional protections (firewalls, antivirus/EDR, IDS/IPS, etc.). There's no guarantee of compatibility with any specific system, platform, or setup. Nothing in the Lists or in the surrounding documentation is legal advice or professional security advice.
>
> **Your setup, your responsibility.** You're responsible for making sure the way you deploy the Lists is legal where you are. That matters most when you filter a network other people use (family, guests, employees, students, customers) and when you use lists that restrict access rather than block threats, such as NSFW, Social Networks, Gambling, Anti Piracy, or the DoH/VPN/TOR/Proxy Bypass list. Employment, telecommunications, and data-protection rules can all come into play. The Provider offers no guidance on this and takes no responsibility for how the Lists are deployed.
>
> **Third-party services and software.** DNS services, software, mirrors, and other projects linked or listed here are run by their respective operators, not by the Provider. Being mentioned is not an endorsement, and how those parties host, configure, delay, or modify the Lists is outside the Provider's control. Their own terms and privacy policies apply, including those of the platforms you download from (GitHub/jsDelivr, GitLab, Codeberg, and the build mirror).
>
> **No guarantee of availability, fair use.** The Lists are a free, personal/community project, made available internationally, and no one is automatically entitled to their continued availability. The Provider may modify, suspend, restrict, or discontinue the Lists (in whole or in part) at any time and for any reason, including excessive query volume or abusive or disproportionate use, without notice and without liability, and is under no obligation to maintain, update, or continue providing them. The Provider makes reasonable efforts to fix faults once discovered, but does not guarantee any particular response or resolution time.
>
> **Redistribution and licensing.** The Lists are published under the [GNU General Public License v3.0 (GPL-3.0)](https://www.gnu.org/licenses/gpl-3.0.html). A copy of the license is included in this repository and has to accompany any redistribution. You may redistribute, modify, and adapt the Lists only under the terms of that license. This disclaimer applies in addition to, and does not replace, the warranty and liability terms already contained in the GPL-3.0 (Sections 15 to 17). Some inputs come from third-party sources with their own licenses or terms of use. GPL-3.0 covers the Lists as published here; it doesn't hand you any rights in the upstream data itself, so if you build on that data directly, checking those terms is on you. It's on you to read, understand, and follow the license terms before using or redistributing anything.
>
> **Governing law.** The Provider is based in Germany, and the Lists are made available for international use. This disclaimer is governed by the laws of Germany, without regard to conflict-of-law principles, to the extent permitted by applicable law. Nothing in this disclaimer limits any mandatory consumer-protection rights you may have under the law of your country of residence.
>
> **Severability.** If any provision of this disclaimer is found invalid or unenforceable, the remaining provisions remain in full force and effect, and the invalid provision will be replaced by a valid one that most closely reflects its intended effect.
>
> **Changes to this disclaimer.** The Provider may update this disclaimer from time to time. The version published alongside the Lists at the time of your access or use applies. Continued use of the Lists after an update constitutes acceptance of the updated disclaimer.
>
> **Accepting these terms.** By accessing, downloading, or using these DNS blocklists, you agree to be bound by everything laid out in this disclaimer. If you do not agree, do not access, download, or use the Lists.

---

### **Keep the internet clean!**

---

[![https://gafam.info](https://ptrace.gafam.info/unofficial/img/color/lqdn-gafam-poster-en-color-5x1-2560x.png)](https://gafam.info)

---

<div align="center">

[![Mail](https://img.shields.io/badge/Proton%20Mail-6D4AFF.svg?style=for-the-badge&logo=Proton-Mail&logoColor=white)](mailto:mail@hagezi.org)
[![Matrix](https://img.shields.io/badge/Matrix-000000.svg?style=for-the-badge&logo=Matrix&logoColor=white)](https://matrix.to/#/@hagezi:tchncs.de)
[![Signal](https://img.shields.io/badge/Signal-3B45FD.svg?style=for-the-badge&logo=Signal&logoColor=white)](https://signal.me/#eu/WlBfKuiT1S1GAGwDRpvIJErjM-C3IcjQUQ9HWLzeJKGKTfwlOGhEe7GQRSx05uX0)

</div>

---

<a name="contact"></a>
