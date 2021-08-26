---
title: 搭建 Yaf 脚手架

meta:
  - name: description
    content: 搭建 Yaf 脚手架
  - name: keywords
    content: PHP,Yaf

created: 2021/02/09

updated: 2021/02/09

tags:
  - PHP
  - Yaf
---

## 安装 Yaf 扩展

1. 首先通过 phpinfo 确认自己的 PHP 版本是 TS 还是 NTS

![file](https://cdn.vuepress.learnku.fit/%E6%90%AD%E5%BB%BA%20Yaf%20%E8%84%9A%E6%89%8B%E6%9E%B6/thread-safety.png)

2. 前往 [PECL 官网](http://pecl.php.net/package/yaf) 下载扩展

![file](https://cdn.vuepress.learnku.fit/%E6%90%AD%E5%BB%BA%20Yaf%20%E8%84%9A%E6%89%8B%E6%9E%B6/dll.png)

![file](https://cdn.vuepress.learnku.fit/%E6%90%AD%E5%BB%BA%20Yaf%20%E8%84%9A%E6%89%8B%E6%9E%B6/download.png)

3. 解压之后将文件夹中的 **php_yaf.dll** 文件剪切到 PHP 的扩展目录

:::tip
扩展目录根据自己的情况来判断，不要照搬哈 ~
:::

![file](https://cdn.vuepress.learnku.fit/%E6%90%AD%E5%BB%BA%20Yaf%20%E8%84%9A%E6%89%8B%E6%9E%B6/extension_dir.png)

4. 修改 PHP 配置文件

![file](https://cdn.vuepress.learnku.fit/%E6%90%AD%E5%BB%BA%20Yaf%20%E8%84%9A%E6%89%8B%E6%9E%B6/ini.png)

在适当的位置添加以下代码：

```ini
extension=php_yaf.dll
[yaf]
yaf.use_namespace=1
yaf.use_spl_autoload=1
```

5. 重启 Nginx，再次查看 phpinfo，能看到以下信息即为安装成功

:::tip
可能需要重启电脑才会生效
:::

![file](https://cdn.vuepress.learnku.fit/%E6%90%AD%E5%BB%BA%20Yaf%20%E8%84%9A%E6%89%8B%E6%9E%B6/success.png)

## 安装脚手架

:::primary
博主选择了 [`overtrue/yaf-skeleton`](https://github.com/overtrue/yaf-skeleton)这款脚手架，因为实在忍受不了这种啥都没有的框架，所以选了有些基础封装的脚手架
:::

1. 拉取代码：`composer create-project overtrue/yaf-skeleton skeleton`

2. 安装模板引擎：`composer require league/plates`

3. 最后配置 Nginx 站点即可运行 :tada:

![file](https://cdn.vuepress.learnku.fit/%E6%90%AD%E5%BB%BA%20Yaf%20%E8%84%9A%E6%89%8B%E6%9E%B6/website.png)
