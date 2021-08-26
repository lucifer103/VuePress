---
title: Flutter 开发环境部署

meta:
  - name: description
    content: Flutter 开发环境部署
  - name: keywords
    content: Frontend,Flutter,Development Environment

created: 2021/01/10

updated: 2021/05/11

tags:
  - Frontend
  - Flutter
  - Development Environment
---

::: warning
提前声明：Flutter 开发环境的部署对天朝用户不甚友好，因此不会 FQ 的同学可以不用往下看了
:::

# 前言

如果你和博主一样，从未接触过移动端开发，也没接触过 `Java`，`SwiftUI` 这些移动端常见的原生开发技术以及 `Uniapp`，`React Native`，`Flutter` 这类跨端解决方案，那么本文便是为你量身打造，和博主一起推开新世界的大门吧 ~

部署 Flutter 开发环境之前你需要准备好 [Java 环境](Java开发环境部署.md)

# Windows

## 使用镜像

将以下信息以 `Key-Value` 的形式 [加入环境变量](../other/配置环境变量.md)

```
PUB_HOSTED_URL = https://pub.flutter-io.cn
FLUTTER_STORAGE_BASE_URL = https://storage.flutter-io.cn
```

---

## 获取 Flutter SDK

1. 前往 [官网](https://flutter.dev/docs/development/tools/sdk/releases) 下载 SDK 包，根据自己的系统以及使用软件版本的习惯选择一个适合自己的版本

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/sdk.png)

2. 将安装包 `zip` 解压到你想安装 `Flutter SDK` 的路径（注意：不要将 `flutter` 安装到需要一些高权限的路径如 `C:\Program Files\`）

3. 将 `SDK` 包中的 `bin` 目录 [加入到环境变量](../other/配置环境变量.md)

---

## 运行 flutter doctor

打开终端执行 `flutter doctor`，如果你还没有部署 **Android 环境**，运行结果应该如下图所示：

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/doctor.png)

执行 `flutter doctor --android-licenses` 安装安卓证书

> 提示的很清楚：无法加载 Android SDK，没有安装 Andriod Studio，没有虚拟机可供选择，好在这三个问题可以通过安装 Andriod Studio 完全解决

---

## 安装 Adnriod Studio

1. 前往 [Andriod Studio 下载页面](https://developer.android.com/studio/index.html)，点击页面中央的下载按钮

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/download_page_1.png)

2. 在打开的弹窗中勾选同意条款并点击下方的下载按钮

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/download_page_2.png)

3. 打开下载的执行文件，点击下一步

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/install_1.png)

4. 勾选 `Andriod Virtual Device` 选项框，继续点击下一步

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/install_2.png)

5. 根据自己的习惯选择安装位置，点击下一步

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/install_3.png)

6. 点击安装按钮

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/install_4.png)

7. 安装完成后应该如下图所示，继续点击下一步

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/install_5.png)

8. 勾选 `Start Android Studio` 启动 `Android Studio`，点击完成按钮

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/install_6.png)

---

## 安装 Adnriod SDK

1. 第一次启动 `Adnriod Studio` 应该如下图所示，我们不用设置代理，直接点击 `Cancel` 即可，进入 `Andriod SDK` 的安装步骤

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/andriod_sdk_1.png)

2. 点击下一步

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/andriod_sdk_2.png)

3. 勾选要安装的 `Adnriod SDK` 版本，根据自己的习惯选择 `Adnriod SDK` 的安装目录，点击下一步

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/andriod_sdk_3.png)

4. 点击 `Finish` 开始安装

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/andriod_sdk_4.png)

5. 安装完成后应该如下图所示，点击 `Finish` 打开 `Andriod Studio` 的神秘面纱

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/andriod_sdk_5.png)

---

## 创建 Flutter 项目

1. 根据上述步骤打开 `Android Studio` 之后应该如下图所示，点击第二个按钮 `Create New Flutter Project`

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/flutter_1.png)

2. 选择第一个选项卡 `Flutter Application`，点击下一步

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/flutter_2.png)

3. 如果你的 `Flutter SDK` 安装在自定义目录下，需要手动选择一下，然后再设置一下你的 `Flutter` 工作区，其余保持默认即可，继续点击下一步

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/flutter_3.png)

4. 保持默认即可，点击 `Finish` 即可完成 `Flutter` 项目的创建

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/flutter_4.png)

5. 点击 `Andriod Studio` 左上角的 `File` 菜单，选择 `Settings` 打开设置

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/flutter_5.png)

6. 左侧选择 `Plugins`，右侧上方选择 `Marketplace`，然后在搜索框中搜索 `flutter`，之后点击插件右侧的 `Install`

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/flutter_6.png)

7. 安装完成之后，重启 `Andriod Studio`

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/flutter_7.png)

---

## 创建虚拟机

1. 点击 `Andriod Studio` 左上角的 `Tools` 菜单，选择 `AVD Manager` 即可打开虚拟机管理界面

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/avd_1.png)

2. 如果你从未创建过安卓虚拟机，打开的界面应该如下图所示，点击界面中央的 `Create Virtual Device` 按钮

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/avd_2.png)

3. 选择虚拟机的硬件设备，根据自己的习惯即可，之后点击下一步

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/avd_3.png)

4. 选择虚拟机使用的镜像，点击左侧的 `Download` 按钮下载镜像

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/avd_4.png)

5. 在新打开的下载页面中，选择同意并且点击下一步开始下载镜像

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/avd_5.png)

6. 下载完成的界面应该如下图所示，点击 `Finish` 完成镜像下载，继续配置虚拟机

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/avd_6.png)

7. 此时镜像列表会刷新一次，选择刚才下载的镜像，点击下一步

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/avd_7.png)

8. 保持默认即可，点击 `Finish` 即可完成虚拟机的创建

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/avd_8.png)

9. 创建成功之后会显示在虚拟机列表里，可以通过这里确定虚拟机是否创建成功

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/avd_9.png)

---

## 运行 Flutter 项目

::: tip
从这里开始你可能会碰到各种各样的问题导致项目运行不起来，请参考 [Flutter 开发环境部署问题汇总](Flutter开发环境部署问题汇总.md)
:::

1. 右上角打开设备列表，打开虚拟机

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/device_list.png)

2. 点击右上方的 `Debug` 按钮，运行项目

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/debug.png)

3. 查看虚拟机，如果界面如下图所示，:tada: 恭喜你，**Flutter 开发环境至此已部署完成**

![file](https://cdn.vuepress.learnku.fit/Flutter%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/success.png)
