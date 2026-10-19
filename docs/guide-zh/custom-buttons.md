---
title: 自定义按钮
sidebar_label: 自定义按钮
---

## 自定义按钮

把以下条目插入 `categories.yml` 的 `entries:` 中，保存后执行 `/cer reload`：

```yaml
  - display:
      material: minecraft:compass
      name: '&#E4D397返回主城'
      lore:
        - '&#B8C0CC左键传送到主城'
    visibility: player
    actions:
      left:
        - 'sound: UI_BUTTON_CLICK'
        - close
        - 'delay: 0.1'
        - 'command: spawn'
```

此例会关闭菜单，稍等后让玩家执行 `/spawn`；需要服务器已有这条命令。

### 图标与文字

- 原版图标：`material: minecraft:compass`。
- CraftEngine 图标：`material: source:CraftEngine:命名空间:物品ID`。
- `display.name`、`display.lore` 支持 `&#RRGGBB` 十六进制颜色和 `&e`、`&7` 等颜色码。
- 按钮默认所有人可见，也支持[分类页面](./categories.md)介绍的 `visibility` 和 `permission`。

### 点击与动作

`actions` 可设置 `all`、`left`、`right`、`shift_left`、`shift_right`、`middle`。没有对应点击类型时使用 `all`。动作从上到下执行：

| 动作示例 | 用途 |
| --- | --- |
| `'sound: UI_BUTTON_CLICK-1-2'` | 播放声音，音量 1、音调 2 |
| `close` | 关闭菜单 |
| `'delay: 0.5'` | 等待 0.5 秒再继续；`10t` 表示 10 tick |
| `'command: spawn'` 或 `'player: spawn'` | 以玩家身份执行 `/spawn` |
| `'console: say Hello'` | 以控制台身份执行命令 |
| `'op: spawn'` | 临时以 OP 身份执行；Folia 不支持 |

命令不用写开头的 `/`。`console`、`op` 拥有较高权限，请按需要配置；Folia 遇到 `op` 会停止后续动作。

装饰按钮可以写 `actions: {all: []}`。更多示例见插件目录中的 `categories-example.yml`，复制需要的条目到实际配置即可。
