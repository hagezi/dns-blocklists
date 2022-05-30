
![GitHub last commit](https://img.shields.io/github/last-commit/hagezi/dns-blocklists)![GitHub issues](https://img.shields.io/github/issues/hagezi/dns-blocklists)![GitHub closed issues](https://img.shields.io/github/issues-closed/hagezi/dns-blocklists)![visitors](https://visitor-badge.glitch.me/badge?page_id=hagezi.dns-blocklists&left_color=grey&right_color=blue)

## DNS Blocklists - *For a better internet!*

### ***Multi - Cleans the Internet and protects your privacy!***
*An all in one DNS blocklist based on:*
- [OISD basic/full](https://oisd.nl/)
- [badmojr 1Hosts lite](https://github.com/badmojr/1Hosts)
- [Steven Black Hosts](https://github.com/StevenBlack/hosts) *(includes: AdAway, MVPS hosts, shady-hosts, someonewhocares, yoyo.org and more)*
- [AdGuard DNS Filter](https://github.com/AdguardTeam/AdGuardSDNSFilter)
- [EasyList](https://easylist.to/) *(simplified for DNS level blocking)*
- [uBlock uAssets](https://github.com/uBlockOrigin/uAssets) *(simplified for DNS level blocking)*
- [NextDNS Metadata](https://github.com/nextdns/metadata) *(CNAME cloaking and parked domains)*
- [My personal blacklist](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/personal.txt)

*It can be used as a stand alone blocklist. For every region. Blocks ads, tracking, metrics, telemetry, fake, phishing, malware, scam, coins and other "crap".*

**Multi full** (>1.000.000 unique domains / >300.000 compressed domains):

*Domain-Format:* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/multi.txt)         
*Host-Format:* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/multi.txt)         
*AdBlock-/AdGuard-Format (compressed):* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/multi.txt)         
*Unbound-Format (compressed):* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/multi.blacklist.conf)

*There is also a **light version** of the **multi list**, which contains only the most important hosts. It can be used for adblockers that have problems with processing large lists.*

**Multi light** (>200.000 unique domains / >100.000 compressed domains):

*Domain-Format:* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/light.txt)         
*Host-Format:* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/light.txt)         
*AdBlock-/AdGuard-Format (compressed):* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/light.txt)         
*Unbound-Format (compressed):* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/light.blacklist.conf)

**Expires:** *24 hours (update frequency)*

---

### ***Fake - Protects against internet scams, traps & fakes!***
*An blocklist for blocking fake stores, -news, -science, -streaming, rip-offs, cost traps and co. Based on my [manually maintained fake blacklists](https://github.com/hagezi/dns-blocklists/tree/main/data).*    

*Included in the multi and partially in the [OISD](https://oisd.nl/) blocklist.*

*Domain-Format:* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/fake.txt)         
*Host-Format:* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/fake.txt)         
*AdBlock-/AdGuard-Format (compressed):* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/fake.txt)         
*Unbound-Format (compressed):* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/fake.blacklist.conf)

**Expires:** *Updated regularly*

---

### ***Threat Intelligence Feeds - Increases security significantly!***
*An blocklist for blocking malware, crypto, coin, scam, spam and phishing. Blocks domains known to spread malware, launch phishing attacks and host command-and-control servers. Based on various valid malware sources.*    

*Only partially included in the multi blocklist, can be used as an extension.*

*Domain-Format:* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/tif.txt)         
*Host-Format:* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/tif.txt)         
*AdBlock-/AdGuard-Format (compressed):* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/tif.txt)         
*Unbound-Format (compressed):* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/tif.blacklist.conf)

**Expires:** *8 hours (update frequency)*

---

### ***DoH/VPN/TOR/Proxy Bypass - Prevent methods to bypass your DNS!***
*An blocklist for blocking DNS over HTTPS, VPN, TOR, Proxies. Prevent method to bypass your DNS. To ensure the bootstrap is your DNS server you must redirect or block standard DNS outbound (UDP 53) and block all DNS over TLS (TCP 853) outbound.*     

*Not included in the multi blocklist.*

*Domain-Format:* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/doh-vpn-proxy-bypass.txt)         
*Host-Format:* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/doh-vpn-proxy-bypass.txt)         
*AdBlock-/AdGuard-Format (compressed):* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/doh-vpn-proxy-bypass.txt)         
*Unbound-Format (compressed):* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/doh-vpn-proxy-bypass.blacklist.conf)

**Expires:** *Updated regularly*

---

### ***Safesearch not supported - Prevent the use of search engines that do not support safesearch!***
*An blocklist for blocking search engines that do not support safesearch.*     

*Not included in the multi blocklist.*

*Domain-Format:* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/nosafesearch.txt)         
*Host-Format:* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/nosafesearch.txt)         
*AdBlock-/AdGuard-Format (compressed):* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/nosafesearch.txt)         
*Unbound-Format (compressed):* [RAW-Link](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/nosafesearch.blacklist.conf)

**Expires:** *Updated regularly*

---

### ***Note***

*The blocklists were created for purely personal, private use. They were designed to avoid false positive domains as much as possible and not to block any needed features. Please [report false positive](https://github.com/hagezi/dns-blocklists/issues) domains.*

*They can be used for* ***PiHole, Blokada, Diversion, PersonalDNSfilter, pfBlockerNG, PersonalBlocklist, DNScrypt Proxy, YogaDNS, AdAway, uMatrix, DNS66, GasMask, HostFileEditor, uBlock, AdGuard, AdGuard Home, AdBlock, AdBlock Plus, Opera, Vivaldi, Unbound & Co.***

***Listed on [FilterLists](https://filterlists.com/).***

---

### ***Blocklist test***

*Test results of around 6000 website views from [WhoTracks.Me website list](https://whotracks.me/websites.html) with active multi blocklist:* 

![grafik](https://user-images.githubusercontent.com/104343908/167308759-8de4e035-3e0e-4ecf-b0ad-0183b1523cce.png)

---

***Keep the internet clean!***

---
