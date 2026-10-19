---
title: 菜单音效
sidebar_label: 菜单音效
---

## 菜单音效

在 `config.yml` 的 `sounds` 下设置声音，保存后执行 `/cer reload`：

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

| 配置键 | 播放时机 |
| --- | --- |
| `change-category` | 顶部分类栏成功切换到上一个、下一个 |
| `change-page` | 物品列表成功切换到上一页、下一页 |
| `click` | 成功进入分类或打开物品配方 |
| `back` | 返回上级或从配方返回 |
| `search` | 打开搜索框 |
| `query-success` | 主手或准星查询成功，打开配方页面 |
| `query-failure` | 查询失败、翻页到边界或物品没有可打开的配方 |
| `open-menu` | 通过命令或快捷键打开菜单 |
| `close-menu` | 关闭菜单或配方页面 |

内部翻页、切分类、配方轮播不会额外播放打开或关闭声。

分类栏或物品列表到达边界、左键或右键物品没有可打开的配方时，只播放一次 `query-failure`，不叠加成功音效。操作成功仍播放对应的 `change-category`、`change-page` 或 `click`。

`/cer hand`、`/cer target` 和对应的手掌、眼镜按钮共用查询音效。空手、没有对准方块、没有配方或被权限与隐藏规则限制时播放失败声；成功打开配方时播放成功声。每次查询只播放一种结果声音，不叠加普通点击、菜单打开或关闭声。之后手动关闭页面时，仍会播放 `close-menu`。

声音支持 `UI_BUTTON_CLICK` 或 `minecraft:ui.button.click` 两种写法，可加 `-音量-音调`。`UI_BUTTON_CLICK-1-2` 中，`1` 是音量、`2` 是音调，**不是播放次数**；也可以用 `0.5` 这样的数值。不写参数时，菜单声音默认音量 0.7、音调 1。

设为 `''` 关闭某个声音，例如 `close-menu: ''`。这些值不用加 `sound:` 前缀。

## 给自定义按钮设置声音

在 `categories.yml` 的按钮动作里单独设置：

```yaml
actions:
  left:
    - 'sound: UI_BUTTON_CLICK-1-2'
```

按钮动作的默认音量、音调均为 1。如果后面还有 `close`，关闭菜单时还会播放 `sounds.close-menu`；不想叠加时，删除按钮的声音动作或关闭菜单关闭声。
