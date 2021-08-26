---
title: Java 开发环境部署

meta:
  - name: description
    content: Java 开发环境部署
  - name: keywords
    content: Backend,Development Environment,Java

created: 2020/09/21

updated: 2021/01/10

tags:
  - Backend
  - Development Environment
  - Java
---

# Windows

## 安装

1. 前往 [Oracle 官网](https://www.oracle.com/java/technologies/javase-jdk16-downloads.html) 根据自己的系统以及使用软件版本的习惯下载适合自己的 `JDK`

![file](https://cdn.vuepress.learnku.fit/Java%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/jdk.png)

2. 选中接受许可协议，点击下载按钮

![file](https://cdn.vuepress.learnku.fit/Java%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/download.png)

3. 如果没有注册 `Oracle` 账号，请先去注册，登录之后才可以下载

![file](https://cdn.vuepress.learnku.fit/Java%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/login.png)

4. 下载完成之后双击执行文件，进入 `JDK` 的安装界面，点击下一步

![file](https://cdn.vuepress.learnku.fit/Java%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/install_1.png)

5. 根据个人喜好修改 `Java Development Kit` 的安装目录，继续点击下一步

![file](https://cdn.vuepress.learnku.fit/Java%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/install_2.png)

7. 安装完成之后界面如下图所示，点击关闭即可

![file](https://cdn.vuepress.learnku.fit/Java%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/install_4.png)

## 验证

打开命令行窗口，分别输入 `java` 和 `javac`，没有报错就说明已经安装成功了

![file](https://cdn.vuepress.learnku.fit/Java%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/validate_1.png)

![file](https://cdn.vuepress.learnku.fit/Java%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/validate_2.png)

## Hello World

1. 在你的工作目录下新建 `Java` 目录，在该目录下新建 `HelloWorld.java` 文件，并写入以下内容

```java
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
```

2. 执行编译并运行二进制文件

![file](https://cdn.vuepress.learnku.fit/Java%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/hello_world.png)

::: success
:tada: 恭喜，至此你已经完全掌握了 Java 这门全球排名第一的编程语言 :see_no_evil:
:::
