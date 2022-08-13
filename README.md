# API (beta)

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
    "native_name": "安徽卫视",
    "network": "Anhui",
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
| native_name    | string or null | Channel name in the original language if available                                                                                                   |
| network        | string or null | Name of the network operating the channel                                                                                                            |
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
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    "status": "online",
    "width": 1280,
    "height": 720,
    "bitrate": 565040,
    "frame_rate": 29.97,
    "added_at": "2022-07-13T04:41:45Z",
    "updated_at": "2022-07-13T04:41:45Z",
    "checked_at": "2022-08-13T14:05:19Z"
  }
  //...
]
```

| Field         | Type             | Description                                                                                                            |
| ------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------- |
| channel       | string           | Channel ID                                                                                                             |
| url           | string           | Stream URL                                                                                                             |
| http_referrer | string or null   | The [Referer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) request header for the stream         |
| user_agent    | string or null   | The [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) request header for the stream   |
| status        | string           | The status of the stream based on the last check. Can be one of the following: `online`, `blocked`, `timeout`, `error` |
| width         | integer          | The maximum width of the stream in pixels. Specified only if the status is `online`                                    |
| height        | integer          | The maximum height of the stream in pixels. Specified only if the status is `online`                                   |
| bitrate       | integer          | The bitrate of the stream in bits per second. Specified only if the status is `online`                                 |
| frame_rate    | integer or float | The frame rate of the stream in frames per second. Specified only if the status is `online`                            |
| added_at      | string           | Date the stream was added to the list ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601))                             |
| updated_at    | string           | Date of last update ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601))                                               |
| checked_at    | string           | Date of last check ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601))                                                |

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
    "url": "https://iptv-org.github.io/epg/guides/us/tvtv.us.epg.xml"
  }
  //...
]
```

| Field   | Type   | Description                                                                       |
| ------- | ------ | --------------------------------------------------------------------------------- |
| channel | string | Channel ID                                                                        |
| site    | string | Program source domain name                                                        |
| lang    | string | Language of the guide ([ISO_639-1](https://en.wikipedia.org/wiki/ISO_639-1) code) |
| url     | string | Link to the guide                                                                 |

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
    "name": "United Kingdom",
    "code": "UK",
    "lang": "eng",
    "flag": "🇬🇧"
  }
  //...
]
```

| Field | Type   | Description                                                                                |
| ----- | ------ | ------------------------------------------------------------------------------------------ |
| name  | string | Name of the country                                                                        |
| code  | string | [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country |
| lang  | string | Official language ([ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) code)              |
| flag  | string | Country flag emoji                                                                         |

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
    "name": "Maghreb",
    "code": "MAGHREB",
    "countries": ["DZ", "LY", "MA", "MR", "TN"]
  }
  //...
]
```

| Field     | Type   | Description                     |
| --------- | ------ | ------------------------------- |
| name      | string | Region name                     |
| code      | string | Code of the region              |
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
