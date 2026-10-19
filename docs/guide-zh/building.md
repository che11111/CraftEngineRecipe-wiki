---
title: 从源码构建
sidebar_label: 从源码构建
---

普通用户直接下载 JAR 即可；更新已有插件请看[更新插件方法](./updating.md)。

## 一次构建三个版本

准备 JDK 25（或能编译 Java 25 的更高版本）与 Maven 3.9+。在插件源码目录检查环境：

```bash
java -version
mvn -version
```

确认 Maven 显示的 Java 也符合要求，然后运行：

```bash
./build-all.sh
```

三个版本的 JAR 会放在 `dist/`。若提示没有执行权限，先运行 `chmod +x build-all.sh`。

## 只构建一个版本

```bash
mvn clean verify -Pmc-26.1
mvn clean verify -Pmc-26.2
mvn clean verify -Pmc-26.3
```

任选一条命令，产物位于 `target/`。不指定 profile 时默认构建 26.2。

