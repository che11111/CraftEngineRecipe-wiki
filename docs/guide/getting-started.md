---
title: Getting Started
sidebar_label: Getting Started
---

## Install the Plugin

1. Install CraftEngine and load the item packs, categories, and recipes you want to show.
2. Stop the server and place the [matching CraftEngineRecipe JAR](./requirements.md) in `plugins/`.
3. Start the server and wait for the CraftEngineRecipe data-ready message.
4. Run `/ce reload all` to apply the automatically installed resource pack, then have players download the new pack.

## Make Categories Available

1. As an administrator, run `/cer unapplied` to preview unapplied categories.
2. Open `plugins/CraftEngineRecipe/categories-unapplied.yml` and find a namespace you want to make available, such as `farmersdelight`.
3. Copy its entry into `entries:` in `plugins/CraftEngineRecipe/categories.yml` and set `visibility: player`.
4. Run `/cer reload`, wait for completion, then check `/cer`.

A minimal `categories.yml`:

```yaml
entries:
  - id: farmersdelight
    visibility: player
    permission: ''
```

Replace `farmersdelight` with a namespace from the unapplied file. This is not an item ID or a category ID such as `farmersdelight:food`.

An empty `/cer` menu on the first run is normal. Newly found namespaces are admin-only and must be applied manually. After copying and reloading, their entries are removed from the unapplied file.

This plugin reads existing CraftEngine categories and recipes. To add items or recipes, configure them in CraftEngine.

## Applying the Resource Pack

On the first startup, the pack is installed to `plugins/CraftEngine/resources/cer_resource/`, and `resource-pack-installed.marker` is created in the plugin folder. Keep this marker to prevent repeated installation on restart or `/cer reload`, even if you rename the pack folder.

`plugins/CraftEngineRecipe/cer_resource/` is the plugin's local copy. Startup and reload restore missing files there while preserving existing files.

See [Updating the Plugin](./updating.md) to update resources. **Deleting only the marker does not overwrite old resource files.**
