---
title: Flutter 开发环境部署问题汇总

meta:
  - name: description
    content: Flutter 开发环境部署问题汇总
  - name: keywords
    content: Frontend,Development Environment

created: 2021/01/18

updated: 2021/01/19

tags:
  - Frontend
  - Development Environment
---

## 虚拟机创建成功之后 Andriod Studio 无法自动检测

### 说明

![file](https://cdn.vuepress.learnku.fit/Flutter%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2%E9%97%AE%E9%A2%98%E6%B1%87%E6%80%BB/question_one_1.png)

![file](https://cdn.vuepress.learnku.fit/Flutter%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2%E9%97%AE%E9%A2%98%E6%B1%87%E6%80%BB/question_one_2.png)

### 解决方法

1. 点击左上角 `File` 菜单，选择 `Project Structure`

![file](https://cdn.vuepress.learnku.fit/Flutter%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2%E9%97%AE%E9%A2%98%E6%B1%87%E6%80%BB/question_one_3.png)

2. 在 `Project SDK` 下选择 `Andriod SDK`

![file](https://cdn.vuepress.learnku.fit/Flutter%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2%E9%97%AE%E9%A2%98%E6%B1%87%E6%80%BB/question_one_4.png)

3. 依次点击右下角的 `Apply` 和 `Ok` 按钮确认配置

![file](https://cdn.vuepress.learnku.fit/Flutter%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2%E9%97%AE%E9%A2%98%E6%B1%87%E6%80%BB/question_one_5.png)

4. 之后就可以自动检测到你所安装的虚拟机了

![file](https://cdn.vuepress.learnku.fit/Flutter%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2%E9%97%AE%E9%A2%98%E6%B1%87%E6%80%BB/question_one_6.png)

---

## 运行 flutter doctor 提示 NO_PROXY is not set

### 说明

![file](https://cdn.vuepress.learnku.fit/Flutter%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2%E9%97%AE%E9%A2%98%E6%B1%87%E6%80%BB/question_two_1.png)

### 解决方法

将以下信息以 `Key-Value` 的形式加入 [环境变量](../other/配置环境变量.md) 即可解决

```
NO_PROXY=localhost,127.0.0.1,LOCALHOST
```

---

## 运行项目之后长时间卡在 Running Gradle task 'assembleDebug'，以下提供几种思路

1. 修改下载镜像

- 打开 Flutter SDK 目录中的 `packages\flutter_tools\gradle\flutter.gradle` 文件，找到以下代码片段并进行修改

```dart
repositories {
    // google()
    // jcenter()
    maven { url 'https://maven.aliyun.com/repository/google' }
    maven { url 'https://maven.aliyun.com/repository/jcenter' }
    maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
}
```

- 打开 Flutter 项目下的 `andriod/build.gradle` 文件，找到以下代码片段并进行修改

```dart
buildscript {
    ext.kotlin_version = '1.3.50'
    repositories {
        // google()
        // jcenter()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
    }
}
allprojects {
    repositories {
        // google()
        // jcenter()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
    }
}
```

2. FQ 设置为全局模式，并选择外国节点（不要选香港、台湾等地）

3. 找到 `Flutter` 项目里的 `andriod/gradle/wrapper/gradle-wrapper.properties` 文件

- 将 `distributionUrl=https\://services.gradle.org/distributions/gradle-*.*.*-all.zip` 改为 `distributionUrl=https\://services.gradle.org/distributions/gradle-6.4.1-all.zip`

4. 运行报错之后可做以下操作清理缓存，根据上述方案操作之后重新运行项目

- 删除 `C:\Users\<username>` 目录下的 `.gradle` 目录
- 删除项目中的 `andriod/gradle/wrapper/gradle-wrapper.jar` 文件
- 项目根目录下执行 `flutter clean`
