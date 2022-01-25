# API (beta)

## Overview

### Channels

```
https://iptv-org.github.io/api/channels.json
```

```
[
  ...
  {
    "id": "CNN.us",
    "name": "CNN",
    "country": "US",
    "subdivision": null,
    "city": null,
    "broadcast_area": [
      "c/US"
    ],
    "languages": [
      "eng"
    ],
    "categories": [
      "news"
    ],
    "is_nsfw": false,
    "logo": "https://myhealthhub.frontline.ca/myhealthhubtv/channellogos/cnn.png"
  },
  ...
]
```

| Field          | Description                                                                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| id             | Unique channel ID                                                                                                                                    |
| name           | Full name of the channel                                                                                                                             |
| country        | Country code from which the broadcast is transmitted ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2))                        |
| subdivision    | Code of the subdivision (e.g., provinces or states) from which the broadcast is transmitted ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)) |
| city           | Name of the city from which the broadcast is transmitted                                                                                             |
| broadcast_area | List of codes describing the broadcasting area (`r/<region_code>`, `c/<country_code>`, `s/<subdivision_code>`)                                       |
| languages      | List of [languages](database/languages.csv) broadcast                                                                                                |
| categories     | List of [categories](database/categories.csv) to which this channel belongs                                                                          |
| is_nsfw        | Indicates whether the channel broadcasts adult content                                                                                               |
| logo           | Logo URL                                                                                                                                             |

### Categories

```
https://iptv-org.github.io/api/categories.json
```

```
[
  ...
  {
    "id": "documentary",
    "name": "Documentary"
  },
  ...
]
```

| Field | Description          |
| ----- | -------------------- |
| id    | Category ID          |
| name  | Name of the category |

### Countries

```
https://iptv-org.github.io/api/countries.json
```

```
[
  ...
  {
    "name": "United Kingdom",
    "code": "UK",
    "lang": "eng",
    "flag": "🇬🇧"
  },
  ...
]
```

| Field | Description                                                                                |
| ----- | ------------------------------------------------------------------------------------------ |
| name  | Name of the category                                                                       |
| code  | [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country |
| lang  | Official language ([ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) code)              |
| flag  | Country flag emoji                                                                         |

### Subdivisions

```
https://iptv-org.github.io/api/subdivisions.json
```

```
[
  ...
  {
    "country": "CA",
    "name": "Ontario",
    "code": "CA-ON"
  },
  ...
]
```

| Field   | Description                                                                                |
| ------- | ------------------------------------------------------------------------------------------ |
| country | [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country |
| name    | Subdivision name                                                                           |
| code    | [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) code of the subdivision             |

### Languages

```
https://iptv-org.github.io/api/languages.json
```

```
[
  ...
  {
    "name": "French",
    "code": "fra"
  },
  ...
]
```

| Field | Description                                                               |
| ----- | ------------------------------------------------------------------------- |
| name  | Language name                                                             |
| code  | [ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) code of the language |

### Regions

```
https://iptv-org.github.io/api/regions.json
```

```
[
  ...
  {
    "name": "Maghreb",
    "code": "MAGHREB",
    "countries": [
      "DZ",
      "LY",
      "MA",
      "MR",
      "TN"
    ]
  },
  ...
]
```

| Field     | Description                                               |
| --------- | --------------------------------------------------------- |
| name      | Region name                                               |
| code      | Code of the region                                        |
| countries | List of [countries](database/countries.csv) in the region |

## Contribution

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/iptv-org/api/issues) or a [pull request](https://github.com/iptv-org/api/pulls).
