---
title: 快速开始
sidebar_label: 快速开始
---

## 安装插件

1. 安装 CraftEngine，并加载需要展示的物品包、分类和配方。
2. 停服，将[对应版本](./requirements.md)的 CraftEngineRecipe JAR 放入 `plugins/`。
3. 启动服务器，等待控制台提示 `CraftEngineRecipe 数据就绪`。
4. 执行 `/ce reload all`，让 CraftEngine 应用插件自动安装的资源包，并让玩家下载新包。

## 开放分类

1. 管理员执行 `/cer unapplied`，预览尚未应用的分类。
2. 打开 `plugins/CraftEngineRecipe/categories-unapplied.yml`，找到需要开放的命名空间，例如 `farmersdelight`。
3. 将对应条目复制到 `plugins/CraftEngineRecipe/categories.yml` 的 `entries:` 下，设置 `visibility: player`。
4. 执行 `/cer reload`，等待完成后使用 `/cer` 查看。

最小可用的 `categories.yml`：

```yaml
entries:
  - id: farmersdelight
    visibility: player
    permission: ''
```

把 `farmersdelight` 换成待应用文件中的实际命名空间。这里不是物品 ID，也不是 `farmersdelight:food` 这样的分类 ID。

首次 `/cer` 可能为空，这是正常现象。新发现的命名空间默认仅管理员可见，需要手动应用；复制并重载后，对应条目会从待应用文件中移除。

本插件读取 CraftEngine 已有的分类和配方。需要新增物品或配方时，请在 CraftEngine 中配置。

## 资源包的应用

首次启动会自动安装到 `plugins/CraftEngine/resources/cer_resource/`，并在插件目录生成 `resource-pack-installed.marker`。保留这个标记，后续重启或 `/cer reload` 就不会重复安装，即使你修改了资源包目录名。

`plugins/CraftEngineRecipe/cer_resource/` 是插件保留的资源副本；启动或重载时只补齐缺失文件，不覆盖已有文件。

资源包更新请看[更新插件方法](./updating.md)。**只删除标记不会覆盖旧资源文件。**
