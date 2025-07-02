# Changelog

## 2025-07-02

- added **logos.json**

## 2025-04-07

- added **feeds** and **timezones**
- **channels**: removed `broadcast_area` and `languages` fields
- **streams**: added `feed` and `quality` fields, renamed `http_referrer` field to `referrer`, removed `timeshift` field
- **guides**: added `feed` field

## 2025-03-05

- **streams**: `channel` field now returns `null` if no value is specified
- **blocklist**: added `reason` field

## 2023-12-03

- **guides**: `channel` field now returns `null` if no value is specified

## 2023-11-17

- **guides**: added updated list of guides

## 2023-10-09

- **guides**: removed from the list as the data is no longer being updated

## 2023-05-04

- **guides**: the `status`, `width`, `height`, `bitrate`, `frame_rate`, `added_at`, `updated_at` and `checked_at` fields were removed (https://github.com/iptv-org/iptv/pull/12628)

## 2022-10-19

- **channels**: `native_name` field renamed to `alt_names`

## 2022-10-17

- **channels**: added `owners` field

## 2022-06-09

- **streams**: added `frame_rate` field

## 2022-04-21

- **channels:** added `replaced_by` field

## 2022-04-12

- **channels:** added `launched` and `closed` fields

## 2022-03-01

- **channels:** added `native_name` field

## 2022-02-21

- added **streams.json**
- **channels:** added `website` field

## 2022-02-16

- added **blocklist.json**

## 2022-01-29

- **channels**: added `network` field

## 2022-01-25

- **channels**: added the `subdivision` and `city` field
- **categories**: removed `local` category
