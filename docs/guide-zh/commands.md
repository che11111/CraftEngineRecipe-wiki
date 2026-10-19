---
title: 命令与权限
sidebar_label: 命令与权限
---

## 命令权限与操作

| 命令 | 权限 | 用途 |
| --- | --- | --- |
| `/cer`、`/cg`、`/browser` | 无 | 打开正式菜单 |
| `/cer search` | 无 | 打开搜索对话框 |
| `/cer hand` | 无 | 查询如何合成主手物品 |
| `/cer target` | 无 | 查询如何合成准星所指的方块，最远 6 格 |
| `/cer unapplied` | `craftenginerecipe.admin` | 预览待应用分类 |
| `/cer reload` | `craftenginerecipe.admin` | 重载配置、语言、分类与搜索数据 |

OP 默认拥有管理员权限。控制台只能使用 `/cer reload`，其他命令需要玩家执行。物品查询仍受分类权限与隐藏规则限制，详见[操作与搜索](./search.md)。

## 操作

| 操作 | 用途 |
| --- | --- |
| 潜行 + 交换副手键（默认 Shift+F） | 打开正式菜单 |
| 左键/cer菜单中的物品 | 查看如何合成 |
| 右键/cer菜单中的物品 | 查看可参与合成 |
| 点击配方窗口外的空白处 | 返回浏览菜单 |
| Esc | 关闭窗口 |

快捷键以客户端设置为准，可在 `config.yml` 的 `hotkey` 中关闭。

修改本插件配置后执行 `/cer reload`。修改 CraftEngine 的物品或配方后，先重载 CraftEngine，本插件会自动刷新数据。重载期间菜单会关闭，等待完成后再打开。
