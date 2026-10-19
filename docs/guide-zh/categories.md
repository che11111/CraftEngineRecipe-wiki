---
title: 分类与隐藏规则
sidebar_label: 分类与隐藏规则
---

## 显示顺序与权限

编辑 `plugins/CraftEngineRecipe/categories.yml`。`entries:` 从上到下就是菜单顺序，可与[自定义按钮](./custom-buttons.md)混排。

```yaml
entries:
  - id: farmersdelight
    visibility: player
    permission: ''

  - id: vipitems
    visibility: permission
    permission: 'cer.vip'

  - id: internal
    visibility: admin
```

把示例 ID 换成实际命名空间，保存后执行 `/cer reload`。

| `visibility` | 谁能查看 |
| --- | --- |
| `player` | 所有玩家 |
| `admin` | OP 或拥有 `craftenginerecipe.admin` 的玩家；命名空间默认值 |
| `permission` | 拥有 `permission` 所填权限的玩家；不要留空 |

管理员可查看受限命名空间，但仍遵循隐藏规则。这些权限只控制本插件的浏览与查询，不会禁止物品使用或实际合成。

## 隐藏分类按钮及内容

例如，不想让玩家看到 Farmer's Delight 的 GUI 和展示模型分类，在原有 `farmersdelight` 条目下加入：

```yaml
entries:
  - id: farmersdelight
    visibility: player
    permission: ''
    hidden-categories:
      - farmersdelight:gui
      - farmersdelight:item_display
```

分类按钮及这条路径下的内容都会从浏览与搜索中隐藏，管理员同样受影响。填写完整分类 ID，不支持 `'*'`。

## 只隐藏物品，保留分类按钮

如果还想保留分类入口，使用 `hidden-items`：

```yaml
entries:
  - id: farmersdelight
    visibility: player
    permission: ''
    hidden-items:
      - category: farmersdelight:gui
        items:
          - '*'
      - category: farmersdelight:item_display
        items:
          - '*'
```

`'*'` 必须加引号，表示隐藏该分类的全部直接物品；下级分类需要另加规则。不支持 `farmersdelight:*` 这种前缀写法。

只想隐藏个别物品时，将 `'*'` 换成完整物品 ID：

```yaml
    hidden-items:
      - category: farmersdelight:gui
        items:
          - farmersdelight:recipe_book
          - farmersdelight:slot
```

| 需求 | 使用的配置 |
| --- | --- |
| 分类按钮与内容都隐藏 | `hidden-categories` |
| 保留分类按钮，隐藏全部直接物品 | `hidden-items` + `items: ['*']` |
| 只隐藏几个物品 | `hidden-items` + 具体物品 ID |

两种规则都写在原命名空间条目下，与 `visibility` 同级；不要重复添加 `entries:` 或相同的 `id`。保存后执行 `/cer reload`。示例配置文件仅供参考，插件读取的是实际的 `categories.yml`。

如果物品也属于另一个可见分类，它仍可能从那里显示或被搜到。隐藏不会删除物品、禁止合成，或移除其他配方中的材料。

## 修改名称与提示

可在命名空间条目下覆盖这个包的提示文字：

```yaml
  - id: farmersdelight
    visibility: player
    icon-name: '<#EEF2F6><name></#EEF2F6>'
    icon-lore:
      - '<#B8C0CC>点击进入分类</#B8C0CC>'
      - '<#8793A5>条目数：<count></#8793A5>'
    sub-icon-lore:
      - '<#B8C0CC>点击进入子分类</#B8C0CC>'
    item-lore:
      - '<#B8C0CC>左键查看配方，右键查看用途</#B8C0CC>'
```

`<name>` 是分类名称，`<count>` 是直接条目数（包含子分类入口）。不填写时使用[语言文件](./troubleshooting.md#修改语言与文案)的默认文字。
