# API (beta)

## Overview

- [Channels](#channels)
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
    "id": "KSTSDT3.us",
    "name": "KSTS-DT3",
    "network": "NBC",
    "country": "US",
    "subdivision": "US-CA",
    "city": "San Francisco",
    "broadcast_area": ["s/US-CA"],
    "languages": ["eng"],
    "categories": ["general"],
    "is_nsfw": false,
    "logo": "https://cdn.tvpassport.com/image/station/100x100/nbc.png"
  }
  //...
]
```

| Field          | Type           | Description                                                                                                                                          |
| -------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| id             | string         | Unique channel ID                                                                                                                                    |
| name           | string         | Full name of the channel                                                                                                                             |
| network        | string or null | Name of the network operating the channel                                                                                                            |
| country        | string         | Country code from which the broadcast is transmitted ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2))                        |
| subdivision    | string or null | Code of the subdivision (e.g., provinces or states) from which the broadcast is transmitted ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)) |
| city           | string or null | Name of the city from which the broadcast is transmitted                                                                                             |
| broadcast_area | array          | List of codes describing the broadcasting area (`r/<region_code>`, `c/<country_code>`, `s/<subdivision_code>`)                                       |
| languages      | array          | List of languages broadcast                                                                                                                          |
| categories     | array          | List of categories to which this channel belongs                                                                                                     |
| is_nsfw        | boolean        | Indicates whether the channel broadcasts adult content                                                                                               |
| logo           | string or null | Logo URL                                                                                                                                             |

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

## Contribution

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/iptv-org/api/issues) or a [pull request](https://github.com/iptv-org/api/pulls).
