# Sources

These are the external sources currently used as **input** for building the blocklists.

**None of them is copied over one to one.** Every entry is evaluated in context and then normalized, categorized, assigned to a tier, or dropped, and a lot of what ends up in the published lists comes from the project's own maintained data rather than from any source below. Being listed here means a source informs the build, not that its contents show up in a list. The full explanation is in the FAQ: [Where does the data come from, and how are the lists built?](FAQ.md#sources)

Every source has its own license. For the individual licenses, check the source file or the source repository.

The grouping below is a rough guide to what each source mainly contributes. Plenty of them cover more than one category, so the group tells you the main purpose, not the only one.

---

### Ads and tracking, general

Broad ad and tracker lists that aren't tied to one country or language. These are the backbone of the Multi tiers.

```
https://codeberg.org/xRuffKez/DNSBunker_DNSBL/raw/branch/main/01_ad.txt
https://easylist-downloads.adblockplus.org/easylist.txt
https://easylist-downloads.adblockplus.org/easyprivacy.txt
https://gitlab.com/quidsup/notrack-blocklists/raw/master/notrack-blocklist.txt
https://pgl.yoyo.org/adservers/serverlist.php?hostformat=hosts&mimetype=plaintext&useip=0.0.0.0
https://raw.githubusercontent.com/AdguardTeam/AdGuardSDNSFilter/master/Filters/rules.txt
https://raw.githubusercontent.com/AdguardTeam/AdguardFilters/master/SpywareFilter/sections/specific.txt
https://raw.githubusercontent.com/AdguardTeam/AdguardFilters/master/SpywareFilter/sections/tracking_servers.txt
https://raw.githubusercontent.com/AdguardTeam/AdguardFilters/master/SpywareFilter/sections/tracking_servers_firstparty.txt
https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_Base/filter.txt
https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/adback-domains.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/adkeeper-domains.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/admaven-domains.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/admeasures-domains.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/bt-contentza-domains.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/combined-filters.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/freecounterstat-domains.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/getadmiral-domains.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/hilltopads-domains.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/istripper-domains.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/kitty-domains.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/macupload-domains.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/propellerads-domains.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/toradvertising-domains.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/unknown-domains.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/videoadex-domains.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/volumedata-domains.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/refs/heads/main/filters/adshield-domains.txt
https://raw.githubusercontent.com/ShadowWhisperer/BlockLists/master/Lists/Ads
https://raw.githubusercontent.com/ShadowWhisperer/BlockLists/master/Lists/Tracking
https://raw.githubusercontent.com/ShadowWhisperer/BlockLists/master/Lists/Wild_Ads
https://raw.githubusercontent.com/ShadowWhisperer/BlockLists/master/Lists/Wild_Tracking
https://raw.githubusercontent.com/brave/adblock-lists/master/brave-lists/brave-firstparty-cname.txt
https://raw.githubusercontent.com/brave/adblock-lists/master/brave-lists/brave-firstparty.txt
https://raw.githubusercontent.com/brave/adblock-lists/master/brave-lists/brave-ios-specific.txt
https://raw.githubusercontent.com/cbuijs/ut1/master/publicite/domains
https://raw.githubusercontent.com/easylist/easylist/master/easyprivacy/easyprivacy_specific.txt
https://raw.githubusercontent.com/easylist/easylist/master/easyprivacy/easyprivacy_specific_international.txt
https://raw.githubusercontent.com/easylist/easylist/master/easyprivacy/easyprivacy_thirdparty.txt
https://raw.githubusercontent.com/easylist/easylist/master/easyprivacy/easyprivacy_thirdparty_international.txt
https://raw.githubusercontent.com/easylist/easylist/master/easyprivacy/easyprivacy_trackingservers.txt
https://raw.githubusercontent.com/easylist/easylist/master/easyprivacy/easyprivacy_trackingservers_admiral.txt
https://raw.githubusercontent.com/easylist/easylist/master/easyprivacy/easyprivacy_trackingservers_general.txt
https://raw.githubusercontent.com/easylist/easylist/master/easyprivacy/easyprivacy_trackingservers_international.txt
https://raw.githubusercontent.com/easylist/easylist/master/easyprivacy/easyprivacy_trackingservers_mining.txt
https://raw.githubusercontent.com/jkrejcha/AdmiraList/master/AdmiraList.txt
https://raw.githubusercontent.com/migueldemoura/ublock-umatrix-rulesets/master/Hosts/ads-tracking
https://raw.githubusercontent.com/realodix/adblockid/main/dist/adblockid.adfl.txt
https://raw.githubusercontent.com/smed79/blacklist/refs/heads/master/abp.txt
https://raw.githubusercontent.com/uBlockOrigin/uAssets//master/filters/ubol-filters.txt
https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters-2020.txt
https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters-2021.txt
https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters-2022.txt
https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters-2023.txt
https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters-2024.txt
https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters-2025.txt
https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters-2026.txt
https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters.txt
https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/privacy.txt
https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/resource-abuse.txt
https://secure.fanboy.co.nz/fanboy-agegate.txt
```

### Ads and tracking, regional and language specific

Country and language specific lists. They're what makes the Multi tiers work outside the English-speaking web without you having to add a regional list yourself.

```
https://cdn.jsdelivr.net/gh/geekdada/surge-list/domain-set/chinese-filter.txt
https://cdn.jsdelivr.net/gh/hufilter/hufilter@gh-pages/hufilter.txt
https://codeberg.org/KhodeKiaa/PersianBlocker/raw/branch/main/PersianBlocker.txt
https://easylist-downloads.adblockplus.org/Liste_AR.txt
https://easylist-downloads.adblockplus.org/abpindo.txt
https://easylist-downloads.adblockplus.org/bulgarian_list.txt
https://easylist-downloads.adblockplus.org/easylistchina.txt
https://easylist-downloads.adblockplus.org/easylistczechslovak.txt
https://easylist-downloads.adblockplus.org/easylistdutch.txt
https://easylist-downloads.adblockplus.org/easylistgermany.txt
https://easylist-downloads.adblockplus.org/easylistitaly.txt
https://easylist-downloads.adblockplus.org/easylistlithuania.txt
https://easylist-downloads.adblockplus.org/easylistpolish.txt
https://easylist-downloads.adblockplus.org/easylistportuguese.txt
https://easylist-downloads.adblockplus.org/easylistspanish.txt
https://easylist-downloads.adblockplus.org/indianlist.txt
https://easylist-downloads.adblockplus.org/israellist.txt
https://easylist-downloads.adblockplus.org/koreanlist.txt
https://easylist-downloads.adblockplus.org/latvianlist.txt
https://easylist-downloads.adblockplus.org/liste_fr.txt
https://easylist-downloads.adblockplus.org/ruadlist.txt
https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_13_Turkish/filter.txt
https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_16_French/filter.txt
https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_1_Russian/filter.txt
https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt
https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_23_Ukrainian/filter.txt
https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_6_German/filter.txt
https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_7_Japanese/filter.txt
https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_8_Dutch/filter.txt
https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_9_Spanish/filter.txt
https://raw.githubusercontent.com/DRSDavidSoft/additional-hosts/master/domains/blacklist/unwanted-iranian.txt
https://raw.githubusercontent.com/DandelionSprout/Swedish-List-for-Adblock-Plus/refs/heads/main/Swedish%20List%20for%20All-Nordic.txt
https://raw.githubusercontent.com/DandelionSprout/adfilt/master/NorwegianExperimentalList%20alternate%20versions/NordicFiltersABP-Inclusion.txt
https://raw.githubusercontent.com/DandelionSprout/adfilt/master/NorwegianExperimentalList%20alternate%20versions/NordicFiltersAdGuardHome.txt
https://raw.githubusercontent.com/DandelionSprout/adfilt/master/SerboCroatianList.txt
https://raw.githubusercontent.com/DeepSpaceHarbor/Macedonian-adBlock-Filters/refs/heads/master/Filters
https://raw.githubusercontent.com/FilteringDev/filterslists-KO/refs/heads/master/filterslists/adblocking/filters-share/1st_domains.txt
https://raw.githubusercontent.com/FilteringDev/filterslists-KO/refs/heads/master/filterslists/adblocking/filters-share/3rd_domains.txt
https://raw.githubusercontent.com/Hakame-kun/uBlock-Filters-Indonesia/master/uBlock%20Indo/ubindo.txt
https://raw.githubusercontent.com/MajkiIT/polish-ads-filter/master/polish-pihole-filters/hostfile.txt
https://raw.githubusercontent.com/MasterKia/PersianBlocker/main/PersianBlockerAds-Hosts.txt
https://raw.githubusercontent.com/MasterKia/PersianBlocker/main/PersianBlockerHosts.txt
https://raw.githubusercontent.com/MasterKia/PersianBlocker/main/PersianBlockerTrackers-Hosts.txt
https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/AWAvenue-Ads-Rule.txt
https://raw.githubusercontent.com/abpvn/abpvn/master/filter/abpvn.txt
https://raw.githubusercontent.com/betterwebleon/slovenian-list/refs/heads/master/filters.txt
https://raw.githubusercontent.com/bigdargon/hostsVN/master/filters/adservers.txt
https://raw.githubusercontent.com/bigdargon/hostsVN/master/option/hosts-VN
https://raw.githubusercontent.com/brave/adblock-lists/master/brave-lists/brave-firstparty-regional.txt
https://raw.githubusercontent.com/brave/adblock-lists/refs/heads/master/custom/is.txt
https://raw.githubusercontent.com/cchevy/macedonian-pi-hole-blocklist/master/hosts.txt
https://raw.githubusercontent.com/damengzhu/banad/main/jiekouAD.txt
https://raw.githubusercontent.com/easylist-thailand/easylist-thailand/master/subscription/easylist-thailand.txt
https://raw.githubusercontent.com/finnish-easylist-addition/finnish-easylist-addition/gh-pages/Finland_adb.txt
https://raw.githubusercontent.com/gioxx/xfiles/master/filtri.txt
https://raw.githubusercontent.com/lassekongo83/Frellwits-filter-lists/master/Frellwits-Swedish-Hosts-File.txt
https://raw.githubusercontent.com/omerdduran/turk-adfilter/main/turk-adfilter.txt
https://raw.githubusercontent.com/remad0/TurkHosts404/refs/heads/main/dns-blocklists/adblock.txt
https://raw.githubusercontent.com/symbuzzer/Turkish-Ad-Hosts/main/hosts
https://raw.githubusercontent.com/tcptomato/ROad-Block/master/road-block-filters-light.txt
https://raw.githubusercontent.com/tofukko/filter/master/Adblock_Plus_list.txt
https://raw.githubusercontent.com/ukrainianfilters/lists/main/ads/ads.txt
https://raw.githubusercontent.com/ukrainianfilters/lists/main/combined/combined.txt
https://raw.githubusercontent.com/ukrainianfilters/lists/main/privacy/privacy.txt
https://raw.githubusercontent.com/xinggsf/Adblock-Plus-Rule/master/rule.txt
https://raw.githubusercontent.com/yous/YousList/master/youslist.txt
https://ubo-et.lepik.io/list.txt
https://www.void.gr/kargig/void-gr-filters.txt
https://www.zoso.ro/pages/rolist.txt
https://www.zoso.ro/pages/rolist2.txt
```

### Pop-up ads

Feeds the Pop-Up Ads list, which is also bundled into the Multi tiers at varying strengths.

```
https://adguardteam.github.io/AdGuardSDNSFilter/Filters/adguard_popup_filter.txt
https://codeberg.org/xRuffKez/DNSBunker_DNSBL/raw/branch/main/05_popup.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/popads-domains.txt
https://raw.githubusercontent.com/easylist/easylist/master/easylist/easylist_adservers_popup.txt
https://raw.githubusercontent.com/easylist/easylist/master/easylist/easylist_specific_block_popup.txt
https://raw.githubusercontent.com/easylist/easylist/master/easylist/easylist_thirdparty_popup.txt
https://raw.githubusercontent.com/easylist/easylist/master/easylist_adult/adult_adservers_popup.txt
https://raw.githubusercontent.com/easylist/easylist/master/easylist_adult/adult_specific_block_popup.txt
https://raw.githubusercontent.com/easylist/easylist/master/easylist_adult/adult_thirdparty_popup.txt
```

### Annoyances, cookie banners, and anti-adblock

Used selectively. Cookie consent tools themselves stay unblocked on purpose, see the FAQ on CMPs.

```
https://easylist-downloads.adblockplus.org/antiadblockfilters.txt
https://gitlab.com/quidsup/notrack-annoyance-blocklist/-/raw/master/notrack-annoyance.txt
https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt
https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_18_Annoyances_Cookies/filter.txt
https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_19_Annoyances_Popups/filter.txt
https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_20_Annoyances_MobileApp/filter.txt
https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_21_Annoyances_Other/filter.txt
https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_22_Annoyances_Widgets/filter.txt
https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_4_Social/filter.txt
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/fanboy-social-no-cosmetic.txt
https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/annoyances-cookies.txt
https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/annoyances-others.txt
https://raw.githubusercontent.com/ukrainianfilters/lists/main/annoyances/annoyances.txt
https://secure.fanboy.co.nz/fanboy-annoyance.txt
https://secure.fanboy.co.nz/fanboy-cookiemonster.txt
https://secure.fanboy.co.nz/fanboy-social.txt
```

### Malware, phishing, and threat intelligence

The main input for the Threat Intelligence Feeds (TIF) lists.

```
https://codeberg.org/xRuffKez/DNSBunker_DNSBL/raw/branch/main/02_mal.txt
https://codeberg.org/xRuffKez/DNSBunker_DNSBL/raw/branch/main/06_phish.txt
https://dl.red.flag.domains/red.flag.domains.txt
https://hole.cert.pl/domains/v2/domains.txt
https://malware-filter.gitlab.io/malware-filter/botnet-filter.txt
https://phishing-filter.pages.dev/phishing-filter-hosts.txt
https://phishing.army/download/phishing_army_blocklist_extended.txt
https://raw.githubusercontent.com/0xDanielLopez/TweetFeed/master/week.csv
https://raw.githubusercontent.com/0xDanielLopez/TweetFeed/refs/heads/master/month.csv
https://raw.githubusercontent.com/DNSBunker/CTI/refs/heads/main/domains.txt
https://raw.githubusercontent.com/DandelionSprout/adfilt/refs/heads/master/Alternate%20versions%20Anti-Malware%20List/AntiMalwareDomains.txt
https://raw.githubusercontent.com/MetaMask/eth-phishing-detect/master/src/hosts.txt
https://raw.githubusercontent.com/MikhailKasimov/validin-phish-feed/main/validin-phish-feed-*.txt
https://raw.githubusercontent.com/MikhailKasimov/validin-phish-feed/main/validin-phish-feed.txt
https://raw.githubusercontent.com/Phishing-Database/phishing/refs/heads/master/additions/permanent/domains.list
https://raw.githubusercontent.com/Phishing-Database/phishing/refs/heads/master/additions/permanent/domains.wildcard.list
https://raw.githubusercontent.com/PolishFiltersTeam/KADhosts/master/KADomains.txt
https://raw.githubusercontent.com/ShadowWhisperer/BlockLists/master/Lists/Malware
https://raw.githubusercontent.com/bigdargon/hostsVN/master/extensions/threat/hosts
https://raw.githubusercontent.com/cbuijs/ut1/master/malware/domains
https://raw.githubusercontent.com/cbuijs/ut1/master/phishing/domains
https://raw.githubusercontent.com/chainapsis/phishing-block-list/refs/heads/main/block-list.txt
https://raw.githubusercontent.com/elliotwutingfeng/Inversion-DNSBL-Blocklists/main/Google_hostnames.txt
https://raw.githubusercontent.com/elliotwutingfeng/Inversion-DNSBL-Blocklists/main/Google_hostnames_light.txt
https://raw.githubusercontent.com/iam-py-test/my_filters_001/refs/heads/main/Alternative%20list%20formats/antimalware_domains_nopups.txt
https://raw.githubusercontent.com/openphish/public_feed/refs/heads/main/feed.txt
https://raw.githubusercontent.com/phishdestroy/destroylist/main/list.txt
https://raw.githubusercontent.com/stamparm/aux/master/maltrail-malware-domains.txt
https://raw.githubusercontent.com/stamparm/aux/master/maltrail-static-trails.txt
https://raw.githubusercontent.com/stamparm/ipsum/master/levels/3.txt
https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/badware.txt
https://siberguvenlik.gov.tr/zararli-baglantilar
https://threatfox.abuse.ch/downloads/hostfile
https://threatview.io/Downloads/DOMAIN-High-Confidence-Feed.txt
https://urlhaus-filter.pages.dev/urlhaus-filter-dnscrypt-blocked-ips.txt
https://urlhaus-filter.pages.dev/urlhaus-filter-hosts.txt
https://urlhaus.abuse.ch/downloads/hostfile
https://vn-badsite-filter.pages.dev/vn-badsite-filter-hosts.txt
https://www.kushari.org/downloads/mal.txt
```

### Scams, fake shops, and spam

Feeds the Fake list and the scam-related parts of TIF.

```
https://codeberg.org/xRuffKez/DNSBunker_DNSBL/raw/branch/main/03_scam.txt
https://codeberg.org/xRuffKez/DNSBunker_DNSBL/raw/branch/main/04_fake.txt
https://raw.githubusercontent.com/ShadowWhisperer/BlockLists/master/Lists/Scam
https://raw.githubusercontent.com/durablenapkin/scamblocklist/master/hosts.txt
https://raw.githubusercontent.com/marco-acorte/antispam-it/main/antispam-it.txt
https://raw.githubusercontent.com/matomo-org/referrer-spam-list/master/spammers.txt
https://www.spamhaus.org/drop/drop.txt
https://www.stopforumspam.com/downloads/toxic_domains_whole_filtered_50000.txt
```

### Cryptomining and cryptojacking

Cryptojacking scripts and crypto-themed scam infrastructure.

```
https://raw.githubusercontent.com/LanikSJ/ubo-filters/main/filters/cryptomining-domains.txt
https://raw.githubusercontent.com/cbuijs/ut1/master/cryptojacking/domains
https://raw.githubusercontent.com/spmedia/Crypto-Scam-and-Crypto-Phishing-Threat-Intel-Feed/refs/heads/main/detected_urls.txt
```

### Mobile app trackers and stalkerware

Trackers specific to mobile apps, plus stalkerware indicators.

```
https://raw.githubusercontent.com/AdguardTeam/AdguardFilters/master/SpywareFilter/sections/mobile.txt
https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt
https://raw.githubusercontent.com/AssoEchap/stalkerware-indicators/master/generated/hosts
https://raw.githubusercontent.com/cbuijs/ut1/master/stalkerware/domains
https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters-mobile.txt
```

### Newly registered domains (NRD/DGA)

Base data for the separate NRD and DGA lists. It's also used as a signal inside the build, to flag suspicious new domains for review and to help decide which threat domains belong in the regular tiers, see the [FAQ](FAQ.md#sources). This is a subscription landing page, not a downloadable file, which is why it looks different from everything else here.

```
https://www.stamus-networks.com/stamus-labs/subscribe-to-threat-intel-feed
```

### DoH, VPN, proxy, dynamic DNS, hoster

Feeds the DoH/VPN/TOR/Proxy Bypass lists, the Dynamic DNS list and the Badware Hoster list.

```
https://raw.githubusercontent.com/ShadowWhisperer/BlockLists/master/Lists/DNS
https://raw.githubusercontent.com/ShadowWhisperer/BlockLists/master/Lists/Dynamic
https://raw.githubusercontent.com/ShadowWhisperer/BlockLists/master/Lists/Free
https://raw.githubusercontent.com/ShadowWhisperer/BlockLists/master/Lists/Tunnels
https://raw.githubusercontent.com/ShadowWhisperer/BlockLists/master/Lists/Wild_Tunnel
https://raw.githubusercontent.com/cbuijs/ut1/master/vpn/domains
https://raw.githubusercontent.com/clsfo/reflect4-blocklist/refs/heads/main/reflect4_domains.txt
https://raw.githubusercontent.com/dibdot/DoH-IP-blocklists/master/doh-domains.txt
https://raw.githubusercontent.com/iam-py-test/my_filters_001/main/antidynamicdns.txt
https://raw.githubusercontent.com/stamparm/trails/main/suspicious/anonymous_web_proxy.txt
https://raw.githubusercontent.com/stamparm/trails/main/suspicious/blockchain_dns.txt
https://raw.githubusercontent.com/stamparm/trails/main/suspicious/dns_tunneling_service.txt
https://raw.githubusercontent.com/stamparm/trails/main/suspicious/free_web_hosting.txt
https://raw.githubusercontent.com/stamparm/trails/main/suspicious/onion.txt
https://raw.githubusercontent.com/stamparm/trails/main/suspicious/port_proxy.txt
```

### Gambling

Feeds the Gambling list and its medium and mini versions.

```
https://raw.githubusercontent.com/ABPindo/indonesianadblockrules/refs/heads/master/src/adult/adult_thirdparty.txt
https://raw.githubusercontent.com/MajkiIT/polish-ads-filter/master/polish-pihole-filters/gambling-hosts.txt
https://raw.githubusercontent.com/ShadowWhisperer/BlockLists/master/Lists/Gambling
https://raw.githubusercontent.com/alexsannikov/adguardhome-filters/master/gambling.txt
https://raw.githubusercontent.com/arfshl/anti-gambling-domains/refs/heads/main/domains.txt
https://raw.githubusercontent.com/arkynx/blocklists/refs/heads/main/gambling-domains.txt
https://raw.githubusercontent.com/bet-blocker/bet-blocker/refs/heads/main/blocklist.txt
https://raw.githubusercontent.com/bigdargon/hostsVN/master/extensions/gambling/hosts
https://raw.githubusercontent.com/bigdargon/hostsVN/master/extensions/gambling/hosts-VN
https://raw.githubusercontent.com/cbuijs/ut1/master/gambling/domains
https://raw.githubusercontent.com/mtxadmin/ublock/master/hosts/_all_bets_are_off
https://raw.githubusercontent.com/omerdduran/turk-adfilter/main/turk-adfilter-bahis.txt
```

### Adult content

Feeds the NSFW list.

```
-
```

### Piracy

Feeds the Anti Piracy list.

```
https://raw.githubusercontent.com/cbuijs/ut1/master/warez/domains
```

### Other

Sources that cover several categories at once or don't map cleanly onto one of the groups above.

```
https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt
https://big.oisd.nl
https://raw.githubusercontent.com/badmojr/1Hosts/master/Lite/adblock.txt
https://raw.githubusercontent.com/hectorm/hmirror/refs/heads/master/data/molinero.dev/list.txt
```
