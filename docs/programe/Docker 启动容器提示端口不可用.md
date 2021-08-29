---
title: Docker 启动容器提示端口不可用

meta:
  - name: description
    content: Docker 启动容器提示端口不可用
  - name: keywords
    content: Docker,Container

created: 2021/08/12

updated: 2021/08/12

tags:
  - Docker
---

:::tip
以下方案基于 Windows 平台下的 Docker Desktop
:::

### 报错截图

![file](http://qxpznwqee.hd-bkt.clouddn.com/Docker%20%E5%90%AF%E5%8A%A8%E5%AE%B9%E5%99%A8%E6%8F%90%E7%A4%BA%E7%AB%AF%E5%8F%A3%E4%B8%8D%E5%8F%AF%E7%94%A8/Snipaste_2021-08-12_17-03-41.png)

### 解决方案

以管理员身份运行 Windows Terminal 并执行以下命令，再重新启动容器即可

- `net stop winnat`

- `net start winnat`
