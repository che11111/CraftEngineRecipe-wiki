---
title: 环境要求
sidebar_label: 环境要求
---

## 环境要求

| 项目 | 要求 |
| --- | --- |
| Java | Java 25 或更高版本 |
| 服务端 | Paper / Folia；按下表选择 JAR |
| 必装插件 | 与服务端版本兼容的 CraftEngine；本项目按 `26.8.1` 编译 |
| 其他依赖 | 已包含 InvUI、拼音搜索与 bStats，无需另装 |

| 服务端版本 | 下载的 JAR 后缀 |
| --- | --- |
| Minecraft 26.1.2 | `mc26.1.jar` |
| Minecraft 26.2 | `mc26.2.jar` |
| Minecraft 26.3 | `mc26.3.jar` |

只安装与你服务端匹配的 **一个 JAR**，不要同时放入三个版本。

## Folia 适配

Folia 为实验性支持，适配目标包含 Folia `26.1.2 build 8` 与 CraftEngine `26.9.2`。请使用匹配的插件 JAR，并先在测试服检查菜单和配方是否正常。

自定义按钮调用的其他插件也需要支持 Folia。Folia 下不执行 `op:` 动作，后续动作也会停止；请给玩家相应权限，或改用 `console:`。
