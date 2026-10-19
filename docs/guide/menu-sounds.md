---
title: Menu Sounds
sidebar_label: Menu Sounds
---

## Menu Sounds

Set sounds under `sounds` in `config.yml`, save, then run `/cer reload`:

```yaml
sounds:
  change-category: 'UI_BUTTON_CLICK-1-2'
  change-page: minecraft:item.book.page_turn
  click: minecraft:ui.button.click
  back: minecraft:item.book.page_turn
  search: minecraft:ui.toast.in
  query-success: 'UI_BUTTON_CLICK-1-2'
  query-failure: 'BLOCK_NOTE_BLOCK_BASS-1-1'
  open-menu: 'BLOCK_IRON_DOOR_OPEN-1-2'
  close-menu: 'BLOCK_IRON_DOOR_CLOSE-1-2'
```

| Setting | When it plays |
| --- | --- |
| `change-category` | Previous/next arrows in the top category bar |
| `change-page` | Previous/next item page |
| `click` | Selecting a category or opening an item's recipe |
| `back` | Returning to a parent or from a recipe |
| `search` | Opening the search dialog |
| `query-success` | Main-hand or target-block lookup opens a recipe |
| `query-failure` | Main-hand or target-block lookup fails |
| `open-menu` | Entering through a command or shortcut |
| `close-menu` | Leaving the menu or recipe page |

Internal paging, category changes, and recipe rotation do not play extra opening or closing sounds. Category and page arrows are silent when they cannot move further.

`/cer hand`, `/cer target`, and their hand and glasses buttons share these lookup sounds. An empty hand, no targeted block, no recipe, or a permission or hiding restriction plays the failure sound. Opening a recipe plays the success sound. Each lookup plays only its result sound, without adding a normal click, menu opening, or closing sound. Closing the page afterward still plays `close-menu`.

Use either `UI_BUTTON_CLICK` or `minecraft:ui.button.click`, optionally followed by `-volume-pitch`. In `UI_BUTTON_CLICK-1-2`, `1` is the volume and `2` is the pitch, **not the number of plays**. Decimal values such as `0.5` also work. Menu sounds default to volume 0.7 and pitch 1 when omitted.

Use `''` to disable a sound, for example `close-menu: ''`. These values do not need a `sound:` prefix.

## Set a Custom Button's Sound

Configure it in the button's actions in `categories.yml`:

```yaml
actions:
  left:
    - 'sound: UI_BUTTON_CLICK-1-2'
```

Button actions default to volume 1 and pitch 1. If a `close` action follows, closing also plays `sounds.close-menu`. Remove the button's sound action or disable the closing sound if you do not want both.
