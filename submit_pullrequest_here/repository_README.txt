![GitHub last commit](https://img.shields.io/github/last-commit/hagezi/dns-blocklists)![GitHub issues](https://img.shields.io/github/issues/hagezi/dns-blocklists)![GitHub closed issues](https://img.shields.io/github/issues-closed/hagezi/dns-blocklists)![GitHub repo size](https://img.shields.io/github/repo-size/hagezi/dns-blocklists)[![shields.io Stars](https://img.shields.io/github/stars/hagezi/dns-blocklists)](https://github.com/hagezi/dns-blocklists/stargazers)<a href="https://github.com/sponsors/hagezi" target="_blank"><img src="https://img.shields.io/badge/Sponsor-♥️-orange" alt="Support via GitHub Sponsors" /></a>

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
10. [Newly Registered Domains - NRD/DGA](#nrd) - Favoured by threat actors to launch malicious campaigns!
11. [DoH/VPN/TOR/Proxy Bypass](#bypass) - Prevent methods to bypass your DNS! : [Full](#bypass_all) - [DoH only](#bypass_dns) - [DoH IPs](#bypass_ips)
12. [Safesearch not supported](#safesearch) - Prevent the use of search engines that do not support Safesearch!
13. [Dynamic DNS](#dyndns) - Protects against the malicious use of dynamic DNS services!
14. [Badware Hoster](#hoster) - Protects against the malicious use of host services!
15. [URL Shortener](#urlshortener) - Blocks link/URL shortener!
16. [Most Abused TLDs](#tlds) - Protects against known malicious Top Level Domains!
17. [DNS Rebind Protection](#dnsrebind) - Prevents attackers from resolving domains to local IPs!
18. [Anti Piracy](#piracy) - Protects against piracy!
19. [Gambling](#gambling) - Protects against gambling content! : [Full](#gambling) - [Medium](#gamblingmedium) - [Mini](#gamblingmini)
20. [Social Networks](#social) - Blocks access to social networks!
21. [NSFW](#nsfw) - Protects against adult content!
22. [Native Tracker](#native) - Broadband tracker of devices, services and operating systems
23. [Supporter](https://github.com/hagezi/dns-blocklists/stargazers) - Leave a star (top right)!
24. [Recommendation](#recommendation) - [Which version of the lists should I use?](https://github.com/hagezi/dns-blocklists/wiki/FAQ#whatshouldiuse)
25. [Online DNS Services](#dnsservices) : [HaGeZi DNS](#hagezidns) - [DNS Bunker](#dnsbunker)
26. [About](#about) : [Repository](#repository) - [Referral Domains](#referral) - [Support Me](#support) - [Sponsor Me](https://github.com/sponsors/hagezi)
27. [FAQ](https://github.com/hagezi/dns-blocklists/wiki/FAQ) - Frequently Asked Questions
28. [Discussions](https://github.com/hagezi/dns-blocklists/discussions)
29. [Sources](sources.md)
30. [Disclaimer](#disclaimer)
31. [Contact](#contact)

### :books: **Multi - Cleans the Internet and protects your privacy!** <a name="overview"></a>

An all-in-one DNS blocklist in **various versions (light, normal, pro, pro++ and ultimate)**. It can be used as a standalone blocklist. For every region. Blocks ads, affiliate, tracking, metrics, telemetry, fake, phishing, malware, scam, cryptojacking and other "crap". Based on [various blocklists](sources.md). No, they are not just block lists cobbled together from different sources. They have been optimized and extended to efficiently "clean the Internet" in all areas.             

See also: [Which sources are used for the lists and how are the lists compiled on the basis of these sources?](https://github.com/hagezi/dns-blocklists/wiki/FAQ#sources)

#### **Blocklist version and size overview:**

| Version | Entries | Pro++ | Pro | Nor<br>mal | Light | [Fake](#fake) | [TIF](#tif) | [Nat<br>ive](#native) | [PopUp<br>Ads](#popupads) | Bug<br>Tracker |
|:--------|---:|:------:|:-----:|:----:|:----:|:---:|:------:|:----------:|:----:|:----:|
| :green_book:[Light](#light)             | light_dh<br>light_cp     |  |   |   | :green_circle:  |  | |  :yellow_square: | :yellow_square: | |
| :blue_book:[Normal](#normal)       | multi_dh<br>multi_cp     |  |   | :green_circle: | :green_circle: |  | :yellow_square: | :yellow_square: | :yellow_square: | |
| :ledger:[Pro](#pro)              | pro_dh<br>pro_cp         |  | :green_circle: | :green_circle: | :green_circle: | | :yellow_square: | :yellow_square: | :green_circle: | :green_circle: |
| :orange_book:[Pro++](#proplus)    | proplus_dh<br>proplus_cp | :green_circle: | :green_circle: | :green_circle: | :green_circle: | |:yellow_square: | :yellow_square: | :green_circle: | :green_circle: |
| :closed_book:[Ultimate](#ultimate)    | ultimate_dh<br>ultimate_cp | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :yellow_square: | :green_circle: | :green_circle: | :green_circle: |

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

**Entries:** light_dh domains/hosts - light_dhc compressed hosts - light_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [Link](lnkgh_d/light.txt) [M1](lnkgl_d/light.txt) [M2](lnkjd_d/light.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [Link](lnkgh_h/light.txt) [M1](lnkgl_h/light.txt) [M2](lnkjd_h/light.txt) | AdAway, uMatrix, DNS66, NetGuard |
| Hosts<br>Compressed | [Link](lnkgh_h/light-compressed.txt) [M1](lnkgl_h/light-compressed.txt) [M2](lnkjd_h/light-compressed.txt) | Hostfile, Linux |
| Adblock | [Link](lnkgh_a/light.txt) [M1](lnkgl_a/light.txt) [M2](lnkjd_a/light.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [Link](lnkgh_m/light.txt) [M1](lnkgl_m/light.txt) [M2](lnkjd_m/light.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/light.txt) [M1](lnkgl_w/light.txt) [M2](lnkjd_w/light.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/light-onlydomains.txt) [M1](lnkgl_w/light-onlydomains.txt) [M2](lnkjd_w/light-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/light.txt) [M1](lnkgl_r/light.txt) [M2](lnkjd_r/light.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |
| PAC | [Link](lnkgh_p/light.pac) [M1](lnkgl_p/light.pac) [M2](lnkjd_p/light.pac) | Proxy Auto Configuration |

### :blue_book: **Multi NORMAL** - **All-round protection** <a name="normal"></a>

Broom - Cleans the Internet and protects your privacy! Blocks Ads, Affiliate, Tracking, Metrics, Telemetry, Phishing, Malware, Scam, Fake, Cryptojacking and other "Crap".

> [!NOTE]
> **Blocking type:** Relaxed/Balanced              
> This list version should not lead to any restrictions for the most part. It is particularly suitable for environments in which there is no admin nearby who can unblock something.

> [!IMPORTANT]
> Does not block error trackers such as Bugsnag, Crashlytics, Firebase, Instabug, Sentry, ... and other app-specific crash trackers. These are only blocked from the Pro version onwards.

**Entries:** multi_dh domains/hosts - multi_dhc compressed hosts - multi_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [Link](lnkgh_d/multi.txt) [M1](lnkgl_d/multi.txt) [M2](lnkjd_d/multi.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [Link](lnkgh_h/multi.txt) [M1](lnkgl_h/multi.txt) [M2](lnkjd_h/multi.txt) | AdAway, uMatrix, DNS66, NetGuard |
| Hosts<br>Compressed | [Link](lnkgh_h/multi-compressed.txt) [M1](lnkgl_h/multi-compressed.txt) [M2](lnkjd_h/multi-compressed.txt) | Hostfile, Linux |
| Adblock | [Link](lnkgh_a/multi.txt) [M1](lnkgl_a/multi.txt) [M2](lnkjd_a/multi.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [Link](lnkgh_m/multi.txt) [M1](lnkgl_m/multi.txt) [M2](lnkjd_m/multi.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/multi.txt) [M1](lnkgl_w/multi.txt) [M2](lnkjd_w/multi.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/multi-onlydomains.txt) [M1](lnkgl_w/multi-onlydomains.txt) [M2](lnkjd_w/multi-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/multi.txt) [M1](lnkgl_r/multi.txt) [M2](lnkjd_r/multi.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

### :ledger: **Multi PRO** - **Extended protection (Recommended)** <a name="pro"></a>

Big broom - Cleans the Internet and protects your privacy! Blocks Ads, Affiliate, Tracking, Metrics, Telemetry, Phishing, Malware, Scam, Fake, Cryptojacking and other "Crap".

> [!NOTE]
> **Blocking type:** Balanced            
> This list version should only very rarely lead to restrictions. It is suitable for environments where there is an admin nearby who can unblock something. My personal recommendation for mostly problem-free adblocking with good privacy protection.

**Entries:** pro_dh domains/hosts - pro_dhc compressed hosts - pro_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [Link](lnkgh_d/pro.txt) [M1](lnkgl_d/pro.txt) [M2](lnkjd_d/pro.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [Link](lnkgh_h/pro.txt) [M1](lnkgl_h/pro.txt) [M2](lnkjd_h/pro.txt) | AdAway, uMatrix, DNS66, NetGuard |
| Hosts<br>Compressed | [Link](lnkgh_h/pro-compressed.txt) [M1](lnkgl_h/pro-compressed.txt) [M2](lnkjd_h/pro-compressed.txt) | Hostfile, Linux |
| Adblock | [Link](lnkgh_a/pro.txt) [M1](lnkgl_a/pro.txt) [M2](lnkjd_a/pro.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam |
| DNSMasq | [Link](lnkgh_m/pro.txt) [M1](lnkgl_m/pro.txt) [M2](lnkjd_m/pro.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/pro.txt) [M1](lnkgl_w/pro.txt) [M2](lnkjd_w/pro.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/pro-onlydomains.txt) [M1](lnkgl_w/pro-onlydomains.txt) [M2](lnkjd_w/pro-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/pro.txt) [M1](lnkgl_r/pro.txt) [M2](lnkjd_r/pro.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :ledger: **Multi PRO mini (Recommended for browser/mobile adblockers)** <a name="promini"></a>

Size-optimised version for DNS/Browser adblockers, e.g. for devices with less RAM. This list only contains domains from the Pro full that have been found on Top 1/10M lists (Umbrella, Cloudflare, Tranco, Chrome, BuiltWith, Majestic, DomCop).

**Entries:** promini_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](lnkgh_a/pro.mini.txt) [M1](lnkgl_a/pro.mini.txt) [M2](lnkjd_a/pro.mini.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [Link](lnkgh_m/pro.mini.txt) [M1](lnkgl_m/pro.mini.txt) [M2](lnkjd_m/pro.mini.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/pro.mini.txt) [M1](lnkgl_w/pro.mini.txt) [M2](lnkjd_w/pro.mini.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/pro.mini-onlydomains.txt) [M1](lnkgl_w/pro.mini-onlydomains.txt) [M2](lnkjd_w/pro.mini-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/pro.mini.txt) [M1](lnkgl_r/pro.mini.txt) [M2](lnkjd_r/pro.mini.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

### :orange_book: **Multi PRO++** - **Maximum protection** <a name="proplus"></a>

Sweeper - Aggressive cleans the Internet and protects your privacy! Blocks Ads, Affiliate, Tracking, Metrics, Telemetry, Phishing, Malware, Scam, Fake, Cryptojacking and other "Crap".

> [!NOTE]
> **Blocking type:** Balanced/Aggressive              
> More aggressive version of the Multi PRO blocklist. It may contain a few false positive domains that limit functionality. Therefore it should only be used by experienced users. Furthermore, an admin should be available to unblock incorrectly blocked domains.

> [!WARNING]
> **Referral domains (affiliate and tracking links):**           
> A few referral domains that also function as normal trackers are blocked. For further details see: [Referral domains](https://github.com/hagezi/dns-blocklists/wiki/FAQ#referral)

**Entries:** proplus_dh domains/hosts - proplus_dhc compressed hosts - proplus_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [Link](lnkgh_d/pro.plus.txt) [M1](lnkgl_d/pro.plus.txt) [M2](lnkjd_d/pro.plus.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [Link](lnkgh_h/pro.plus.txt) [M1](lnkgl_h/pro.plus.txt) [M2](lnkjd_h/pro.plus.txt) | AdAway, uMatrix, DNS66, NetGuard |
| Hosts<br>Compressed | [Link](lnkgh_h/pro.plus-compressed.txt) [M1](lnkgl_h/pro.plus-compressed.txt) [M2](lnkjd_h/pro.plus-compressed.txt) | Hostfile, Linux |
| Adblock | [Link](lnkgh_a/pro.plus.txt) [M1](lnkgl_a/pro.plus.txt) [M2](lnkjd_a/pro.plus.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam |
| DNSMasq | [Link](lnkgh_m/pro.plus.txt) [M1](lnkgl_m/pro.plus.txt) [M2](lnkjd_m/pro.plus.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/pro.plus.txt) [M1](lnkgl_w/pro.plus.txt) [M2](lnkjd_w/pro.plus.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/pro.plus-onlydomains.txt) [M1](lnkgl_w/pro.plus-onlydomains.txt) [M2](lnkjd_w/pro.plus-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/pro.plus.txt) [M1](lnkgl_r/pro.plus.txt) [M2](lnkjd_r/pro.plus.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :orange_book: **Multi PRO++ mini** <a name="proplusmini"></a>

Size-optimised version for DNS/Browser adblockers, e.g. for devices with less RAM. This list only contains domains from the Pro++ full that have been found on Top 1/10M lists (Umbrella, Cloudflare, Tranco, Chrome, BuiltWith, Majestic, DomCop).

**Entries:** proplusmini_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](lnkgh_a/pro.plus.mini.txt) [M1](lnkgl_a/pro.plus.mini.txt) [M2](lnkjd_a/pro.plus.mini.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [Link](lnkgh_m/pro.plus.mini.txt) [M1](lnkgl_m/pro.plus.mini.txt) [M2](lnkjd_m/pro.plus.mini.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/pro.plus.mini.txt) [M1](lnkgl_w/pro.plus.mini.txt) [M2](lnkjd_w/pro.plus.mini.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/pro.plus.mini-onlydomains.txt) [M1](lnkgl_w/pro.plus.mini-onlydomains.txt) [M2](lnkjd_w/pro.plus.mini-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/pro.plus.mini.txt) [M1](lnkgl_r/pro.plus.mini.txt) [M2](lnkjd_r/pro.plus.mini.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

### :closed_book: **Multi ULTIMATE** - **Aggressive protection** <a name="ultimate"></a>

Ultimate Sweeper - Strictly cleans the Internet and protects your privacy! Blocks Ads, Affiliate, Tracking, Metrics, Telemetry, Phishing, Malware, Scam, Fake, Cryptojacking and other "Crap".

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
> Some Microsoft trackers are blocked in Ultimate, which lead to restrictions, e.g. Windows Spotlight, XBox Live Achievements Activity History and others. For details and which domains must be unblocked for which function, see: [Microsoft Tracker](share/microsoft.txt).
>                   
> **Location and IP trackers:**                           
> Certain location and IP trackers used by websites to identify or monitor your IP address and geographic location are blocked. This enhances privacy but may lead to issues such as incorrect regional settings, additional CAPTCHAs, or reduced website functionality. These trackers are commonly employed for hidden analytics and targeted advertising.
>                    
>**Miscellaneous:**          
> Details on other known issues can be found [here](share/ultimate-known-issues.txt).  
                   
**Entries:** ultimate_dh domains/hosts - ultimate_dhc compressed hosts - ultimate_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [Link](lnkgh_d/ultimate.txt) [M1](lnkgl_d/ultimate.txt) [M2](lnkjd_d/ultimate.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [Link](lnkgh_h/ultimate.txt) [M1](lnkgl_h/ultimate.txt) [M2](lnkjd_h/ultimate.txt) | AdAway, uMatrix, DNS66, NetGuard |
| Hosts<br>Compressed | [Link](lnkgh_h/ultimate-compressed.txt) [M1](lnkgl_h/ultimate-compressed.txt) [M2](lnkjd_h/ultimate-compressed.txt) | Hostfile, Linux |
| Adblock | [Link](lnkgh_a/ultimate.txt) [M1](lnkgl_a/ultimate.txt) [M2](lnkjd_a/ultimate.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam |
| DNSMasq | [Link](lnkgh_m/ultimate.txt) [M1](lnkgl_m/ultimate.txt) [M2](lnkjd_m/ultimate.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/ultimate.txt) [M1](lnkgl_w/ultimate.txt) [M2](lnkjd_w/ultimate.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/ultimate-onlydomains.txt) [M1](lnkgl_w/ultimate-onlydomains.txt) [M2](lnkjd_w/ultimate-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/ultimate.txt) [M1](lnkgl_r/ultimate.txt) [M2](lnkjd_r/ultimate.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :closed_book: **Multi ULTIMATE mini** <a name="ultimatemini"></a>

Size-optimised version for DNS/Browser adblockers, e.g. for devices with less RAM. This list only contains domains from the Ultimate full that have been found on Top 1/10M lists (Umbrella, Cloudflare, Tranco, Chrome, BuiltWith, Majestic, DomCop).

**Entries:** ultimatemini_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](lnkgh_a/ultimate.mini.txt) [M1](lnkgl_a/ultimate.mini.txt) [M2](lnkjd_a/ultimate.mini.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [Link](lnkgh_m/ultimate.mini.txt) [M1](lnkgl_m/ultimate.mini.txt) [M2](lnkjd_m/ultimate.mini.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/ultimate.mini.txt) [M1](lnkgl_w/ultimate.mini.txt) [M2](lnkjd_w/ultimate.mini.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/ultimate.mini-onlydomains.txt) [M1](lnkgl_w/ultimate.mini-onlydomains.txt) [M2](lnkjd_w/ultimate.mini-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/ultimate.mini.txt) [M1](lnkgl_r/ultimate.mini.txt) [M2](lnkjd_r/ultimate.mini.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :trollface: **Fake - Protects against internet scams, traps & fakes!** <a name="fake"></a>

A blocklist for blocking fake stores, -streaming, rip-offs, cost traps and co.

|             | Light | Normal          | Pro            | Pro++          | Ultimate       | TIF<br>TIF medium |
|:-----------:|:-----:|:---------------:|:--------------:|:--------------:|:--------------:|:--------------:|
| Included in | :x:   | :x: | :x: | :x: | :green_circle: | :green_circle: |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** fake_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](lnkgh_a/fake.txt) [M1](lnkgl_a/fake.txt) [M2](lnkjd_a/fake.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [Link](lnkgh_m/fake.txt) [M1](lnkgl_m/fake.txt) [M2](lnkjd_m/fake.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/fake.txt) [M1](lnkgl_w/fake.txt) [M2](lnkjd_w/fake.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/fake-onlydomains.txt) [M1](lnkgl_w/fake-onlydomains.txt) [M2](lnkjd_w/fake-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/fake.txt) [M1](lnkgl_r/fake.txt) [M2](lnkjd_r/fake.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :tada: **Pop-Up Ads - Protects against annoying and malicious pop-up ads!** <a name="popupads"></a>

A blocklist for annoying and malicious pop-up ads.

|             | Light          | Normal         | Pro            | Pro++          | Ultimate       | TIF      |
|:-----------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------:|
| Included in | :yellow_square: | :yellow_square: | :green_circle: | :green_circle: | :green_circle: | :x: |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** popupads_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](lnkgh_a/popupads.txt) [M1](lnkgl_a/popupads.txt) [M2](lnkjd_a/popupads.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [Link](lnkgh_m/popupads.txt) [M1](lnkgl_m/popupads.txt) [M2](lnkjd_m/popupads.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/popupads.txt) [M1](lnkgl_w/popupads.txt) [M2](lnkjd_w/popupads.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/popupads-onlydomains.txt) [M1](lnkgl_w/popupads-onlydomains.txt) [M2](lnkjd_w/popupads-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/popupads.txt) [M1](lnkgl_r/popupads.txt) [M2](lnkjd_r/popupads.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :closed_lock_with_key: **Threat Intelligence Feeds - Increases security significantly! (Recommended)** <a name="tif"></a>

A blocklist for blocking Malware, Cryptojacking, Scam, Spam and Phishing. Blocks domains known to spread malware, launch phishing attacks and host command-and-control servers.

|             | Light           | Normal          | Pro             | Pro++           | Ultimate        |
|:-----------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|
| Included in | :x: | :yellow_square: | :yellow_square: | :yellow_square: | :yellow_square: |

:green_circle: yes :yellow_square: partially :x: no

> [!WARNING]
> This blocklist is very large and may cause high memory usage depending on your ad blocker.          
> For a more resource-friendly option, consider using the medium or mini versions.
               
**Entries:** tif_dh domains/hosts - tif_dhc compressed hosts - tif_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [Link](lnkgh_d/tif.txt) [M1](lnkgl_d/tif.txt) [M2](lnkjd_d/tif.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [Link](lnkgh_h/tif.txt) [M1](lnkgl_h/tif.txt) [M2](lnkjd_h/tif.txt) | AdAway, uMatrix, DNS66, NetGuard |
| Hosts<br>Compressed | [Link](lnkgh_h/tif-compressed.txt) [M1](lnkgl_h/tif-compressed.txt) [M2](lnkjd_h/tif-compressed.txt) | Hostfile, Linux |
| Adblock | [Link](lnkgh_a/tif.txt) [M1](lnkgl_a/tif.txt) [M2](lnkjd_a/tif.txt) | Pi-hole, ~~AdGuard~~ (too big!), AdGuard Home (only devices with > 1GB RAM!), eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam |
| DNSMasq | [Link](lnkgh_m/tif.txt) [M1](lnkgl_m/tif.txt) [M2](lnkjd_m/tif.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/tif.txt) [M1](lnkgl_w/tif.txt) [M2](lnkjd_w/tif.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/tif-onlydomains.txt) [M1](lnkgl_w/tif-onlydomains.txt) [M2](lnkjd_w/tif-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/tif.txt) [M1](lnkgl_r/tif.txt) [M2](lnkjd_r/tif.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :closed_lock_with_key: **Threat Intelligence Feeds - Medium version (Recommended for browser/mobile adblockers)** <a name="tifmedium"></a>

A medium version of the Threat Intelligence Feeds list. Designed for Adblockers that have problems with the size of the full TIF list. Contains only important feeds.

|             | Light           | Normal          | Pro             | Pro++           | Ultimate        |
|:-----------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|
| Included in | :x: | :yellow_square: | :yellow_square: | :yellow_square: | :yellow_square: |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** tif_m_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](lnkgh_a/tif.medium.txt) [M1](lnkgl_a/tif.medium.txt) [M2](lnkjd_a/tif.medium.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [Link](lnkgh_m/tif.medium.txt) [M1](lnkgl_m/tif.medium.txt) [M2](lnkjd_m/tif.medium.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/tif.medium.txt) [M1](lnkgl_w/tif.medium.txt) [M2](lnkjd_w/tif.medium.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/tif.medium-onlydomains.txt) [M1](lnkgl_w/tif.medium-onlydomains.txt) [M2](lnkjd_w/tif.medium-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/tif.medium.txt) [M1](lnkgl_r/tif.medium.txt) [M2](lnkjd_r/tif.medium.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :closed_lock_with_key: **Threat Intelligence Feeds - Mini version** <a name="tifmini"></a>

A size-optimised version of the Threat Intelligence Feeds Medium list. Designed for Adblockers that have problems with the size of the TIF Medium list.

|             | Light           | Normal          | Pro             | Pro++           | Ultimate        |
|:-----------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|
| Included in | :x: | :yellow_square: | :yellow_square: | :yellow_square: | :yellow_square: |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** tif_i_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](lnkgh_a/tif.mini.txt) [M1](lnkgl_a/tif.mini.txt) [M2](lnkjd_a/tif.mini.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [Link](lnkgh_m/tif.mini.txt) [M1](lnkgl_m/tif.mini.txt) [M2](lnkjd_m/tif.mini.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/tif.mini.txt) [M1](lnkgl_w/tif.mini.txt) [M2](lnkjd_w/tif.mini.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/tif.mini-onlydomains.txt) [M1](lnkgl_w/tif.mini-onlydomains.txt) [M2](lnkjd_w/tif.mini-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/tif.mini.txt) [M1](lnkgl_r/tif.mini.txt) [M2](lnkjd_r/tif.mini.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :closed_lock_with_key: **Threat Intelligence Feeds - IPs** <a name="tifips"></a>

IPv4 lists in [plain IP format](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/ips/tif.txt) for firewalls and [AdGuard Home format](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/tif-ips.txt) are also available as an extension to the TIF list.

> [!TIP]
> If the IP list is used in AdGuard Home, all domains that would resolve to the blocked IP are blocked. To prevent the blocked domains from being resolved via IPv6, it is necessary to deactivate resolving via IPv6 in AdGuard Home:                        
> `Settings > DNS settings > DNS server configuration > Disable resolving of IPv6 addresses`

---

### :new: **Newly Registered Domains (NRD/DGA)** <a name="nrd"></a>

Newly registered domains (NRDs) are commonly used by threat actors for phishing, malware, and command-and-control infrastructure due to their disposable nature, which helps evade detection.
        
Two variants are available:  
- **NRDs:** Include all newly registered domains.  
- **Entropy NRDs/DGAs:** Contain only newly registered, high-entropy domains generated by Domain Generation Algorithms (DGAs) extracted from the NRD list. These domains display significant structural randomness and are commonly used by malware to establish resilient and evasive command-and-control channels.

> [!WARNING]
> These lists are very large and resource-intensive. They may cause high memory usage and contain false positives, since some legitimate domains are newly registered. Use with caution and whitelist critical services as needed.
             
> [!CAUTION]
> Use at your own risk. The NRD lists are provided as-is, without guarantees, support, or a process for removing false positives.

> [!IMPORTANT]
> The base data for these lists is provided by [Stamus Labs](https://www.stamus-networks.com/stamus-labs/subscribe-to-threat-intel-feed).                
> Stamus Labs do not guarantee daily updates, and in some cases, data may be delayed by several days.            
>               
> Current status of the data provided:
> - Stamus Labs: nrd_status - nrd_update / nrd_count domains                
                   
#### :new: **NRDs:** Include all newly registered domains     

| Time<br>period | Entries | Format<br>AdBlock | Format<br>Domains |         
|:--------------:|:--------|:-----------------:|:-----------------:|
| 7 days ago to yesterday    | nrd7_dh | [Link](lnkgh_a/nrd7.txt) [M1](lnkgl_a/nrd7.txt) [M2](lnkjd_a/nrd7.txt) | [Link](lnkgh_d/nrd7.txt) [M1](lnkgl_d/nrd7.txt) [M2](lnkjd_d/nrd7.txt) |
| 14 days ago to 8 days ago  | nrd148_dh | [Link](lnkgh_a/nrd14-8.txt) [M1](lnkgl_a/nrd14-8.txt) [M2](lnkjd_a/nrd14-8.txt) | [Link](lnkgh_d/nrd14-8.txt) [M1](lnkgl_d/nrd14-8.txt) [M2](lnkjd_d/nrd14-8.txt) |
| 21 days ago to 15 days ago | nrd2115_dh | [Link](lnkgh_a/nrd21-15.txt) [M1](lnkgl_a/nrd21-15.txt) [M2](lnkjd_a/nrd21-15.txt) | [Link](lnkgh_d/nrd21-15.txt) [M1](lnkgl_d/nrd21-15.txt) [M2](lnkjd_d/nrd21-15.txt) |
| 28 days ago to 22 days ago | nrd2822_dh | [Link](lnkgh_a/nrd28-22.txt) [M1](lnkgl_a/nrd28-22.txt) [M2](lnkjd_a/nrd28-22.txt) | [Link](lnkgh_d/nrd28-22.txt) [M1](lnkgl_d/nrd28-22.txt) [M2](lnkjd_d/nrd28-22.txt) |
| 35 days ago to 29 days ago | nrd3529_dh | [Link](lnkgh_a/nrd35-29.txt) [M1](lnkgl_a/nrd35-29.txt) [M2](lnkjd_a/nrd35-29.txt) | [Link](lnkgh_d/nrd35-29.txt) [M1](lnkgl_d/nrd35-29.txt) [M2](lnkjd_d/nrd35-29.txt) |
             
> [!NOTE]
> To block NRDs from the last 14 days, combine the domain lists from 7 days ago and 14 days ago. For blocking NRDs from the last 21 days, combine lists from 7, 14, and 21 days ago. Etc.
           
> [!TIP]
> In addition to the NRD list formats provided here, the NRDs are also available in other formats in external repositories:
> - Wildcard (Asterisk): [Cebeerre/dnsblocklists](https://github.com/Cebeerre/dnsblocklists)

#### :capital_abcd: **Entropy NRDs/DGAs:** Contain only newly registered, high-entropy domains generated by Domain Generation Algorithms (DGAs)    

> [!NOTE]
> These domains are already included in the full NRD list.
                    
| Time<br>period | Entries | Format<br>AdBlock | Format<br>Domains |         
|:--------------:|:--------|:-----------------:|:-----------------:|
| Past 7 days    | dga7_dh | [Link](lnkgh_a/dga7.txt) [M1](lnkgl_a/dga7.txt) [M2](lnkjd_a/dga7.txt) | [Link](lnkgh_d/dga7.txt) [M1](lnkgl_d/dga7.txt) [M2](lnkjd_d/dga7.txt) |
| Past 14 days   | dga14_dh | [Link](lnkgh_a/dga14.txt) [M1](lnkgl_a/dga14.txt) [M2](lnkjd_a/dga14.txt) | [Link](lnkgh_d/dga14.txt) [M1](lnkgl_d/dga14.txt) [M2](lnkjd_d/dga14.txt) |
| Past 30 days   | dga30_dh | [Link](lnkgh_a/dga30.txt) [M1](lnkgl_a/dga30.txt) [M2](lnkjd_a/dga30.txt) | [Link](lnkgh_d/dga30.txt) [M1](lnkgl_d/dga30.txt) [M2](lnkjd_d/dga30.txt) |

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

**Entries:** bypass_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](lnkgh_a/doh-vpn-proxy-bypass.txt) [M1](lnkgl_a/doh-vpn-proxy-bypass.txt) [M2](lnkjd_a/doh-vpn-proxy-bypass.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [Link](lnkgh_m/doh-vpn-proxy-bypass.txt) [M1](lnkgl_m/doh-vpn-proxy-bypass.txt) [M2](lnkjd_m/doh-vpn-proxy-bypass.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/doh-vpn-proxy-bypass.txt) [M1](lnkgl_w/doh-vpn-proxy-bypass.txt) [M2](lnkjd_w/doh-vpn-proxy-bypass.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/doh-vpn-proxy-bypass-onlydomains.txt) [M1](lnkgl_w/doh-vpn-proxy-bypass-onlydomains.txt) [M2](lnkjd_w/doh-vpn-proxy-bypass-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/doh-vpn-proxy-bypass.txt) [M1](lnkgl_r/doh-vpn-proxy-bypass.txt) [M2](lnkjd_r/doh-vpn-proxy-bypass.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :outbox_tray: **Encrypted DNS Servers only** <a name="bypass_dns"></a>

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** bypassdns_dh domains/hosts - bypassdns_dhc compressed hosts - bypassdns_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [Link](lnkgh_d/doh.txt) [M1](lnkgl_d/doh.txt) [M2](lnkjd_d/doh.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [Link](lnkgh_h/doh.txt) [M1](lnkgl_h/doh.txt) [M2](lnkjd_h/doh.txt) | AdAway, uMatrix, DNS66, NetGuard |
| Hosts<br>Compressed | [Link](lnkgh_h/doh-compressed.txt) [M1](lnkgl_h/doh-compressed.txt) [M2](lnkjd_h/doh-compressed.txt) | Hostfile, Linux |
| Adblock | [Link](lnkgh_a/doh.txt) [M1](lnkgl_a/doh.txt) [M2](lnkjd_a/doh.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [Link](lnkgh_m/doh.txt) [M1](lnkgl_m/doh.txt) [M2](lnkjd_m/doh.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/doh.txt) [M1](lnkgl_w/doh.txt) [M2](lnkjd_w/doh.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/doh-onlydomains.txt) [M1](lnkgl_w/doh-onlydomains.txt) [M2](lnkjd_w/doh-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/doh.txt) [M1](lnkgl_r/doh.txt) [M2](lnkjd_r/doh.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :outbox_tray: **Encrypted DNS Servers IPs** <a name="bypass_ips"></a>

IPv4 lists in [plain IP format](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/ips/doh.txt) for firewalls and [AdGuard Home format](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/doh-ips.txt) are also available.

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

**Entries:** nosafe_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](lnkgh_a/nosafesearch.txt) [M1](lnkgl_a/nosafesearch.txt) [M2](lnkjd_a/nosafesearch.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [Link](lnkgh_m/nosafesearch.txt) [M1](lnkgl_m/nosafesearch.txt) [M2](lnkjd_m/nosafesearch.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/nosafesearch.txt) [M1](lnkgl_w/nosafesearch.txt) [M2](lnkjd_w/nosafesearch.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/nosafesearch-onlydomains.txt) [M1](lnkgl_w/nosafesearch-onlydomains.txt) [M2](lnkjd_w/nosafesearch-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/nosafesearch.txt) [M1](lnkgl_r/nosafesearch.txt) [M2](lnkjd_r/nosafesearch.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :lock_with_ink_pen: **Dynamic DNS blocking - Protects against the malicious use of dynamic DNS services!** <a name="dyndns"></a>

A blocklist for blocking dynamic DNS services to protect against malicious use in phishing campaigns and others.

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** dyndns_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](lnkgh_a/dyndns.txt) [M1](lnkgl_a/dyndns.txt) [M2](lnkjd_a/dyndns.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [Link](lnkgh_m/dyndns.txt) [M1](lnkgl_m/dyndns.txt) [M2](lnkjd_m/dyndns.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/dyndns.txt) [M1](lnkgl_w/dyndns.txt) [M2](lnkjd_w/dyndns.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/dyndns-onlydomains.txt) [M1](lnkgl_w/dyndns-onlydomains.txt) [M2](lnkjd_w/dyndns-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/dyndns.txt) [M1](lnkgl_r/dyndns.txt) [M2](lnkjd_r/dyndns.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :computer: **Badware Hoster blocking - Protects against the malicious use of host services!** <a name="hoster"></a>

A blocklist for blocking known hosters that also host badware via user content to prevent the use of these hosters for malicious purposes.

> [!IMPORTANT]
> This list blocks the root domains of all hosting providers that occasionally appear in threat intelligence feeds due to malicious subdomains. Please be aware that this will also block legitimate sites hosted by these providers. Consider this carefully before using the list.
>                 
> When using this list, users are responsible for unblocking any required subdomains themselves.
 
> [!CAUTION]
> Blocking entire hosting providers is impractical in normal environments and may disrupt legitimate services. In sensitive environments, however, stricter blocking can be justified to maximize security.

|             | Light | Normal | Pro | Pro++ | Ultimate | TIF |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|:---:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      | :x: |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** hoster_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](lnkgh_a/hoster.txt) [M1](lnkgl_a/hoster.txt) [M2](lnkjd_a/hoster.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [Link](lnkgh_m/hoster.txt) [M1](lnkgl_m/hoster.txt) [M2](lnkjd_m/hoster.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/hoster.txt) [M1](lnkgl_w/hoster.txt) [M2](lnkjd_w/hoster.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/hoster-onlydomains.txt) [M1](lnkgl_w/hoster-onlydomains.txt) [M2](lnkjd_w/hoster-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/hoster.txt) [M1](lnkgl_r/hoster.txt) [M2](lnkjd_r/hoster.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |
| ControlD | [Link](https://github.com/hagezi/dns-blocklists/blob/main/controld/badware-hoster-folder.json)| ControlD folder |

---

### :calling: **URL Shortener - Blocks link shortener!** <a name="urlshortener"></a>

A blocklist for blocking all known URL/link shortener.

> [!WARNING]
> Not suitable for use in standard environments. Blocking all URL shorteners is recommended mainly in highly sensitive environments, as they can hide link destinations and facilitate attacks. In less sensitive settings, monitoring, selective blocking, or user education usually suffice to manage risks.
>                 
> When using this list, users are responsible for unblocking any required domains themselves.

|             | Light | Normal | Pro | Pro++ | Ultimate | TIF |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|:---:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      | :x: |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** shortener_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](lnkgh_a/urlshortener.txt) [M1](lnkgl_a/urlshortener.txt) [M2](lnkjd_a/urlshortener.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [Link](lnkgh_m/urlshortener.txt) [M1](lnkgl_m/urlshortener.txt) [M2](lnkjd_m/urlshortener.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/urlshortener.txt) [M1](lnkgl_w/urlshortener.txt) [M2](lnkjd_w/urlshortener.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/urlshortener-onlydomains.txt) [M1](lnkgl_w/urlshortener-onlydomains.txt) [M2](lnkjd_w/urlshortener-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/urlshortener.txt) [M1](lnkgl_r/urlshortener.txt) [M2](lnkjd_r/urlshortener.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :crystal_ball: **Most Abused TLDs - Protects against known malicious Top Level Domains! (Recommended)** <a name="tlds"></a>

A blocklist for blocking Top Most Abused Top Level Domains, merged from [@Yokoffing](https://github.com/yokoffing), [@DandelionSprout](https://github.com/DandelionSprout/), [@LennyFox](https://github.com/lennyfox) Cloudflare Radar, Netcraft and SpamHaus.

> [!WARNING]
> The Most Abused TLDs list is designed to block entire top-level domains (such as *.top, *.shop, *.gdn) with poor reputations. While this may also block some legitimate sites, it is highly effective at preventing spam, scams, phishing, malware, and other malicious content. Users should be aware of which sites are affected by this list.
>
> Only widely-used, reputable domains, such as those appearing on major top lists (Umbrella, Cloudflare, Tranco, Chrome, DomCop, etc.) or those essential for popular apps and services will be considered for exclusion. Illegal domains, including those related to piracy, will not be unblocked. Domains that do not meet these criteria are reviewed individually; if exclusion is not justified, they remain blocked. Users who need access to such domains should add them to their personal allowlist.
>
> This selective approach is necessary because AdGuard and uBlock Origin have technical limits on rule length when using denyallow/domain modifiers. Attempting to exclude every legitimate domain would eventually break important rules, so exclusions must be limited and carefully chosen.
              
|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| AdGuard | [Link](lnkgh_a/spam-tlds.txt) [M1](lnkgl_a/spam-tlds.txt) [M2](lnkjd_a/spam-tlds.txt) | AdGuard, AdGuard Home |
| uBlock Origin  | [Link](lnkgh_a/spam-tlds-ublock.txt) [M1](lnkgl_a/spam-tlds-ublock.txt) [M2](lnkjd_a/spam-tlds-ublock.txt) | uBlock Origin, Adblock Plus |
| AdBlock  | [Link](lnkgh_a/spam-tlds-adblock.txt) [M1](lnkgl_a/spam-tlds-adblock.txt) [M2](lnkjd_a/spam-tlds-adblock.txt) | Pi-hole, TechnitiumDNS<br>Contains only spam TLDs that do not have any exclusions. |
| AdBlock<br>(Aggressive)<br><br>Allowlist<br><br> | [Link](lnkgh_a/spam-tlds-adblock-aggressive.txt) [M1](lnkgl_a/spam-tlds-adblock-aggressive.txt) [M2](lnkjd_a/spam-tlds-adblock-aggressive.txt)<br><br>[Link](lnkgh_a/spam-tlds-adblock-allow.txt) [M1](lnkgl_a/spam-tlds-adblock-allow.txt) [M2](lnkjd_a/spam-tlds-adblock-allow.txt) | Pi-hole, TechnitiumDNS |
| Wildcard<br>Domains<br><br>Allowlist<br><br> | [Link](lnkgh_w/spam-tlds-onlydomains.txt) [M1](lnkgl_w/spam-tlds-onlydomains.txt) [M2](lnkjd_w/spam-tlds-onlydomains.txt)<br><br>[Link](lnkgh_w/spam-tlds-allow-onlydomains.txt) [M1](lnkgl_w/spam-tlds-allow-onlydomains.txt) [M2](lnkjd_w/spam-tlds-allow-onlydomains.txt) | DNSCrypt |
| RPZ | [Link](lnkgh_r/spam-tlds-rpz.txt) [M1](lnkgl_r/spam-tlds-rpz.txt) [M2](lnkjd_r/spam-tlds-rpz.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound<br>Contains only spam TLDs that do not have any exclusions. |
| RPZ<br>(Aggressive) | [Link](lnkgh_r/spam-tlds-rpz-aggressive.txt) [M1](lnkgl_r/spam-tlds-rpz-aggressive.txt) [M2](lnkjd_r/spam-tlds-rpz-aggressive.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound<br>Contains all spam TLDs, corresponds to the AdGuard and uBlock Origin version without exclusions. |
| ControlD | [Link](https://github.com/hagezi/dns-blocklists/blob/main/controld/spam-tlds-combined-folder.json) | ControlD folder |

---

### :shield: **DNS Rebind Protection - Prevents attackers from resolving domains to local IPs!** <a name="dnsrebind"></a>

DNS Rebind Protection is a security mechanism that prevents attackers from manipulating DNS responses to make a domain resolve to private or local IP addresses, thereby blocking malicious scripts from accessing internal networks through DNS rebinding attacks.

> [!IMPORTANT]
> This list is only compatible with AdGuard/AdGuard Home and can also be selected in AdGuard DNS.                  
> Other DNS blockers may include built‑in DNS rebinding protection.            
>          
> Since rebinding protection blocks all domains resolving to local IPs, internal hostnames may also be affected.           
> In AdGuard, you should therefore whitelist your local domains, for example: `@@||fritz.box^`

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| AdGuard | [Link](lnkgh_g/dns-rebind-protection.txt) [M1](lnkgl_g/dns-rebind-protection.txt) [M2](lnkjd_g/dns-rebind-protection.txt) | AdGuard, AdGuard Home |

---

### :skull: **Anti Piracy - Protects against piracy!** <a name="piracy"></a>

Blocks websites and services that are mainly used for the illegal distribution of copyrighted content.

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** piracy_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](lnkgh_a/anti.piracy.txt) [M1](lnkgl_a/anti.piracy.txt) [M2](lnkjd_a/anti.piracy.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [Link](lnkgh_m/anti.piracy.txt) [M1](lnkgl_m/anti.piracy.txt) [M2](lnkjd_m/anti.piracy.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/anti.piracy.txt) [M1](lnkgl_w/anti.piracy.txt) [M2](lnkjd_w/anti.piracy.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/anti.piracy-onlydomains.txt) [M1](lnkgl_w/anti.piracy-onlydomains.txt) [M2](lnkjd_w/anti.piracy-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/anti.piracy.txt) [M1](lnkgl_r/anti.piracy.txt) [M2](lnkjd_r/anti.piracy.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :slot_machine: **Gambling - Protects against gambling content!** <a name="gambling"></a>

Blocks gambling content.

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** gambling_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](lnkgh_a/gambling.txt) [M1](lnkgl_a/gambling.txt) [M2](lnkjd_a/gambling.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam |
| DNSMasq | [Link](lnkgh_m/gambling.txt) [M1](lnkgl_m/gambling.txt) [M2](lnkjd_m/gambling.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/gambling.txt) [M1](lnkgl_w/gambling.txt) [M2](lnkjd_w/gambling.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/gambling-onlydomains.txt) [M1](lnkgl_w/gambling-onlydomains.txt) [M2](lnkjd_w/gambling-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/gambling.txt) [M1](lnkgl_r/gambling.txt) [M2](lnkjd_r/gambling.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :slot_machine: **Gambling - Medium version** <a name="gamblingmedium"></a>

A medium version of the Gambling list. Designed for Adblockers that have problems with the size of the full Gambling list.

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** gamblingm_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](lnkgh_a/gambling.medium.txt) [M1](lnkgl_a/gambling.medium.txt) [M2](lnkjd_a/gambling.medium.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [Link](lnkgh_m/gambling.medium.txt) [M1](lnkgl_m/gambling.medium.txt) [M2](lnkjd_m/gambling.medium.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/gambling.medium.txt) [M1](lnkgl_w/gambling.medium.txt) [M2](lnkjd_w/gambling.medium.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/gambling.medium-onlydomains.txt) [M1](lnkgl_w/gambling.medium-onlydomains.txt) [M2](lnkjd_w/gambling.medium-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/gambling.medium.txt) [M1](lnkgl_r/gambling.medium.txt) [M2](lnkjd_r/gambling.medium.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :slot_machine: **Gambling - Mini version** <a name="gamblingmini"></a>

A size-optimised version of the Gambling Medium list. This list only contains domains that have been found on Top 1/10M lists (Umbrella, Cloudflare, Tranco, Chrome, BuiltWith, Majestic, DomCop).

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** gamblingi_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](lnkgh_a/gambling.mini.txt) [M1](lnkgl_a/gambling.mini.txt) [M2](lnkjd_a/gambling.mini.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [Link](lnkgh_m/gambling.mini.txt) [M1](lnkgl_m/gambling.mini.txt) [M2](lnkjd_m/gambling.mini.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/gambling.mini.txt) [M1](lnkgl_w/gambling.mini.txt) [M2](lnkjd_w/gambling.mini.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/gambling.mini-onlydomains.txt) [M1](lnkgl_w/gambling.mini-onlydomains.txt) [M2](lnkjd_w/gambling.mini-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/gambling.mini.txt) [M1](lnkgl_r/gambling.mini.txt) [M2](lnkjd_r/gambling.mini.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :speech_balloon: **Social Networks - Blocks access to social networks!** <a name="social"></a>

Blocks access to social networks (Facebook, Instagram, TikTok, X (formerly Twitter), Snapchat, ...).
                  
> [!NOTE]
> This list does not block messaging services such as WhatsApp or streaming platforms like Twitch. The blocking is strictly limited to traditional social networking sites only.
                 
|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** social_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](lnkgh_a/social.txt) [M1](lnkgl_a/social.txt) [M2](lnkjd_a/social.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [Link](lnkgh_m/social.txt) [M1](lnkgl_m/social.txt) [M2](lnkjd_m/social.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/social.txt) [M1](lnkgl_w/social.txt) [M2](lnkjd_w/social.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/social-onlydomains.txt) [M1](lnkgl_w/social-onlydomains.txt) [M2](lnkjd_w/social-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/social.txt) [M1](lnkgl_r/social.txt) [M2](lnkjd_r/social.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :underage: **NSFW - Protects against adult content!** <a name="nsfw"></a>

Blocks adult content.

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** nsfw_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [Link](lnkgh_a/nsfw.txt) [M1](lnkgl_a/nsfw.txt) [M2](lnkjd_a/nsfw.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam |
| DNSMasq | [Link](lnkgh_m/nsfw.txt) [M1](lnkgl_m/nsfw.txt) [M2](lnkjd_m/nsfw.txt) | DNSMasq (v2.86 or newer), Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [Link](lnkgh_w/nsfw.txt) [M1](lnkgl_w/nsfw.txt) [M2](lnkjd_w/nsfw.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [Link](lnkgh_w/nsfw-onlydomains.txt) [M1](lnkgl_w/nsfw-onlydomains.txt) [M2](lnkjd_w/nsfw-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, adblock-lean, PersonalDNSfilter, InviZible Pro |
| RPZ | [Link](lnkgh_r/nsfw.txt) [M1](lnkgl_r/nsfw.txt) [M2](lnkjd_r/nsfw.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :calling: **Native Tracker - Broadband tracker of devices, services and operating systems** <a name="native"></a>

Blocks native broadband tracker from devices, services and operating systems that track your activity.

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :yellow_square:   | :yellow_square:    | :yellow_square: | :yellow_square:  | :green_circle:      |

:green_circle: yes :yellow_square: partially :x: no

> [!IMPORTANT]
> The native tracker lists encompass all trackers used for monitoring user activity, which may also result in certain restrictions. These lists are integrated across the standard tiers—Light, Normal, Pro, Pro++, and Ultimate—each providing different levels of blocking:
>          
> - Light to Pro: These lists only block native trackers that do not interfere with functionality, ensuring a smooth experience.
> - Pro++ (Aggressive): This list blocks additional native trackers that may cause some restrictions or limit certain features.
> - Ultimate: This list provides the most comprehensive blocking, including all native trackers for maximum privacy.
>           
> By choosing a specific list version, you can control how aggressively native trackers are blocked according to your preferences.
>               
> When combining native tracker lists with standard lists, you may need to manually unblock certain native trackers as required.

| Device/Service | Domains | Hosts | Adblock | DNSMasq | Wildcard<br>Asterisk | Wildcard<br>Domains | RPZ |
|:-------|:--------:|:------:|:--------:|:--------:|:---------:|:--------:|:--------:|
| Amazon (Devices, Shopping, Video) | [Link](lnkgh_d/native.amazon.txt) [M1](lnkgl_d/native.amazon.txt) [M2](lnkjd_d/native.amazon.txt) | [Link](lnkgh_h/native.amazon.txt) [M1](lnkgl_h/native.amazon.txt) [M2](lnkjd_h/native.amazon.txt) | [Link](lnkgh_a/native.amazon.txt) [M1](lnkgl_a/native.amazon.txt) [M2](lnkjd_a/native.amazon.txt) | [Link](lnkgh_m/native.amazon.txt) [M1](lnkgl_m/native.amazon.txt) [M2](lnkjd_m/native.amazon.txt) | [Link](lnkgh_w/native.amazon.txt) [M1](lnkgl_w/native.amazon.txt) [M2](lnkjd_w/native.amazon.txt) | [Link](lnkgh_w/native.amazon-onlydomains.txt) [M1](lnkgl_w/native.amazon-onlydomains.txt) [M2](lnkjd_w/native.amazon-onlydomains.txt) | [Link](lnkgh_r/native.amazon.txt) [M1](lnkgl_r/native.amazon.txt) [M2](lnkjd_r/native.amazon.txt) |
| Apple (iOS, macOS, tvOS) | [Link](lnkgh_d/native.apple.txt) [M1](lnkgl_d/native.apple.txt) [M2](lnkjd_d/native.apple.txt) | [Link](lnkgh_h/native.apple.txt) [M1](lnkgl_h/native.apple.txt) [M2](lnkjd_h/native.apple.txt) | [Link](lnkgh_a/native.apple.txt) [M1](lnkgl_a/native.apple.txt) [M2](lnkjd_a/native.apple.txt) | [Link](lnkgh_m/native.apple.txt) [M1](lnkgl_m/native.apple.txt) [M2](lnkjd_m/native.apple.txt) | [Link](lnkgh_w/native.apple.txt) [M1](lnkgl_w/native.apple.txt) [M2](lnkjd_w/native.apple.txt) | [Link](lnkgh_w/native.apple-onlydomains.txt) [M1](lnkgl_w/native.apple-onlydomains.txt) [M2](lnkjd_w/native.apple-onlydomains.txt) | [Link](lnkgh_r/native.apple.txt) [M1](lnkgl_r/native.apple.txt) [M2](lnkjd_r/native.apple.txt) |
| Huawei (Devices) | [Link](lnkgh_d/native.huawei.txt) [M1](lnkgl_d/native.huawei.txt) [M2](lnkjd_d/native.huawei.txt) | [Link](lnkgh_h/native.huawei.txt) [M1](lnkgl_h/native.huawei.txt) [M2](lnkjd_h/native.huawei.txt) | [Link](lnkgh_a/native.huawei.txt) [M1](lnkgl_a/native.huawei.txt) [M2](lnkjd_a/native.huawei.txt) | [Link](lnkgh_m/native.huawei.txt) [M1](lnkgl_m/native.huawei.txt) [M2](lnkjd_m/native.huawei.txt) | [Link](lnkgh_w/native.huawei.txt) [M1](lnkgl_w/native.huawei.txt) [M2](lnkjd_w/native.huawei.txt) | [Link](lnkgh_w/native.huawei-onlydomains.txt) [M1](lnkgl_w/native.huawei-onlydomains.txt) [M2](lnkjd_w/native.huawei-onlydomains.txt) | [Link](lnkgh_r/native.huawei.txt) [M1](lnkgl_r/native.huawei.txt) [M2](lnkjd_r/native.huawei.txt) |
| Microsoft (Windows, Office, MSN) | [Link](lnkgh_d/native.winoffice.txt) [M1](lnkgl_d/native.winoffice.txt) [M2](lnkjd_d/native.winoffice.txt) | [Link](lnkgh_h/native.winoffice.txt) [M1](lnkgl_h/native.winoffice.txt) [M2](lnkjd_h/native.winoffice.txt) | [Link](lnkgh_a/native.winoffice.txt) [M1](lnkgl_a/native.winoffice.txt) [M2](lnkjd_a/native.winoffice.txt) | [Link](lnkgh_m/native.winoffice.txt) [M1](lnkgl_m/native.winoffice.txt) [M2](lnkjd_m/native.winoffice.txt) | [Link](lnkgh_w/native.winoffice.txt) [M1](lnkgl_w/native.winoffice.txt) [M2](lnkjd_w/native.winoffice.txt) | [Link](lnkgh_w/native.winoffice-onlydomains.txt) [M1](lnkgl_w/native.winoffice-onlydomains.txt) [M2](lnkjd_w/native.winoffice-onlydomains.txt) | [Link](lnkgh_r/native.winoffice.txt) [M1](lnkgl_r/native.winoffice.txt) [M2](lnkjd_r/native.winoffice.txt) |
| Samsung | [Link](lnkgh_d/native.samsung.txt) [M1](lnkgl_d/native.samsung.txt) [M2](lnkjd_d/native.samsung.txt) | [Link](lnkgh_h/native.samsung.txt) [M1](lnkgl_h/native.samsung.txt) [M2](lnkjd_h/native.samsung.txt) | [Link](lnkgh_a/native.samsung.txt) [M1](lnkgl_a/native.samsung.txt) [M2](lnkjd_a/native.samsung.txt) | [Link](lnkgh_m/native.samsung.txt) [M1](lnkgl_m/native.samsung.txt) [M2](lnkjd_m/native.samsung.txt) | [Link](lnkgh_w/native.samsung.txt) [M1](lnkgl_w/native.samsung.txt) [M2](lnkjd_w/native.samsung.txt) | [Link](lnkgh_w/native.samsung-onlydomains.txt) [M1](lnkgl_w/native.samsung-onlydomains.txt) [M2](lnkjd_w/native.samsung-onlydomains.txt) | [Link](lnkgh_r/native.samsung.txt) [M1](lnkgl_r/native.samsung.txt) [M2](lnkjd_r/native.samsung.txt) |
| TikTok (Fingerprinting) | [Link](lnkgh_d/native.tiktok.txt) [M1](lnkgl_d/native.tiktok.txt) [M2](lnkjd_d/native.tiktok.txt) | [Link](lnkgh_h/native.tiktok.txt) [M1](lnkgl_h/native.tiktok.txt) [M2](lnkjd_h/native.tiktok.txt) | [Link](lnkgh_a/native.tiktok.txt) [M1](lnkgl_a/native.tiktok.txt) [M2](lnkjd_a/native.tiktok.txt) | [Link](lnkgh_m/native.tiktok.txt) [M1](lnkgl_m/native.tiktok.txt) [M2](lnkjd_m/native.tiktok.txt) | [Link](lnkgh_w/native.tiktok.txt) [M1](lnkgl_w/native.tiktok.txt) [M2](lnkjd_w/native.tiktok.txt) | [Link](lnkgh_w/native.tiktok-onlydomains.txt) [M1](lnkgl_w/native.tiktok-onlydomains.txt) [M2](lnkjd_w/native.tiktok-onlydomains.txt) | [Link](lnkgh_r/native.tiktok.txt) [M1](lnkgl_r/native.tiktok.txt) [M2](lnkjd_r/native.tiktok.txt) |
| TikTok (Fingerprinting) Aggressive | [Link](lnkgh_d/native.tiktok.extended.txt) [M1](lnkgl_d/native.tiktok.extended.txt) [M2](lnkjd_d/native.tiktok.extended.txt) | [Link](lnkgh_h/native.tiktok.extended.txt) [M1](lnkgl_h/native.tiktok.extended.txt) [M2](lnkjd_h/native.tiktok.extended.txt) | [Link](lnkgh_a/native.tiktok.extended.txt) [M1](lnkgl_a/native.tiktok.extended.txt) [M2](lnkjd_a/native.tiktok.extended.txt) | [Link](lnkgh_m/native.tiktok.extended.txt) [M1](lnkgl_m/native.tiktok.extended.txt) [M2](lnkjd_m/native.tiktok.extended.txt) | [Link](lnkgh_w/native.tiktok.extended.txt) [M1](lnkgl_w/native.tiktok.extended.txt) [M2](lnkjd_w/native.tiktok.extended.txt) | [Link](lnkgh_w/native.tiktok.extended-onlydomains.txt) [M1](lnkgl_w/native.tiktok.extended-onlydomains.txt) [M2](lnkjd_w/native.tiktok.extended-onlydomains.txt) | [Link](lnkgh_r/native.tiktok.extended.txt) [M1](lnkgl_r/native.tiktok.extended.txt) [M2](lnkjd_r/native.tiktok.extended.txt) |
| LG webOS | [Link](lnkgh_d/native.lgwebos.txt) [M1](lnkgl_d/native.lgwebos.txt) [M2](lnkjd_d/native.lgwebos.txt) | [Link](lnkgh_h/native.lgwebos.txt) [M1](lnkgl_h/native.lgwebos.txt) [M2](lnkjd_h/native.lgwebos.txt) | [Link](lnkgh_a/native.lgwebos.txt) [M1](lnkgl_a/native.lgwebos.txt) [M2](lnkjd_a/native.lgwebos.txt) | [Link](lnkgh_m/native.lgwebos.txt) [M1](lnkgl_m/native.lgwebos.txt) [M2](lnkjd_m/native.lgwebos.txt) | [Link](lnkgh_w/native.lgwebos.txt) [M1](lnkgl_w/native.lgwebos.txt) [M2](lnkjd_w/native.lgwebos.txt) | [Link](lnkgh_w/native.lgwebos-onlydomains.txt) [M1](lnkgl_w/native.lgwebos-onlydomains.txt) [M2](lnkjd_w/native.lgwebos-onlydomains.txt) | [Link](lnkgh_r/native.lgwebos.txt) [M1](lnkgl_r/native.lgwebos.txt) [M2](lnkjd_r/native.lgwebos.txt) |
| Roku | [Link](lnkgh_d/native.roku.txt) [M1](lnkgl_d/native.roku.txt) [M2](lnkjd_d/native.roku.txt) | [Link](lnkgh_h/native.roku.txt) [M1](lnkgl_h/native.roku.txt) [M2](lnkjd_h/native.roku.txt) | [Link](lnkgh_a/native.roku.txt) [M1](lnkgl_a/native.roku.txt) [M2](lnkjd_a/native.roku.txt) | [Link](lnkgh_m/native.roku.txt) [M1](lnkgl_m/native.roku.txt) [M2](lnkjd_m/native.roku.txt) | [Link](lnkgh_w/native.roku.txt) [M1](lnkgl_w/native.roku.txt) [M2](lnkjd_w/native.roku.txt) | [Link](lnkgh_w/native.roku-onlydomains.txt) [M1](lnkgl_w/native.roku-onlydomains.txt) [M2](lnkjd_w/native.roku-onlydomains.txt) | [Link](lnkgh_r/native.roku.txt) [M1](lnkgl_r/native.roku.txt) [M2](lnkjd_r/native.roku.txt) |
| Vivo | [Link](lnkgh_d/native.vivo.txt) [M1](lnkgl_d/native.vivo.txt) [M2](lnkjd_d/native.vivo.txt) | [Link](lnkgh_h/native.vivo.txt) [M1](lnkgl_h/native.vivo.txt) [M2](lnkjd_h/native.vivo.txt) | [Link](lnkgh_a/native.vivo.txt) [M1](lnkgl_a/native.vivo.txt) [M2](lnkjd_a/native.vivo.txt) | [Link](lnkgh_m/native.vivo.txt) [M1](lnkgl_m/native.vivo.txt) [M2](lnkjd_m/native.vivo.txt) | [Link](lnkgh_w/native.vivo.txt) [M1](lnkgl_w/native.vivo.txt) [M2](lnkjd_w/native.vivo.txt) | [Link](lnkgh_w/native.vivo-onlydomains.txt) [M1](lnkgl_w/native.vivo-onlydomains.txt) [M2](lnkjd_w/native.vivo-onlydomains.txt) | [Link](lnkgh_r/native.vivo.txt) [M1](lnkgl_r/native.vivo.txt) [M2](lnkjd_r/native.vivo.txt) |
| OPPO/Realme | [Link](lnkgh_d/native.oppo-realme.txt) [M1](lnkgl_d/native.oppo-realme.txt) [M2](lnkjd_d/native.oppo-realme.txt) | [Link](lnkgh_h/native.oppo-realme.txt) [M1](lnkgl_h/native.oppo-realme.txt) [M2](lnkjd_h/native.oppo-realme.txt) | [Link](lnkgh_a/native.oppo-realme.txt) [M1](lnkgl_a/native.oppo-realme.txt) [M2](lnkjd_a/native.oppo-realme.txt) | [Link](lnkgh_m/native.oppo-realme.txt) [M1](lnkgl_m/native.oppo-realme.txt) [M2](lnkjd_m/native.oppo-realme.txt) | [Link](lnkgh_w/native.oppo-realme.txt) [M1](lnkgl_w/native.oppo-realme.txt) [M2](lnkjd_w/native.oppo-realme.txt) | [Link](lnkgh_w/native.oppo-realme-onlydomains.txt) [M1](lnkgl_w/native.oppo-realme-onlydomains.txt) [M2](lnkjd_w/native.oppo-realme-onlydomains.txt) | [Link](lnkgh_r/native.oppo-realme.txt) [M1](lnkgl_r/native.oppo-realme.txt) [M2](lnkjd_r/native.oppo-realme.txt) |
| Xiaomi | [Link](lnkgh_d/native.xiaomi.txt) [M1](lnkgl_d/native.xiaomi.txt) [M2](lnkjd_d/native.xiaomi.txt) | [Link](lnkgh_h/native.xiaomi.txt) [M1](lnkgl_h/native.xiaomi.txt) [M2](lnkjd_h/native.xiaomi.txt) | [Link](lnkgh_a/native.xiaomi.txt) [M1](lnkgl_a/native.xiaomi.txt) [M2](lnkjd_a/native.xiaomi.txt) | [Link](lnkgh_m/native.xiaomi.txt) [M1](lnkgl_m/native.xiaomi.txt) [M2](lnkjd_m/native.xiaomi.txt) | [Link](lnkgh_w/native.xiaomi.txt) [M1](lnkgl_w/native.xiaomi.txt) [M2](lnkjd_w/native.xiaomi.txt) | [Link](lnkgh_w/native.xiaomi-onlydomains.txt) [M1](lnkgl_w/native.xiaomi-onlydomains.txt) [M2](lnkjd_w/native.xiaomi-onlydomains.txt) | [Link](lnkgh_r/native.xiaomi.txt) [M1](lnkgl_r/native.xiaomi.txt) [M2](lnkjd_r/native.xiaomi.txt) |

---

### :bulb: **Recommendation** <a name="recommendation"></a>

As a network-wide DNS blocker, I recommend using [Adguard Home](https://adguard.com), [Pi-hole](https://pi-hole.net/), [TechnitiumDNS](https://technitium.com/dns/), [Blocky](https://github.com/0xERR0R/blocky) (advanced users), [adblock-lean](https://github.com/lynxthecat/adblock-lean) (OpenWrt) or [eBlocker](https://eblocker.org/).

DNS blockers offer good protection of privacy by blocking tracking, metrics and telemetry. They can be used to block the vast majority of ads, malware, scam, fake and co, but not everything can be blocked at the DNS level!
Therefore, I **additionally** recommend the use of a browser content blocker such as [AdGuard](https://adguard.com), [uBlock Origin](https://ublockorigin.com) or [Ghostery](https://www.ghostery.com/).

Check out Yokoffing's [Recommended Filters for uBlock Origin](https://github.com/yokoffing/filterlists) for content blocker filter lists.

> [!TIP]
> :information_desk_person: [Which version of the lists should I use?](https://github.com/hagezi/dns-blocklists/wiki/FAQ#whatshouldiuse)

---

### :department_store: **Online DNS Services** <a name="dnsservices"></a>

If you don't run your own DNS server on your home network or if you are looking for additional protection for your mobile devices when they are not connected to the home network, then you can use one of the following DNS services.

**Availability of the lists in the respective DNS services:** <a name="availablelists"></a>

| Service | Light | Nor<br>mal | Pro | Pro<br>++ | Ulti<br>mate | TIF | By<br>pass | Dyn<br>DNS | Hoster | TLDs | Anti<br>Piracy | Gam<br>bling | ... |
| :----- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| AdGuard<br>DNS         | :x:            | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle:   | :green_circle:   | :green_circle: | :green_circle: | :green_circle:   | :green_circle:   | :green_circle: |
| ControlD            | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :yellow_square:  | :yellow_square:  | :notebook:            | :notebook:            | :yellow_square:  | :yellow_square:  | :x: |
| Rethink<br>DNS          | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle:   | :green_circle: | :x:            | :x:              | :x: | :x: |
| DNS<br>warden           | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :x:              | :x:              | :x:            | :x:            | :x:              | :x:              | :x: |

:yellow_square: Are included in the ControlD native lists of the respective category.                        
:notebook: Available as [ControlD folder](https://github.com/hagezi/dns-blocklists/tree/main/controld).

#### :department_store: **AdGuardDNS - limited free/unlimited trial/paid** <a name="adguarddns"></a>

In [AdGuardDNS](https://adguard-dns.io) you can use my:

- Normal, Pro, Pro++, Ultimate
- Threat-Intelligence-Feeds (TIF), Most Abused TLDs, Badware Hoster, DynDNS, DNS Rebind Protection, URLshortener
- DoH/VPN/TOR/Proxy Bypass
- Gambling
- Anti Piracy
- Native Tracker (Apple, OPPO & Realme, Samsung, Vivo, Windows/Office, Xiaomi)
- Allowlist Referral

#### :department_store: **ControlD - free/paid** <a name="controld"></a>

In [ControlD](https://controld.com) you can use my Light, Normal, Pro, Pro++, Ultimate and TIF lists.

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

Check out Yokoffing's [ControlD Config Guide](https://github.com/yokoffing/Control-D-Config) for recommended [ControlD](https://controld.com) configuration settings.

#### :department_store: **HaGeZi DNS (EU) - free** <a name="hagezidns"></a>

HaGeZi DNS provides free, non-commercial public resolvers for Europe, combining privacy and security with minimal restrictions using Multi Pro and Threat Intelligence Feed blocklists.

For details, visit the [project repository](https://github.com/hagezi/dns-servers).                

| Location           | Protocols     | Endpoint/URL                          | Apple<br>Config        | Recommended for    |
|--------------------|---------------|-------------------------------------|-----------------------|-------------------------|
| Germany, Falkenstein| DoH/DoH3      | `https://root.hagezi.org/dns-query`   | [Link](https://raw.githubusercontent.com/hagezi/dns-servers/refs/heads/main/mobileconfig/root-hagezi-org.mobileconfig) [QR](/mobileconfig/root-hagezi-org.mobileconfig.png)    | AT, BA, BE, BG, CH, CZ, DE, DK, FR, GB, HU, IE, IT, LU, NL, PL, RO, SI, SK | 
|                    | DoT/QUIC      | `root.hagezi.org`                     |                       |                         |
| Germany, Nuremberg| DoH/DoH3      | `https://wurzn.hagezi.org/dns-query`   | [Link](https://raw.githubusercontent.com/hagezi/dns-servers/refs/heads/main/mobileconfig/wurzn-hagezi-org.mobileconfig) [QR](/mobileconfig/wurzn-hagezi-org.mobileconfig.png)    | AT, BA, BE, BG, CH, CZ, DE, DK, ES, FR, GB, GR, HR, HU, IE, IT, LU, MD, MK, MT, NL, PL, PT, RO, RS, SI, SK, TR, UA | 
|                    | DoT/QUIC      | `wurzn.hagezi.org`                     |                       |                         |
| Finland, Helsinki   | DoH/DoH3      | `https://juuri.hagezi.org/dns-query`  | [Link](https://raw.githubusercontent.com/hagezi/dns-servers/refs/heads/main/mobileconfig/juuri-hagezi-org.mobileconfig) [QR](/mobileconfig/juuri-hagezi-org.mobileconfig.png)    | DK, EE, FI, LT, LV, NO, SE | 
|                    | DoT/QUIC      | `juuri.hagezi.org`                    |                       |                         |

#### :department_store: **DNSBUNKER.org (Germany) - free** <a name="dnsbunker"></a>

[DNSBUNKER.org](https://dnsbunker.org/) is a hardened, privacy-first DNS resolver located in Germany.
              
| Blocklists | DNS-over-HTTPS/3 | DNS-over-TLS/QUIC | Apple |
|:-----------|:---------------|:------------------|:--------|
| Pro plus + TIF + DoH Bypass + Allowlist Referral | `https://dnsbunker.org/dns-query` | `dnsbunker.org ` | [Link](https://dnsbunker.org/doh.mobileconfig) |

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

#### :department_store: **OpenBLD.net - free** <a name="openbld"></a>

[OpenBLD.net](https://openbld.net/docs/get-started/third-party-filters/hagezi/) uses my Pro in combination with the TIF blocklist.

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

If you like this project and find it useful, please leave a :star: (top right) and become a [stargazer](https://github.com/hagezi/dns-blocklists/stargazers)!
                      
Your feedback, ideas, reports of domains to block or false positives, and any kind of collaboration are always welcome to help keep the internet safer and cleaner.
                     
This project thrives thanks to an active and supportive community and is provided free of charge with regular updates and maintenance. Donations help cover infrastructure costs and support ongoing development. Contributions are entirely voluntary, and every bit of support is greatly appreciated. 
                   
**Thank you for being part of the community!**
                             
<a href="https://github.com/sponsors/hagezi" target="_blank"><img src="https://img.shields.io/badge/Sponsor-♥️-orange" alt="Support via GitHub Sponsors" /></a>
<a href="https://liberapay.com/hagezi/donate" target="_blank"><img src="https://img.shields.io/liberapay/patrons/hagezi.svg?logo=liberapay" alt="Donate using Liberapay" /></a>
[![Patreon](https://img.shields.io/badge/Patreon-Support-orange?logo=patreon&style=flat)](https://www.patreon.com/hagezidns)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-orange?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/hagezi)

---

### :stars: Stargazers <a name="stargazers"></a>

[![Star History Chart](https://api.star-history.com/svg?repos=hagezi/dns-blocklists&type=Date)](https://star-history.com/#hagezi/dns-blocklists&Date)

---

### :warning: Disclaimer <a name="disclaimer"></a>

> [!IMPORTANT]
> The provided DNS blocklists are made available free of charge and without any warranty of any kind. The creator or operator of these blocklists assumes no liability for the accuracy, completeness, timeliness, or suitability of the provided information for any particular purpose. In particular, there is no guarantee that all harmful or unwanted domains are captured, or that legitimate domains will not be erroneously blocked.
>           
> Use of the DNS blocklists is strictly at the user's own risk. Any direct or indirect liability for material or non-material damages arising from the use or non-use of the provided lists is expressly excluded, unless such damage is demonstrably the result of deliberate or grossly negligent misconduct on the part of the provider.
>           
> The lists are intended solely as an additional, non-exclusive security measure and do not replace the user's own responsibility for due diligence or the use of further protective mechanisms (e.g. firewalls, antivirus software, IDS/IPS systems). Compatibility with specific systems, software solutions, or individual deployment scenarios is not guaranteed.
>            
> Redistribution and adaptation of the blocklists is permitted within the scope of the applicable open source license terms. It is the user's responsibility to be aware of and comply with the respective license conditions.
>            
> By using the DNS blocklists, you expressly acknowledge and accept these terms and conditions.

---

### **Keep the internet clean!**

---

[![https://gafam.info](https://ptrace.gafam.info/unofficial/img/color/lqdn-gafam-poster-en-color-5x1-2560x.png)](https://gafam.info)

---

<div align="center">

[![Mail](https://img.shields.io/badge/Proton%20Mail-6D4AFF.svg?style=for-the-badge&logo=Proton-Mail&logoColor=white)](mailto:hagezi@protonmail.com)
[![Signal](https://img.shields.io/badge/Signal-3B45FD.svg?style=for-the-badge&logo=Signal&logoColor=white)](https://signal.me/#eu/WlBfKuiT1S1GAGwDRpvIJErjM-C3IcjQUQ9HWLzeJKGKTfwlOGhEe7GQRSx05uX0)
[![Telegram](https://img.shields.io/badge/Telegram-26A5E4.svg?style=for-the-badge&logo=Telegram&logoColor=white)](https://t.me/hagezi)
[![Discord](https://img.shields.io/badge/Discord-5865F2.svg?style=for-the-badge&logo=Discord&logoColor=white)](https://discord.com/users/hagezi)
[![Mastodon](https://img.shields.io/badge/Mastodon-6364FF.svg?style=for-the-badge&logo=Mastodon&logoColor=white)](https://social.tchncs.de/@hagezi)
[![Bluesky](https://img.shields.io/badge/Bluesky-0285FF.svg?style=for-the-badge&logo=Bluesky&logoColor=white)](https://bsky.app/profile/hagezi.bsky.social)
[![Reddit](https://img.shields.io/badge/Reddit-FF4500.svg?style=for-the-badge&logo=Reddit&logoColor=white)](https://www.reddit.com/user/hagezi)

</div>

---

<a name="contact"></a>
