---
title: Categories & Hiding Rules
sidebar_label: Categories & Hiding Rules
---

## Display Order and Permissions

Edit `plugins/CraftEngineRecipe/categories.yml`. Entries appear in the order listed under `entries:` and can be mixed with [custom buttons](./custom-buttons.md).

```yaml
entries:
  - id: farmersdelight
    visibility: player
    permission: ''

  - id: vipitems
    visibility: permission
    permission: 'cer.vip'

  - id: internal
    visibility: admin
```

Replace the example IDs with actual namespaces, save, then run `/cer reload`.

| `visibility` | Who can view it |
| --- | --- |
| `player` | Everyone |
| `admin` | OPs or players with `craftenginerecipe.admin`; the namespace default |
| `permission` | Players with the specified `permission`; do not leave it empty |

Administrators can view restricted namespaces but still follow hiding rules. These permissions control browsing and queries in this plugin. They do not prevent item use or actual crafting.

## Hide Category Buttons and Contents

For example, add this under the existing `farmersdelight` entry to hide Farmer's Delight's GUI and display-model categories:

```yaml
entries:
  - id: farmersdelight
    visibility: player
    permission: ''
    hidden-categories:
      - farmersdelight:gui
      - farmersdelight:item_display
```

The category buttons and their browsing/search paths are hidden for everyone, including administrators. Use full category IDs; `'*'` is not supported.

## Hide Items and Keep the Category Button

Use `hidden-items` if you want the category entry to remain visible:

```yaml
entries:
  - id: farmersdelight
    visibility: player
    permission: ''
    hidden-items:
      - category: farmersdelight:gui
        items:
          - '*'
      - category: farmersdelight:item_display
        items:
          - '*'
```

Quote `'*'` to hide all direct items in the category. Add separate rules for subcategories. Prefix patterns such as `farmersdelight:*` are not supported.

To hide only a few items, replace `'*'` with their full IDs:

```yaml
    hidden-items:
      - category: farmersdelight:gui
        items:
          - farmersdelight:recipe_book
          - farmersdelight:slot
```

| Goal | Setting |
| --- | --- |
| Hide the category button and contents | `hidden-categories` |
| Keep the button and hide all direct items | `hidden-items` + `items: ['*']` |
| Hide a few items | `hidden-items` + specific item IDs |

Place either rule under the existing namespace, alongside `visibility`. Do not add duplicate `entries:` keys or namespace IDs. Save and run `/cer reload`. Example files are for reference; the plugin reads your actual `categories.yml`.

An item may still appear or be found through another visible category. Hiding does not delete items, prevent crafting, or remove ingredients from other recipes.

## Change Names and Tooltips

Override the text for a particular namespace in its entry:

```yaml
  - id: farmersdelight
    visibility: player
    icon-name: '<#EEF2F6><name></#EEF2F6>'
    icon-lore:
      - '<#B8C0CC>Click to open this category</#B8C0CC>'
      - '<#8793A5>Entries: <count></#8793A5>'
    sub-icon-lore:
      - '<#B8C0CC>Click to open this subcategory</#B8C0CC>'
    item-lore:
      - '<#B8C0CC>Left-click for recipes, right-click for uses</#B8C0CC>'
```

`<name>` is the category name. `<count>` counts direct entries, including subcategory buttons. Omitted text uses the defaults in the [language file](./troubleshooting.md#change-language-and-text).
