---
title: 常用设置与排查
sidebar_label: 常用设置与排查
---

所有配置都在 `plugins/CraftEngineRecipe/` 下。保存后执行 `/cer reload`。

## 修改语言与文案

在 `config.yml` 选择全服界面语言：

```yaml
language: zh_CN
```

简体中文用 `zh_CN`，英文用 `en_US`。标题、按钮名称、悬浮说明和提示消息在对应的 `lang/zh_CN.yml` 或 `lang/en_US.yml` 修改。

例如，修改说明按钮的文字：

```yaml
ui:
  content:
    info:
      name: '<#79CFC9>操作说明</#79CFC9>'
      lore:
        - '<#B8C0CC>左键查看如何合成</#B8C0CC>'
        - '<#B8C0CC>右键查看可参与合成</#B8C0CC>'
```

在原有位置修改，不要重复添加 `ui:`。文字支持 `<#颜色代码>` 和 `<bold>粗体</bold>` 等格式；保留 `{id}`、`<category>` 等占位符，以及标题中的图片、位移标签。

旧版 `config.yml` 中自定义的同名文案可能优先于语言文件。遇到修改不生效时，将旧文案移到语言文件，再删掉 config 中对应的文字字段。

启动或重载时会自动补齐 `config.yml` 与内置语言文件缺失的键和默认值，已有自定义值会保留。无需为了更新配置而删除整个配置文件。

## 调整菜单布局

在 `config.yml` 的 `browser.layout` 调整，固定 6 行、每行 9 格：

```yaml
browser:
  layout:
    - "<CCCCCCC>"
    - "XXXXXXXXX"
    - "XXXXXXXXX"
    - "XXXXXXXXX"
    - "XXXXXXXXX"
    - "BTLHSGRI#"
```

| 字符 | 默认内容 |
| --- | --- |
| `C` | 分类图标；合成器页面中是合成器图标 |
| `X` | 物品与子分类 |
| `<`、`>` | 分类栏上一个、下一个 |
| `L`、`R` | 物品列表上一页、下一页 |
| `B` | 返回 |
| `H`、`G` | 主手查询、准星方块查询 |
| `S`、`I`、`T` | 搜索、操作说明、合成器分类 |
| `#` | 空槽 |

想移动按钮，交换布局中对应字符的位置即可。每个按钮的 `char` 要与布局一致，不能与其他按钮、`C`、`X` 或 `#` 冲突。不要用空格占位，请用 `#`。

例如关闭眼镜按钮：将 `content.glasses.char` 设为 `''`，再把布局里的 `G` 改成 `#`。`/cer target` 命令仍可使用。

图标在对应按钮的 `item-model`、`material` 修改；文字去语言文件修改。`item-model` 使用 CraftEngine 物品 ID，`material` 使用原版材质。`content.empty` 只支持材质与语言文件文字。

不建议去修改菜单布局，除非你会自己绘制一份新的UI界面。

### 自定义顶部分类

默认 `category-bar.source: ce` 跟随 CraftEngine 顶层分类。只想列出指定分类时：

```yaml
category-bar:
  source: custom
  list:
    - farmersdelight:categories
    - example:tools
```

替换为实际完整分类 ID，对应命名空间仍需要在 `categories.yml` 中应用。

## 其他常用设置

| 配置键 | 用途 |
| --- | --- |
| `check-for-updates: true` | 默认开启更新提醒；关闭时改为 `false`，见[更新插件](./updating.md#更新提醒) |
| `hotkey.enabled: false` | 关闭快捷键 |
| `hotkey.require-sneak: false` | 不必潜行即可打开；会占用普通交换副手操作 |
| `recipe.rotate-interval: 30` | 配方轮播间隔；5～200 tick，20 tick 约 1 秒 |
| `search.max-results: 200` | 搜索结果上限；1～1000 |
| `search.max-length: 32` | 搜索输入长度；1～64 |


物品很多时建议保留默认搜索上限。音效单独看[菜单音效](./menu-sounds.md)。

## 常见问题

| 情况 | 处理方法 |
| --- | --- |
| 首次 `/cer` 是空的 | 用 `/cer unapplied` 预览，再[应用分类](./getting-started.md#开放分类) |
| 玩家看不到分类 | 检查是否已应用、`visibility`、权限、隐藏规则，以及 CraftEngine 是否加载该分类 |
| 搜索不到物品 | 尝试完整 ID；检查权限与隐藏规则；翻译名称搜索需要先生成资源包 |
| 第 8 个合成器不见了 | 默认只有 7 个分类槽，点击顶部右箭头查看 |
| 背景乱码或图标丢失 | 执行 `/ce reload all`，检查资源包加载日志，并让玩家重新下载；需要更新资源时看[更新方法](./updating.md) |
| 点击物品没有反应 | 该物品可能没有对应方向的配方；左键查如何合成，右键查可参与合成 |
| 提示数据未就绪 | 等待片刻；持续出现时执行 `/cer reload`，检查控制台异常与 YAML 缩进 |
| 更新后新增按钮不显示 | 自定义 `browser.layout` 会保留，需要手动放入新按钮字符 |
| Java 版本错误 | 确认启动服务器的 Java 为 25 或更高版本 |
| 版本不匹配、窗口报错 | 检查是否安装对应 Minecraft 版本的 JAR，并移除其他版本的旧 JAR |

仍有问题时，请提供服务端、Java、CraftEngine 与插件版本，以及控制台的完整报错。
