![GitHub last commit](https://img.shields.io/github/last-commit/hagezi/dns-blocklists)![GitHub issues](https://img.shields.io/github/issues/hagezi/dns-blocklists)![GitHub closed issues](https://img.shields.io/github/issues-closed/hagezi/dns-blocklists)![GitHub repo size](https://img.shields.io/github/repo-size/hagezi/dns-blocklists)[![shields.io Stars](https://img.shields.io/github/stars/hagezi/dns-blocklists)](https://github.com/hagezi/dns-blocklists/stargazers)

## :zap: DNS Blocklists - For a better internet!

<p align="left"><img width="25%" alt="HaGeZi DNS Blocklists" src="https://github.com/user-attachments/assets/1fb8b23c-2c45-43e2-8266-84c897ac5b3b" /></p>

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
17. [Anti Piracy](#piracy) - Protects against piracy!
18. [Gambling](#gambling) - Protects against gambling content! : [Full](#gambling) - [Medium](#gamblingmedium) - [Mini](#gamblingmini)
19. [NSFW](#nsfw) - Protects against adult content!
20. [Native Tracker](#native) - Broadband tracker of devices, services and operating systems
21. [Supporter](https://github.com/hagezi/dns-blocklists/stargazers) - Leave a star (top right)!
22. [Recommendation](#recommendation) - [Which version of the lists should I use?](https://github.com/hagezi/dns-blocklists/wiki/FAQ#whatshouldiuse)
23. [Online DNS Services](#dnsservices)
24. [About](#about) : [Repository](#repository) - [Referral Domains](#referral) - [Support Me](#support)
25. [Sources](sources.md)
26. [FAQ](https://github.com/hagezi/dns-blocklists/wiki/FAQ) - Frequently Asked Questions

### :books: **Multi - Cleans the Internet and protects your privacy!** <a name="overview"></a>

An all-in-one DNS blocklist in **various versions (light, normal, pro, pro++ and ultimate)**. It can be used as a standalone blocklist. For every region. Blocks ads, affiliate, tracking, metrics, telemetry, fake, phishing, malware, scam, cryptojacking and other "crap". Based on [various blocklists](sources.md). No, they are not just block lists cobbled together from different sources. They have been optimized and extended to efficiently "clean the Internet" in all areas.             

See also: [Which sources are used for the lists and how are the lists compiled on the basis of these sources?](https://github.com/hagezi/dns-blocklists/wiki/FAQ#sources)

#### **Blocklist version and size overview:**

| Version | Entries | Pro++ | Pro | Nor<br>mal | Light | [Fake](#fake) | [TIF](#tif) | [Nat<br>ive](#native) | [PopUp<br>Ads](#popupads) | Bug<br>Tracker |
|:--------|---:|:------:|:-----:|:----:|:----:|:---:|:------:|:----------:|:----:|:----:|
| :green_book:[Light](#light)             | light_dh<br>light_cp     |  |   |   | :green_circle:  |  | |  :yellow_square: | | |
| :blue_book:[Normal](#normal)       | multi_dh<br>multi_cp     |  |   | :green_circle: | :green_circle: |  | :yellow_square: | :yellow_square: | :yellow_square: | |
| :ledger:[Pro](#pro)              | pro_dh<br>pro_cp         |  | :green_circle: | :green_circle: | :green_circle: | | :yellow_square: | :yellow_square: | :yellow_square: | :green_circle: |
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
| Domains<br>Subdomains | [GH](lnkgh_d/light.txt) [GL](lnkgl_d/light.txt) [CB](lnkjd_d/light.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [GH](lnkgh_h/light.txt) [GL](lnkgl_h/light.txt) [CB](lnkjd_h/light.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard |
| Hosts<br>Compressed | [GH](lnkgh_h/light-compressed.txt) [GL](lnkgl_h/light-compressed.txt) [CB](lnkjd_h/light-compressed.txt) | Hostfile, Linux |
| Adblock | [GH](lnkgh_a/light.txt) [GL](lnkgl_a/light.txt) [CB](lnkjd_a/light.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](lnkgh_m/light.txt) [GL](lnkgl_m/light.txt) [CB](lnkjd_m/light.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/light.txt) [GL](lnkgl_w/light.txt) [CB](lnkjd_w/light.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/light-onlydomains.txt) [GL](lnkgl_w/light-onlydomains.txt) [CB](lnkjd_w/light-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/light.txt) [GL](lnkgl_r/light.txt) [CB](lnkjd_r/light.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |
| PAC | [GH](lnkgh_p/light.pac) [GL](lnkgl_p/light.pac) [CB](lnkjd_p/light.pac) | Proxy Auto Configuration |

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
| Domains<br>Subdomains | [GH](lnkgh_d/multi.txt) [GL](lnkgl_d/multi.txt) [CB](lnkjd_d/multi.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [GH](lnkgh_h/multi.txt) [GL](lnkgl_h/multi.txt) [CB](lnkjd_h/multi.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard |
| Hosts<br>Compressed | [GH](lnkgh_h/multi-compressed.txt) [GL](lnkgl_h/multi-compressed.txt) [CB](lnkjd_h/multi-compressed.txt) | Hostfile, Linux |
| Adblock | [GH](lnkgh_a/multi.txt) [GL](lnkgl_a/multi.txt) [CB](lnkjd_a/multi.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](lnkgh_m/multi.txt) [GL](lnkgl_m/multi.txt) [CB](lnkjd_m/multi.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/multi.txt) [GL](lnkgl_w/multi.txt) [CB](lnkjd_w/multi.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/multi-onlydomains.txt) [GL](lnkgl_w/multi-onlydomains.txt) [CB](lnkjd_w/multi-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/multi.txt) [GL](lnkgl_r/multi.txt) [CB](lnkjd_r/multi.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

### :ledger: **Multi PRO** - **Extended protection (Recommended)** <a name="pro"></a>

Big broom - Cleans the Internet and protects your privacy! Blocks Ads, Affiliate, Tracking, Metrics, Telemetry, Phishing, Malware, Scam, Fake, Cryptojacking and other "Crap".

> [!NOTE]
> **Blocking type:** Balanced            
> This list version should only very rarely lead to restrictions. It is suitable for environments where there is an admin nearby who can unblock something. My personal recommendation for mostly problem-free adblocking with good privacy protection.

**Entries:** pro_dh domains/hosts - pro_dhc compressed hosts - pro_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [GH](lnkgh_d/pro.txt) [GL](lnkgl_d/pro.txt) [CB](lnkjd_d/pro.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [GH](lnkgh_h/pro.txt) [GL](lnkgl_h/pro.txt) [CB](lnkjd_h/pro.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard |
| Hosts<br>Compressed | [GH](lnkgh_h/pro-compressed.txt) [GL](lnkgl_h/pro-compressed.txt) [CB](lnkjd_h/pro-compressed.txt) | Hostfile, Linux |
| Adblock | [GH](lnkgh_a/pro.txt) [GL](lnkgl_a/pro.txt) [CB](lnkjd_a/pro.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam |
| DNSMasq | [GH](lnkgh_m/pro.txt) [GL](lnkgl_m/pro.txt) [CB](lnkjd_m/pro.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/pro.txt) [GL](lnkgl_w/pro.txt) [CB](lnkjd_w/pro.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/pro-onlydomains.txt) [GL](lnkgl_w/pro-onlydomains.txt) [CB](lnkjd_w/pro-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/pro.txt) [GL](lnkgl_r/pro.txt) [CB](lnkjd_r/pro.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :ledger: **Multi PRO mini (Recommended for browser/mobile adblockers)** <a name="promini"></a>

Size-optimised version for DNS/Browser adblockers, e.g. for devices with less RAM. This list only contains domains from the Pro full that have been found on Top 1/10M lists (Umbrella, Cloudflare, Tranco, Chrome, BuiltWith, Majestic, DomCop).

**Entries:** promini_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](lnkgh_a/pro.mini.txt) [GL](lnkgl_a/pro.mini.txt) [CB](lnkjd_a/pro.mini.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](lnkgh_m/pro.mini.txt) [GL](lnkgl_m/pro.mini.txt) [CB](lnkjd_m/pro.mini.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/pro.mini.txt) [GL](lnkgl_w/pro.mini.txt) [CB](lnkjd_w/pro.mini.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/pro.mini-onlydomains.txt) [GL](lnkgl_w/pro.mini-onlydomains.txt) [CB](lnkjd_w/pro.mini-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/pro.mini.txt) [GL](lnkgl_r/pro.mini.txt) [CB](lnkjd_r/pro.mini.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

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
| Domains<br>Subdomains | [GH](lnkgh_d/pro.plus.txt) [GL](lnkgl_d/pro.plus.txt) [CB](lnkjd_d/pro.plus.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [GH](lnkgh_h/pro.plus.txt) [GL](lnkgl_h/pro.plus.txt) [CB](lnkjd_h/pro.plus.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard |
| Hosts<br>Compressed | [GH](lnkgh_h/pro.plus-compressed.txt) [GL](lnkgl_h/pro.plus-compressed.txt) [CB](lnkjd_h/pro.plus-compressed.txt) | Hostfile, Linux |
| Adblock | [GH](lnkgh_a/pro.plus.txt) [GL](lnkgl_a/pro.plus.txt) [CB](lnkjd_a/pro.plus.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam |
| DNSMasq | [GH](lnkgh_m/pro.plus.txt) [GL](lnkgl_m/pro.plus.txt) [CB](lnkjd_m/pro.plus.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/pro.plus.txt) [GL](lnkgl_w/pro.plus.txt) [CB](lnkjd_w/pro.plus.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/pro.plus-onlydomains.txt) [GL](lnkgl_w/pro.plus-onlydomains.txt) [CB](lnkjd_w/pro.plus-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/pro.plus.txt) [GL](lnkgl_r/pro.plus.txt) [CB](lnkjd_r/pro.plus.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :orange_book: **Multi PRO++ mini** <a name="proplusmini"></a>

Size-optimised version for DNS/Browser adblockers, e.g. for devices with less RAM. This list only contains domains from the Pro++ full that have been found on Top 1/10M lists (Umbrella, Cloudflare, Tranco, Chrome, BuiltWith, Majestic, DomCop).

**Entries:** proplusmini_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](lnkgh_a/pro.plus.mini.txt) [GL](lnkgl_a/pro.plus.mini.txt) [CB](lnkjd_a/pro.plus.mini.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](lnkgh_m/pro.plus.mini.txt) [GL](lnkgl_m/pro.plus.mini.txt) [CB](lnkjd_m/pro.plus.mini.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/pro.plus.mini.txt) [GL](lnkgl_w/pro.plus.mini.txt) [CB](lnkjd_w/pro.plus.mini.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/pro.plus.mini-onlydomains.txt) [GL](lnkgl_w/pro.plus.mini-onlydomains.txt) [CB](lnkjd_w/pro.plus.mini-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/pro.plus.mini.txt) [GL](lnkgl_r/pro.plus.mini.txt) [CB](lnkjd_r/pro.plus.mini.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

### :closed_book: **Multi ULTIMATE** - **Aggressive protection** <a name="ultimate"></a>

Ultimate Sweeper - Strictly cleans the Internet and protects your privacy! Blocks Ads, Affiliate, Tracking, Metrics, Telemetry, Phishing, Malware, Scam, Free Hoster, Fake, Cryptojacking and other "Crap".

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
>**Miscellaneous:**          
> Details on other known issues can be found [here](share/ultimate-known-issues.txt).  
                   
**Entries:** ultimate_dh domains/hosts - ultimate_dhc compressed hosts - ultimate_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [GH](lnkgh_d/ultimate.txt) [GL](lnkgl_d/ultimate.txt) [CB](lnkjd_d/ultimate.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [GH](lnkgh_h/ultimate.txt) [GL](lnkgl_h/ultimate.txt) [CB](lnkjd_h/ultimate.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard |
| Hosts<br>Compressed | [GH](lnkgh_h/ultimate-compressed.txt) [GL](lnkgl_h/ultimate-compressed.txt) [CB](lnkjd_h/ultimate-compressed.txt) | Hostfile, Linux |
| Adblock | [GH](lnkgh_a/ultimate.txt) [GL](lnkgl_a/ultimate.txt) [CB](lnkjd_a/ultimate.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam |
| DNSMasq | [GH](lnkgh_m/ultimate.txt) [GL](lnkgl_m/ultimate.txt) [CB](lnkjd_m/ultimate.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/ultimate.txt) [GL](lnkgl_w/ultimate.txt) [CB](lnkjd_w/ultimate.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/ultimate-onlydomains.txt) [GL](lnkgl_w/ultimate-onlydomains.txt) [CB](lnkjd_w/ultimate-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/ultimate.txt) [GL](lnkgl_r/ultimate.txt) [CB](lnkjd_r/ultimate.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :closed_book: **Multi ULTIMATE mini** <a name="ultimatemini"></a>

Size-optimised version for DNS/Browser adblockers, e.g. for devices with less RAM. This list only contains domains from the Ultimate full that have been found on Top 1/10M lists (Umbrella, Cloudflare, Tranco, Chrome, BuiltWith, Majestic, DomCop).

**Entries:** ultimatemini_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](lnkgh_a/ultimate.mini.txt) [GL](lnkgl_a/ultimate.mini.txt) [CB](lnkjd_a/ultimate.mini.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](lnkgh_m/ultimate.mini.txt) [GL](lnkgl_m/ultimate.mini.txt) [CB](lnkjd_m/ultimate.mini.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/ultimate.mini.txt) [GL](lnkgl_w/ultimate.mini.txt) [CB](lnkjd_w/ultimate.mini.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/ultimate.mini-onlydomains.txt) [GL](lnkgl_w/ultimate.mini-onlydomains.txt) [CB](lnkjd_w/ultimate.mini-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/ultimate.mini.txt) [GL](lnkgl_r/ultimate.mini.txt) [CB](lnkjd_r/ultimate.mini.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

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
| Adblock | [GH](lnkgh_a/fake.txt) [GL](lnkgl_a/fake.txt) [CB](lnkjd_a/fake.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](lnkgh_m/fake.txt) [GL](lnkgl_m/fake.txt) [CB](lnkjd_m/fake.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/fake.txt) [GL](lnkgl_w/fake.txt) [CB](lnkjd_w/fake.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/fake-onlydomains.txt) [GL](lnkgl_w/fake-onlydomains.txt) [CB](lnkjd_w/fake-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/fake.txt) [GL](lnkgl_r/fake.txt) [CB](lnkjd_r/fake.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :tada: **Pop-Up Ads - Protects against annoying and malicious pop-up ads!** <a name="popupads"></a>

A blocklist for annoying and malicious pop-up ads.

|             | Light          | Normal         | Pro            | Pro++          | Ultimate       | TIF      |
|:-----------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------:|
| Included in | :x: | :yellow_square: | :yellow_square: | :green_circle: | :green_circle: | :yellow_square: |

:green_circle: yes :yellow_square: partially :x: no

> [!NOTE]
> Fully included in Pro++ and Ultimate. Partially in Pro. In the combination of the Pro and additionally the Threat Intelligence Feeds (TIF) Medium or Full, all domains from the Pop-Up Ads list are included. This means that if you use the Pro and also the TIF medium or full, you no longer need to add this list separately.

**Entries:** popupads_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](lnkgh_a/popupads.txt) [GL](lnkgl_a/popupads.txt) [CB](lnkjd_a/popupads.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](lnkgh_m/popupads.txt) [GL](lnkgl_m/popupads.txt) [CB](lnkjd_m/popupads.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/popupads.txt) [GL](lnkgl_w/popupads.txt) [CB](lnkjd_w/popupads.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/popupads-onlydomains.txt) [GL](lnkgl_w/popupads-onlydomains.txt) [CB](lnkjd_w/popupads-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/popupads.txt) [GL](lnkgl_r/popupads.txt) [CB](lnkjd_r/popupads.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :closed_lock_with_key: **Threat Intelligence Feeds - Increases security significantly! (Recommended)** <a name="tif"></a>

A blocklist for blocking Malware, Cryptojacking, Scam, Spam and Phishing. Blocks domains known to spread malware, launch phishing attacks and host command-and-control servers.

|             | Light           | Normal          | Pro             | Pro++           | Ultimate        |
|:-----------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|
| Included in | :x: | :yellow_square: | :yellow_square: | :yellow_square: | :yellow_square: |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** tif_dh domains/hosts - tif_dhc compressed hosts - tif_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [GH](lnkgh_d/tif.txt) [GL](lnkgl_d/tif.txt) [CB](lnkjd_d/tif.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [GH](lnkgh_h/tif.txt) [GL](lnkgl_h/tif.txt) [CB](lnkjd_h/tif.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard |
| Hosts<br>Compressed | [GH](lnkgh_h/tif-compressed.txt) [GL](lnkgl_h/tif-compressed.txt) [CB](lnkjd_h/tif-compressed.txt) | Hostfile, Linux |
| Adblock | [GH](lnkgh_a/tif.txt) [GL](lnkgl_a/tif.txt) [CB](lnkjd_a/tif.txt) | Pi-hole, ~~AdGuard~~ (too big!), AdGuard Home (only devices with >= 1GB RAM!), eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam |
| DNSMasq | [GH](lnkgh_m/tif.txt) [GL](lnkgl_m/tif.txt) [CB](lnkjd_m/tif.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/tif.txt) [GL](lnkgl_w/tif.txt) [CB](lnkjd_w/tif.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/tif-onlydomains.txt) [GL](lnkgl_w/tif-onlydomains.txt) [CB](lnkjd_w/tif-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/tif.txt) [GL](lnkgl_r/tif.txt) [CB](lnkjd_r/tif.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :closed_lock_with_key: **Threat Intelligence Feeds - Medium version (Recommended for browser/mobile adblockers)** <a name="tifmedium"></a>

A medium version of the Threat Intelligence Feeds list. Designed for Adblockers that have problems with the size of the full TIF list. Contains only important feeds.

|             | Light           | Normal          | Pro             | Pro++           | Ultimate        |
|:-----------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|
| Included in | :x: | :yellow_square: | :yellow_square: | :yellow_square: | :yellow_square: |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** tif_m_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](lnkgh_a/tif.medium.txt) [GL](lnkgl_a/tif.medium.txt) [CB](lnkjd_a/tif.medium.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](lnkgh_m/tif.medium.txt) [GL](lnkgl_m/tif.medium.txt) [CB](lnkjd_m/tif.medium.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/tif.medium.txt) [GL](lnkgl_w/tif.medium.txt) [CB](lnkjd_w/tif.medium.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/tif.medium-onlydomains.txt) [GL](lnkgl_w/tif.medium-onlydomains.txt) [CB](lnkjd_w/tif.medium-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/tif.medium.txt) [GL](lnkgl_r/tif.medium.txt) [CB](lnkjd_r/tif.medium.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :closed_lock_with_key: **Threat Intelligence Feeds - Mini version** <a name="tifmini"></a>

A size-optimised version of the Threat Intelligence Feeds Medium list. Designed for Adblockers that have problems with the size of the TIF Medium list.

|             | Light           | Normal          | Pro             | Pro++           | Ultimate        |
|:-----------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|
| Included in | :x: | :yellow_square: | :yellow_square: | :yellow_square: | :yellow_square: |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** tif_i_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](lnkgh_a/tif.mini.txt) [GL](lnkgl_a/tif.mini.txt) [CB](lnkjd_a/tif.mini.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](lnkgh_m/tif.mini.txt) [GL](lnkgl_m/tif.mini.txt) [CB](lnkjd_m/tif.mini.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/tif.mini.txt) [GL](lnkgl_w/tif.mini.txt) [CB](lnkjd_w/tif.mini.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/tif.mini-onlydomains.txt) [GL](lnkgl_w/tif.mini-onlydomains.txt) [CB](lnkjd_w/tif.mini-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/tif.mini.txt) [GL](lnkgl_r/tif.mini.txt) [CB](lnkjd_r/tif.mini.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :closed_lock_with_key: **Threat Intelligence Feeds - IPs** <a name="tifips"></a>

IPv4 lists in [plain IP format](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/ips/tif.txt) for firewalls and [AdGuard Home format](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/tif-ips.txt) are also available as an extension to the TIF list.

> [!TIP]
> If the IP list is used in AdGuard Home, all domains that would resolve to the blocked IP are blocked. To prevent the blocked domains from being resolved via IPv6, it is necessary to deactivate resolving via IPv6 in AdGuard Home:                        
> `Settings > DNS settings > DNS server configuration > Disable resolving of IPv6 addresses`

---

### :new: **Newly Registered Domains (NRD) - Domain Generation Algorithms (DGA)** <a name="nrd"></a>

A blocklist for blocking domains registered in the last 14 or 30 days (NRDs). Furthermore, separate lists of domains generated with DGA (Domain Generation Algorithms) are also offered, these domains are already included in the NRD lists.                    
NRDs and DGAs are known to be favoured by threat actors to launch malicious campaigns.

> [!IMPORTANT]
> This is an external list that is created and maintained by [@xRuffKez](https://github.com/xRuffKez).

**For the lists and further details visit the [corresponding repository](https://github.com/xRuffKez/NRD). The lists in various formats can be found [here](https://github.com/xRuffKez/NRD/tree/main/lists).**

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
| Adblock | [GH](lnkgh_a/doh-vpn-proxy-bypass.txt) [GL](lnkgl_a/doh-vpn-proxy-bypass.txt) [CB](lnkjd_a/doh-vpn-proxy-bypass.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](lnkgh_m/doh-vpn-proxy-bypass.txt) [GL](lnkgl_m/doh-vpn-proxy-bypass.txt) [CB](lnkjd_m/doh-vpn-proxy-bypass.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/doh-vpn-proxy-bypass.txt) [GL](lnkgl_w/doh-vpn-proxy-bypass.txt) [CB](lnkjd_w/doh-vpn-proxy-bypass.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/doh-vpn-proxy-bypass-onlydomains.txt) [GL](lnkgl_w/doh-vpn-proxy-bypass-onlydomains.txt) [CB](lnkjd_w/doh-vpn-proxy-bypass-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/doh-vpn-proxy-bypass.txt) [GL](lnkgl_r/doh-vpn-proxy-bypass.txt) [CB](lnkjd_r/doh-vpn-proxy-bypass.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :outbox_tray: **Encrypted DNS Servers only** <a name="bypass_dns"></a>

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** bypassdns_dh domains/hosts - bypassdns_dhc compressed hosts - bypassdns_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Domains<br>Subdomains | [GH](lnkgh_d/doh.txt) [GL](lnkgl_d/doh.txt) [CB](lnkjd_d/doh.txt) | Blocky (older than v0.23), Diversion (older than v5), OpenSnitch, PersonalBlocklist, pfBlockerNG |
| Hosts | [GH](lnkgh_h/doh.txt) [GL](lnkgl_h/doh.txt) [CB](lnkjd_h/doh.txt) | AdAway, uMatrix, DNS66, GasMask, NetGuard |
| Hosts<br>Compressed | [GH](lnkgh_h/doh-compressed.txt) [GL](lnkgl_h/doh-compressed.txt) [CB](lnkjd_h/doh-compressed.txt) | Hostfile, Linux |
| Adblock | [GH](lnkgh_a/doh.txt) [GL](lnkgl_a/doh.txt) [CB](lnkjd_a/doh.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](lnkgh_m/doh.txt) [GL](lnkgl_m/doh.txt) [CB](lnkjd_m/doh.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/doh.txt) [GL](lnkgl_w/doh.txt) [CB](lnkjd_w/doh.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/doh-onlydomains.txt) [GL](lnkgl_w/doh-onlydomains.txt) [CB](lnkjd_w/doh-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/doh.txt) [GL](lnkgl_r/doh.txt) [CB](lnkjd_r/doh.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

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

**Entries:** nosafe_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](lnkgh_a/nosafesearch.txt) [GL](lnkgl_a/nosafesearch.txt) [CB](lnkjd_a/nosafesearch.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](lnkgh_m/nosafesearch.txt) [GL](lnkgl_m/nosafesearch.txt) [CB](lnkjd_m/nosafesearch.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/nosafesearch.txt) [GL](lnkgl_w/nosafesearch.txt) [CB](lnkjd_w/nosafesearch.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/nosafesearch-onlydomains.txt) [GL](lnkgl_w/nosafesearch-onlydomains.txt) [CB](lnkjd_w/nosafesearch-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/nosafesearch.txt) [GL](lnkgl_r/nosafesearch.txt) [CB](lnkjd_r/nosafesearch.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

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
| Adblock | [GH](lnkgh_a/dyndns.txt) [GL](lnkgl_a/dyndns.txt) [CB](lnkjd_a/dyndns.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](lnkgh_m/dyndns.txt) [GL](lnkgl_m/dyndns.txt) [CB](lnkjd_m/dyndns.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/dyndns.txt) [GL](lnkgl_w/dyndns.txt) [CB](lnkjd_w/dyndns.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/dyndns-onlydomains.txt) [GL](lnkgl_w/dyndns-onlydomains.txt) [CB](lnkjd_w/dyndns-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/dyndns.txt) [GL](lnkgl_r/dyndns.txt) [CB](lnkjd_r/dyndns.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :computer: **Badware Hoster blocking - Protects against the malicious use of host services!** <a name="hoster"></a>

A blocklist for blocking known hosters that also host badware via user content to prevent the use of these hosters for malicious purposes.

> [!IMPORTANT]
> This list blocks the root domains of all hosting providers that occasionally appear in threat intelligence feeds due to malicious subdomains. Please be aware that this will also block legitimate sites hosted by these providers. Consider this carefully before using the list.
>                 
> When using this list, users are responsible for unblocking any required subdomains themselves.

|             | Light | Normal | Pro | Pro++ | Ultimate | TIF |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|:---:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      | :x: |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** hoster_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](lnkgh_a/hoster.txt) [GL](lnkgl_a/hoster.txt) [CB](lnkjd_a/hoster.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](lnkgh_m/hoster.txt) [GL](lnkgl_m/hoster.txt) [CB](lnkjd_m/hoster.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/hoster.txt) [GL](lnkgl_w/hoster.txt) [CB](lnkjd_w/hoster.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/hoster-onlydomains.txt) [GL](lnkgl_w/hoster-onlydomains.txt) [CB](lnkjd_w/hoster-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/hoster.txt) [GL](lnkgl_r/hoster.txt) [CB](lnkjd_r/hoster.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |
| ControlD | [GH](https://github.com/hagezi/dns-blocklists/blob/main/controld/badware-hoster-folder.json)| ControlD folder |

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
| Adblock | [GH](lnkgh_a/urlshortener.txt) [GL](lnkgl_a/urlshortener.txt) [CB](lnkjd_a/urlshortener.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](lnkgh_m/urlshortener.txt) [GL](lnkgl_m/urlshortener.txt) [CB](lnkjd_m/urlshortener.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/urlshortener.txt) [GL](lnkgl_w/urlshortener.txt) [CB](lnkjd_w/urlshortener.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/urlshortener-onlydomains.txt) [GL](lnkgl_w/urlshortener-onlydomains.txt) [CB](lnkjd_w/urlshortener-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/urlshortener.txt) [GL](lnkgl_r/urlshortener.txt) [CB](lnkjd_r/urlshortener.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

---

### :crystal_ball: **Most Abused TLDs - Protects against known malicious Top Level Domains! (Recommended)** <a name="tlds"></a>

A blocklist for blocking Top Most Abused Top Level Domains, merged from [@Yokoffing](https://github.com/yokoffing), [@DandelionSprout](https://github.com/DandelionSprout/), [@LennyFox](https://github.com/lennyfox) Cloudflare Radar, Netcraft and SpamHaus.

> [!WARNING]
> The Most Abused TLDs list is designed to block entire top-level domains (such as *.top, *.shop, *.gdn) with poor reputations. While this may also block some legitimate sites, it is highly effective at preventing spam, scams, phishing, malware, and other malicious content. Users should be aware of which sites are affected by this list.
>
> Only widely-used, reputable domains—such as those appearing on major top lists (Umbrella, Cloudflare, Tranco, Chrome, DomCop, etc.) or those essential for popular apps and services—will be considered for exclusion. Illegal domains, including those related to piracy, will not be unblocked. Domains that do not meet these criteria are reviewed individually; if exclusion is not justified, they remain blocked. Users who need access to such domains should add them to their personal allowlist.
>
> This selective approach is necessary because AdGuard and uBlock Origin have technical limits on rule length when using denyallow/domain modifiers. Attempting to exclude every legitimate domain would eventually break important rules, so exclusions must be limited and carefully chosen.
              
|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| AdGuard | [GH](lnkgh_a/spam-tlds.txt) [GL](lnkgl_a/spam-tlds.txt) [CB](lnkjd_a/spam-tlds.txt) | AdGuard, AdGuard Home |
| uBlock Origin  | [GH](lnkgh_a/spam-tlds-ublock.txt) [GL](lnkgl_a/spam-tlds-ublock.txt) [CB](lnkjd_a/spam-tlds-ublock.txt) | uBlock Origin, Adblock Plus |
| AdBlock  | [GH](lnkgh_a/spam-tlds-adblock.txt) [GL](lnkgl_a/spam-tlds-adblock.txt) [CB](lnkjd_a/spam-tlds-adblock.txt) | Pi-hole, TechnitiumDNS<br>Contains only spam TLDs that do not have any exclusions. |
| AdBlock<br>(Aggressive)<br><br>Allowlist<br><br> | [GH](lnkgh_a/spam-tlds-adblock-aggressive.txt) [GL](lnkgl_a/spam-tlds-adblock-aggressive.txt) [CB](lnkjd_a/spam-tlds-adblock-aggressive.txt)<br><br>[GH](lnkgh_a/spam-tlds-adblock-allow.txt) [GL](lnkgl_a/spam-tlds-adblock-allow.txt) [CB](lnkjd_a/spam-tlds-adblock-allow.txt) | Pi-hole, TechnitiumDNS |
| RPZ | [GH](lnkgh_r/spam-tlds-rpz.txt) [GL](lnkgl_r/spam-tlds-rpz.txt) [CB](lnkjd_r/spam-tlds-rpz.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound<br>Contains only spam TLDs that do not have any exclusions. |
| RPZ<br>(Aggressive) | [GH](lnkgh_r/spam-tlds-rpz-aggressive.txt) [GL](lnkgl_r/spam-tlds-rpz-aggressive.txt) [CB](lnkjd_r/spam-tlds-rpz-aggressive.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound<br>Contains all spam TLDs, corresponds to the AdGuard and uBlock Origin version without exclusions. |
| ControlD | [GH](https://github.com/hagezi/dns-blocklists/blob/main/controld/spam-tlds-combined-folder.json) | ControlD folder |

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
| Adblock | [GH](lnkgh_a/anti.piracy.txt) [GL](lnkgl_a/anti.piracy.txt) [CB](lnkjd_a/anti.piracy.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](lnkgh_m/anti.piracy.txt) [GL](lnkgl_m/anti.piracy.txt) [CB](lnkjd_m/anti.piracy.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/anti.piracy.txt) [GL](lnkgl_w/anti.piracy.txt) [CB](lnkjd_w/anti.piracy.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/anti.piracy-onlydomains.txt) [GL](lnkgl_w/anti.piracy-onlydomains.txt) [CB](lnkjd_w/anti.piracy-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/anti.piracy.txt) [GL](lnkgl_r/anti.piracy.txt) [CB](lnkjd_r/anti.piracy.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

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
| Adblock | [GH](lnkgh_a/gambling.txt) [GL](lnkgl_a/gambling.txt) [CB](lnkjd_a/gambling.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam |
| DNSMasq | [GH](lnkgh_m/gambling.txt) [GL](lnkgl_m/gambling.txt) [CB](lnkjd_m/gambling.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/gambling.txt) [GL](lnkgl_w/gambling.txt) [CB](lnkjd_w/gambling.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/gambling-onlydomains.txt) [GL](lnkgl_w/gambling-onlydomains.txt) [CB](lnkjd_w/gambling-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/gambling.txt) [GL](lnkgl_r/gambling.txt) [CB](lnkjd_r/gambling.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :slot_machine: **Gambling - Medium version** <a name="gamblingmedium"></a>

A medium version of the Gambling list. Designed for Adblockers that have problems with the size of the full Gambling list.

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** gamblingm_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](lnkgh_a/gambling.medium.txt) [GL](lnkgl_a/gambling.medium.txt) [CB](lnkjd_a/gambling.medium.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](lnkgh_m/gambling.medium.txt) [GL](lnkgl_m/gambling.medium.txt) [CB](lnkjd_m/gambling.medium.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/gambling.medium.txt) [GL](lnkgl_w/gambling.medium.txt) [CB](lnkjd_w/gambling.medium.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/gambling.medium-onlydomains.txt) [GL](lnkgl_w/gambling.medium-onlydomains.txt) [CB](lnkjd_w/gambling.medium-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/gambling.medium.txt) [GL](lnkgl_r/gambling.medium.txt) [CB](lnkjd_r/gambling.medium.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

#### :slot_machine: **Gambling - Mini version** <a name="gamblingmini"></a>

A size-optimised version of the Gambling Medium list. This list only contains domains that have been found on Top 1/10M lists (Umbrella, Cloudflare, Tranco, Chrome, BuiltWith, Majestic, DomCop).

|             | Light | Normal | Pro | Pro++ | Ultimate |
|:-----------:|:-----:|:------:|:---:|:-----:|:--------:|
| Included in | :x:   | :x:    | :x: | :x:   | :x:      |

:green_circle: yes :yellow_square: partially :x: no

**Entries:** gamblingi_cp compressed domains

| Format | Links | Should be used for |
|:-------|:-----|:----------------|
| Adblock | [GH](lnkgh_a/gambling.mini.txt) [GL](lnkgl_a/gambling.mini.txt) [CB](lnkjd_a/gambling.mini.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam, Little Snitch Mini |
| DNSMasq | [GH](lnkgh_m/gambling.mini.txt) [GL](lnkgl_m/gambling.mini.txt) [CB](lnkjd_m/gambling.mini.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/gambling.mini.txt) [GL](lnkgl_w/gambling.mini.txt) [CB](lnkjd_w/gambling.mini.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/gambling.mini-onlydomains.txt) [GL](lnkgl_w/gambling.mini-onlydomains.txt) [CB](lnkjd_w/gambling.mini-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/gambling.mini.txt) [GL](lnkgl_r/gambling.mini.txt) [CB](lnkjd_r/gambling.mini.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

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
| Adblock | [GH](lnkgh_a/nsfw.txt) [GL](lnkgl_a/nsfw.txt) [CB](lnkjd_a/nsfw.txt) | Pi-hole, AdGuard, AdGuard Home, eBlocker, uBlock Origin, Brave (only in aggressive mode), AdNauseam |
| DNSMasq | [GH](lnkgh_m/nsfw.txt) [GL](lnkgl_m/nsfw.txt) [CB](lnkjd_m/nsfw.txt) | DNSMasq (v2.86 or newer), adblock-lean, Diversion (v5 or newer) |
| Wildcard<br>Asterisk | [GH](lnkgh_w/nsfw.txt) [GL](lnkgl_w/nsfw.txt) [CB](lnkjd_w/nsfw.txt) | Blocky (v0.23 or newer), Nebulo, NetDuma, OPNsense, YogaDNS |
| Wildcard<br>Domains | [GH](lnkgh_w/nsfw-onlydomains.txt) [GL](lnkgl_w/nsfw-onlydomains.txt) [CB](lnkjd_w/nsfw-onlydomains.txt) | DNSCloak, DNSCrypt, TechnitiumDNS, PersonalDNSfilter, InviZible Pro |
| RPZ | [GH](lnkgh_r/nsfw.txt) [GL](lnkgl_r/nsfw.txt) [CB](lnkjd_r/nsfw.txt) | Response Policy Zone, Bind, Knot, PowerDNS, Unbound |

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
| Amazon (Devices, Shopping, Video) | [GH](lnkgh_d/native.amazon.txt) [GL](lnkgl_d/native.amazon.txt) [CB](lnkjd_d/native.amazon.txt) | [GH](lnkgh_h/native.amazon.txt) [GL](lnkgl_h/native.amazon.txt) [CB](lnkjd_h/native.amazon.txt) | [GH](lnkgh_a/native.amazon.txt) [GL](lnkgl_a/native.amazon.txt) [CB](lnkjd_a/native.amazon.txt) | [GH](lnkgh_m/native.amazon.txt) [GL](lnkgl_m/native.amazon.txt) [CB](lnkjd_m/native.amazon.txt) | [GH](lnkgh_w/native.amazon.txt) [GL](lnkgl_w/native.amazon.txt) [CB](lnkjd_w/native.amazon.txt) | [GH](lnkgh_w/native.amazon-onlydomains.txt) [GL](lnkgl_w/native.amazon-onlydomains.txt) [CB](lnkjd_w/native.amazon-onlydomains.txt) | [GH](lnkgh_r/native.amazon.txt) [GL](lnkgl_r/native.amazon.txt) [CB](lnkjd_r/native.amazon.txt) |
| Apple (iOS, macOS, tvOS) | [GH](lnkgh_d/native.apple.txt) [GL](lnkgl_d/native.apple.txt) [CB](lnkjd_d/native.apple.txt) | [GH](lnkgh_h/native.apple.txt) [GL](lnkgl_h/native.apple.txt) [CB](lnkjd_h/native.apple.txt) | [GH](lnkgh_a/native.apple.txt) [GL](lnkgl_a/native.apple.txt) [CB](lnkjd_a/native.apple.txt) | [GH](lnkgh_m/native.apple.txt) [GL](lnkgl_m/native.apple.txt) [CB](lnkjd_m/native.apple.txt) | [GH](lnkgh_w/native.apple.txt) [GL](lnkgl_w/native.apple.txt) [CB](lnkjd_w/native.apple.txt) | [GH](lnkgh_w/native.apple-onlydomains.txt) [GL](lnkgl_w/native.apple-onlydomains.txt) [CB](lnkjd_w/native.apple-onlydomains.txt) | [GH](lnkgh_r/native.apple.txt) [GL](lnkgl_r/native.apple.txt) [CB](lnkjd_r/native.apple.txt) |
| Huawei (Devices) | [GH](lnkgh_d/native.huawei.txt) [GL](lnkgl_d/native.huawei.txt) [CB](lnkjd_d/native.huawei.txt) | [GH](lnkgh_h/native.huawei.txt) [GL](lnkgl_h/native.huawei.txt) [CB](lnkjd_h/native.huawei.txt) | [GH](lnkgh_a/native.huawei.txt) [GL](lnkgl_a/native.huawei.txt) [CB](lnkjd_a/native.huawei.txt) | [GH](lnkgh_m/native.huawei.txt) [GL](lnkgl_m/native.huawei.txt) [CB](lnkjd_m/native.huawei.txt) | [GH](lnkgh_w/native.huawei.txt) [GL](lnkgl_w/native.huawei.txt) [CB](lnkjd_w/native.huawei.txt) | [GH](lnkgh_w/native.huawei-onlydomains.txt) [GL](lnkgl_w/native.huawei-onlydomains.txt) [CB](lnkjd_w/native.huawei-onlydomains.txt) | [GH](lnkgh_r/native.huawei.txt) [GL](lnkgl_r/native.huawei.txt) [CB](lnkjd_r/native.huawei.txt) |
| Microsoft (Windows, Office, MSN) | [GH](lnkgh_d/native.winoffice.txt) [GL](lnkgl_d/native.winoffice.txt) [CB](lnkjd_d/native.winoffice.txt) | [GH](lnkgh_h/native.winoffice.txt) [GL](lnkgl_h/native.winoffice.txt) [CB](lnkjd_h/native.winoffice.txt) | [GH](lnkgh_a/native.winoffice.txt) [GL](lnkgl_a/native.winoffice.txt) [CB](lnkjd_a/native.winoffice.txt) | [GH](lnkgh_m/native.winoffice.txt) [GL](lnkgl_m/native.winoffice.txt) [CB](lnkjd_m/native.winoffice.txt) | [GH](lnkgh_w/native.winoffice.txt) [GL](lnkgl_w/native.winoffice.txt) [CB](lnkjd_w/native.winoffice.txt) | [GH](lnkgh_w/native.winoffice-onlydomains.txt) [GL](lnkgl_w/native.winoffice-onlydomains.txt) [CB](lnkjd_w/native.winoffice-onlydomains.txt) | [GH](lnkgh_r/native.winoffice.txt) [GL](lnkgl_r/native.winoffice.txt) [CB](lnkjd_r/native.winoffice.txt) |
| Samsung | [GH](lnkgh_d/native.samsung.txt) [GL](lnkgl_d/native.samsung.txt) [CB](lnkjd_d/native.samsung.txt) | [GH](lnkgh_h/native.samsung.txt) [GL](lnkgl_h/native.samsung.txt) [CB](lnkjd_h/native.samsung.txt) | [GH](lnkgh_a/native.samsung.txt) [GL](lnkgl_a/native.samsung.txt) [CB](lnkjd_a/native.samsung.txt) | [GH](lnkgh_m/native.samsung.txt) [GL](lnkgl_m/native.samsung.txt) [CB](lnkjd_m/native.samsung.txt) | [GH](lnkgh_w/native.samsung.txt) [GL](lnkgl_w/native.samsung.txt) [CB](lnkjd_w/native.samsung.txt) | [GH](lnkgh_w/native.samsung-onlydomains.txt) [GL](lnkgl_w/native.samsung-onlydomains.txt) [CB](lnkjd_w/native.samsung-onlydomains.txt) | [GH](lnkgh_r/native.samsung.txt) [GL](lnkgl_r/native.samsung.txt) [CB](lnkjd_r/native.samsung.txt) |
| TikTok (Fingerprinting) | [GH](lnkgh_d/native.tiktok.txt) [GL](lnkgl_d/native.tiktok.txt) [CB](lnkjd_d/native.tiktok.txt) | [GH](lnkgh_h/native.tiktok.txt) [GL](lnkgl_h/native.tiktok.txt) [CB](lnkjd_h/native.tiktok.txt) | [GH](lnkgh_a/native.tiktok.txt) [GL](lnkgl_a/native.tiktok.txt) [CB](lnkjd_a/native.tiktok.txt) | [GH](lnkgh_m/native.tiktok.txt) [GL](lnkgl_m/native.tiktok.txt) [CB](lnkjd_m/native.tiktok.txt) | [GH](lnkgh_w/native.tiktok.txt) [GL](lnkgl_w/native.tiktok.txt) [CB](lnkjd_w/native.tiktok.txt) | [GH](lnkgh_w/native.tiktok-onlydomains.txt) [GL](lnkgl_w/native.tiktok-onlydomains.txt) [CB](lnkjd_w/native.tiktok-onlydomains.txt) | [GH](lnkgh_r/native.tiktok.txt) [GL](lnkgl_r/native.tiktok.txt) [CB](lnkjd_r/native.tiktok.txt) |
| TikTok (Fingerprinting) Aggressive | [GH](lnkgh_d/native.tiktok.extended.txt) [GL](lnkgl_d/native.tiktok.extended.txt) [CB](lnkjd_d/native.tiktok.extended.txt) | [GH](lnkgh_h/native.tiktok.extended.txt) [GL](lnkgl_h/native.tiktok.extended.txt) [CB](lnkjd_h/native.tiktok.extended.txt) | [GH](lnkgh_a/native.tiktok.extended.txt) [GL](lnkgl_a/native.tiktok.extended.txt) [CB](lnkjd_a/native.tiktok.extended.txt) | [GH](lnkgh_m/native.tiktok.extended.txt) [GL](lnkgl_m/native.tiktok.extended.txt) [CB](lnkjd_m/native.tiktok.extended.txt) | [GH](lnkgh_w/native.tiktok.extended.txt) [GL](lnkgl_w/native.tiktok.extended.txt) [CB](lnkjd_w/native.tiktok.extended.txt) | [GH](lnkgh_w/native.tiktok.extended-onlydomains.txt) [GL](lnkgl_w/native.tiktok.extended-onlydomains.txt) [CB](lnkjd_w/native.tiktok.extended-onlydomains.txt) | [GH](lnkgh_r/native.tiktok.extended.txt) [GL](lnkgl_r/native.tiktok.extended.txt) [CB](lnkjd_r/native.tiktok.extended.txt) |
| LG webOS | [GH](lnkgh_d/native.lgwebos.txt) [GL](lnkgl_d/native.lgwebos.txt) [CB](lnkjd_d/native.lgwebos.txt) | [GH](lnkgh_h/native.lgwebos.txt) [GL](lnkgl_h/native.lgwebos.txt) [CB](lnkjd_h/native.lgwebos.txt) | [GH](lnkgh_a/native.lgwebos.txt) [GL](lnkgl_a/native.lgwebos.txt) [CB](lnkjd_a/native.lgwebos.txt) | [GH](lnkgh_m/native.lgwebos.txt) [GL](lnkgl_m/native.lgwebos.txt) [CB](lnkjd_m/native.lgwebos.txt) | [GH](lnkgh_w/native.lgwebos.txt) [GL](lnkgl_w/native.lgwebos.txt) [CB](lnkjd_w/native.lgwebos.txt) | [GH](lnkgh_w/native.lgwebos-onlydomains.txt) [GL](lnkgl_w/native.lgwebos-onlydomains.txt) [CB](lnkjd_w/native.lgwebos-onlydomains.txt) | [GH](lnkgh_r/native.lgwebos.txt) [GL](lnkgl_r/native.lgwebos.txt) [CB](lnkjd_r/native.lgwebos.txt) |
| Roku | [GH](lnkgh_d/native.roku.txt) [GL](lnkgl_d/native.roku.txt) [CB](lnkjd_d/native.roku.txt) | [GH](lnkgh_h/native.roku.txt) [GL](lnkgl_h/native.roku.txt) [CB](lnkjd_h/native.roku.txt) | [GH](lnkgh_a/native.roku.txt) [GL](lnkgl_a/native.roku.txt) [CB](lnkjd_a/native.roku.txt) | [GH](lnkgh_m/native.roku.txt) [GL](lnkgl_m/native.roku.txt) [CB](lnkjd_m/native.roku.txt) | [GH](lnkgh_w/native.roku.txt) [GL](lnkgl_w/native.roku.txt) [CB](lnkjd_w/native.roku.txt) | [GH](lnkgh_w/native.roku-onlydomains.txt) [GL](lnkgl_w/native.roku-onlydomains.txt) [CB](lnkjd_w/native.roku-onlydomains.txt) | [GH](lnkgh_r/native.roku.txt) [GL](lnkgl_r/native.roku.txt) [CB](lnkjd_r/native.roku.txt) |
| Vivo | [GH](lnkgh_d/native.vivo.txt) [GL](lnkgl_d/native.vivo.txt) [CB](lnkjd_d/native.vivo.txt) | [GH](lnkgh_h/native.vivo.txt) [GL](lnkgl_h/native.vivo.txt) [CB](lnkjd_h/native.vivo.txt) | [GH](lnkgh_a/native.vivo.txt) [GL](lnkgl_a/native.vivo.txt) [CB](lnkjd_a/native.vivo.txt) | [GH](lnkgh_m/native.vivo.txt) [GL](lnkgl_m/native.vivo.txt) [CB](lnkjd_m/native.vivo.txt) | [GH](lnkgh_w/native.vivo.txt) [GL](lnkgl_w/native.vivo.txt) [CB](lnkjd_w/native.vivo.txt) | [GH](lnkgh_w/native.vivo-onlydomains.txt) [GL](lnkgl_w/native.vivo-onlydomains.txt) [CB](lnkjd_w/native.vivo-onlydomains.txt) | [GH](lnkgh_r/native.vivo.txt) [GL](lnkgl_r/native.vivo.txt) [CB](lnkjd_r/native.vivo.txt) |
| OPPO/Realme | [GH](lnkgh_d/native.oppo-realme.txt) [GL](lnkgl_d/native.oppo-realme.txt) [CB](lnkjd_d/native.oppo-realme.txt) | [GH](lnkgh_h/native.oppo-realme.txt) [GL](lnkgl_h/native.oppo-realme.txt) [CB](lnkjd_h/native.oppo-realme.txt) | [GH](lnkgh_a/native.oppo-realme.txt) [GL](lnkgl_a/native.oppo-realme.txt) [CB](lnkjd_a/native.oppo-realme.txt) | [GH](lnkgh_m/native.oppo-realme.txt) [GL](lnkgl_m/native.oppo-realme.txt) [CB](lnkjd_m/native.oppo-realme.txt) | [GH](lnkgh_w/native.oppo-realme.txt) [GL](lnkgl_w/native.oppo-realme.txt) [CB](lnkjd_w/native.oppo-realme.txt) | [GH](lnkgh_w/native.oppo-realme-onlydomains.txt) [GL](lnkgl_w/native.oppo-realme-onlydomains.txt) [CB](lnkjd_w/native.oppo-realme-onlydomains.txt) | [GH](lnkgh_r/native.oppo-realme.txt) [GL](lnkgl_r/native.oppo-realme.txt) [CB](lnkjd_r/native.oppo-realme.txt) |
| Xiaomi | [GH](lnkgh_d/native.xiaomi.txt) [GL](lnkgl_d/native.xiaomi.txt) [CB](lnkjd_d/native.xiaomi.txt) | [GH](lnkgh_h/native.xiaomi.txt) [GL](lnkgl_h/native.xiaomi.txt) [CB](lnkjd_h/native.xiaomi.txt) | [GH](lnkgh_a/native.xiaomi.txt) [GL](lnkgl_a/native.xiaomi.txt) [CB](lnkjd_a/native.xiaomi.txt) | [GH](lnkgh_m/native.xiaomi.txt) [GL](lnkgl_m/native.xiaomi.txt) [CB](lnkjd_m/native.xiaomi.txt) | [GH](lnkgh_w/native.xiaomi.txt) [GL](lnkgl_w/native.xiaomi.txt) [CB](lnkjd_w/native.xiaomi.txt) | [GH](lnkgh_w/native.xiaomi-onlydomains.txt) [GL](lnkgl_w/native.xiaomi-onlydomains.txt) [CB](lnkjd_w/native.xiaomi-onlydomains.txt) | [GH](lnkgh_r/native.xiaomi.txt) [GL](lnkgl_r/native.xiaomi.txt) [CB](lnkjd_r/native.xiaomi.txt) |

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

| Service | Light | Nor<br>mal | Pro | Pro<br>++ | Ulti<br>mate | TIF | By<br>pass | Dyn<br>DNS | Hoster | TLDs | Anti<br>Piracy | Gam<br>bling |
| :----- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| AdGuard<br>DNS         | :x:            | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle:   | :green_circle:   | :green_circle: | :green_circle: | :green_circle:   | :green_circle:   |
| ControlD            | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :yellow_square:  | :yellow_square:  | :notebook:            | :notebook:            | :yellow_square:  | :yellow_square:  |
| Rethink<br>DNS          | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle:   | :green_circle: | :x:            | :x:              | :x:              |
| DNS<br>warden           | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :x:              | :x:              | :x:            | :x:            | :x:              | :x:              |

:yellow_square: Are included in the ControlD native lists of the respective category.                        
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

#### :department_store: **DNSBunker (Germany) - free** <a name="schonetdns"></a>

[DNSBunker (Germany)](https://dnsbunker.org/) uses my Multi Pro++ in combination with the native Tracker lists and TIF blocklist.

| Blocklists | DNS-over-HTTPS | DNS-over-TLS/QUIC | 
|:-----------|:---------------|:------------------|
| Pro + Popup Ads + TIF | `https://dnsbunker.org/dns-query` | `dnsbunker.org` | 

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
