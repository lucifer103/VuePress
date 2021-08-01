---
title: 通过 Excel 将数据导入 MySQL

meta:
  - name: description
    content: 通过 Excel 将数据导入 MySQL
  - name: keywords
    content: Excel,MySQL

created: 2021/08/01
updated: 2021/08/01

tags:
  - MySQL
  - Excel
---

## 前言

如果使用频次较高并且导入逻辑相同，使用 Excel 操作类库自然是事半功倍  
但是个别的导入逻辑，整个应用开发的生命周期内也只会使用一到两次，就没有必要专门研究 Excel 操作类库了，使用如下方法可能会更简便，节省大家的时间  
博主也是第一次碰到这种需求，以下总结也是根据同事的分享而来，可能不是这个需求的最优解，如果大家有更好的方案，欢迎讨论

::: tip
以下示例均为 `users` 表
:::

## 找到正确的 insert 语句

1. 通过 MySQL 客户端工具将数据导出为 SQL，复制其中一行即可

```sql
INSERT INTO `larabbs`.users (
        name,
        phone,
        email,
        email_verified_at,
        password,
        avatar,
        two_factor_secret,
        two_factor_recovery_codes,
        remember_token,
        `order`,
        created_at,
        updated_at
    )
VALUES (
        '翟宇鑫',
        '+86 18816545428',
        'zhaiyuxin103@hotmail.com',
        NULL,
        '$2y$10$GmRP2sgU20r644ZuTH8X5.7yIslGaMoI84d82LU5sfj.bVZQAqbF.',
        NULL,
        NULL,
        NULL,
        'ZvSlXEe6IgYbds125wQHTcaYrn0KnC67T0mTvj5Ni4dnnVihqOvvKOtpiOPZ',
        0,
        '2021-07-31 14:22:19',
        '2021-07-31 19:44:32'
    ),
```

2. 将 VALUES 后的所有内容全部复制到 Excel 的第一个单元格内

```sql
(
    '翟宇鑫',
    '+86 18816545428',
    'zhaiyuxin103@hotmail.com',
    NULL,
    '$2y$10$GmRP2sgU20r644ZuTH8X5.7yIslGaMoI84d82LU5sfj.bVZQAqbF.',
    NULL,
    NULL,
    NULL,
    'ZvSlXEe6IgYbds125wQHTcaYrn0KnC67T0mTvj5Ni4dnnVihqOvvKOtpiOPZ',
    0,
    '2021-07-31 14:22:19',
    '2021-07-31 19:44:32'
),
```

## 整理 Excel

1. 将上一步复制到 Excel 文件中的 SQL 语句分列整理成如下格式：

![file](https://qiniuyun.learnku.fit/vuepress/%E9%80%9A%E8%BF%87%20Excel%20%E5%B0%86%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%85%A5%20MySQL/Snipaste_2021-08-01_20-55-41.png)

2. 接下来就是一些 Excel 的操作了，根据需求批量生成待新增的数据，格式需和第一行一致

> 博主对于这些办公软件可以说是一问三不知，关于本文也总结了一些 Excel 的小技巧，需要的可以移步：[Excel 的奇技淫巧](Excel的奇技淫巧.md)

## 完善 SQL 语句

1. 在文本编辑器中整合 insert 语句和 Excel 的数据，删除 Excel 复制到文本编辑器中自带的 tab 缩进，整理完成后基本如下：

```sql
INSERT INTO `larabbs`.users (name,phone,email,email_verified_at,password,avatar,two_factor_secret,two_factor_recovery_codes,remember_token,`order`,created_at,updated_at) VALUES
("翟宇鑫","+86 18816545428","zhaiyuxin103@hotmail.com",NULL,"$2y$10$GmRP2sgU20r644ZuTH8X5.7yIslGaMoI84d82LU5sfj.bVZQAqbF.",NULL,NULL,NULL,"ZvSlXEe6IgYbds125wQHTcaYrn0KnC67T0mTvj5Ni4dnnVihqOvvKOtpiOPZ",0,"2021-07-31 14:22:19","2021-07-31 19:44:32"),
("翟宇鑫","+86 18816545428","zhaiyuxin103@hotmail.com",NULL,"$2y$10$GmRP2sgU20r644ZuTH8X5.7yIslGaMoI84d82LU5sfj.bVZQAqbF.",NULL,NULL,NULL,"ZvSlXEe6IgYbds125wQHTcaYrn0KnC67T0mTvj5Ni4dnnVihqOvvKOtpiOPZ",0,"2021-07-31 14:22:19","2021-07-31 19:44:32"),
("翟宇鑫","+86 18816545428","zhaiyuxin103@hotmail.com",NULL,"$2y$10$GmRP2sgU20r644ZuTH8X5.7yIslGaMoI84d82LU5sfj.bVZQAqbF.",NULL,NULL,NULL,"ZvSlXEe6IgYbds125wQHTcaYrn0KnC67T0mTvj5Ni4dnnVihqOvvKOtpiOPZ",0,"2021-07-31 14:22:19","2021-07-31 19:44:32");
```

2. 最后打开 MySQL 客户端，执行该 SQL 即可
