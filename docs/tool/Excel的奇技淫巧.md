---
title: Excel 的奇技淫巧

meta:
  - name: description
    content: Excel 的奇技淫巧
  - name: keywords
    content: Excel

created: 2021/08/01
updated: 2021/08/02

tags:
  - Excel
---

## 给某一列数据两侧加上双引号

1. 设当前有 A 列，内容为：`I need double quotes on both sides`

2. 设一个 B 列，内容只输入一个双引号

3. 设一个 C 列，内容为 `=$B$1&A1&$B$1`

::: tip
此时不可以删除 A 列和 B 列，因为它们两列是 C 列的公式来源，一旦删除其中一列，C 列也会乱套
:::

4. 设一个 D 列，复制 C 列，在 D 列点击右键，选择性粘贴 -> 粘贴为数值，之后即可删除 A、B、C 列

## 不显示单引号

输入两个单引号即可显示一个
