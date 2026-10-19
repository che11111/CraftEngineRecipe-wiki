---
title: Custom Buttons
sidebar_label: Custom Buttons
---

## Custom Buttons

Insert the following entry into `entries:` in `categories.yml`, save, and run `/cer reload`:

```yaml
  - display:
      material: minecraft:compass
      name: '&#E4D397Return to Spawn'
      lore:
        - '&#B8C0CCLeft-click to teleport to spawn'
    visibility: player
    actions:
      left:
        - 'sound: UI_BUTTON_CLICK'
        - close
        - 'delay: 0.1'
        - 'command: spawn'
```

This example closes the menu, waits briefly, then runs `/spawn` as the player. Your server must already provide that command.

### Icons and Text

- Vanilla icon: `material: minecraft:compass`.
- CraftEngine icon: `material: source:CraftEngine:namespace:item_id`.
- `display.name` and `display.lore` accept `&#RRGGBB` hex colors and codes such as `&e` and `&7`.
- Buttons are visible to everyone by default. They also accept `visibility` and `permission` as described under [Categories](./categories.md).

### Clicks and Actions

`actions` accepts `all`, `left`, `right`, `shift_left`, `shift_right`, and `middle`. Missing click types fall back to `all`. Actions run from top to bottom:

| Example action | Purpose |
| --- | --- |
| `'sound: UI_BUTTON_CLICK-1-2'` | Play a sound at volume 1, pitch 2 |
| `close` | Close the menu |
| `'delay: 0.5'` | Wait 0.5 seconds; `10t` means 10 ticks |
| `'command: spawn'` or `'player: spawn'` | Run `/spawn` as the player |
| `'console: say Hello'` | Run a command as the console |
| `'op: spawn'` | Temporarily run as OP; unsupported on Folia |

Omit the leading `/` in commands. Configure privileged `console` and `op` commands carefully. On Folia, encountering `op` stops the remaining actions.

For a decorative button, use `actions: {all: []}`. The plugin folder's `categories-example.yml` has more examples; copy the entries you need into your actual configuration.
