
![GitHub last commit](https://img.shields.io/github/last-commit/hagezi/dns-blocklists)![GitHub issues](https://img.shields.io/github/issues/hagezi/dns-blocklists)![GitHub closed issues](https://img.shields.io/github/issues-closed/hagezi/dns-blocklists)![visitors](https://visitor-badge.glitch.me/badge?page_id=hagezi.dns-blocklists&left_color=grey&right_color=blue)

## DNS Blocklists - *For a better internet!*

### ***Multi - Cleans the Internet and protects your privacy!***
*An all in one DNS blocklist in **three versions (light, normal and pro)**. It can be used as a stand alone blocklist. For every region. Blocks ads, tracking, metrics, telemetry, fake, phishing, malware, scam, coins and other "crap". Based on various blocklist sources and my manually maintained personal blacklist.*

#### ***Multi blocklist version overview:***
| Version | Pro | Normal | Light | [Fake](https://github.com/hagezi/dns-blocklists#fake---protects-against-internet-scams-traps--fakes) | [TIF](https://github.com/hagezi/dns-blocklists#threat-intelligence-feeds---increases-security-significantly) | [Bypass](https://github.com/hagezi/dns-blocklists#dohvpntorproxy-bypass---prevent-methods-to-bypass-your-dns) | [Safesearch](https://github.com/hagezi/dns-blocklists#safesearch-not-supported---prevent-the-use-of-search-engines-that-do-not-support-safesearch) | [Personal](https://github.com/hagezi/dns-blocklists/blob/main/domains/personal.txt) | Aggressive? |  
|:--------|:---:|:------:|:-----:|:----:|:---:|:------:|:----------:|:--------:|:--------:|
| [Light](https://github.com/hagezi/dns-blocklists#multi-light)                                                                                         |   |   | = | X |   |   |   | X |  |
| [Normal (recommended)](https://github.com/hagezi/dns-blocklists#multi-normal-recommended)                                                                           |   | = | X | X | X |   |   | X |  |
| [Pro](https://github.com/hagezi/dns-blocklists#multi-pro)                                                                                             | = | X | X | X | X |   |   | X | X |

*X = contains the named lists in the column header*       
*P = partially contains the named list in the column header*       

---
         
### ***Multi LIGHT***
**Light protection without restrictions**:

*Contains only the most important hosts. It can be used for adblockers that have problems with processing large lists.*

| Format | Link | Can be used for |
|:-------|:-----|:----------------|
| Domains  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/light.txt) | PiHole, Diversion, PersonalDNSfilter, pfBlockerNG, PersonalBlocklist | 
| Hosts    | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/light.txt) | PiHole, AdAway, uMatrix, DNS66, GasMask, HostFileEditor              |
| Adblock  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/light.txt) | AdGuard, AdGuard Home, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi |
| Unbound  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/light.blacklist.conf) | Unbound                                                              |
| DNSMasq  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/light.txt) | DNSMasq                                                              | 
| Wildcard | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/light.txt) | DNSCrypt, DNSCloak, YogaDNS, ...                                               |

### ***Multi NORMAL*** (recommended)
**All-round protection without restrictions**:

| Format | Link | Can be used for |
|:-------|:-----|:----------------|
| Domains  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/multi.txt) | PiHole, Diversion, PersonalDNSfilter, pfBlockerNG, PersonalBlocklist | 
| Hosts    | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/multi.txt) | PiHole, AdAway, uMatrix, DNS66, GasMask, HostFileEditor              |
| Adblock  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/multi.txt) | AdGuard, AdGuard Home, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi |
| Unbound  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/multi.blacklist.conf) | Unbound                                                              |
| DNSMasq  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/multi.txt) | DNSMasq                                                              | 
| Wildcard | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/multi.txt) | DNSCrypt, DNSCloak, YogaDNS, ...                                               |

### ***Multi PRO***
**Maximum protection, restrictions possible, aggressive list, only for experienced users**:

*The list may contain false positive domains that limit functionality. When using, an admin should be present who can whitelist domains!*

| Format | Link | Can be used for |
|:-------|:-----|:----------------|
| Domains  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/pro.txt) | PiHole, Diversion, PersonalDNSfilter, pfBlockerNG, PersonalBlocklist | 
| Hosts    | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/pro.txt) | PiHole, AdAway, uMatrix, DNS66, GasMask, HostFileEditor              |
| Adblock  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/pro.txt) | AdGuard, AdGuard Home, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi |
| Unbound  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/pro.blacklist.conf) | Unbound                                                              |
| DNSMasq  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/pro.txt) | DNSMasq                                                              | 
| Wildcard | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/pro.txt) | DNSCrypt, DNSCloak, YogaDNS, ...                                               |

**Expires:** *24 hours (update frequency)*

---

### ***Fake - Protects against internet scams, traps & fakes!***
*An blocklist for blocking fake stores, -news, -science, -streaming, rip-offs, cost traps and co. Based on my [manually maintained fake blacklists](https://github.com/hagezi/dns-blocklists/tree/main/data).*    

| Format | Link | Can be used for |
|:-------|:-----|:----------------|
| Domains  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/fake.txt) | PiHole, Diversion, PersonalDNSfilter, pfBlockerNG, PersonalBlocklist | 
| Hosts    | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/fake.txt) | PiHole, AdAway, uMatrix, DNS66, GasMask, HostFileEditor              |
| Adblock  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/fake.txt) | AdGuard, AdGuard Home, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi |
| Unbound  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/fake.blacklist.conf) | Unbound                                                              |
| DNSMasq  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/fake.txt) | DNSMasq                                                              | 
| Wildcard | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/fake.txt) | DNSCrypt, DNSCloak, YogaDNS, ...                                               |

**Expires:** *Updated regularly*

---

### ***Threat Intelligence Feeds - Increases security significantly!***
*An blocklist for blocking malware, crypto, coin, scam, spam and phishing. Blocks domains known to spread malware, launch phishing attacks and host command-and-control servers. Based on various valid malware sources.*    

| Format | Link | Can be used for |
|:-------|:-----|:----------------|
| Domains  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/tif.txt) | PiHole, Diversion, PersonalDNSfilter, pfBlockerNG, PersonalBlocklist | 
| Hosts    | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/tif.txt) | PiHole, AdAway, uMatrix, DNS66, GasMask, HostFileEditor              |
| Adblock  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/tif.txt) | AdGuard, AdGuard Home, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi |
| Unbound  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/tif.blacklist.conf) | Unbound                                                              |
| DNSMasq  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/tif.txt) | DNSMasq                                                              | 
| Wildcard | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/tif.txt) | DNSCrypt, DNSCloak, YogaDNS, ...                                               |

**Expires:** *24 hours (update frequency)*

---

### ***DoH/VPN/TOR/Proxy Bypass - Prevent methods to bypass your DNS!***
*An blocklist for blocking DNS over HTTPS, VPN, TOR, Proxies. Prevent method to bypass your DNS. To ensure the bootstrap is your DNS server you must redirect or block standard DNS outbound (UDP 53) and block all DNS over TLS (TCP 853) outbound.*     

*Not included in the multi blocklist.*

| Format | Link | Can be used for |
|:-------|:-----|:----------------|
| Domains  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/doh-vpn-proxy-bypass.txt) | PiHole, Diversion, PersonalDNSfilter, pfBlockerNG, PersonalBlocklist | 
| Hosts    | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/doh-vpn-proxy-bypass.txt) | PiHole, AdAway, uMatrix, DNS66, GasMask, HostFileEditor              |
| Adblock  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/doh-vpn-proxy-bypass.txt) | AdGuard, AdGuard Home, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi |
| Unbound  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/doh-vpn-proxy-bypass.blacklist.conf) | Unbound                                                              |
| DNSMasq  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/doh-vpn-proxy-bypass.txt) | DNSMasq                                                              | 
| Wildcard | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/doh-vpn-proxy-bypass.txt) | DNSCrypt, DNSCloak, YogaDNS, ...                                               |

**Expires:** *Updated regularly*

---

### ***Safesearch not supported - Prevent the use of search engines that do not support safesearch!***
*An blocklist for blocking search engines that do not support safesearch.*     

| Format | Link | Can be used for |
|:-------|:-----|:----------------|
| Domains  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/nosafesearch.txt) | PiHole, Diversion, PersonalDNSfilter, pfBlockerNG, PersonalBlocklist | 
| Hosts    | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/hosts/nosafesearch.txt) | PiHole, AdAway, uMatrix, DNS66, GasMask, HostFileEditor              |
| Adblock  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/nosafesearch.txt) | AdGuard, AdGuard Home, uBlock, AdBlock, AdBlock Plus, Opera, Vivaldi |
| Unbound  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/unbound/nosafesearch.blacklist.conf) | Unbound                                                              |
| DNSMasq  | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/dnsmasq/nosafesearch.txt) | DNSMasq                                                              | 
| Wildcard | [RAW](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/nosafesearch.txt) | DNSCrypt, DNSCloak, YogaDNS, ...                                               |

**Expires:** *Updated regularly*

---

### ***Note***

*The blocklists were created for purely personal, private use. They were designed to avoid false positive domains as much as possible and not to block any needed features. Please [report false positive](https://github.com/hagezi/dns-blocklists/issues) domains.*

***Listed on [FilterLists](https://filterlists.com/).***

---

### ***Blocklist test***

*Test results of around 6000 website views from [WhoTracks.Me website list](https://whotracks.me/websites.html) with active multi blocklist:* 

![grafik](https://user-images.githubusercontent.com/104343908/167308759-8de4e035-3e0e-4ecf-b0ad-0183b1523cce.png)

---

### ***Stargazers***
[![Stargazers repo roster for @hagezi/dns-blocklists](https://reporoster.com/stars/dark/hagezi/dns-blocklists)](https://github.com/hagezi/dns-blocklists/stargazers)

---

### ***Keep the internet clean!***

---
