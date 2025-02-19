![GitHub last commit](https://img.shields.io/github/last-commit/hagezi/dns-blocklists)![GitHub issues](https://img.shields.io/github/issues/hagezi/dns-blocklists)![GitHub closed issues](https://img.shields.io/github/issues-closed/hagezi/dns-blocklists)![GitHub repo size](https://img.shields.io/github/repo-size/hagezi/dns-blocklists)[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fhagezi%2Fdns-blocklists&count_bg=%23754400&title_bg=%235F5F5F&icon=awesomelists.svg&icon_color=%23E7E7E7&title=visitors&edge_flat=false)](https://github.com/hagezi/dns-blocklists)[![shields.io Stars](https://img.shields.io/github/stars/hagezi/dns-blocklists)](https://github.com/hagezi/dns-blocklists/stargazers)

## :zap: DNS Blocklists - For a better internet!

### Made with :heartbeat: for a safer and cleaner internet! It always seems impossible until it’s done.

Privacy is not a crime, protect yourself. Privacy matters. Privacy is what allows us to determine who we are and who we want to be :bangbang:

If you like the project and you can benefit from it, leave a :star: (top right) and become a [stargazer](https://github.com/hagezi/dns-blocklists/stargazers)! Thanks for your support!

---

### :bookmark_tabs: Table of Contents

1. [Overview](#overview)
2. [Multi light](#light) - Hand brush: Light protection
3. [Multi normal](#normal) - Broom: All-round protection
4. [Multi pro](#pro) - Big broom: Extended protection (Recommended) : [Full](#pro) - [Mini](#promini)
5. [Multi pro++](#proplus) - Sweeper: Maximum protection (more aggressive) : [Full](#proplus) - [Mini](#proplusmini)
6. [Multi ultimate](#ultimate) - Ultimate Sweeper: Aggressive protection : [Full](#ultimate) - [Mini](#ultimatemini)
7. [Fake](#fake) - Protects against internet scams, traps & fakes!
8. [Pop-Up Ads](#popupads) - Protects against annoying and malicious pop-up ads!
9. [Threat Intelligence Feeds](#tif) - Increases security significantly! (Recommended) : [Full](#tif) - [Medium](#tifmedium) - [Mini](#tifmini) - [IPs](#tifips)
10. [Newly Registered Domains](#nrd) - Favoured by threat actors to launch malicious campaigns!
11. [DoH/VPN/TOR/Proxy Bypass](#bypass) - Prevent methods to bypass your DNS! : [Full](#bypass_all) - [DoH only](#bypass_dns) - [DoH IPs](#bypass_ips)
12. [Safesearch not supported](#safesearch) - Prevent the use of search engines that do not support Safesearch!
13. [Dynamic DNS](#dyndns) - Protects against the malicious use of dynamic DNS services!
14. [Badware Hoster](#hoster) - Protects against the malicious use of host services!
15. [Most Abused TLDs](#tlds) - Protects against known malicious Top Level Domains!
16. [Anti Piracy](#piracy) - Protects against piracy!
17. [Gambling](#gambling) - Protects against gambling content! : [Full](#gambling) - [Medium](#gamblingmedium) - [Mini](#gamblingmini)
18. [NSFW (external)](https://oisd.nl/setup) - oisd NSFW - Protects against adult content!
19. [Native Tracker](#native) - Broadband tracker of devices, services and operating systems
20. [Supporter](https://github.com/hagezi/dns-blocklists/stargazers) - Leave a star (top right)!
21. [Recommendation](#recommendation) - [Which version of the lists should I use?](https://github.com/hagezi/dns-blocklists/wiki/FAQ#whatshouldiuse)
22. [Online DNS Services](#dnsservices)
23. [About](#about) : [Repository](#repository) - [Referral Domains](#referral) - [Support Me](#support)
24. [Statistics](statistics.md) - [Sources](sources.md)
25. [FAQ](https://github.com/hagezi/dns-blocklists/wiki/FAQ) - Frequently Asked Questions

### :books: **Multi - Cleans the Internet and protects your privacy!** <a name="overview"></a>

An all-in-one DNS blocklist in **various versions (light, normal, pro, pro++ and ultimate)**. It can be used as a standalone blocklist. For every region. Blocks ads, affiliate, tracking, metrics, telemetry, fake, phishing, malware, scam, coins and other "crap". Based on [various native blocklists](sources.md). No, they are not just block lists cobbled together from different sources. They have been optimized and extended to efficiently "clean the Internet" in all areas.             

See also: [Which sources are used for the lists and how are the lists compiled on the basis of these sources?](https://github.com/hagezi/dns-blocklists/wiki/FAQ#sources)

#### **Blocklist version and size overview:**

| Version | Entries | Pro++ | Pro | Nor<br>mal | Light | [Fake](#fake) | [TIF](#tif) | [Nat<br>ive](#native) | [PopUp<br>Ads](#popupads) | Bug<br>Tracker |
|:--------|---:|:------:|:-----:|:----:|:----:|:---:|:------:|:----------:|:----:|:----:|
| :green_book:[Light](#light)             | 154272<br>71205     |  |   |   | :green_circle:  |  | |  :yellow_square: | | |
| :blue_book:[Normal](#normal)       | 315509<br>169213     |  |   | :green_circle: | :green_circle: |  | :yellow_square: | :yellow_square: | :yellow_square: | |
| :ledger:[Pro](#pro)              | 359149<br>187046         |  | :green_circle: | :green_circle: | :green_circle: | :yellow_square: | :yellow_square: | :yellow_square: | :yellow_square: | :green_circle: |
| :orange_book:[Pro++](#proplus)    | 586054<br>293631 | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :yellow_square: |:yellow_square: | :yellow_square: | :green_circle: | :green_circle: |
| :closed_book:[Ultimate](#ultimate)    | 717285<br>344254 | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :yellow_square: | :yellow_square: | :green_circle: | :green_circle: | :green_circle: |

:green_circle: contains the list named in the column caption
:yellow_square: partially contains the list named in the column caption

#### **Blocking level:**

| Version | Blocking<br>level | Blocking<br>type |
|:--------|:---------------|:--------------|
| :green_book:[Light](#light)        | :green_book::green_book:                                                                    | Relaxed             |
| :blue_book:[Normal](#normal)       | :blue_book::blue_book::blue_book:                                                           | Relaxed/Balanced    |
| :ledger:[Pro](#pro)                | :ledger::ledger::ledger::ledger:                                                            | Balanced            |
| :orange_book:[Pro++](#proplus)     | :orange_book::orange_book::orange_book::orange_book::orange_book::orange_book:              | Balanced/Aggressive |
| :closed_book:[Ultimate](#ultimate) | :closed_book::closed_book::closed_book::closed_book::closed_book::closed_book::closed_book: | Aggressive |

> [!TIP]
> :information_desk_person: [Which version of the lists should I use?](https://github.com/hagezi/dns-blocklists/wiki/FAQ#whatshouldiuse)

---

### :green_book: **Multi LIGHT** - **Basic protection** <a name="light"></a>

Hand brush - Cleans the Internet and protects your privacy! Blocks Ads, Tracking, Metrics and some Badware. A size-optimized version of the Multi NORMAL.

> [!NOTE]
> **Blocking type:** Relaxed              
> This list version should not lead to any restrictions. It is particularly suitable for environments in which there is no admin nearby who can unblock something and if you have to pay attention to the size of the list, because the AdBlocker does not support large lists.

> [!IMPORTANT]
> Does not block error trackers such as Bugsnag, Crashlytics, Firebase, Instabug, Sentry, ... and other app-specific crash trackers. These are only blocked from the Pro version onwards.

**Entries:** 154272 domains/hosts - 17142 compressed hosts - 71205 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/light.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/light.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/domains/light.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/light.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/light.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/light.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard |
| Hosts<br>Compressed | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/light-compressed.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/light-compressed.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/light-compressed.txt) | Hostfile, Linux, Windows |
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/light.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/light.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/light.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/light.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/light.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/light.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/light.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/light.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/light.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/light-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/light-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/light-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/light.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/light.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/light.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |
| PAC | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/pac/light.pac) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/pac/light.pac) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/pac/light.pac) | Proxy Auto Configuration |

### :blue_book: **Multi NORMAL** - **All-round protection** <a name="normal"></a>

Broom - Cleans the Internet and protects your privacy! Blocks Ads, Affiliate, Tracking, Metrics, Telemetry, Phishing, Malware, Scam, Fake, Coins and other "Crap".

> [!NOTE]
> **Blocking type:** Relaxed/Balanced              
> This list version should not lead to any restrictions for the most part. It is particularly suitable for environments in which there is no admin nearby who can unblock something.

> [!IMPORTANT]
> Does not block error trackers such as Bugsnag, Crashlytics, Firebase, Instabug, Sentry, ... and other app-specific crash trackers. These are only blocked from the Pro version onwards.

**Entries:** 315509 domains/hosts - 35057 compressed hosts - 169213 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/multi.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/multi.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/domains/multi.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/multi.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/multi.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/multi.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard |
| Hosts<br>Compressed | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/multi-compressed.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/multi-compressed.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/multi-compressed.txt) | Hostfile, Linux, Windows |
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/multi.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/multi.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/multi.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/multi.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/multi.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/multi.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/multi.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/multi.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/multi.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/multi-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/multi-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/multi-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/multi.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/multi.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/multi.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

### :ledger: **Multi PRO** - **Extended protection (Recommended)** <a name="pro"></a>

Big broom - Cleans the Internet and protects your privacy! Blocks Ads, Affiliate, Tracking, Metrics, Telemetry, Phishing, Malware, Scam, Fake, Coins and other "Crap".

> [!NOTE]
> **Blocking type:** Balanced            
> This list version should only very rarely lead to restrictions. It is suitable for environments where there is an admin nearby who can unblock something. My personal recommendation for mostly problem-free adblocking with good privacy protection.

**Entries:** 359149 domains/hosts - 39906 compressed hosts - 187046 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/pro.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/pro.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/domains/pro.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/pro.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/pro.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/pro.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard |
| Hosts<br>Compressed | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/pro-compressed.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/pro-compressed.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/pro-compressed.txt) | Hostfile, Linux, Windows |
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/pro.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/pro.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/pro.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/pro.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/pro.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/pro.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/pro.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/pro.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/pro.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/pro-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/pro-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/pro-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/pro.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/pro.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/pro.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :ledger: **Multi PRO mini (Recommended for browser/mobile adblockers)** <a name="promini"></a>

Size-optimised version for DNS/Browser adblockers. This list only contains domains from the Pro full that have been found on Top 1M lists (Umbrella, Cloudflare, Tranco, Chrome, ...) in the last 12 months.

**Entries:** 75464 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/pro.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/pro.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/pro.mini.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/pro.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/pro.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/pro.mini.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/pro.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/pro.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/pro.mini.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/pro.mini-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/pro.mini-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/pro.mini-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/pro.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/pro.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/pro.mini.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

### :orange_book: **Multi PRO++** - **Maximum protection** <a name="proplus"></a>

Sweeper - Aggressive cleans the Internet and protects your privacy! Blocks Ads, Affiliate, Tracking, Metrics, Telemetry, Phishing, Malware, Scam, Fake, Coins and other "Crap".

> [!NOTE]
> **Blocking type:** Balanced/Aggressive              
> More aggressive version of the Multi PRO blocklist. It may contain a few false positive domains that limit functionality. Therefore it should only be used by experienced users. Furthermore, an admin should be available to unblock incorrectly blocked domains.

> [!WARNING]
> **Referral domains (affiliate and tracking links):**           
> A few referral domains that also function as normal trackers are blocked. For further details see: [Referral domains](https://github.com/hagezi/dns-blocklists/wiki/FAQ#referral)

**Entries:** 586054 domains/hosts - 65118 compressed hosts - 293631 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/pro.plus.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/pro.plus.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/domains/pro.plus.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/pro.plus.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/pro.plus.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/pro.plus.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard |
| Hosts<br>Compressed | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/pro.plus-compressed.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/pro.plus-compressed.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/pro.plus-compressed.txt) | Hostfile, Linux, Windows |
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/pro.plus.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/pro.plus.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/pro.plus.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/pro.plus.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/pro.plus.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/pro.plus.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/pro.plus.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/pro.plus.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/pro.plus.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/pro.plus-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/pro.plus-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/pro.plus-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/pro.plus.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/pro.plus.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/pro.plus.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :orange_book: **Multi PRO++ mini** <a name="proplusmini"></a>

Size-optimised version for DNS/Browser adblockers. This list only contains domains from the Pro++ full that have been found on Top 1M lists (Umbrella, Cloudflare, Tranco, Chrome, ...) in the last 12 months.

**Entries:** 84276 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/pro.plus.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/pro.plus.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/pro.plus.mini.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/pro.plus.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/pro.plus.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/pro.plus.mini.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/pro.plus.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/pro.plus.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/pro.plus.mini.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/pro.plus.mini-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/pro.plus.mini-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/pro.plus.mini-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/pro.plus.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/pro.plus.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/pro.plus.mini.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

### :closed_book: **Multi ULTIMATE** - **Aggressive protection** <a name="ultimate"></a>

Ultimate Sweeper - Strictly cleans the Internet and protects your privacy! Blocks Ads, Affiliate, Tracking, Metrics, Telemetry, Phishing, Malware, Scam, Free Hoster, Fake, Coins and other "Crap".

> [!NOTE]
> **Blocking type:** Aggressive              
> Stricter version of the Multi PRO++ blocklist. It contains domains that limit functionality in apps and on websites - some popular trackers, that lead to restrictions, are blocked in this list. Therefore it should only be used by experienced users. Furthermore, an admin should be available to unblock incorrectly blocked domains.       

> [!WARNING]
> **Referral domains (affiliate and tracking links):**           
> A few referral domains that also function as normal trackers are blocked. For further details see: [Referral domains](https://github.com/hagezi/dns-blocklists/wiki/FAQ#referral)
>                   
> **Facebook:**          
> Some META trackers are blocked in Ultimate. This restricts the use of Facebook and Facebook Messenger apps. Furthermore, the Whatsapp graph trackers are blocked, which leads to restrictions when creating avatars, using the in-app helpcenter and using video effects. Otherwise, blocking has no effect on Whatsapp functionalities. To use META apps with Ultimate, unblock the following domains if necessary: [META Tracker](share/facebook.txt)
>           
> **Windows/XBox:**          
> Some Microsoft trackers are blocked in Ultimate, which lead to restrictions, e.g. Windows Spotlight, XBox Live Achievements, Windows Activity History and others. For details and which domains must be unblocked for which function, see: [Microsoft Tracker](share/microsoft.txt).
>                   
>**Miscellaneous:**          
> Details on other known issues can be found [here](share/ultimate-known-issues.txt).  
                   
**Entries:** 717285 domains/hosts - 79699 compressed hosts - 344254 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/ultimate.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/ultimate.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/domains/ultimate.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/ultimate.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/ultimate.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/ultimate.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard |
| Hosts<br>Compressed | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/ultimate-compressed.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/ultimate-compressed.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/ultimate-compressed.txt) | Hostfile, Linux, Windows |
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/ultimate.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/ultimate.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/ultimate.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/ultimate.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/ultimate.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/ultimate.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/ultimate.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/ultimate.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/ultimate.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/ultimate-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/ultimate-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/ultimate-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/ultimate.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/ultimate.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/ultimate.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :closed_book: **Multi ULTIMATE mini** <a name="ultimatemini"></a>

Size-optimised version for DNS/Browser adblockers. This list only contains domains from the Ultimate full that have been found on Top 1M lists (Umbrella, Cloudflare, Tranco, Chrome, ...) in the last 12 months.

**Entries:** 86603 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/ultimate.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/ultimate.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/ultimate.mini.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/ultimate.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/ultimate.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/ultimate.mini.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/ultimate.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/ultimate.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/ultimate.mini.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/ultimate.mini-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/ultimate.mini-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/ultimate.mini-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/ultimate.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/ultimate.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/ultimate.mini.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :trollface: **Fake - Protects against internet scams, traps & fakes!** <a name="fake"></a>

A blocklist for blocking fake stores, -streaming, rip-offs, cost traps and co.

|             | Light | Normal          | Pro            | Pro++          | Ultimate       | TIF<br>TIF medium |
|:-----------:|:-----:|:---------------:|:--------------:|:--------------:|:--------------:|:--------------:|
| Included in | :x:   | :x: | :x: | :x: | :x: | :green_circle: |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** 10873 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/fake.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/fake.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/fake.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/fake.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/fake.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/fake.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/fake.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/fake.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/fake.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/fake-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/fake-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/fake-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/fake.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/fake.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/fake.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :tada: **Pop-Up Ads - Protects against annoying and malicious pop-up ads!** <a name="popupads"></a>

A blocklist for annoying and malicious pop-up ads.

|             | Light          | Normal         | Pro            | Pro++          | Ultimate       | TIF      |
|:-----------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------:|
| Included in | :x: | :yellow_square: | :yellow_square: | :green_circle: | :green_circle: | :yellow_square: |

:green_circle: yes :yellow_square: partially :x: no

> [!NOTE]
> Fully included in Pro++ and Ultimate. Partially in Pro. In the combination of the Pro and additionally the Threat Intelligence Feeds (TIF) Medium or Full, all domains from the Pop-Up Ads list are included. This means that if you use the Pro and also the TIF medium or full, you no longer need to add this list separately.

**Entries:** 87340 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/popupads.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/popupads.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/popupads.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/popupads.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/popupads.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/popupads.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/popupads.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/popupads.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/popupads.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/popupads-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/popupads-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/popupads-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/popupads.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/popupads.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/popupads.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :closed_lock_with_key: **Threat Intelligence Feeds - Increases security significantly! (Recommended)** <a name="tif"></a>

A blocklist for blocking malware, cryptojacking, scam, spam and phishing. Blocks domains known to spread malware, launch phishing attacks and host command-and-control servers.

|             | Light           | Normal          | Pro             | Pro++           | Ultimate        |
|:-----------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|
| Included in | :x: | :yellow_square: | :yellow_square: | :yellow_square: | :yellow_square: |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** 972750 domains/hosts - 108084 compressed hosts - 867400 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/tif.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/tif.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/domains/tif.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/tif.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/tif.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/tif.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard |
| Hosts<br>Compressed | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/tif-compressed.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/tif-compressed.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/tif-compressed.txt) | Hostfile, Linux, Windows |
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/tif.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/tif.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/tif.txt) | Pi-hole, ~~AdGuard~~ (too big!), AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/tif.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/tif.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/tif.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/tif.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/tif.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/tif.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/tif-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/tif-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/tif-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/tif.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/tif.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/tif.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :closed_lock_with_key: **Threat Intelligence Feeds - Medium version (Recommended for browser/mobile adblockers)** <a name="tifmedium"></a>

A medium version of the Threat Intelligence Feeds list. Designed for Adblockers that have problems with the size of the full TIF list. Contains only important feeds.

|             | Light           | Normal          | Pro             | Pro++           | Ultimate        |
|:-----------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|
| Included in | :x: | :yellow_square: | :yellow_square: | :yellow_square: | :yellow_square: |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** 220366 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/tif.medium.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/tif.medium.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/tif.medium.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/tif.medium.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/tif.medium.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/tif.medium.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/tif.medium.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/tif.medium.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/tif.medium.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/tif.medium-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/tif.medium-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/tif.medium-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/tif.medium.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/tif.medium.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/tif.medium.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :closed_lock_with_key: **Threat Intelligence Feeds - Mini version** <a name="tifmini"></a>

A size-optimised version of the Threat Intelligence Feeds Medium list. Designed for Adblockers that have problems with the size of the TIF Medium list.

|             | Light           | Normal          | Pro             | Pro++           | Ultimate        |
|:-----------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|
| Included in | :x: | :yellow_square: | :yellow_square: | :yellow_square: | :yellow_square: |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** 66984 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/tif.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/tif.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/tif.mini.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/tif.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/tif.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/tif.mini.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/tif.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/tif.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/tif.mini.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/tif.mini-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/tif.mini-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/tif.mini-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/tif.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/tif.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/tif.mini.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :closed_lock_with_key: **Threat Intelligence Feeds - IPs** <a name="tifips"></a>

IPv4 lists in [plain IP format](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/ips/tif.txt) for firewalls and [AdGuard Home format](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/tif-ips.txt) are also available as an extension to the TIF list.

> [!TIP]
> If the IP list is used in AdGuard Home, all domains that would resolve to the blocked IP are blocked. To prevent the blocked domains from being resolved via IPv6, it is necessary to deactivate resolving via IPv6 in AdGuard Home:                        
> `Settings > DNS settings > DNS server configuration > Disable resolving of IPv6 addresses`

---

### :new: **Newly Registered Domains (NRDs)** <a name="nrd"></a>

A blocklist for blocking domains registered in the last 14 or 30 days. These domains are known to be favoured by threat actors to launch malicious campaigns.

> [!IMPORTANT]
> This is an external list that is created and maintained by [@xRuffKez](https://github.com/xRuffKez).

**For the lists and further details visit the [corresponding repository](https://github.com/xRuffKez/NRD).**

---

### :outbox_tray: **DoH/VPN/TOR/Proxy Bypass - Prevent methods to bypass your DNS!** <a name="bypass"></a>

Prevent methods to bypass your DNS.

> [!NOTE]
> To ensure the bootstrap is your DNS server you must redirect or block standard DNS outbound (TCP/UDP 53) and block all DNS over TLS/QUIC (TCP/UDP 853) outbound.

**The block list exists in two versions:**

#### **Complete Edition - Encrypted DNS Servers, VPN, TOR, Proxies** <a name="bypass_all"></a>

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** 3791 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/doh-vpn-proxy-bypass.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/doh-vpn-proxy-bypass.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/doh-vpn-proxy-bypass.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/doh-vpn-proxy-bypass.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/doh-vpn-proxy-bypass.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/doh-vpn-proxy-bypass.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/doh-vpn-proxy-bypass.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/doh-vpn-proxy-bypass.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/doh-vpn-proxy-bypass.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/doh-vpn-proxy-bypass-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/doh-vpn-proxy-bypass-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/doh-vpn-proxy-bypass-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/doh-vpn-proxy-bypass.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/doh-vpn-proxy-bypass.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/doh-vpn-proxy-bypass.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :outbox_tray: **Encrypted DNS Servers only** <a name="bypass_dns"></a>

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** 1672 domains/hosts - 186 compressed hosts - 1500 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/doh.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/doh.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/domains/doh.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/doh.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/doh.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/doh.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard |
| Hosts<br>Compressed | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/doh-compressed.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/doh-compressed.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/doh-compressed.txt) | Hostfile, Linux, Windows |
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/doh.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/doh.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/doh.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/doh.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/doh.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/doh.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/doh.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/doh.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/doh.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/doh-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/doh-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/doh-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/doh.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/doh.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/doh.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :outbox_tray: **Encrypted DNS Servers IPs** <a name="bypass_ips"></a>

IPv4 lists in [plain IP format](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/ips/doh.txt) for firewalls and [AdGuard Home format](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/doh-ips.txt) are also available.

> [!TIP]
> If the IP list is used in AdGuard Home, all domains that would resolve to the blocked IP are blocked. To prevent the blocked domains from being resolved via IPv6, it is necessary to deactivate resolving via IPv6 in AdGuard Home:                   
> `Settings > DNS settings > DNS server configuration > Disable resolving of IPv6 addresses`

---

### :mag: **Safesearch not supported - Prevent the use of search engines that do not support Safesearch!** <a name="safesearch"></a>

A blocklist for blocking search engines that do not support Safesearch.

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** 216 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/nosafesearch.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/nosafesearch.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/nosafesearch.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/nosafesearch.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/nosafesearch.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/nosafesearch.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/nosafesearch.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/nosafesearch.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/nosafesearch.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/nosafesearch-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/nosafesearch-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/nosafesearch-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/nosafesearch.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/nosafesearch.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/nosafesearch.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :lock_with_ink_pen: **Dynamic DNS blocking - Protects against the malicious use of dynamic DNS services!** <a name="dyndns"></a>

A blocklist for blocking dynamic DNS services to protect against malicious use in phishing campaigns and others.

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** 1406 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/dyndns.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/dyndns.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/dyndns.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/dyndns.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/dyndns.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/dyndns.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/dyndns.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/dyndns.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/dyndns.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/dyndns-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/dyndns-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/dyndns-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/dyndns.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/dyndns.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/dyndns.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :computer: **Badware Hoster blocking - Protects against the malicious use of host services!** <a name="hoster"></a>

A blocklist for blocking known hosters that also host badware via user content to prevent the use of these hosters for malicious purposes.

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** 2169 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/hoster.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/hoster.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/hoster.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/hoster.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/hoster.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/hoster.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/hoster.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/hoster.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/hoster.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/hoster-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/hoster-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/hoster-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/hoster.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/hoster.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/hoster.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |
| ControlD | [GH](https://github.com/hagezi/dns-blocklists/blob/main/controld/badware-hoster-folder.json)| ControlD folder |

---

### :crystal_ball: **Most Abused TLDs - Protects against known malicious Top Level Domains! (Recommended)** <a name="tlds"></a>

A blocklist for blocking Top Most Abused Top Level Domains, merged from [@Yokoffing](https://github.com/yokoffing), [@DandelionSprout](https://github.com/DandelionSprout/), [@LennyFox](https://github.com/lennyfox) Cloudflare Radar, Netcraft and SpamHaus.

> [!WARNING]
> The purpose of this list is to block TLDs (`*.top`, `*.shop`, `*.gdn`, ...) that have a bad reputation score. All pages of the TLD contained on the list are blocked, and it is clear that this also blocks any legal pages. More or less, depending on the current TLD reputation score.                    
> However, a lot of spam, scam, phishing, malware and badware is also blocked very effectively. That is the purpose of this list.                   
> Anyone using this list should be aware of what the list blocks.
>        
> For the AdBlock format (AdGuard and uBlock Origin) of the list there is the option to exclude popular domains via rule modifiers like `$denyallow` or `$domain`. However, the number is limited, as the entire rule becomes invalid depending on the total length. Therefore, only popular domains are unblocked.              
> For other formats, the user himself is responsible for unblocking what he needs.
              
|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| AdGuard | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/spam-tlds.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/spam-tlds.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/spam-tlds.txt) | AdGuard, AdGuard Home |
| uBlock Origin  | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/spam-tlds-ublock.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/spam-tlds-ublock.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/spam-tlds-ublock.txt) | uBlock Origin, Adblock Plus |
| AdBlock  | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/spam-tlds-adblock.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/spam-tlds-adblock.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/spam-tlds-adblock.txt) | Pi-hole, TechnitiumDNS<br>Contains only spam TLDs that do not have any exclusions. |
| AdBlock<br>(Aggressive)<br><br>Allowlist<br><br> | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/spam-tlds-adblock-aggressive.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/spam-tlds-adblock-aggressive.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/spam-tlds-adblock-aggressive.txt)<br><br>[GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/spam-tlds-adblock-allow.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/spam-tlds-adblock-allow.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/spam-tlds-adblock-allow.txt) | Pi-hole, TechnitiumDNS |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/spam-tlds-rpz.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/spam-tlds-rpz.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/spam-tlds-rpz.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound<br>Contains only spam TLDs that do not have any exclusions. |
| RPZ<br>(Aggressive) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/spam-tlds-rpz-aggressive.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/spam-tlds-rpz-aggressive.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/spam-tlds-rpz-aggressive.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound<br>Contains all spam TLDs, corresponds to the AdGuard and uBlock Origin version without exclusions. |
| ControlD | [GH](https://github.com/hagezi/dns-blocklists/blob/main/controld/spam-tlds-combined-folder.json) | ControlD folder |

---

### :skull: **Anti Piracy - Protects against piracy!** <a name="piracy"></a>

Blocks websites and services that are mainly used for the illegal distribution of copyrighted content.

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** 9944 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/anti.piracy.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/anti.piracy.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/anti.piracy.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/anti.piracy.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/anti.piracy.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/anti.piracy.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/anti.piracy.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/anti.piracy.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/anti.piracy.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/anti.piracy-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/anti.piracy-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/anti.piracy-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/anti.piracy.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/anti.piracy.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/anti.piracy.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :slot_machine: **Gambling - Protects against gambling content!** <a name="gambling"></a>

Blocks gambling content.

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** 523670 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/gambling.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/gambling.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/gambling.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/gambling.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/gambling.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/gambling.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/gambling.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/gambling.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/gambling.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/gambling-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/gambling-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/gambling-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/gambling.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/gambling.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/gambling.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :slot_machine: **Gambling - Medium version** <a name="gamblingmedium"></a>

A medium version of the Gambling list. Designed for Adblockers that have problems with the size of the full Gambling list.

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** 193061 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/gambling.medium.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/gambling.medium.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/gambling.medium.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/gambling.medium.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/gambling.medium.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/gambling.medium.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/gambling.medium.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/gambling.medium.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/gambling.medium.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/gambling.medium-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/gambling.medium-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/gambling.medium-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/gambling.medium.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/gambling.medium.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/gambling.medium.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :slot_machine: **Gambling - Mini version** <a name="gamblingmini"></a>

A size-optimised version of the Gambling Medium list. This list only contains domains that have been found on Top 1M lists (Umbrella, Cloudflare, Tranco, Chrome, ...) in the last 12 months.

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** 65889 compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/gambling.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/gambling.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/gambling.mini.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/gambling.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/gambling.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/gambling.mini.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/gambling.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/gambling.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/gambling.mini.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/gambling.mini-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/gambling.mini-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/gambling.mini-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/gambling.mini.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/gambling.mini.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/gambling.mini.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :calling: **Native Tracker - Broadband tracker of devices, services and operating systems** <a name="native"></a>

Blocks native broadband tracker from devices, services and operating systems that track your activity.

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :yellow_square:   | :yellow_square:    | :yellow_square: | :yellow_square:  | :green_circle:      |

:green_circle: yes :yellow_square: partially :x: no

| Device/Service | Domains | Hosts | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:-------|:--------:|:------:|:--------:|:--------:|:---------:|:--------:|:--------:|
| Amazon (Devices, Shopping, Video) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.amazon.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.amazon.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/domains/native.amazon.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.amazon.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.amazon.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/native.amazon.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.amazon.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.amazon.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/native.amazon.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.amazon.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.amazon.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/native.amazon.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.amazon.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.amazon.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.amazon.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.amazon-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.amazon-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.amazon-onlydomains.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.amazon.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.amazon.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/native.amazon.txt) |
| Apple (iOS, macOS, tvOS) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.apple.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.apple.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/domains/native.apple.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.apple.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.apple.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/native.apple.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.apple.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.apple.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/native.apple.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.apple.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.apple.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/native.apple.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.apple.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.apple.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.apple.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.apple-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.apple-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.apple-onlydomains.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.apple.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.apple.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/native.apple.txt) |
| Huawei (Devices) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.huawei.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.huawei.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/domains/native.huawei.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.huawei.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.huawei.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/native.huawei.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.huawei.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.huawei.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/native.huawei.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.huawei.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.huawei.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/native.huawei.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.huawei.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.huawei.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.huawei.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.huawei-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.huawei-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.huawei-onlydomains.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.huawei.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.huawei.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/native.huawei.txt) |
| Microsoft (Windows, Office, MSN) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.winoffice.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.winoffice.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/domains/native.winoffice.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.winoffice.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.winoffice.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/native.winoffice.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.winoffice.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.winoffice.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/native.winoffice.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.winoffice.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.winoffice.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/native.winoffice.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.winoffice.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.winoffice.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.winoffice.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.winoffice-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.winoffice-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.winoffice-onlydomains.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.winoffice.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.winoffice.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/native.winoffice.txt) |
| Samsung | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.samsung.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.samsung.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/domains/native.samsung.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.samsung.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.samsung.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/native.samsung.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.samsung.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.samsung.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/native.samsung.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.samsung.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.samsung.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/native.samsung.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.samsung.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.samsung.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.samsung.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.samsung-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.samsung-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.samsung-onlydomains.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.samsung.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.samsung.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/native.samsung.txt) |
| TikTok (Fingerprinting) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.tiktok.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.tiktok.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/domains/native.tiktok.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.tiktok.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.tiktok.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/native.tiktok.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.tiktok.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.tiktok.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/native.tiktok.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.tiktok.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.tiktok.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/native.tiktok.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.tiktok.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.tiktok.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.tiktok.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.tiktok-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.tiktok-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.tiktok-onlydomains.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.tiktok.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.tiktok.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/native.tiktok.txt) |
| TikTok (Fingerprinting) Aggressive | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.tiktok.extended.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.tiktok.extended.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/domains/native.tiktok.extended.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.tiktok.extended.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.tiktok.extended.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/native.tiktok.extended.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.tiktok.extended.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.tiktok.extended.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/native.tiktok.extended.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.tiktok.extended.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.tiktok.extended.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/native.tiktok.extended.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.tiktok.extended.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.tiktok.extended.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.tiktok.extended.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.tiktok.extended-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.tiktok.extended-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.tiktok.extended-onlydomains.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.tiktok.extended.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.tiktok.extended.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/native.tiktok.extended.txt) |
| LG webOS | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.lgwebos.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.lgwebos.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/domains/native.lgwebos.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.lgwebos.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.lgwebos.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/native.lgwebos.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.lgwebos.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.lgwebos.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/native.lgwebos.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.lgwebos.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.lgwebos.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/native.lgwebos.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.lgwebos.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.lgwebos.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.lgwebos.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.lgwebos-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.lgwebos-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.lgwebos-onlydomains.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.lgwebos.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.lgwebos.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/native.lgwebos.txt) |
| Roku | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.roku.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.roku.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/domains/native.roku.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.roku.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.roku.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/native.roku.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.roku.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.roku.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/native.roku.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.roku.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.roku.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/native.roku.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.roku.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.roku.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.roku.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.roku-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.roku-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.roku-onlydomains.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.roku.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.roku.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/native.roku.txt) |
| Vivo | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.vivo.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.vivo.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/domains/native.vivo.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.vivo.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.vivo.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/native.vivo.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.vivo.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.vivo.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/native.vivo.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.vivo.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.vivo.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/native.vivo.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.vivo.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.vivo.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.vivo.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.vivo-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.vivo-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.vivo-onlydomains.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.vivo.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.vivo.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/native.vivo.txt) |
| OPPO/Realme | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.oppo-realme.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.oppo-realme.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/domains/native.oppo-realme.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.oppo-realme.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.oppo-realme.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/native.oppo-realme.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.oppo-realme.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.oppo-realme.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/native.oppo-realme.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.oppo-realme.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.oppo-realme.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/native.oppo-realme.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.oppo-realme.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.oppo-realme.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.oppo-realme.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.oppo-realme-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.oppo-realme-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.oppo-realme-onlydomains.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.oppo-realme.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.oppo-realme.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/native.oppo-realme.txt) |
| Xiaomi | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.xiaomi.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.xiaomi.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/domains/native.xiaomi.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.xiaomi.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.xiaomi.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/hosts/native.xiaomi.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.xiaomi.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.xiaomi.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/adblock/native.xiaomi.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.xiaomi.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.xiaomi.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/dnsmasq/native.xiaomi.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.xiaomi.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.xiaomi.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.xiaomi.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.xiaomi-onlydomains.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.xiaomi-onlydomains.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/wildcard/native.xiaomi-onlydomains.txt) | [GH](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.xiaomi.txt) [GL](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.xiaomi.txt) [CB](https://codeberg.org/hagezi/mirror2/raw/branch/main/dns-blocklists/rpz/native.xiaomi.txt) |

---

### :bulb: **Recommendation** <a name="recommendation"></a>

As a network-wide DNS blocker, I recommend using [Adguard Home](https://adguard.com), [Pi-hole](https://pi-hole.net/), [TechnitiumDNS](https://technitium.com/dns/), [Blocky](https://github.com/0xERR0R/blocky) (advanced users), [adblock-lean](https://github.com/lynxthecat/adblock-lean) (OpenWrt) or [eBlocker](https://eblocker.org/).

DNS blockers offer good protection of privacy by blocking tracking, metrics and telemetry. They can be used to block the vast majority of ads, malware, scam, fake and co, but not everything can be blocked at the DNS level!
Therefore, I **additionally** recommend the use of a browser content blocker such as [AdGuard](https://adguard.com), [uBlock Origin](https://ublockorigin.com) or [Ghostery](https://www.ghostery.com/).

Check out Yokoffing's [Recommended Filters for uBlock Origin](https://github.com/yokoffing/filterlists) for content blocker filter lists.
For a browser recommendation see also Yokoffing's [I need a browser with ad blocking. Which one should I choose?](https://github.com/yokoffing/NextDNS-Config#i-need-a-browser-with-ad-blocking-which-one-should-i-choose)

> [!TIP]
> :information_desk_person: [Which version of the lists should I use?](https://github.com/hagezi/dns-blocklists/wiki/FAQ#whatshouldiuse)

---

### :department_store: **Online DNS Services** <a name="dnsservices"></a>

If you don't run your own DNS server on your home network or if you are looking for additional protection for your mobile devices when they are not connected to the home network, then you can use one of the following DNS services.

**Availability of the lists in the respective DNS services:** <a name="availablelists"></a>

| Service | Light | Nor<br>mal | Pro | Pro<br>++ | Ulti<br>mate | TIF | By<br>pass | Dyn<br>DNS | Hoster | TLDs | Anti<br>Piracy | Gam<br>bling |
| :----- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| AdGuard<br>DNS         | :x:            | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle:   | :green_circle:   | :green_circle: | :green_circle: | :green_circle:   | :green_circle:   |
| ControlD            | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :yellow_square:  | :yellow_square:  | :notebook:            | :notebook:            | :yellow_square:  | :yellow_square:  |
| NextDNS             | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :x:            | :yellow_square:              | :x:              | :x:            | :x:            | :x:              | :x:              |
| Rethink<br>DNS          | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :x:              | :green_circle:   | :green_circle: | :x:            | :x:              | :x:              |
| DNS<br>warden           | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :x:              | :x:              | :x:            | :x:            | :x:              | :x:              |

:yellow_square: Are included in the ControlD/NextDNS native lists of the respective category.                        
:notebook: Available as [ControlD folder](https://github.com/hagezi/dns-blocklists/tree/main/controld).

#### :department_store: **AdGuardDNS - limited free/paid** <a name="adguarddns"></a>

In [AdGuardDNS](https://adguard-dns.io) you can use my Multi Normal, Pro, Pro++, Ultimate, TIF, Gambling, Anti Piracy, DoH/VPN/TOR/Proxy Bypass, DynDNS, Badware Hoster, Most Abused TLDs list and the Allowlist Referral.

#### :department_store: **ControlD - free/paid** <a name="controld"></a>

In [ControlD](https://controld.com) you can use my Light, Normal, Pro, Pro++, Ultimate and TIF lists.

**Free:**

| Blocklists | DNS-over-HTTPS | DNS-over-TLS/QUIC | Legacy DNS | Apple |
|:-----------|:---------------|:-------------|:-------------|:---:|
| Light | `https://freedns.controld.com/x-hagezi-light` | `x-hagezi-light.freedns.controld.com` | 76.76.2.37<br>76.76.10.37<br>2606:1a40::37<br>2606:1a40:1::37 | [GH](https://api.controld.com/mobileconfig/x-hagezi-light?type=free&exclude_common=1) |
| Normal | `https://freedns.controld.com/x-hagezi-normal` | `x-hagezi-normal.freedns.controld.com` | 76.76.2.40<br>76.76.10.40<br>2606:1a40::40<br>2606:1a40:1::40 | [GH](https://api.controld.com/mobileconfig/x-hagezi-normal?type=free&exclude_common=1) |
| Pro | `https://freedns.controld.com/x-hagezi-pro` | `x-hagezi-pro.freedns.controld.com` | 76.76.2.41<br>76.76.10.41<br>2606:1a40::41<br>2606:1a40:1::41 | [GH](https://api.controld.com/mobileconfig/x-hagezi-pro?type=free&exclude_common=1) |
| Pro Plus | `https://freedns.controld.com/x-hagezi-proplus` | `x-hagezi-proplus.freedns.controld.com` | 76.76.2.42<br>76.76.10.42<br>2606:1a40::42<br>2606:1a40:1::42 | [GH](https://api.controld.com/mobileconfig/x-hagezi-proplus?type=free&exclude_common=1) |
| Ultimate | `https://freedns.controld.com/x-hagezi-ultimate` | `x-hagezi-ultimate.freedns.controld.com` | 76.76.2.45<br>76.76.10.45<br>2606:1a40::45<br>2606:1a40:1::45 | [GH](https://api.controld.com/mobileconfig/x-hagezi-ultimate?type=free&exclude_common=1) |
| TIF | `https://freedns.controld.com/x-hagezi-tif` | `x-hagezi-tif.freedns.controld.com` | 76.76.2.46<br>76.76.10.46<br>2606:1a40::46<br>2606:1a40:1::46 | [GH](https://api.controld.com/mobileconfig/x-hagezi-tif?type=free&exclude_common=1) |

**Paid:**

Check out Yokoffing's [ControlD Config Guide](https://github.com/yokoffing/Control-D-Config) for recommended [ControlD](https://controld.com) configuration settings.

#### :department_store: **NextDNS - limited free/paid** <a name="nextdns"></a>

In [NextDNS](https://nextdns.io) you can use my Light, Normal, Pro, Pro++ and Ultimate lists.

Check out Yokoffing's [NextDNS Config Guide](https://github.com/yokoffing/NextDNS-Config) and the Techlore Video [The ULTIMATE Guide to Mastering NextDNS!](https://youtu.be/WUG57ynLb8I) for recommended [NextDNS](https://nextdns.io) configuration settings.

#### :department_store: **RethinkDNS - free** <a name="rethinkdns"></a>

In [RethinkDNS](https://rethinkdns.com) you can use my Light, Normal, Pro, Pro++, Ultimate, TIF, DynDNS and Badware Hoster lists.

> [!NOTE]
> The lists in RethinkDNS are only updated once a week.

| Blocklists | DNS-over-HTTPS | DNS-over-TLS/QUIC |
|:-----------|:---------------|:-------------|
| Light + TIF | `https://sky.rethinkdns.com/1:AAkACAQA` | `1-aaeqacaeaa.max.rethinkdns.com` |
| Normal + TIF | `https://sky.rethinkdns.com/1:AAkACAgA` | `1-aaeqacaiaa.max.rethinkdns.com` |
| Pro + TIF  | `https://sky.rethinkdns.com/1:AAoACBAA` | `1-aafaacaqaa.max.rethinkdns.com` |
| Pro plus + TIF | `https://sky.rethinkdns.com/1:AAoACAgA` | `1-aafaacaiaa.max.rethinkdns.com` |
| Ultimate + TIF | `https://sky.rethinkdns.com/1:gAgACABA` | `1-qaeaacaaia.max.rethinkdns.com` |

#### :department_store: **DNSwarden - free** <a name="dnswarden"></a>

In [DNSwarden](https://dnswarden.com/customfilter.html) you can use my Light, Normal, Pro, Pro++, Ultimate and TIF lists.

| Blocklists | DNS-over-HTTPS | DNS-over-TLS/QUIC |
|:-----------|:---------------|:------------------|
| Light + TIF | `https://dns.dnswarden.com/00000000000000000000048` | `00000000000000000000048.dns.dnswarden.com` |
| Normal + TIF | `https://dns.dnswarden.com/00000000000000000000028` | `00000000000000000000028.dns.dnswarden.com` |
| Pro + TIF  | `https://dns.dnswarden.com/00000000000000000000018` | `00000000000000000000018.dns.dnswarden.com` |
| Pro plus + TIF | `https://dns.dnswarden.com/0000000000000000000000o` | `0000000000000000000000o.dns.dnswarden.com` |
| Ultimate + TIF | `https://dns.dnswarden.com/0000000000000000000000804` | `0000000000000000000000804.dns.dnswarden.com` |

#### :department_store: **SCHONET DNS (Germany) - free** <a name="schonetdns"></a>

[SCHONET DNS (Germany)](https://schonet-dns.de/) uses my Multi Pro++ in combination with the TIF blocklist and [@xRuffKez](https://github.com/xRuffKez/NRD) NRD 30.

| Blocklists | DNS-over-HTTPS | DNS-over-TLS/QUIC | Legacy DNS |
|:-----------|:---------------|:------------------|:-----------|
| Pro plus + TIF + NRD | `https://schonet-dns.de/dns-query` | `schonet-dns.de` | 89.163.255.195<br>2001:4ba0:babe:3734:: |

#### :department_store: **OpenBLD.net - free** <a name="openbld"></a>

[OpenBLD.net](https://openbld.net/docs/get-started/third-party-filters/hagezi/) uses my Multi Pro in combination with the TIF blocklist.

| Blocklists | DNS-over-HTTPS | 
|:-----------|:---------------|
| Pro + TIF  | `https://ric.openbld.net/dns-query/hagezi` |

#### :department_store: **RobinGroppe.de (Germany) - free** <a name="robingroppe"></a>

[RobinGroppe.de DNS](https://www.robingroppe.de/serverzeug/dns-server) offers a free German DNS server without logging to block malware, phishing and other threats. It uses my TIF list.

---

### :loudspeaker: **About** <a name="about"></a>

<p align="center"><a href="https://github.com/hagezi/dns-blocklists/graphs/contributors"><img src="https://contrib.rocks/image?repo=hagezi/dns-blocklists&max=1" /></a></p>
<p align="center"><i><b>"If the plan doesn‘t work, change the plan but never the goal."<br>There's no place like 127.0.0.1!</b></i></p>

The blocklists are based on [various sources](sources.md) and my own denylists/extensions. They were designed to avoid false positive domains as much as possible without losing effectiveness and efficiency. Dead hosts are regularly removed from the lists to keep them as small as possible.
Made with :heartbeat: for a safer and cleaner internet.

All lists were tested against 10000 websites from the Cisco Umbrella Top 1 million list. It was checked whether the pages load, the page content is displayed correctly, navigation links work, images load, videos start and much more.

No, they are not just block lists cobbled together from different sources. They have been optimized and extended to efficiently "clean the Internet" in all areas. See also: [Which sources are used for the lists and how are the lists compiled on the basis of these sources?](https://github.com/hagezi/dns-blocklists/wiki/FAQ#sources)

The results of a test against the 10000 [whotracks.me](https://whotracks.me/websites.html) pages. All pages were opened and fully loaded via batch in Edge with privacy features turned off. Cookies were all accepted.

| **List**     | Total queries | Blocked queries | % blocked | % gap to light |
|-------------:|--------------:|----------------:|----------:|---------------:|
| **Ultimate** | 299646        | 131093          | 43.75     | 12.85          |
| **Pro++**    | 299646        | 119681          | 39.94     | 9.05           |
| **Pro**      | 299646        | 97508           | 32.54     | 1.65           |
| **Normal**   | 299646        | 93258           | 31.12     | 0.23           |
| **Light**    | 299646        | 92576           | 30.90     |                |
| **----**     | 299646        | 67888           | 22.66     | -8.24          |

Test them, give feedback and [report blockable or incorrectly blocked](https://github.com/hagezi/dns-blocklists/issues) domains.

#### :octocat: Repository <a name="repository"></a>

The repository is occasionally compressed (reinitialised) to reduce the overall size. Among other things, this invalidates forks and cleans up the commit history.

#### :cyclone: Referral Domains <a name="referral"></a>

[Why are referral domains (affiliate and tracking links) not blocked in the lists?](https://github.com/hagezi/dns-blocklists/wiki/FAQ#referral)

#### :dizzy: Support Me <a name="support"></a>

If you like the project and you can benefit from it, leave a :star: (top right) and become a [stargazer](https://github.com/hagezi/dns-blocklists/stargazers)!

Give feedback, show me your ideas, report domains to be blocked, report false positive domains and help to keep the internet safe and clean.
Help and cooperation of any kind are welcome!

**Thanks for your support!**

---

### :stars: Stargazers <a name="stargazers"></a>

[![Star History Chart](https://api.star-history.com/svg?repos=hagezi/dns-blocklists&type=Date)](https://star-history.com/#hagezi/dns-blocklists&Date)

---

### **Keep the internet clean!**

---

[![https://gafam.info](https://ptrace.gafam.info/unofficial/img/color/lqdn-gafam-poster-en-color-5x1-2560x.png)](https://gafam.info)

---
