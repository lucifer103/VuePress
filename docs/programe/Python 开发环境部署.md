---
title: Python 开发环境部署

meta:
  - name: description
    content: Python 开发环境部署
  - name: keywords
    content: Backend,Development Environment

created: 2020/09/19

updated: 2021/05/11

tags:
  - Backend
  - Development Environment
  - Python
---

# Windows

## 安装

1. 前往 [Python 官方下载链接](https://www.python.org/downloads/)，点击下图红框中的 Windows
   :::tip
   尽量不要直接安装最新版，因为有些类库可能并没有兼容最新版
   :::

![file](https://cdn.vuepress.learnku.fit/Python%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/install_1.jpg)

2. 此处以 3.8.7 为例，点击下图红框中的链接下载 64 位的安装文件

![file](https://cdn.vuepress.learnku.fit/Python%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/install_2.png)

3. 下载完成之后打开安装文件，如果你没有强迫症，直接点击 Install Now 即可，否则的话请点击 Customize installation，此处我以自定义安装为例
   :::tip
   无论你选择哪种安装方式，都需要确保最下方 Add Python 3.8 to PATH 选项框选中
   :::

![file](https://cdn.vuepress.learnku.fit/Python%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/install_3.png)

4. 保持默认，全选即可，点击 Next

![file](https://cdn.vuepress.learnku.fit/Python%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/install_4.png)

5. 根据自己的喜好决定是否为所有用户安装以及是否安装调试模块，选择你的目标安装目录，最后点击右下角 Install 按钮

![file](https://cdn.vuepress.learnku.fit/Python%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/install_5.png)

6. 等待安装完成，点击 Disable path length limit 禁用路径长度限制，点击右下角的 Close 按钮

![file](https://cdn.vuepress.learnku.fit/Python%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/install_6.png)

## 验证

打开命令行分别输入 python --version 和 pip --version，没有报错正常输出即为安装完成

![file](https://cdn.vuepress.learnku.fit/Python%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/verify.png)
