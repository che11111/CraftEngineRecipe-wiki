---
title: Commands & Permissions
sidebar_label: Commands & Permissions
---

## Commands, Permissions, and Controls

| Command / Control | Permission | Purpose |
| --- | --- | --- |
| `/cer`, `/cg`, `/browser` | None | Open the main menu |
| `/cer search` | None | Open the search dialog |
| `/cer hand` | None | View how to craft the main-hand item |
| `/cer target` | None | View how to craft the targeted block, up to 6 blocks away |
| `/cer unapplied` | `craftenginerecipe.admin` | Preview unapplied categories |
| `/cer reload` | `craftenginerecipe.admin` | Reload settings, language, categories, and search data |

OPs have administrator permissions by default. The console can only use `/cer reload`; other commands require a player. Item queries still follow category permissions and hiding rules. See [Controls & Search](./search.md).

## Controls

| Control | Action |
| --- | --- |
| Sneak + swap-offhand key (Shift+F by default) | Open the main menu |
| Left-click an item in the `/cer` menu | View how to craft it |
| Right-click an item in the `/cer` menu | View recipes that use it |
| Click outside a recipe window | Return to the browser |
| Esc | Close the window |

The shortcut follows the player's key bindings and can be disabled under `hotkey` in `config.yml`.

Run `/cer reload` after editing this plugin's settings. After changing CraftEngine items or recipes, reload CraftEngine first; this plugin refreshes automatically. Menus close during a reload. Wait for completion before reopening them.
