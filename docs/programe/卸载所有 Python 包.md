---
title: 卸载所有 Python 包

meta:
  - name: description
    content: 卸载所有 Python 包
  - name: keywords
    content: Python

created: 2021/09/16

updated: 2021/09/16

tags:
  - Python
  - Venv
  - Pip
---

### 打开 Terminal，执行以下命令可以将所有已安装的 python 包罗列至某个文件中

```shell
pip freeze > python_modules.txt
```

### 根据上述文件卸载所有 python 包，执行以下命令：

```shell
pip uninstall -r python_modules.txt -y
```
