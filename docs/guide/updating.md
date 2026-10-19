---
title: Updating the Plugin
sidebar_label: Updating
---

## Update Notifications

`check-for-updates: true` in `config.yml` is enabled by default. The plugin checks [official GitHub releases](https://github.com/che11111/CraftEngineRecipe/releases) in the background after startup, then every 6 hours.

When a newer version is available, the console and administrators with `craftenginerecipe.admin` receive a notice and release-page link. Administrators also receive the last available update notice when they join. Download and install updates yourself; the plugin only notifies you. Equal or older versions are ignored, and a failed check does not affect normal use.

To disable notifications, set `check-for-updates` to `false` and run `/cer reload`. The setting is automatically added to older configuration files.

## Update the JAR

1. Download the JAR matching your server: `mc26.1` for 26.1.2, `mc26.2` for 26.2, or `mc26.3` for 26.3.
2. Stop the server. Back up `plugins/CraftEngineRecipe/` and the CER resource pack used by CraftEngine.
3. Remove the old CER JAR from `plugins/` and add the new one. **Keep only one CER JAR installed.**
4. Start the server and check the menu with `/cer`.

Restart the server after replacing the JAR. `/cer reload` refreshes settings and data; it cannot load a new JAR.

## Keep your configuration

You do not need to delete it. Missing keys and defaults are automatically added to `config.yml`, `lang/zh_CN.yml`, and `lang/en_US.yml`. Existing settings are kept.

Applied categories in `categories.yml` are kept. Add newly discovered namespaces manually by following [Getting Started](./getting-started.md). If you created another language file, add its new messages yourself.

If a new button is missing after an update, check `browser.layout` in `config.yml`. Custom layouts do not automatically gain new buttons. See [Menu and Button Settings](./troubleshooting.md).

## Update the resource pack

Update the resource pack when a release adds or changes textures or buttons. **Deleting only `resource-pack-installed.marker` does not replace existing files.**

If you use the default resource pack:

1. Stop the server and replace the JAR.
2. Back up and move out the two directories below, then delete the marker file:

   ```text
   plugins/CraftEngineRecipe/cer_resource/
   plugins/CraftEngine/resources/cer_resource/
   plugins/CraftEngineRecipe/resource-pack-installed.marker
   ```

3. Start the server. The plugin will extract and install the new bundled resources.
4. Run `/ce reload all` to regenerate and distribute the resource pack, then have players download it again. Use the appropriate command for your CraftEngine version.

If you renamed the pack in CraftEngine, move out the directory you actually use. Keep backups outside `resources` to avoid loading duplicate packs.

If you customized textures or pack settings, keep your backup and merge the new resources you need. Replacing them with the defaults will remove those customizations.

See the [Changelog](./changelog.md) for update details.
