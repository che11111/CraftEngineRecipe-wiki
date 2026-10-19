---
title: 更新插件
sidebar_label: 更新插件
---

## 更新提醒

`config.yml` 中的 `check-for-updates: true` 默认开启。插件启动后会在后台检查 [GitHub 正式发布版本](https://github.com/che11111/CraftEngineRecipe/releases)，之后每 6 小时检查一次。

有新版时，控制台和拥有 `craftenginerecipe.admin` 权限的管理员会收到提醒与发布页链接；管理员登录时也会收到已发现新版本的提醒。插件只提醒，需要自行下载更新；相同或更旧的版本不会提示，检查失败也不影响使用。

如需关闭，将 `check-for-updates` 设为 `false` 后执行 `/cer reload`。旧配置会自动补齐此设置。

## 常规更新

1. 下载与服务端版本对应的新 JAR：`mc26.1` 对应 26.1.2，`mc26.2` 对应 26.2，`mc26.3` 对应 26.3。
2. 停止服务器，备份 `plugins/CraftEngineRecipe/` 和 CraftEngine 中使用的 CER 资源包。
3. 删除 `plugins/` 中的旧版 CER JAR，放入新版。**只保留一个版本的 CER。**
4. 启动服务器，用 `/cer` 检查菜单。

替换插件 JAR 后需要重启服务器。`/cer reload` 只能刷新配置与数据，不能加载新版 JAR。

## 旧配置需要删除吗

不需要。`config.yml`、`lang/zh_CN.yml` 和 `lang/en_US.yml` 会自动补齐缺失的配置键与默认值，保留已有设置。

`categories.yml` 中已应用的分类会保留；新加入的命名空间仍需按[分类应用步骤](./getting-started.md)手动添加。自己新增的其他语言文件需要自行补充文案。

如果更新后没有出现新按钮，请检查 `config.yml` 的 `browser.layout`，自定义布局不会自动加入新按钮。见[菜单与按钮设置](./troubleshooting.md)。

## 更新资源包

如果新版增加或调整了贴图、按钮，需要更新资源包。**只删除 `resource-pack-installed.marker` 不会覆盖旧文件。**

使用默认资源包时：

1. 停服并换上新版 JAR。
2. 备份并移走下面两个目录，再删除标记文件：

   ```text
   plugins/CraftEngineRecipe/cer_resource/
   plugins/CraftEngine/resources/cer_resource/
   plugins/CraftEngineRecipe/resource-pack-installed.marker
   ```

3. 启动服务器，插件会重新释放并安装新版资源。
4. 执行 `/ce reload all`，重新生成、分发资源包，让玩家下载新包。具体命令以 CraftEngine 版本为准。

如果改过 CraftEngine 中的资源目录名，请移走实际使用的旧目录。备份放在 `resources` 目录之外，避免重复加载。

如果修改过贴图或资源配置，请保留备份，按需合并新版资源；直接使用默认资源会失去这些修改。

更新内容见[更新日志](./changelog.md)。
