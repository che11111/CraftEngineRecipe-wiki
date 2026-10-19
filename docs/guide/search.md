---
title: Controls & Search
sidebar_label: Controls & Search
---

## View Recipes

Open `/cer`, then left-click an item to see how to craft it, or right-click to see recipes that use it. Multiple recipes rotate automatically. Click outside the recipe window to return.

The menu is for reference. It does not consume items or provide one-click crafting.

## Main-Hand and Target Lookup

| What to look up | How to use it | Menu button |
| --- | --- | --- |
| Main-hand item | Hold the item and run `/cer hand` | Hand icon |
| Targeted block | Aim at a block within 6 blocks and run `/cer target` | Glasses icon |

Both support **vanilla items and blocks, plus CraftEngine custom content**, and show recipes that produce them.

Custom items need an [applied category](./getting-started.md#make-categories-available). Categorized items follow category permissions and [hiding rules](./categories.md). Uncategorized vanilla items can also be queried directly. If you configure a `minecraft` namespace, it must be applied and its permission requirements must be met.

If no recipe is found, check that CraftEngine has loaded it. Recipes managed privately by other plugins may not be available.

## Browse by Workstation

Click the **crafting table icon** at the bottom to browse recipe outputs from 8 workstations:

Crafting table, furnace, blast furnace, smoker, campfire, stonecutter, smithing table, and brewing stand.

- Click a workstation at the top to select it. The category arrows scroll the workstation bar.
- Click an output below to view its recipes. The page arrows switch item pages.
- Search from this page to find outputs from the selected workstation only.
- Click Back to return to the item category menu.

This page follows the same category permissions and hiding rules. It lists loaded recipes with fixed outputs, including smithing upgrades. Recipes whose results depend on the input, such as smithing trims, are omitted here.

The default first row, `"<CCCCCCC>"`, has 7 `C` slots. **Use the right category arrow to see the 8th workstation.** This page shares the main menu's layout and keeps both arrow slots available.

## Search

Run `/cer search` or click the search button, enter a keyword, and confirm.

Search supports item IDs, partial IDs, display names, translation keys, pinyin, and pinyin initials. For example, “茄子” can be found using `茄子`, `qie`, `zi`, `qiez`, or `qz`. If a search fails, try the full item ID.

Results only include items that are accessible and not hidden in the current menu. The defaults are 32 characters per query and 200 results.

### Items with Translation Keys

For names using translation keys, the plugin reads language files from CraftEngine's generated resource pack so players can search by translated names.

Set the preferred languages in `config.yml`:

```yaml
search:
  languages:
    - zh_cn
    - en_us
```

This uses `zh_cn` first, then `en_us` for missing translations. It is independent of the interface `language` setting and does not follow each player's client language.

After changing resource-pack language files, regenerate the pack through CraftEngine, then run `/cer reload`. If the language files cannot be read, item ID searches still work.

## Recipe Display Notes

Supported types include shaped/shapeless crafting, smelting, blasting, smoking, campfire cooking, stonecutting, smithing, and brewing. Campfire recipes use a furnace-style page. Brewing pages show the input container at the bottom left and the output at the bottom right.

When an ingredient has several alternatives, only the first is currently shown. Change `recipe.rotate-interval` in `config.yml` to adjust automatic rotation; the default is 30 ticks (about 1.5 seconds).
