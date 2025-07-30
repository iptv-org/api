# API

## Overview

- [Channels](#channels)
- [Feeds](#feeds)
- [Logos](#logos)
- [Streams](#streams)
- [Guides](#guides)
- [Categories](#categories)
- [Languages](#languages)
- [Countries](#countries)
- [Subdivisions](#subdivisions)
- [Regions](#regions)
- [Timezones](#timezones)
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
    "categories": ["general"],
    "is_nsfw": false,
    "launched": "2016-07-28",
    "closed": "2020-05-31",
    "replaced_by": "CCTV1.cn",
    "website": "http://www.ahtv.cn/"
  }
  //...
]
```

| Field       | Type           | Description                                                                                                                                          |
| ----------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| id          | string         | Unique channel ID                                                                                                                                    |
| name        | string         | Full name of the channel                                                                                                                             |
| alt_names   | array          | List of alternative channel names                                                                                                                    |
| network     | string or null | Name of the network operating the channel                                                                                                            |
| owners      | array          | List of channel owners                                                                                                                               |
| country     | string         | Country code from which the broadcast is transmitted ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2))                        |
| subdivision | string or null | Code of the subdivision (e.g., provinces or states) from which the broadcast is transmitted ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)) |
| city        | string or null | Name of the city from which the broadcast is transmitted                                                                                             |
| categories  | array          | List of categories to which this channel belongs                                                                                                     |
| is_nsfw     | boolean        | Indicates whether the channel broadcasts adult content                                                                                               |
| launched    | string or null | Launch date of the channel (`YYYY-MM-DD`)                                                                                                            |
| closed      | string or null | Date on which the channel closed (`YYYY-MM-DD`)                                                                                                      |
| replaced_by | string or null | The ID of the channel that this channel was replaced by                                                                                              |
| website     | string or null | Official website URL                                                                                                                                 |

Source of data: https://github.com/iptv-org/database

### Feeds

```
https://iptv-org.github.io/api/feeds.json
```

```jsonc
[
  //...
  {
    "channel": "France3.fr",
    "id": "ParisIledeFrance",
    "name": "Paris Ile-de-France",
    "alt_names": ["Paris Île-de-France"],
    "is_main": false,
    "broadcast_area": ["c/FR"],
    "timezones": ["Europe/Paris"],
    "languages": ["fra"],
    "format": "576i"
  }
  //...
]
```

| Field          | Type    | Description                                                                                                    |
| -------------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| channel        | string  | Channel ID                                                                                                     |
| id             | string  | Unique feed ID                                                                                                 |
| name           | string  | Name of the feed                                                                                               |
| alt_names      | array   | List of alternative feed names                                                                                 |
| is_main        | boolean | Indicates if this feed is the main for the channel                                                             |
| broadcast_area | array   | List of codes describing the broadcasting area (`r/<region_code>`, `c/<country_code>`, `s/<subdivision_code>`) |
| timezones      | array   | List of timezones in which the feed is broadcast                                                               |
| languages      | array   | List of broadcast languages                                                                                    |
| format         | string  | Video format of the feed                                                                                       |

Source of data: https://github.com/iptv-org/database

### Logos

```
https://iptv-org.github.io/api/logos.json
```

```jsonc
[
  //...
  {
    "channel": "France3.fr",
    "feed": "ParisIledeFrance",
    "tags": ["horizontal", "white"],
    "width": 1000,
    "height": 468,
    "format": "SVG",
    "url": "https://example.com/logo.svg"
  }
  //...
]
```

| Field   | Type           | Description                                                                |
| ------- | -------------- | -------------------------------------------------------------------------- |
| channel | string         | Channel ID                                                                 |
| feed    | string or null | Feed ID                                                                    |
| tags    | array          | List of keywords describing this version of the logo                       |
| width   | number         | The width of the image in pixels                                           |
| height  | number         | The height of the image in pixels                                          |
| format  | string or null | Image format (one of: `PNG`, `JPEG`, `SVG`, `GIF`, `WebP`, `AVIF`, `APNG`) |
| url     | string         | Logo URL                                                                   |

Source of data: https://github.com/iptv-org/database

### Streams

```
https://iptv-org.github.io/api/streams.json
```

```jsonc
[
  //...
  {
    "channel": "France3.fr",
    "feed": "NordPasdeCalaisHD",
    "title": "BBC One Nord Pas-de-Calais HD",
    "url": "http://1111296894.rsc.cdn77.org/LS-ATL-54548-6/index.m3u8",
    "referrer": "http://example.com/",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    "quality": "720p"
  }
  //...
]
```

| Field      | Type           | Description                                                                                                          |
| ---------- | -------------- | -------------------------------------------------------------------------------------------------------------------- |
| channel    | string or null | Channel ID                                                                                                           |
| feed       | string or null | Feed ID                                                                                                              |
| title      | string         | Stream title                                                                                                         |
| url        | string         | Stream URL                                                                                                           |
| referrer   | string or null | The [Referer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) request header for the stream       |
| user_agent | string or null | The [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) request header for the stream |
| quality    | string or null | Maximum stream quality                                                                                               |

Source of data: https://github.com/iptv-org/iptv

### Guides

```
https://iptv-org.github.io/api/guides.json
```

```jsonc
[
  //...
  {
    "channel": "BBCOne.uk",
    "feed": "EastMidlandsHD",
    "site": "sky.co.uk",
    "site_id": "bbcone",
    "site_name": "BBC One",
    "lang": "en"
  }
  //...
]
```

| Field     | Type           | Description                                                                       |
| --------- | -------------- | --------------------------------------------------------------------------------- |
| channel   | string or null | Channel ID                                                                        |
| feed      | string or null | Feed ID                                                                           |
| site      | string         | Site domain name                                                                  |
| site_id   | string         | Unique channel ID used on the site                                                |
| site_name | string         | Channel name used on the site                                                     |
| lang      | string         | Language of the guide ([ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) code) |

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
    "name": "Documentary",
    "description": "Programming that depicts a person or real-world event"
  }
  //...
]
```

| Field       | Type   | Description                       |
| ----------- | ------ | --------------------------------- |
| id          | string | Category ID                       |
| name        | string | Name of the category              |
| description | string | Short description of the category |

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

### Timezones

```
https://iptv-org.github.io/api/timezones.json
```

```jsonc
[
  //...
  {
    "id": "Europe/London",
    "utc_offset": "+00:00",
    "countries": ["UK", "GG", "IM", "JE"]
  }
  //...
]
```

| Field      | Type   | Description                                                               |
| ---------- | ------ | ------------------------------------------------------------------------- |
| id         | string | Timezone ID from [tz database](https://en.wikipedia.org/wiki/Tz_database) |
| utc_offset | string | [UTC offset](https://en.wikipedia.org/wiki/UTC_offset) for this time zone |
| countries  | array  | List of countries included in this time zone                              |

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
    "reason": "dmca",
    "ref": "https://github.com/iptv-org/iptv/issues/1831"
  }
  //...
]
```

| Field   | Type   | Description                                     |
| ------- | ------ | ----------------------------------------------- |
| channel | string | Channel ID                                      |
| reason  | string | Reason for blocking (`dmca` or `nsfw`)          |
| ref     | string | Link to removal request or DMCA takedown notice |

Source of data: https://github.com/iptv-org/database

## Contribution

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/iptv-org/api/issues) or a [pull request](https://github.com/iptv-org/api/pulls).
