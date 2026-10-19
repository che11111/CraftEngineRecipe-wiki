---
title: Build from Source
sidebar_label: Build from Source
---

Most users can download a JAR directly. To update an installed plugin, see [Updating the Plugin](./updating.md).

## Build All Three Versions

Install JDK 25 (or a newer JDK that can compile Java 25) and Maven 3.9+. Check your tools in the plugin source directory:

```bash
java -version
mvn -version
```

Confirm that Maven also reports the required Java version, then run:

```bash
./build-all.sh
```

All three JARs are written to `dist/`. If the script reports a permission error, run `chmod +x build-all.sh` first.

## Build One Version

```bash
mvn clean verify -Pmc-26.1
mvn clean verify -Pmc-26.2
mvn clean verify -Pmc-26.3
```

Choose one command. Its JAR is written to `target/`. Without a profile, the default target is 26.2.

