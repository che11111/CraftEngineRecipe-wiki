---
title: Changelog
sidebar_label: Changelog
---

## 1.0.17

- Added notifications for official GitHub releases. Enabled by default; can be disabled via `check-for-updates`.
- Added a crafting station category page, allowing recipes to be browsed by crafting table, furnace, blast furnace, smoker, campfire, stonecutter, smithing table, and brewing stand.
- Added buttons for querying the item in the main hand, querying the block under the crosshair, and viewing usage instructions. Crosshair queries can also be performed using `/cer target`.
- Added support for `/cer hand` and `/cer target` to look up crafting recipes for vanilla and CraftEngine items.

## 1.0.16

- Main-hand and crosshair queries now play separate success or failure sounds without overlapping with regular click, menu-open, or menu-close sounds.
- Reused `sounds.query-failure` when reaching the boundaries of category tabs or item lists, or when clicking an item with no available recipe to open. The failure sound plays only once per action.
- Fixed sound definitions such as `UI_BUTTON_CLICK-1-2` that include volume and pitch parameters. Standardized menu toggle sounds using `sounds.open-menu` and `sounds.close-menu`.
- Fixed an issue where multiple sounds could overlap during pagination. Separate sound settings are available for category switching, item pagination, and returning to the previous page.
- The crafting station category page now follows the category tab layout, supports pagination, and respects permission and hiding rules.
- Updated button icons, default title styles, and color schemes, with corresponding updates to Chinese and English text.
- Missing configuration entries are now automatically added to existing `config.yml` files and built-in Chinese and English language files, while preserving existing settings.
- Resource pack language loading and search index construction are now handled asynchronously. Item names are loaded in batches to reduce processing spikes during startup.
- Added search support for item IDs, names, translation keys, Chinese Pinyin, and Pinyin initials. Resource pack language files are now read to support searching by translated item names.

## 1.0.14

- Added experimental Folia support. The temporary OP button action is disabled when running on Folia.

## 1.0.8

- Added support for custom category ordering, visibility permissions, and hiding rules. Set `hidden-items` to `'*'` to hide all direct items within a category, or use `hidden-categories` to hide categories along with their category buttons.
- Added custom buttons with support for actions such as playing sounds, closing menus, applying delays, and executing player or console commands.
- Added Chinese and English language files, allowing titles, buttons, tooltips, and notification messages to be customized.
- Added built-in background and button assets, which are automatically installed into CraftEngine on first startup. Once the installation marker is in place, assets will not be reinstalled if the resource directory is renamed. Local copies are only used to fill in missing files and will not overwrite existing files.
