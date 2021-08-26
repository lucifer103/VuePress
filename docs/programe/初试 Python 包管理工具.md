---
title: 初试 Python 包管理工具

meta:
  - name: description
    content: 初试 Python 包管理工具
  - name: keywords
    content: Python,pip

created: 2021/01/24

updated: 2021/01/24

tags:
  - Python
---

### 安装某些需要 C++ 编译组件的模块时报错

![file](https://cdn.vuepress.learnku.fit/%E5%88%9D%E8%AF%95%20Python%20%E5%8C%85%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7/pip_error_1.png)

1. 前往 [Microsoft Visual C++ Build Tools 2015](http://go.microsoft.com/fwlink/?LinkId=691126) 下载微软官方提供的 C++ 运行库

2. 下载完成之后双击运行使用默认设置安装即可解决上述报错

### 换源

1. 国内的可用源

|       描述       |                    URL                    |
| :--------------: | :---------------------------------------: |
|      阿里云      |  http://mirrors.aliyun.com/pypi/simple/   |
|   中国科技大学   | https://pypi.mirrors.ustc.edu.cn/simple/  |
|  豆瓣（douban）  |      http://pypi.douban.com/simple/       |
|     清华大学     | https://pypi.tuna.tsinghua.edu.cn/simple/ |
| 中国科学技术大学 |  http://pypi.mirrors.ustc.edu.cn/simple/  |

2. 临时修改：`pip install scrapy -i https://pypi.tuna.tsinghua.edu.cn/simple/`

3. 永久修改

- Windows：在用户文件夹下新建 pip/pip.ini，写入以下内容

```ini
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple/
```

4. 验证：执行 `pip config list` 命令，输出信息如下图则代表设置生效

![file](https://cdn.vuepress.learnku.fit/%E5%88%9D%E8%AF%95%20Python%20%E5%8C%85%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7/pip_mirror_verify.png)

:::tip
使用非 HTTPS 加密源（如阿里云源），在执行命令发生错误，需要在命令最后加上 `--trusted-host mirrors.aliyun.com`  
eg：pip install django -i http://mirrors.aliyun.com/pypi/simple --trusted-host mirrors.aliyun.com
:::
