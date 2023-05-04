# API

## Overview

- [Channels](#channels)
- [Streams](#streams)
- [Guides](#guides)
- [Categories](#categories)
- [Languages](#languages)
- [Countries](#countries)
- [Subdivisions](#subdivisions)
- [Regions](#regions)
- [Blocklist](#blocklist)

### Channels

```
https://iptv-org.github.io/api/channels.json
```

```jsonc
[
  //...
  {
    "id": "AnhuiTV.cn",
    "name": "Anhui TV",
    "alt_names": ["安徽卫视"],
    "network": "Anhui",
    "owners": ["China Central Television"],
    "country": "CN",
    "subdivision": "CN-AH",
    "city": "Hefei",
    "broadcast_area": ["s/CN-AH"],
    "languages": ["zho"],
    "categories": ["general"],
    "is_nsfw": false,
    "launched": "2016-07-28",
    "closed": "2020-05-31",
    "replaced_by": "CCTV1.cn",
    "website": "http://www.ahtv.cn/",
    "logo": "https://example.com/logo.png"
  }
  //...
]
```

| Field          | Type           | Description                                                                                                                                          |
| -------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| id             | string         | Unique channel ID                                                                                                                                    |
| name           | string         | Full name of the channel                                                                                                                             |
| alt_names      | array          | List of alternative channel names                                                                                                                    |
| network        | string or null | Name of the network operating the channel                                                                                                            |
| owners         | array          | List of channel owners                                                                                                                               |
| country        | string         | Country code from which the broadcast is transmitted ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2))                        |
| subdivision    | string or null | Code of the subdivision (e.g., provinces or states) from which the broadcast is transmitted ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)) |
| city           | string or null | Name of the city from which the broadcast is transmitted                                                                                             |
| broadcast_area | array          | List of codes describing the broadcasting area (`r/<region_code>`, `c/<country_code>`, `s/<subdivision_code>`)                                       |
| languages      | array          | List of languages broadcast                                                                                                                          |
| categories     | array          | List of categories to which this channel belongs                                                                                                     |
| is_nsfw        | boolean        | Indicates whether the channel broadcasts adult content                                                                                               |
| launched       | string or null | Launch date of the channel (`YYYY-MM-DD`)                                                                                                            |
| closed         | string or null | Date on which the channel closed (`YYYY-MM-DD`)                                                                                                      |
| replaced_by    | string or null | The ID of the channel that this channel was replaced by                                                                                              |
| website        | string or null | Official website URL                                                                                                                                 |
| logo           | string         | Logo URL                                                                                                                                             |

Source of data: https://github.com/iptv-org/database

### Streams

```
https://iptv-org.github.io/api/streams.json
```

```jsonc
[
  //...
  {
    "channel": "BBCNews.uk",
    "url": "http://1111296894.rsc.cdn77.org/LS-ATL-54548-6/index.m3u8",
    "http_referrer": "http://example.com/",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
  }
  //...
]
```

| Field         | Type           | Description                                                                                                          |
| ------------- | -------------- | -------------------------------------------------------------------------------------------------------------------- |
| channel       | string         | Channel ID                                                                                                           |
| url           | string         | Stream URL                                                                                                           |
| http_referrer | string or null | The [Referer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) request header for the stream       |
| user_agent    | string or null | The [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) request header for the stream |

Source of data: https://github.com/iptv-org/iptv

### Guides

```
https://iptv-org.github.io/api/guides.json
```

```jsonc
[
  //...
  {
    "channel": "KSTSDT3.us",
    "site": "tvtv.us",
    "lang": "en",
    "days": 2,
    "url": "https://iptv-org.github.io/epg/guides/us.xml"
  }
  //...
]
```

| Field   | Type    | Description                                                                       |
| ------- | ------- | --------------------------------------------------------------------------------- |
| channel | string  | Channel ID                                                                        |
| site    | string  | Program source domain name                                                        |
| lang    | string  | Language of the guide ([ISO_639-1](https://en.wikipedia.org/wiki/ISO_639-1) code) |
| days    | integer | Number of days for which this guide is intended                                   |
| url     | string  | Link to the guide                                                                 |

Source of data: https://github.com/iptv-org/epg

### Categories

```
https://iptv-org.github.io/api/categories.json
```

```jsonc
[
  //...
  {
    "id": "documentary",
    "name": "Documentary"
  }
  //...
]
```

| Field | Type   | Description          |
| ----- | ------ | -------------------- |
| id    | string | Category ID          |
| name  | string | Name of the category |

Source of data: https://github.com/iptv-org/database

### Languages

```
https://iptv-org.github.io/api/languages.json
```

```jsonc
[
  //...
  {
    "name": "French",
    "code": "fra"
  }
  //...
]
```

| Field | Type   | Description                                                               |
| ----- | ------ | ------------------------------------------------------------------------- |
| name  | string | Language name                                                             |
| code  | string | [ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) code of the language |

Source of data: https://github.com/iptv-org/database

### Countries

```
https://iptv-org.github.io/api/countries.json
```

```jsonc
[
  //...
  {
    "name": "Canada",
    "code": "CA",
    "languages": ["eng", "fra"],
    "flag": "🇨🇦"
  }
  //...
]
```

| Field     | Type   | Description                                                                                           |
| --------- | ------ | ----------------------------------------------------------------------------------------------------- |
| name      | string | Name of the country                                                                                   |
| code      | string | [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country            |
| languages | array  | List of official languages of the country ([ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) code) |
| flag      | string | Country flag emoji                                                                                    |

Source of data: https://github.com/iptv-org/database

### Subdivisions

```
https://iptv-org.github.io/api/subdivisions.json
```

```jsonc
[
  //...
  {
    "country": "CA",
    "name": "Ontario",
    "code": "CA-ON"
  }
  //...
]
```

| Field   | Type   | Description                                                                                |
| ------- | ------ | ------------------------------------------------------------------------------------------ |
| country | string | [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country |
| name    | string | Subdivision name                                                                           |
| code    | string | [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) code of the subdivision             |

Source of data: https://github.com/iptv-org/database

### Regions

```
https://iptv-org.github.io/api/regions.json
```

```jsonc
[
  //...
  {
    "code": "MAGHREB",
    "name": "Maghreb",
    "countries": ["DZ", "LY", "MA", "MR", "TN"]
  }
  //...
]
```

| Field     | Type   | Description                     |
| --------- | ------ | ------------------------------- |
| code      | string | Code of the region              |
| name      | string | Full name of the region         |
| countries | array  | List of countries in the region |

Source of data: https://github.com/iptv-org/database

### Blocklist

```
https://iptv-org.github.io/api/blocklist.json
```

```jsonc
[
  //...
  {
    "channel": "AnimalPlanetEast.us",
    "ref": "https://github.com/iptv-org/iptv/issues/1831"
  }
  //...
]
```

| Field   | Type   | Description                                     |
| ------- | ------ | ----------------------------------------------- |
| channel | string | Channel ID                                      |
| ref     | string | Link to removal request or DMCA takedown notice |

Source of data: https://github.com/iptv-org/database

## Contribution

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/iptv-org/api/issues) or a [pull request](https://github.com/iptv-org/api/pulls).
