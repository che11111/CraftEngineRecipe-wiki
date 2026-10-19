---
title: Settings & Troubleshooting
sidebar_label: Settings & Troubleshooting
---

All configuration files are under `plugins/CraftEngineRecipe/`. Save changes and run `/cer reload`.

## Change Language and Text

Choose the server-wide interface language in `config.yml`:

```yaml
language: en_US
```

Use `zh_CN` for Simplified Chinese or `en_US` for English. Edit titles, button names, tooltips, and messages in the matching `lang/zh_CN.yml` or `lang/en_US.yml`.

For example, change the help button's text:

```yaml
ui:
  content:
    info:
      name: '<#79CFC9>How to Use</#79CFC9>'
      lore:
        - '<#B8C0CC>Left-click to view crafting recipes</#B8C0CC>'
        - '<#B8C0CC>Right-click to view uses</#B8C0CC>'
```

Edit the existing section instead of adding a second `ui:` key. Text supports formats such as `<#color-code>` and `<bold>Bold</bold>`. Keep placeholders such as `{id}` and `<category>`, along with image and shift tags in titles.

Custom text left in an old `config.yml` may override language files. If your changes do not appear, move that text into the language file, then remove the old text fields from config.

Startup and reload add missing keys and defaults to `config.yml` and the bundled language files while keeping existing custom values. You do not need to delete the entire configuration to update it.

## Adjust the Menu Layout

Edit `browser.layout` in `config.yml`. It has 6 rows of 9 slots:

```yaml
browser:
  layout:
    - "<CCCCCCC>"
    - "XXXXXXXXX"
    - "XXXXXXXXX"
    - "XXXXXXXXX"
    - "XXXXXXXXX"
    - "BTLHSGRI#"
```

| Character | Default content |
| --- | --- |
| `C` | Category icons; workstation icons on the workstation page |
| `X` | Items and subcategories |
| `<`, `>` | Previous/next category |
| `L`, `R` | Previous/next item page |
| `B` | Back |
| `H`, `G` | Main-hand lookup, targeted-block lookup |
| `S`, `I`, `T` | Search, help, workstation browser |
| `#` | Empty slot |

Swap characters to move buttons. Each button's `char` must match the layout and must not conflict with other buttons, `C`, `X`, or `#`. Use `#` for empty slots instead of spaces.

For example, to hide the glasses button, set `content.glasses.char` to `''` and replace `G` with `#` in the layout. The `/cer target` command still works.

Change icons through the button's `item-model` and `material`; change text in the language file. `item-model` takes a CraftEngine item ID and `material` takes a vanilla material. `content.empty` only supports a material and language-file text.

We recommend keeping the default menu layout unless you can draw a new UI to match it.

### Choose the Top Categories

The default `category-bar.source: ce` follows CraftEngine's top-level categories. To list specific categories instead:

```yaml
category-bar:
  source: custom
  list:
    - farmersdelight:categories
    - example:tools
```

Replace these with actual full category IDs. Their namespaces must still be applied in `categories.yml`.

## Other Common Settings

| Setting | Purpose |
| --- | --- |
| `check-for-updates: true` | Update notifications are enabled by default; set to `false` to disable. See [Updating](./updating.md#update-notifications) |
| `hotkey.enabled: false` | Disable the shortcut |
| `hotkey.require-sneak: false` | Open without sneaking; takes over the normal swap-offhand action |
| `recipe.rotate-interval: 30` | Recipe rotation interval; 5–200 ticks, about 20 ticks per second |
| `search.max-results: 200` | Search result limit; 1–1000 |
| `search.max-length: 32` | Search input limit; 1–64 |


Keep the default search limit for large item collections. See [Menu Sounds](./menu-sounds.md) for sound settings.

## Common Problems

| Issue | What to do |
| --- | --- |
| `/cer` is empty on the first run | Preview `/cer unapplied`, then [apply categories](./getting-started.md#make-categories-available) |
| A player cannot see a category | Check applied namespaces, `visibility`, permissions, hiding rules, and whether CraftEngine loaded the category |
| An item cannot be found | Try its full ID; check permissions and hiding rules; translated-name search needs a generated resource pack |
| The 8th workstation is missing | The default bar has 7 slots; click the top-right arrow |
| Garbled background or missing icons | Run `/ce reload all`, check pack-loading logs, and have players download the pack again; see [Updating](./updating.md) for replacing resources |
| Clicking an item does nothing | That direction may have no recipe; left-click for crafting recipes, right-click for uses |
| Data is not ready | Wait briefly; if it persists, run `/cer reload` and check console errors and YAML indentation |
| New buttons are missing after an update | Custom `browser.layout` values are preserved; add the new button characters manually |
| Wrong Java version | Check that the server starts with Java 25 or newer |
| Version mismatch or recipe-window errors | Install the JAR matching Minecraft and remove old JARs for other versions |

If you still need help, provide your server, Java, CraftEngine, and plugin versions, plus the complete console error.
