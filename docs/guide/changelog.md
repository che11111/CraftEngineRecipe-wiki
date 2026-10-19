---
title: Changelog
sidebar_label: Changelog
---

## 1.0.16

### Features

- Added notifications for newer official GitHub releases, enabled by default and configurable with `check-for-updates`.
- Added a workstation browser for crafting, smelting, blasting, smoking, campfire cooking, stonecutting, smithing, and brewing recipes.
- Added main-hand lookup, target-block lookup, and information buttons. Target-block lookup is also available with `/cer target`.
- `/cer hand` and `/cer target` support recipes that produce vanilla and CraftEngine items.
- Search supports item IDs, names, translation keys, Chinese pinyin, and pinyin initials. Resource pack language files provide translated names for searching.
- Categories support custom order, visibility permissions, and hiding rules. Use `'*'` in `hidden-items` to hide all direct items, or `hidden-categories` to also hide the category button.
- Added custom buttons with actions for sounds, closing the menu, delays, player commands, console commands, and more.
- Added Chinese and English language files for editing titles, buttons, tooltips, and messages.
- Bundled background and button assets install into CraftEngine on the first startup. Keeping the installation marker prevents reinstallation after renaming the resource folder. The local copy only restores missing files and preserves existing ones.
- Added bStats for both CraftEngineRecipe and the original author's CEGUI, controlled together by `bstats.enabled`.

### Fixes and Improvements

- Main-hand and target-block lookups now play separate success and failure sounds, without extra click, opening, or closing sounds.
- Category or page navigation at an edge, and left- or right-clicks on items with no recipe to open, reuse `sounds.query-failure` and play the failure sound only once per action.
- Fixed sound formats with volume and pitch, such as `UI_BUTTON_CLICK-1-2`. Menu opening and closing sounds are configured under `sounds.open-menu` and `sounds.close-menu`.
- Fixed overlapping sounds when changing pages. Category navigation, item paging, and Back can use separate sounds.
- The workstation browser follows the category bar layout, supports pagination, and respects permissions and hiding rules.
- Updated button icons, default title styles, and colors, with matching Chinese and English text.
- Missing settings are automatically added to existing `config.yml` and built-in Chinese and English language files while keeping current settings.
- Resource pack language files and search indexes are processed in the background. Item names are read in batches to spread out loading work.

### Compatibility and Builds

- Added experimental Folia support. Temporary OP button actions are disabled on Folia.
- One codebase builds separate JARs for Minecraft 26.1.2, 26.2, and 26.3, each with the matching menu dependency.
- Adjusted platform and version declarations to improve Modrinth's detection of Paper, Folia, and supported versions.

Read [Updating the Plugin](./updating.md) before updating, especially the resource pack steps.
