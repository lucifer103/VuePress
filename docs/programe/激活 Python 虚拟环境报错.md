---
title: 激活 Python 虚拟环境报错

meta:
  - name: description
    content: 激活 Python 虚拟环境报错
  - name: keywords
    content: Python

created: 2021/09/16

updated: 2021/09/16

tags:
  - Python
---

:::tip
平台：Windows 11
:::

### 报错贴图

![file](https://cdn.vuepress.learnku.fit/%E6%BF%80%E6%B4%BB%20Python%20%E8%99%9A%E6%8B%9F%E7%8E%AF%E5%A2%83%E6%8A%A5%E9%94%99/error.png)

### 解决方案

以管理员身份运行 PowerShell，执行 `set-executionpolicy remotesigned` 命令，输入 `Y`，回车即可

![file](https://cdn.vuepress.learnku.fit/%E6%BF%80%E6%B4%BB%20Python%20%E8%99%9A%E6%8B%9F%E7%8E%AF%E5%A2%83%E6%8A%A5%E9%94%99/policy.png)
