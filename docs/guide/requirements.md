---
title: Requirements
sidebar_label: Requirements
---

## Requirements

| Component | Requirement |
| --- | --- |
| Java | Java 25 or newer |
| Server | Paper / Folia; choose a JAR from the table below |
| Required plugin | A CraftEngine release compatible with your server; this project compiles against `26.8.1` |


| Server version | JAR filename suffix |
| --- | --- |
| Minecraft 26.1.2 | `mc26.1.jar` |
| Minecraft 26.2 | `mc26.2.jar` |
| Minecraft 26.3 | `mc26.3.jar` |

Install **one JAR** matching your server. Do not install all three variants together.

## Folia Support

Folia support is experimental. Targets include Folia `26.1.2 build 8` with CraftEngine `26.9.2`. Use the matching plugin JAR and check menus and recipes on a test server first.

Other plugins called by custom buttons must also support Folia. On Folia, `op:` actions are skipped and stop the remaining actions. Grant the player the required permission or use `console:` instead.
