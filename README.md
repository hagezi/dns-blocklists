![GitHub last commit](https://img.shields.io/github/last-commit/hagezi/dns-blocklists)![GitHub issues](https://img.shields.io/github/issues/hagezi/dns-blocklists)![GitHub closed issues](https://img.shields.io/github/issues-closed/hagezi/dns-blocklists)![GitHub repo size](https://img.shields.io/github/repo-size/hagezi/dns-blocklists)[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fhagezi%2Fdns-blocklists&count_bg=%23754400&title_bg=%235F5F5F&icon=awesomelists.svg&icon_color=%23E7E7E7&title=visitors&edge_flat=false)](https://github.com/hagezi/dns-blocklists)[![shields.io Stars](https://img.shields.io/github/stars/hagezi/dns-blocklists)](https://github.com/hagezi/dns-blocklists/stargazers)

## :zap: DNS Blocklists - *For a better internet!*

### *Made with :heartbeat: for a safer and cleaner internet! It always seems impossible until it’s done.*

*Privacy is not a crime, protect yourself. Privacy matters. Privacy is what allows us to determine who we are and who we want to be :bangbang:*

*If you like the project and you can benefit from it, leave a :star: (top right) and become a [stargazer](https://github.com/hagezi/dns-blocklists/stargazers)! Thanks for your support!*

---

### :bookmark_tabs: Table of Contents

1. [Overview](#overview)
2. [Multi light](#light) - *Hand brush: Light protection*
3. [Multi normal](#normal) - *Broom: All-round protection*
4. [Multi pro](#pro) - *Big broom: Extended protection (Recommended)* : [Full](#pro) - [Mini](#promini)
5. [Multi pro++](#proplus) - *Sweeper: Maximum protection (more aggressive)* : [Full](#proplus) - [Mini](#proplusmini)
6. [Multi ultimate](#ultimate) - *Ultimate Sweeper: Aggressive protection* : [Full](#ultimate) - [Mini](#ultimatemini)
7. [Fake](#fake) - *Protects against internet scams, traps & fakes!*
8. [Pop-Up Ads](#popupads) - *Protects against annoying and malicious pop-up ads!*
9. [Threat Intelligence Feeds](#tif) - *Increases security significantly! (Recommended)* : [Full](#tif) - [Medium](#tifmedium) - [IPs](#tifips)
10. [Newly Registered Domains](#nrd) - *Favoured by threat actors to launch malicious campaigns!* : [14 days](#nrd14) - [30 days](#nrd30)
11. [DoH/VPN/TOR/Proxy Bypass](#bypass) - *Prevent methods to bypass your DNS!* : [Full](#bypass_all) - [DoH only](#bypass_dns) - [DoH IPs](#bypass_ips)
12. [Safesearch not supported](#safesearch) - *Prevent the use of search engines that do not support Safesearch!*
13. [Dynamic DNS](#dyndns) - *Protects against the malicious use of dynamic DNS services!*
14. [Badware Hoster](#hoster) - *Protects against the malicious use of free host services!*
15. [Most Abused TLDs](#tlds) - *Protects against known malicious Top Level Domains!*
16. [Anti Piracy](#piracy) - *Protects against piracy!*
17. [Gambling](#gambling) - *Protects against gambling content!*
18. [NSFW (external)](https://oisd.nl/setup) - *oisd NSFW - Protects against adult content!*
19. [Native Tracker](#native) - *Broadband tracker of devices, services and operating systems*
20. [Supporter](https://github.com/hagezi/dns-blocklists/stargazers) - *Leave a star (top right)!*
21. [Recommendation](#recommendation) - [Which version of the lists should I use?](#whatshouldiuse)
22. [Online DNS Services](#dnsservices)
23. [About](#about) : [Contact](#contact) - [Groups](#groups) - [Repository](#repository) - [Referral Domains](#referral) - [Support Me](#support)
24. [Statistics](statistics.md) - [Sources](sources.md)
25. [FAQ](https://github.com/hagezi/dns-blocklists/wiki/FAQ) - Frequently Asked Questions

### :books: ***Multi - Cleans the Internet and protects your privacy!*** <a name="overview"></a>

*An all-in-one DNS blocklist in **various versions (light, normal, pro, pro++ and ultimate)**. It can be used as a standalone blocklist. For every region. Blocks ads, affiliate, tracking, metrics, telemetry, fake, phishing, malware, scam, coins and other "crap". Based on [various native blocklists](sources.md). No, they are not just block lists cobbled together from different sources. They have been optimized and extended to efficiently "clean the Internet" in all areas.*             

*See also: [Which sources are used for the lists and how are the lists compiled on the basis of these sources?](https://github.com/hagezi/dns-blocklists/wiki/FAQ#sources)*

#### ***Blocklist version and size overview:***

| Version | Entries | Pro++ | Pro | Nor<br>mal | Light | [Fake](#fake) | [TIF](#tif) | [Nat<br>ive](#native) | [PopUp<br>Ads](#popupads) | Bug<br>Tracker |
|:--------|---:|:------:|:-----:|:----:|:----:|:---:|:------:|:----------:|:----:|:----:|
| :green_book:[Light](#light)             | 136375<br>67308     |  |   |   | :green_circle:  |  | |  :yellow_square: | | |
| :blue_book:[Normal](#normal)       | 428658<br>138762     |  |   | :green_circle: | :green_circle: |  | :yellow_square: | :yellow_square: | :yellow_square: | |
| :ledger:[Pro](#pro)              | 487880<br>155570         |  | :green_circle: | :green_circle: | :green_circle: |  | :yellow_square: | :yellow_square: | :yellow_square: | :green_circle: |
| :orange_book:[Pro++](#proplus)    | 589707<br>180833 | :green_circle: | :green_circle: | :green_circle: | :green_circle: |  |:yellow_square: | :yellow_square: | :yellow_square: | :green_circle: |
| :closed_book:[Ultimate](#ultimate)    | 635341<br>192685 | :green_circle: | :green_circle: | :green_circle: | :green_circle: |  | :yellow_square: | :green_circle: | :yellow_square: | :green_circle: |

:green_circle: contains the list named in the column caption
:yellow_square: partially contains the list named in the column caption

#### ***Blocking level:***

| Version | Blocking<br>level | Blocking<br>type |
|:--------|:---------------|:--------------|
| :green_book:[Light](#light)        | :green_book::green_book:                                                                    | Relaxed             |
| :blue_book:[Normal](#normal)       | :blue_book::blue_book::blue_book:                                                           | Relaxed/Balanced    |
| :ledger:[Pro](#pro)                | :ledger::ledger::ledger::ledger:                                                            | Balanced            |
| :orange_book:[Pro++](#proplus)     | :orange_book::orange_book::orange_book::orange_book::orange_book::orange_book:              | Balanced/Aggressive |
| :closed_book:[Ultimate](#ultimate) | :closed_book::closed_book::closed_book::closed_book::closed_book::closed_book::closed_book: | Aggressive |

> [!TIP]
> ***For a recommendation, see:*** *[Which version of the lists should I use?](https://github.com/hagezi/dns-blocklists/wiki/FAQ#whatshouldiuse)*

---

### :green_book: ***Multi LIGHT*** - **Basic protection** <a name="light"></a>

*Hand brush - Cleans the Internet and protects your privacy! Blocks Ads, Tracking, Metrics and some Badware. A size-optimized version of the Multi NORMAL.*

> [!NOTE]
> *Does not block error trackers such as Bugsnag, Crashlytics, Firebase, Instabug, Sentry, ... and other app-specific crash trackers. These are only blocked from the Pro version onwards.*

**Entries:** *136375 domains/hosts - 67308 compressed domains*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/light.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/light.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/light.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/hosts/light.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/light.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/light.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard, Hostfile, Windows |
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/light.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/light.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/light.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam, Little Snitch Mini |
| Unbound | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/light.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/light.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/light.blacklist.conf) | Unbound |
| DNSMasq<br>v2.85- | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/light-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/light-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/light-old.txt) | DNSMasq (v2.85 or older) |
| DNSMasq<br>v2.86+ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/light.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/light.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/light.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/light.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/light.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/light.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/light-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/light-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/light-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/light.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/light.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/light.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ |
| PAC | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/pac/light.pac) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/pac/light.pac) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/pac/light.pac) | Proxy Auto Configuration |

### :blue_book: ***Multi NORMAL*** - **All-round protection** <a name="normal"></a>

*Broom - Cleans the Internet and protects your privacy! Blocks Ads, Affiliate, Tracking, Metrics, Telemetry, Phishing, Malware, Scam, Fake, Coins and other "Crap".*

> [!NOTE]
> *Does not block error trackers such as Bugsnag, Crashlytics, Firebase, Instabug, Sentry, ... and other app-specific crash trackers. These are only blocked from the Pro version onwards.*

**Entries:** *428658 domains/hosts - 138762 compressed domains*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/multi.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/multi.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/multi.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/hosts/multi.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/multi.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/multi.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard, Hostfile |
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/multi.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/multi.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/multi.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam, Little Snitch Mini |
| Unbound | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/multi.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/multi.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/multi.blacklist.conf) | Unbound |
| DNSMasq<br>v2.85- | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/multi-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/multi-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/multi-old.txt) | DNSMasq (v2.85 or older) |
| DNSMasq<br>v2.86+ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/multi.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/multi.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/multi.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/multi.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/multi.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/multi.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/multi-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/multi-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/multi-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/multi.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/multi.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/multi.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ |

### :ledger: ***Multi PRO*** - **Extended protection (Recommended)** <a name="pro"></a>

*Big broom - Cleans the Internet and protects your privacy! Blocks Ads, Affiliate, Tracking, Metrics, Telemetry, Phishing, Malware, Scam, Fake, Coins and other "Crap".*

**Entries:** *487880 domains/hosts - 155570 compressed domains*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/pro.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/pro.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/pro.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/hosts/pro.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/pro.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/pro.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard, Hostfile |
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/pro.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/pro.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/pro.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam, Little Snitch Mini |
| Unbound | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/pro.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/pro.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/pro.blacklist.conf) | Unbound |
| DNSMasq<br>v2.85- | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/pro-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/pro-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/pro-old.txt) | DNSMasq (v2.85 or older) |
| DNSMasq<br>v2.86+ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/pro.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/pro.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/pro.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/pro.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/pro.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/pro-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/pro-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/pro.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/pro.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/pro.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ |

#### :ledger: ***Multi PRO mini*** <a name="promini"></a>

*Size-optimised version for DNS/Browser adblockers. This list only contains domains from the Pro full that have been found on Top 1M lists (Umbrella, Cloudflare, Tranco, Chrome, ...) in the last 12 months.*

**Entries:** *81470 compressed domains*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/pro.mini.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/pro.mini.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/pro.mini.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam, Little Snitch Mini |
| Unbound | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/pro.mini.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/pro.mini.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/pro.mini.blacklist.conf) | Unbound |
| DNSMasq<br>v2.85- | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/pro.mini-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/pro.mini-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/pro.mini-old.txt) | DNSMasq (v2.85 or older) |
| DNSMasq<br>v2.86+ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/pro.mini.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/pro.mini.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/pro.mini.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro.mini.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/pro.mini.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/pro.mini.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro.mini-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/pro.mini-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/pro.mini-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/pro.mini.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/pro.mini.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/pro.mini.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ |

### :orange_book: ***Multi PRO++*** - **Maximum protection** <a name="proplus"></a>

*Sweeper - Aggressive cleans the Internet and protects your privacy! Blocks Ads, Affiliate, Tracking, Metrics, Telemetry, Phishing, Malware, Scam, Fake, Coins and other "Crap".*

> [!NOTE]
> *More aggressive version of the Multi PRO blocklist. It may contain a few false positive domains that limit functionality. Therefore it should only be used by experienced users. Furthermore, an admin should be available to unblock incorrectly blocked domains. Reported false positive domains will be removed from the list!*

**Entries:** *589707 domains/hosts - 180833 compressed domains*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/pro.plus.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/pro.plus.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/pro.plus.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/hosts/pro.plus.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/pro.plus.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/pro.plus.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard, Hostfile |
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/pro.plus.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/pro.plus.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/pro.plus.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam, Little Snitch Mini |
| Unbound | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/pro.plus.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/pro.plus.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/pro.plus.blacklist.conf) | Unbound |
| DNSMasq<br>v2.85- | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/pro.plus-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/pro.plus-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/pro.plus-old.txt) | DNSMasq (v2.85 or older) |
| DNSMasq<br>v2.86+ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/pro.plus.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/pro.plus.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/pro.plus.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro.plus.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/pro.plus.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/pro.plus.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro.plus-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/pro.plus-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/pro.plus-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/pro.plus.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/pro.plus.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/pro.plus.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ |

#### :orange_book: ***Multi PRO++ mini*** <a name="proplusmini"></a>

*Size-optimised version for DNS/Browser adblockers. This list only contains domains from the Pro++ full that have been found on Top 1M lists (Umbrella, Cloudflare, Tranco, Chrome, ...) in the last 12 months.*

**Entries:** *95852 compressed domains*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/pro.plus.mini.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/pro.plus.mini.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/pro.plus.mini.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam, Little Snitch Mini |
| Unbound | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/pro.plus.mini.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/pro.plus.mini.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/pro.plus.mini.blacklist.conf) | Unbound |
| DNSMasq<br>v2.85- | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/pro.plus.mini-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/pro.plus.mini-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/pro.plus.mini-old.txt) | DNSMasq (v2.85 or older) |
| DNSMasq<br>v2.86+ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/pro.plus.mini.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/pro.plus.mini.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/pro.plus.mini.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro.plus.mini.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/pro.plus.mini.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/pro.plus.mini.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro.plus.mini-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/pro.plus.mini-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/pro.plus.mini-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/pro.plus.mini.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/pro.plus.mini.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/pro.plus.mini.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ |

### :closed_book: ***Multi ULTIMATE*** - **Aggressive protection** <a name="ultimate"></a>

*Ultimate Sweeper - Strictly cleans the Internet and protects your privacy! Blocks Ads, Affiliate, Tracking, Metrics, Telemetry, Phishing, Malware, Scam, Free Hoster, Fake, Coins and other "Crap".*

> [!NOTE]
> *Stricter version of the Multi PRO++ blocklist. It may contain false positive domains that limit functionality. Therefore it should only be used by experienced users. Furthermore, an admin should be available to unblock incorrectly blocked domains. Reported false positive domains will be removed from the list!*

> [!WARNING]
> *META trackers are blocked in Ultimate. This restricts the use of Facebook and Facebook Messenger apps. Furthermore, the Whatsapp graph trackers are blocked, which leads to restrictions when creating avatars and using the in-app helpcenter. Otherwise, blocking has no effect on Whatsapp functionalities. To use META apps with Ultimate, unblock the following domains if necessary: [META Tracker](share/facebook.txt)*

**Entries:** *635341 domains/hosts - 192685 compressed domains*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/ultimate.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/ultimate.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/ultimate.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/hosts/ultimate.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/ultimate.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/ultimate.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard, Hostfile |
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/ultimate.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/ultimate.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/ultimate.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam, Little Snitch Mini |
| Unbound | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/ultimate.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/ultimate.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/ultimate.blacklist.conf) | Unbound |
| DNSMasq<br>v2.85- | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/ultimate-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/ultimate-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/ultimate-old.txt) | DNSMasq (v2.85 or older) |
| DNSMasq<br>v2.86+ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/ultimate.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/ultimate.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/ultimate.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/ultimate.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/ultimate.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/ultimate.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/ultimate-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/ultimate-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/ultimate-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/ultimate.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/ultimate.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/ultimate.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ |

#### :closed_book: ***Multi ULTIMATE mini*** <a name="ultimatemini"></a>

*Size-optimised version for DNS/Browser adblockers. This list only contains domains from the Ultimate full that have been found on Top 1M lists (Umbrella, Cloudflare, Tranco, Chrome, ...) in the last 12 months.*

**Entries:** *104113 compressed domains*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/ultimate.mini.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/ultimate.mini.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/ultimate.mini.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam, Little Snitch Mini |
| Unbound | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/ultimate.mini.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/ultimate.mini.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/ultimate.mini.blacklist.conf) | Unbound |
| DNSMasq<br>v2.85- | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/ultimate.mini-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/ultimate.mini-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/ultimate.mini-old.txt) | DNSMasq (v2.85 or older) |
| DNSMasq<br>v2.86+ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/ultimate.mini.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/ultimate.mini.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/ultimate.mini.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/ultimate.mini.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/ultimate.mini.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/ultimate.mini.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/ultimate.mini-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/ultimate.mini-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/ultimate.mini-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/ultimate.mini.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/ultimate.mini.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/ultimate.mini.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ |

**Expires:** *24 hours (update frequency)*

---

### :trollface: ***Fake - Protects against internet scams, traps & fakes!*** <a name="fake"></a>

*A blocklist for blocking fake stores, -streaming, rip-offs, cost traps and co.*

|             | Light | Normal          | Pro            | Pro++          | Ultimate       | TIF<br>TIF medium |
|:-----------:|:-----:|:---------------:|:--------------:|:--------------:|:--------------:|:--------------:|
| Included in | :x:   | :x: | :x: | :x: | :x: | :green_circle: |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** *30477 compressed domains*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/fake.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/fake.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/fake.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam, Little Snitch Mini |
| Unbound | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/fake.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/fake.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/fake.blacklist.conf) | Unbound |
| DNSMasq<br>v2.85- | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/fake-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/fake-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/fake-old.txt) | DNSMasq (v2.85 or older) |
| DNSMasq<br>v2.86+ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/fake.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/fake.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/fake.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/fake.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/fake.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/fake.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/fake-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/fake-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/fake-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/fake.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/fake.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/fake.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ |

**Expires:** *Updated regularly*

---

### :tada: ***Pop-Up Ads - Protects against annoying and malicious pop-up ads!*** <a name="popupads"></a>

*A blocklist for annoying and malicious blocking pop-up ads.*

|             | Light          | Normal         | Pro            | Pro++          | Ultimate       | TIF      |
|:-----------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------:|
| Included in | :x: | :yellow_square: | :yellow_square: | :yellow_square: | :yellow_square: | :yellow_square: |

:green_circle: yes :yellow_square: partially :x: no

> [!NOTE]
> *In the combination of the Pro or higher and additionally the Threat Intelligence Feeds (TIF), all domains from the Pop-Up Ads list are included. This means that if you use the Pro or higher and also the TIF full, you no longer need to add this list separately.*

**Entries:** *80705 compressed domains*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/popupads.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/popupads.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/popupads.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam, Little Snitch Mini |
| Unbound | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/popupads.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/popupads.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/popupads.blacklist.conf) | Unbound |
| DNSMasq<br>v2.85- | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/popupads-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/popupads-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/popupads-old.txt) | DNSMasq (v2.85 or older) |
| DNSMasq<br>v2.86+ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/popupads.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/popupads.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/popupads.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/popupads.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/popupads.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/popupads.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/popupads-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/popupads-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/popupads-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/popupads.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/popupads.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/popupads.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ |

**Expires:** *24 hours (update frequency)*

---

### :closed_lock_with_key: ***Threat Intelligence Feeds - Increases security significantly! (Recommended)*** <a name="tif"></a>

*A blocklist for blocking malware, cryptojacking, scam, spam and phishing. Blocks domains known to spread malware, launch phishing attacks and host command-and-control servers.*

|             | Light           | Normal          | Pro             | Pro++           | Ultimate        |
|:-----------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|
| Included in | :x: | :yellow_square: | :yellow_square: | :yellow_square: | :yellow_square: |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** *1236971 domains/hosts - 715998 compressed domains*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/tif.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/tif.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/tif.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/hosts/tif.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/tif.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/tif.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard, Hostfile |
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/tif.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/tif.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/tif.txt) | Pi-hole, ~~AdGuard~~ (too big!), AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam |
| Unbound | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/tif.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/tif.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/tif.blacklist.conf) | Unbound |
| DNSMasq<br>v2.85- | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/tif-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/tif-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/tif-old.txt) | DNSMasq (v2.85 or older) |
| DNSMasq<br>v2.86+ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/tif.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/tif.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/tif.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/tif.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/tif.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/tif.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/tif-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/tif-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/tif-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/tif.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/tif.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/tif.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ |

#### :closed_lock_with_key: ***Threat Intelligence Feeds - Medium version*** <a name="tifmedium"></a>

*A medium version of the Threat Intelligence Feeds list. Designed for Adblockers that have problems with the size of the full TIF list. Contains only important feeds.*

|             | Light           | Normal          | Pro             | Pro++           | Ultimate        |
|:-----------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|
| Included in | :x: | :yellow_square: | :yellow_square: | :yellow_square: | :yellow_square: |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** *177412 compressed domains*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/tif.medium.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/tif.medium.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/tif.medium.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam, Little Snitch Mini |
| Unbound | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/tif.medium.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/tif.medium.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/tif.medium.blacklist.conf) | Unbound |
| DNSMasq<br>v2.85- | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/tif.medium-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/tif.medium-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/tif.medium-old.txt) | DNSMasq (v2.85 or older) |
| DNSMasq<br>v2.86+ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/tif.medium.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/tif.medium.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/tif.medium.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/tif.medium.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/tif.medium.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/tif.medium.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/tif.medium-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/tif.medium-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/tif.medium-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/tif.medium.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/tif.medium.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/tif.medium.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ |

#### :closed_lock_with_key: ***Threat Intelligence Feeds - IPs*** <a name="tifips"></a>

*IPv4 lists in [plain IP format](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/ips/tif.txt) for firewalls and [AdGuard Home format](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/tif-ips.txt) are also available as an extension to the TIF list.*

> [!TIP]
> *If the IP list is used in AdGuard Home, all domains that would resolve to the blocked IP are blocked. To prevent the blocked domains from being resolved via IPv6, it is necessary to deactivate resolving via IPv6 in AdGuard Home:*                        
> `Settings > DNS settings > DNS server configuration > Disable resolving of IPv6 addresses`

**Expires:** *24 hours (update frequency)*

---

### :new: ***Newly Registered Domains (NRDs)*** <a name="nrd"></a>

*A blocklist for blocking domains registered in the last 14 or 30 days. These domains are known to be favoured by threat actors to launch malicious campaigns.*

> [!IMPORTANT]
> *This is an external list that is created and maintained by [@xRuffKez](https://github.com/xRuffKez). Please address requests directly to the maintainer in the [corresponding repository](https://github.com/xRuffKez/NRD).*

> [!NOTE]
> *It may contain a few false positive domains that limit functionality. Therefore it should only be used by experienced users. Furthermore, an admin should be available to unblock incorrectly blocked domains.*

|             | Light           | Normal          | Pro             | Pro++           | Ultimate        | TIF   |
|:-----------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:| :---: |
| Included in | :x: | :x: | :x: | :x: | :x: | :yellow_square: |

:green_circle: yes :yellow_square: partially :x: no

#### :new: ***Domains registered in the last 14 days*** <a name="nrd14"></a>

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](https://raw.githubusercontent.com/xRuffKez/NRD/main/nrd-14day_adblock.txt) | Pi-hole, ~~AdGuard~~ (too big!), AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam |
| Wildcard<br>Asterisk | [Link](https://raw.githubusercontent.com/xRuffKez/NRD/main/nrd-14day_wildcard.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://raw.githubusercontent.com/xRuffKez/NRD/main/nrd-14day.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |

#### :new: ***Domains registered in the last 30 days*** <a name="nrd30"></a>

> [!IMPORTANT]
> *The 30-day list has been divided into two parts in order not to exceed the maximum size for files on Github. Both parts must be used.*

> [!WARNING]
> *The total size of the list can lead to problems in some Adblockers. If this is the case, use the 14-day version of the list.*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Part1](https://raw.githubusercontent.com/xRuffKez/NRD/main/nrd-30day_adblock_part1.txt) [Part2](https://raw.githubusercontent.com/xRuffKez/NRD/main/nrd-30day_adblock_part2.txt) | Pi-hole, ~~AdGuard~~ (too big!), AdGuard Home (can lead to problems due to the size!), eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam |
| Wildcard<br>Asterisk | [Part1](https://raw.githubusercontent.com/xRuffKez/NRD/main/nrd-30day_wildcard_part1.txt) [Part2](https://raw.githubusercontent.com/xRuffKez/NRD/main/nrd-30day_wildcard_part2.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Part1](https://raw.githubusercontent.com/xRuffKez/NRD/main/nrd-30day_part1.txt) [Part2](https://raw.githubusercontent.com/xRuffKez/NRD/main/nrd-30day_part2.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |

**Expires:** *24 hours (update frequency)*

---

### :outbox_tray: ***DoH/VPN/TOR/Proxy Bypass - Prevent methods to bypass your DNS!*** <a name="bypass"></a>

*Prevent methods to bypass your DNS.*

> [!NOTE]
> *To ensure the bootstrap is your DNS server you must redirect or block standard DNS outbound (TCP/UDP 53) and block all DNS over TLS (TCP 853) outbound.*

***The block list exists in two versions:***

#### ***Complete Edition - Encrypted DNS Servers, VPN, TOR, Proxies*** <a name="bypass_all"></a>

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** *3102 compressed domains*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/doh-vpn-proxy-bypass.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/doh-vpn-proxy-bypass.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/doh-vpn-proxy-bypass.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam, Little Snitch Mini |
| Unbound | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/doh-vpn-proxy-bypass.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/doh-vpn-proxy-bypass.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/doh-vpn-proxy-bypass.blacklist.conf) | Unbound |
| DNSMasq<br>v2.85- | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/doh-vpn-proxy-bypass-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/doh-vpn-proxy-bypass-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/doh-vpn-proxy-bypass-old.txt) | DNSMasq (v2.85 or older) |
| DNSMasq<br>v2.86+ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/doh-vpn-proxy-bypass.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/doh-vpn-proxy-bypass.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/doh-vpn-proxy-bypass.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/doh-vpn-proxy-bypass.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/doh-vpn-proxy-bypass.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/doh-vpn-proxy-bypass.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/doh-vpn-proxy-bypass-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/doh-vpn-proxy-bypass-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/doh-vpn-proxy-bypass-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/doh-vpn-proxy-bypass.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/doh-vpn-proxy-bypass.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/doh-vpn-proxy-bypass.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ |

**Expires:** *Updated regularly*

#### :outbox_tray: ***Encrypted DNS Servers only*** <a name="bypass_dns"></a>

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** *1215 domains/hosts - 1059 compressed domains*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/doh.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/doh.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/doh.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/hosts/doh.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/doh.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/doh.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard, Hostfile |
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/doh.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/doh.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/doh.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam, Little Snitch Mini |
| Unbound | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/doh.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/doh.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/doh.blacklist.conf) | Unbound |
| DNSMasq<br>v2.85- | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/doh-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/doh-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/doh-old.txt) | DNSMasq (v2.85 or older) |
| DNSMasq<br>v2.86+ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/doh.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/doh.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/doh.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/doh.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/doh.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/doh.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/doh-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/doh-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/doh-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/doh.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/doh.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/doh.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ |

**Expires:** *Updated regularly*

#### :outbox_tray: ***Encrypted DNS Servers IPs*** <a name="bypass_ips"></a>

*IPv4 lists in [plain IP format](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/ips/doh.txt) for firewalls and [AdGuard Home format](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/doh-ips.txt) are also available.*

> [!TIP]
> *If the IP list is used in AdGuard Home, all domains that would resolve to the blocked IP are blocked. To prevent the blocked domains from being resolved via IPv6, it is necessary to deactivate resolving via IPv6 in AdGuard Home:*                   
> `Settings > DNS settings > DNS server configuration > Disable resolving of IPv6 addresses`

**Expires:** *Updated regularly*

---

### :mag: ***Safesearch not supported - Prevent the use of search engines that do not support Safesearch!*** <a name="safesearch"></a>

*A blocklist for blocking search engines that do not support Safesearch.*

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** *215 compressed domains*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/nosafesearch.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/nosafesearch.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/nosafesearch.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam, Little Snitch Mini |
| Unbound | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/nosafesearch.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/nosafesearch.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/nosafesearch.blacklist.conf) | Unbound |
| DNSMasq<br>v2.85- | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/nosafesearch-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/nosafesearch-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/nosafesearch-old.txt) | DNSMasq (v2.85 or older) |
| DNSMasq<br>v2.86+ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/nosafesearch.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/nosafesearch.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/nosafesearch.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/nosafesearch.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/nosafesearch.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/nosafesearch.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/nosafesearch-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/nosafesearch-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/nosafesearch-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/nosafesearch.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/nosafesearch.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/nosafesearch.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ |

**Expires:** *Updated regularly*

---

### :lock_with_ink_pen: ***Dynamic DNS blocking - Protects against the malicious use of dynamic DNS services!*** <a name="dyndns"></a>

*A blocklist for blocking dynamic DNS services to protect against malicious use in phishing campaigns and others.*

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** *1446 compressed domains*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/dyndns.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/dyndns.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/dyndns.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam, Little Snitch Mini |
| Unbound | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/dyndns.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/dyndns.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/dyndns.blacklist.conf) | Unbound |
| DNSMasq<br>v2.85- | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/dyndns-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/dyndns-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/dyndns-old.txt) | DNSMasq (v2.85 or older) |
| DNSMasq<br>v2.86+ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/dyndns.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/dyndns.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/dyndns.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/dyndns.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/dyndns.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/dyndns.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/dyndns-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/dyndns-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/dyndns-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/dyndns.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/dyndns.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/dyndns.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ |

**Expires:** *Updated regularly*

---

### :computer: ***Badware Hoster blocking - Protects against the malicious use of free host services!*** <a name="hoster"></a>

*A blocklist for blocking known free hosters that also host badware via user content to prevent the use of these hosters for malicious purposes.*

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** *1815 compressed domains*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/hoster.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/hoster.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/hoster.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam, Little Snitch Mini |
| Unbound | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/hoster.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/hoster.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/hoster.blacklist.conf) | Unbound |
| DNSMasq<br>v2.85- | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/hoster-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/hoster-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/hoster-old.txt) | DNSMasq (v2.85 or older) |
| DNSMasq<br>v2.86+ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/hoster.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/hoster.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/hoster.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/hoster.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/hoster.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/hoster.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/hoster-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/hoster-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/hoster-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/hoster.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/hoster.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/hoster.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ |

**Expires:** *Updated regularly*

---

### :crystal_ball: ***Most Abused TLDs - Protects against known malicious Top Level Domains!*** <a name="tlds"></a>

*A blocklist for blocking Top Most Abused Top Level Domains, merged from [@Yokoffing](https://github.com/yokoffing), [@DandelionSprout](https://github.com/DandelionSprout/), [@LennyFox](https://github.com/lennyfox) Cloudflare Radar and SpamHaus.*

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| AdGuard | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/spam-tlds.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/spam-tlds.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/spam-tlds.txt) | AdGuard, AdGuard Home |
| uBlock  | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/spam-tlds-ublock.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/spam-tlds-ublock.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/spam-tlds-ublock.txt) | uBlock, AdBlock Plus |
| AdBlock  | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/spam-tlds-adblock.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/spam-tlds-adblock.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/spam-tlds-adblock.txt) | Pi-hole, AdBlock, TechnitiumDNS<br>*Contains only spam TLDs that do not have any exclusions.* |
| AdBlock<br>(Aggressive)<br><br>Allowlist | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/spam-tlds-adblock-aggressive.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/spam-tlds-adblock-aggressive.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/spam-tlds-adblock-aggressive.txt)<br><br><br>[Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/spam-tlds-adblock-allow.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/spam-tlds-adblock-allow.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/spam-tlds-adblock-allow.txt) | Pi-hole, AdBlock, TechnitiumDNS |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/spam-tlds-rpz.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/spam-tlds-rpz.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/spam-tlds-rpz.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ<br>*Contains only spam TLDs that do not have any exclusions.* |
| RPZ<br>(Aggressive) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/spam-tlds-rpz-aggressive.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/spam-tlds-rpz-aggressive.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/spam-tlds-rpz-aggressive.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ<br>*Contains all spam TLDs, corresponds to the AdGuard and uBlock version without exclusions.* |

**Expires:** *Updated regularly*

---

### :skull: ***Anti Piracy - Protects against piracy!*** <a name="piracy"></a>

*Blocks websites and services that are mainly used for the illegal distribution of copyrighted content.*

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** *9733 compressed domains*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/anti.piracy.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/anti.piracy.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/anti.piracy.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam, Little Snitch Mini |
| Unbound | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/anti.piracy.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/anti.piracy.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/anti.piracy.blacklist.conf) | Unbound |
| DNSMasq<br>v2.85- | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/anti.piracy-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/anti.piracy-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/anti.piracy-old.txt) | DNSMasq (v2.85 or older) |
| DNSMasq<br>v2.86+ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/anti.piracy.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/anti.piracy.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/anti.piracy.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/anti.piracy.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/anti.piracy.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/anti.piracy.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/anti.piracy-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/anti.piracy-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/anti.piracy-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/anti.piracy.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/anti.piracy.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/anti.piracy.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ |

**Expires:** *Updated regularly*

---

### :slot_machine: ***Gambling - Protects against gambling content!*** <a name="gambling"></a>

*Blocks gambling content.*

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** *320399 compressed domains*

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/gambling.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/gambling.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/gambling.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi, Brave, AdNauseam |
| Unbound | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/gambling.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/gambling.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/gambling.blacklist.conf) | Unbound |
| DNSMasq<br>v2.85- | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/gambling-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/gambling-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/gambling-old.txt) | DNSMasq (v2.85 or older) |
| DNSMasq<br>v2.86+ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/gambling.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/gambling.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/gambling.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/gambling.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/gambling.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/gambling.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/gambling-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/gambling-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/gambling-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/gambling.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/gambling.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/gambling.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound RPZ |

**Expires:** *Updated regularly*

---

### :calling: ***Native Tracker - Broadband tracker of devices, services and operating systems*** <a name="native"></a>

*Blocks native broadband tracker from devices, services and operating systems that track your activity.*

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :yellow_square:   | :yellow_square:    | :yellow_square: | :yellow_square:  | :green_circle:      |

:green_circle: yes :yellow_square: partially :x: no

| Device/Service | Domains | Hosts | Adblock | Unbound | DNSMasq<br>v2.86+ | DNSMasq<br>v2.85- | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:-------|:--------:|:------:|:--------:|:--------:|:--------:|:---------:|:--------:|:--------:|:--------:|
| Amazon (Devices, Shopping, Video) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/native.amazon.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.amazon.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.amazon.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/hosts/native.amazon.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.amazon.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.amazon.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.amazon.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.amazon.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.amazon.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/native.amazon.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/native.amazon.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/native.amazon.blacklist.conf) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.amazon.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.amazon.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.amazon.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.amazon-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.amazon-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.amazon-old.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.amazon.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.amazon.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.amazon.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.amazon-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.amazon-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.amazon-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.amazon.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.amazon.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.amazon.txt) |
| Apple (iOS, macOS, tvOS) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/native.apple.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.apple.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.apple.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/hosts/native.apple.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.apple.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.apple.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.apple.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.apple.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.apple.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/native.apple.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/native.apple.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/native.apple.blacklist.conf) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.apple.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.apple.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.apple.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.apple-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.apple-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.apple-old.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.apple.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.apple.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.apple.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.apple-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.apple-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.apple-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.apple.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.apple.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.apple.txt) |
| Huawei (Devices) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/native.huawei.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.huawei.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.huawei.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/hosts/native.huawei.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.huawei.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.huawei.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.huawei.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.huawei.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.huawei.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/native.huawei.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/native.huawei.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/native.huawei.blacklist.conf) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.huawei.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.huawei.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.huawei.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.huawei-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.huawei-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.huawei-old.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.huawei.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.huawei.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.huawei.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.huawei-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.huawei-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.huawei-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.huawei.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.huawei.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.huawei.txt) |
| Microsoft (Windows, Office, MSN) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/native.winoffice.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.winoffice.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.winoffice.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/hosts/native.winoffice.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.winoffice.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.winoffice.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.winoffice.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.winoffice.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.winoffice.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/native.winoffice.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/native.winoffice.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/native.winoffice.blacklist.conf) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.winoffice.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.winoffice.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.winoffice.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.winoffice-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.winoffice-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.winoffice-old.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.winoffice.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.winoffice.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.winoffice.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.winoffice-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.winoffice-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.winoffice-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.winoffice.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.winoffice.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.winoffice.txt) |
| TikTok (Fingerprinting) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/native.tiktok.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.tiktok.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.tiktok.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/hosts/native.tiktok.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.tiktok.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.tiktok.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.tiktok.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.tiktok.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.tiktok.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/native.tiktok.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/native.tiktok.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/native.tiktok.blacklist.conf) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.tiktok.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.tiktok.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.tiktok.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.tiktok-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.tiktok-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.tiktok-old.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.tiktok.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.tiktok.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.tiktok.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.tiktok-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.tiktok-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.tiktok-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.tiktok.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.tiktok.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.tiktok.txt) |
| TikTok (Fingerprinting) Aggressive | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/native.tiktok.extended.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.tiktok.extended.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.tiktok.extended.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/hosts/native.tiktok.extended.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.tiktok.extended.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.tiktok.extended.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.tiktok.extended.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.tiktok.extended.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.tiktok.extended.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/native.tiktok.extended.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/native.tiktok.extended.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/native.tiktok.extended.blacklist.conf) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.tiktok.extended.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.tiktok.extended.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.tiktok.extended.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.tiktok.extended-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.tiktok.extended-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.tiktok.extended-old.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.tiktok.extended.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.tiktok.extended.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.tiktok.extended.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.tiktok.extended-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.tiktok.extended-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.tiktok.extended-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.tiktok.extended.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.tiktok.extended.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.tiktok.extended.txt) |
| LG webOS | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/native.lgwebos.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.lgwebos.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.lgwebos.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/hosts/native.lgwebos.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.lgwebos.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.lgwebos.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.lgwebos.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.lgwebos.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.lgwebos.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/native.lgwebos.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/native.lgwebos.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/native.lgwebos.blacklist.conf) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.lgwebos.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.lgwebos.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.lgwebos.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.lgwebos-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.lgwebos-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.lgwebos-old.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.lgwebos.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.lgwebos.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.lgwebos.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.lgwebos-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.lgwebos-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.lgwebos-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.lgwebos.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.lgwebos.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.lgwebos.txt) |
| Vivo | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/native.vivo.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.vivo.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.vivo.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/hosts/native.vivo.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.vivo.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.vivo.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.vivo.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.vivo.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.vivo.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/native.vivo.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/native.vivo.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/native.vivo.blacklist.conf) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.vivo.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.vivo.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.vivo.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.vivo-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.vivo-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.vivo-old.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.vivo.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.vivo.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.vivo.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.vivo-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.vivo-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.vivo-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.vivo.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.vivo.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.vivo.txt) |
| OPPO/Realme | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/native.oppo-realme.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.oppo-realme.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.oppo-realme.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/hosts/native.oppo-realme.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.oppo-realme.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.oppo-realme.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.oppo-realme.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.oppo-realme.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.oppo-realme.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/native.oppo-realme.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/native.oppo-realme.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/native.oppo-realme.blacklist.conf) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.oppo-realme.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.oppo-realme.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.oppo-realme.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.oppo-realme-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.oppo-realme-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.oppo-realme-old.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.oppo-realme.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.oppo-realme.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.oppo-realme.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.oppo-realme-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.oppo-realme-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.oppo-realme-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.oppo-realme.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.oppo-realme.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.oppo-realme.txt) |
| Xiaomi | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/native.xiaomi.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.xiaomi.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/native.xiaomi.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/hosts/native.xiaomi.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/native.xiaomi.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/hosts/native.xiaomi.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/native.xiaomi.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/native.xiaomi.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/native.xiaomi.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/unbound/native.xiaomi.blacklist.conf) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/native.xiaomi.blacklist.conf) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/unbound/native.xiaomi.blacklist.conf) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.xiaomi.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.xiaomi.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.xiaomi.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/dnsmasq/native.xiaomi-old.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/native.xiaomi-old.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/dnsmasq/native.xiaomi-old.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.xiaomi.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.xiaomi.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.xiaomi.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.xiaomi-onlydomains.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/native.xiaomi-onlydomains.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/wildcard/native.xiaomi-onlydomains.txt) | [Link](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/rpz/native.xiaomi.txt) [Mirror](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/rpz/native.xiaomi.txt) [Mirror](https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/rpz/native.xiaomi.txt) |

**Expires:** *Updated regularly*

---

### :bulb: ***Recommendation*** <a name="recommendation"></a>

*As a network-wide DNS blocker, I recommend using [Adguard Home](https://adguard.com), [Pi-hole](https://pi-hole.net/), [TechnitiumDNS](https://technitium.com/dns/), [Blocky](https://github.com/0xERR0R/blocky) (advanced users), [adblock-lean](https://github.com/lynxthecat/adblock-lean) (OpenWrt) or [eBlocker](https://eblocker.org/).*

*DNS blockers offer good protection of privacy by blocking tracking, metrics and telemetry. They can be used to block the vast majority of ads, malware, scam, fake and co, but not everything can be blocked at the DNS level!
Therefore, I* ***additionally*** *recommend the use of a browser content blocker such as [AdGuard](https://adguard.com), [uBlock](https://ublockorigin.com) or [Ghostery](https://www.ghostery.com/).*

*Check out Yokoffing's [Recommended Filters for uBlock Origin](https://github.com/yokoffing/filterlists) for content blocker filter lists.*
*For a browser recommendation see also Yokoffing's [I need a browser with ad blocking. Which one should I choose?](https://github.com/yokoffing/NextDNS-Config#i-need-a-browser-with-ad-blocking-which-one-should-i-choose)*

#### :information_desk_person: Which version of the lists should I use? <a name="whatshouldiuse"></a>

- *Use [Light](#light) if you have to pay attention to the size of the list because the AdBlocker does not support large lists, or light protection is sufficient for you.*
- *Use [Normal](#normal) if there is no admin nearby who can unblock something from time to time. E.g. for grandma and grandpa or the whole home or family network.*
- *Use [Pro](#pro) if an admin is available who could unblock something if necessary. My personal recommendation for almost problem-free adblocking.*
- *Use [Pro++](#proplus) if you are an experienced user, know what you are doing and privacy is important to you. This is an aggressive list and you may need to unblock things more often.*
- *Use [Ultimate](#ultimate) if Pro++ is not enough for you.*

> [!IMPORTANT]
> *Another important recommendation is to combine the main lists with the [Threat Intelligence Feeds](#tif) list if possible. For Adblockers that have problems with the size of the full TIF list, there is a smaller [medium](#tifmedium) version. If you use AdGuard Home or AdGuard DNS, I also recommend using the [Dandelion Sprout's Anti-Malware List](https://raw.githubusercontent.com/DandelionSprout/adfilt/master/Alternate%20versions%20Anti-Malware%20List/AntiMalwareAdGuardHome.txt). There is also an [IPv4 list](#tifips) that can be used in addition to the TIF or TIF medium list.*

> [!TIP]
> ***Only for NextDNS users:*** *The [Threat Intelligence Feeds](#tif) list is not available in NextDNS, the security features should be used instead. Furthermore, I recommend that NextDNS users also use the [OISD](https://oisd.nl/) list, which also contains some TIF sources that are not covered by the NextDNS security features.*

***Further additional options to the main lists depending on the use case are:***

- ***Security:*** *In addition to the [Threat Intelligence Feeds](#tif) list, use the [Dynamic DNS](#dyndns), [Badware Hoster](#hoster), [Most Abused TLDs](#tlds) and [Newly Registered Domains (NRDs)](#nrd) list to further protect yourself from malicious things.*
- ***Protection of children:*** *Use the [Gambling](#gambling), [Anti Piracy](#piracy), [Safesearch](#safesearch), [DoH/VPN/TOR/Proxy Bypass](#bypass) and [oisd NSFW](https://oisd.nl/setup) lists in addition to blocking gambling, piracy, no Safesearch engines, DNS bypassing, porn, shock and adult sites.*

---

### :department_store: ***Online DNS Services*** <a name="dnsservices"></a>

*If you don't run your own DNS server on your home network or if you are looking for additional protection for your mobile devices when they are not connected to the home network, then you can use one of the following DNS services.*

***Availability of the lists in the respective DNS services:*** <a name="availablelists"></a>

| Service | Light | Nor<br>mal | Pro | Pro<br>++ | Ulti<br>mate | TIF | By<br>pass | Dyn<br>DNS | Hoster | TLDs | Anti<br>Piracy | Gam<br>bling |
| :----- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| AdGuard<br>DNS         | :x:            | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle:   | :green_circle:   | :green_circle: | :green_circle: | :green_circle:   | :green_circle:   |
| ControlD            | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :yellow_square:  | :yellow_square:  | :x:            | :x:            | :yellow_square:  | :yellow_square:  |
| NextDNS             | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :x:            | :x:              | :x:              | :x:            | :x:            | :x:              | :x:              |
| Rethink<br>DNS          | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :x:              | :green_circle:   | :green_circle: | :x:            | :x:              | :x:              |
| DNS<br>warden           | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :x:              | :x:              | :x:            | :x:            | :x:              | :x:              |

:yellow_square: *Are included in the ControlD native lists of the respective category.*

#### :department_store: ***AdGuardDNS - limited free/paid*** <a name="adguarddns"></a>

*In [AdGuardDNS](https://adguard-dns.io) you can use my Multi Normal, Pro, Pro++, Ultimate, TIF, Gambling, Anti Piracy, DoH/VPN/TOR/Proxy Bypass, DynDNS, Badware Hoster, Most Abused TLDs list and the Allowlist Referral.*

#### :department_store: ***ControlD - free/paid*** <a name="controld"></a>

*In [ControlD](https://controld.com) you can use my Light, Normal, Pro, Pro++, Ultimate and TIF lists.*

***Free:***

| Blocklists | DNS-over-HTTPS | DNS-over-TLS/QUIC | Legacy DNS | Apple |
|:-----------|:---------------|:-------------|:-------------|:---:|
| Light | `https://freedns.controld.com/x-hagezi-light` | `x-hagezi-light.freedns.controld.com` | 76.76.2.37<br>76.76.10.37<br>2606:1a40::37<br>2606:1a40:1::37 | [Link](https://api.controld.com/mobileconfig/x-hagezi-light?type=free&exclude_common=1) |
| Normal | `https://freedns.controld.com/x-hagezi-normal` | `x-hagezi-normal.freedns.controld.com` | 76.76.2.40<br>76.76.10.40<br>2606:1a40::40<br>2606:1a40:1::40 | [Link](https://api.controld.com/mobileconfig/x-hagezi-normal?type=free&exclude_common=1) |
| Pro | `https://freedns.controld.com/x-hagezi-pro` | `x-hagezi-pro.freedns.controld.com` | 76.76.2.41<br>76.76.10.41<br>2606:1a40::41<br>2606:1a40:1::41 | [Link](https://api.controld.com/mobileconfig/x-hagezi-pro?type=free&exclude_common=1) |
| Pro Plus | `https://freedns.controld.com/x-hagezi-proplus` | `x-hagezi-proplus.freedns.controld.com` | 76.76.2.42<br>76.76.10.42<br>2606:1a40::42<br>2606:1a40:1::42 | [Link](https://api.controld.com/mobileconfig/x-hagezi-proplus?type=free&exclude_common=1) |
| Ultimate | `https://freedns.controld.com/x-hagezi-ultimate` | `x-hagezi-ultimate.freedns.controld.com` | 76.76.2.45<br>76.76.10.45<br>2606:1a40::45<br>2606:1a40:1::45 | [Link](https://api.controld.com/mobileconfig/x-hagezi-ultimate?type=free&exclude_common=1) |
| TIF | `https://freedns.controld.com/x-hagezi-tif` | `x-hagezi-tif.freedns.controld.com` | 76.76.2.46<br>76.76.10.46<br>2606:1a40::46<br>2606:1a40:1::46 | [Link](https://api.controld.com/mobileconfig/x-hagezi-tif?type=free&exclude_common=1) |

***Paid:***

*Check out Yokoffing's [ControlD Config Guide](https://github.com/yokoffing/Control-D-Config) for recommended [ControlD](https://controld.com) configuration settings.*

#### :department_store: ***NextDNS - limited free/paid*** <a name="nextdns"></a>

*In [NextDNS](https://nextdns.io) you can use my Light, Normal, Pro, Pro++ and Ultimate lists.*

*Check out Yokoffing's [NextDNS Config Guide](https://github.com/yokoffing/NextDNS-Config) and the Techlore Video [The ULTIMATE Guide to Mastering NextDNS!](https://youtu.be/WUG57ynLb8I) for recommended [NextDNS](https://nextdns.io) configuration settings.*

#### :department_store: ***RethinkDNS - free*** <a name="rethinkdns"></a>

*In [RethinkDNS](https://rethinkdns.com) you can use my Light, Normal, Pro, Pro++, Ultimate, TIF, DynDNS and Badware Hoster lists.*

> [!NOTE]
> *The lists in RethinkDNS are only updated once a week.*

| Blocklists | DNS-over-HTTPS | DNS-over-TLS/QUIC |
|:-----------|:---------------|:-------------|
| Light + TIF | `https://sky.rethinkdns.com/1:AAkACAQA` | `1-aaeqacaeaa.max.rethinkdns.com` |
| Normal + TIF | `https://sky.rethinkdns.com/1:AAkACAgA` | `1-aaeqacaiaa.max.rethinkdns.com` |
| Pro + TIF  | `https://sky.rethinkdns.com/1:AAoACBAA` | `1-aafaacaqaa.max.rethinkdns.com` |
| Pro plus + TIF | `https://sky.rethinkdns.com/1:AAoACAgA` | `1-aafaacaiaa.max.rethinkdns.com` |
| Ultimate + TIF | `https://sky.rethinkdns.com/1:gAgACABA` | `1-qaeaacaaia.max.rethinkdns.com` |

#### :department_store: ***DNSwarden - free*** <a name="dnswarden"></a>

*In [DNSwarden](https://dnswarden.com/customfilter.html) you can use my Light, Normal, Pro, Pro++, Ultimate and TIF lists.*

| Blocklists | DNS-over-HTTPS | DNS-over-TLS/QUIC |
|:-----------|:---------------|:------------------|
| Light + TIF | `https://dns.dnswarden.com/00000000000000000000048` | `00000000000000000000048.dns.dnswarden.com` |
| Normal + TIF | `https://dns.dnswarden.com/00000000000000000000028` | `00000000000000000000028.dns.dnswarden.com` |
| Pro + TIF  | `https://dns.dnswarden.com/00000000000000000000018` | `00000000000000000000018.dns.dnswarden.com` |
| Pro plus + TIF | `https://dns.dnswarden.com/0000000000000000000000o` | `0000000000000000000000o.dns.dnswarden.com` |
| Ultimate + TIF | `https://dns.dnswarden.com/0000000000000000000000804` | `0000000000000000000000804.dns.dnswarden.com` |

#### :department_store: ***DNSforge (Germany) - free*** <a name="dnsforge"></a>

*[DNSforge](https://dnsforge.de/) use my Multi Light blocklist in addition to other blocklists.*

#### :department_store: ***OpenBLD.net - free*** <a name="openbld"></a>

*[OpenBLD.net](https://openbld.net) use my Multi Pro blocklist in addition to other blocklists.*

#### :department_store: ***RobinGroppe.de (Germany) - free*** <a name="robingroppe"></a>

*[RobinGroppe.de DNS](https://www.robingroppe.de/serverzeug/dns-server) offers a free German DNS server without logging to block malware, phishing and other threats. It uses my TIF list.*

---

### :loudspeaker: ***About*** <a name="about"></a>

<p align="center"><a href="https://github.com/hagezi/dns-blocklists/graphs/contributors"><img src="https://contrib.rocks/image?repo=hagezi/dns-blocklists&max=1" /></a></p>
<p align="center"><i><b>"If the plan doesn‘t work, change the plan but never the goal."<br>There's no place like 127.0.0.1!</b></i></p>

*The blocklists are based on [various sources](sources.md) and my own denylists/extensions. They were designed to avoid false positive domains as much as possible without losing effectiveness and efficiency. Dead hosts are regularly removed from the lists to keep them as small as possible.
Made with :heartbeat: for a safer and cleaner internet.*

*All lists were tested against 10000 websites from the Cisco Umbrella Top 1 million list. It was checked whether the pages load, the page content is displayed correctly, navigation links work, images load, videos start and much more.*

*They are updated and maintained daily.*

*No, they are not just block lists cobbled together from different sources. They have been optimized and extended to efficiently "clean the Internet" in all areas. See also: [Which sources are used for the lists and how are the lists compiled on the basis of these sources?](https://github.com/hagezi/dns-blocklists/wiki/FAQ#sources)*

*The results of a test against the 10000 [whotracks.me](https://whotracks.me/websites.html) pages. All pages were opened and fully loaded via batch in Edge with privacy features turned off. Cookies were all accepted.*

| **List**     | Total queries | Blocked queries | % blocked | % gap to light |
|-------------:|--------------:|----------------:|----------:|---------------:|
| **Ultimate** | 299646        | 131093          | 43.75     | 12.85          |
| **Pro++**    | 299646        | 119681          | 39.94     | 9.05           |
| **Pro**      | 299646        | 97508           | 32.54     | 1.65           |
| **Normal**   | 299646        | 93258           | 31.12     | 0.23           |
| **Light**    | 299646        | 92576           | 30.90     |                |
| **----**     | 299646        | 67888           | 22.66     | -8.24          |

*Test them, give feedback and [report blockable or incorrectly blocked](https://github.com/hagezi/dns-blocklists/issues) domains.*

#### :email: Contact <a name="contact"></a>

| Mail |
|:----:|
| <hagezi@protonmail.com> |

#### :family: Groups <a name="groups"></a>

| Telegram | Discord |
|:---------:|:------:|
| [Link](https://t.me/hagezi_g) | [CipherOps' Pi-hole & AdGuard Home](https://discord.gg/jg9CKkhC7M) |

#### :octocat: Repository <a name="repository"></a>

*The repository is occasionally compressed (reinitialised) to reduce the overall size. Among other things, this invalidates forks and cleans up the commit history.*

#### :cyclone: Referral Domains <a name="referral"></a>

*Affiliate and tracking links (referral domains) that appear frequently on offer web pages like Slickdeals, in emails or in search results are allowed in my lists. These are mostly called only after manually clicking on a link and are not used to display advertising.
If these are blocked, the first hit links from search results, for example, no longer work. Furthermore, some of these domains are also used to unsubscribe from newsletters.*

*See also: [Why are referral domains (affiliate and tracking links) not blocked in the lists?](https://github.com/hagezi/dns-blocklists/wiki/FAQ#referral)*

#### :dizzy: Support Me <a name="support"></a>

*If you like the project and you can benefit from it, leave a :star: (top right) and become a [stargazer](https://github.com/hagezi/dns-blocklists/stargazers)!*

*Give feedback, show me your ideas, report domains to be blocked, report false positive domains and help to keep the internet safe and clean.*
*Help and cooperation of any kind are welcome!*

***Thanks for your support!***

---

### :stars: Stargazers <a name="stargazers"></a>

[![Star History Chart](https://api.star-history.com/svg?repos=hagezi/dns-blocklists&type=Date)](https://star-history.com/#hagezi/dns-blocklists&Date)

---

### ***Keep the internet clean!***

---

[![https://gafam.info](https://ptrace.gafam.info/unofficial/img/color/lqdn-gafam-poster-en-color-5x1-2560x.png)](https://gafam.info)

---
