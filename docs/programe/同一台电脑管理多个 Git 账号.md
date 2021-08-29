---
title: 同一台电脑管理多个 Git 账号

meta:
  - name: description
    content: 同一台电脑管理多个 Git 账号
  - name: keywords
    content: Git,Github,Gitlab,Gitee

created: 2021/08/16

updated: 2021/08/16

tags:
  - Git
  - Github
  - Gitlab
  - Gitee
---

## 生成 SSH Key

:::tip
需要手动输入 `SSH Key` 生成的文件名
:::

```shell
$ ssh-keygen -t rsa -C "your email"
```

![file](https://cdn.vuepress.learnku.fit/%E5%90%8C%E4%B8%80%E5%8F%B0%E7%94%B5%E8%84%91%E7%AE%A1%E7%90%86%E5%A4%9A%E4%B8%AA%20Git%20%E8%B4%A6%E5%8F%B7/ssh-keygen.png)

## 将多个公匙添加至相应的 Github 账号

![file](https://cdn.vuepress.learnku.fit/%E5%90%8C%E4%B8%80%E5%8F%B0%E7%94%B5%E8%84%91%E7%AE%A1%E7%90%86%E5%A4%9A%E4%B8%AA%20Git%20%E8%B4%A6%E5%8F%B7/new_ssh_key.png)

![file](https://cdn.vuepress.learnku.fit/%E5%90%8C%E4%B8%80%E5%8F%B0%E7%94%B5%E8%84%91%E7%AE%A1%E7%90%86%E5%A4%9A%E4%B8%AA%20Git%20%E8%B4%A6%E5%8F%B7/ssh_keys_add_new.png)

## 在 .ssh 目录下新建 config 文件，写入以下内容

```ssh config
# 相当于 github.com 的别名，需要设置为 git remote url 中的 host
Host hotmail.github.com
HostName github.com
IdentityFile ~/.ssh/id_rsa_hotmail

Host gmail.github.com
HostName github.com
IdentityFile ~/.ssh/id_rsa_gmail
```

## 验证是否可以连接成功

```shell
$ ssh -T git@hotmail.github.com
$ ssh -T git@gmail.github.com
```

![file](https://cdn.vuepress.learnku.fit/%E5%90%8C%E4%B8%80%E5%8F%B0%E7%94%B5%E8%84%91%E7%AE%A1%E7%90%86%E5%A4%9A%E4%B8%AA%20Git%20%E8%B4%A6%E5%8F%B7/verify_connection.png)

## 替换 Remote Url

:::tip
现有的项目的 `remote url` 和之后克隆这两个账号下的仓库是都需要将 `host` 替换为 `config` 文件中设置的 `host`  
eg：  
git@**github.com**:zhaiyuxin103/vuepress.git -> git@**hotmail.github.com**:zhaiyuxin103/vuepress.git
:::

```shell
git remote set-url origin git@hotmail.github.com:zhaiyuxin103/vuepress.git
git clone git@hotmail.github.com:zhaiyuxin103/vuepress.git
```

## 清除 Git 的全局设置

```shell
# 取消 global config
git config --global --unset user.name
git config --global --unset user.email

# 为每个 repo 设置自己的 user，email
git config  user.email "zhaiyuxin103@hotmail.com"
git config  user.name "zhaiyuxin103"
```
