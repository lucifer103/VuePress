---
title: Flutter 禁用空安全

meta:
  - name: description
    content: Flutter 禁用空安全
  - name: keywords
    content: Dart,Flutter

created: 2021/08/29

updated: 2021/08/29

tags:
  - Dart
  - Flutter
---

:::tipLong
本文提供两种解决方案，任选其一即可
:::

#### 在 Dart 文件**顶部**加上语言版本注释

```dart
// @dart=2.9
import 'package:flutter/material.dart';
```

#### 在 dart 和 flutter 命令里，加入 --no-sound-null-safety 标记禁用

```shell
dart --no-sound-null-safety run
flutter run --no-sound-null-safety
```
