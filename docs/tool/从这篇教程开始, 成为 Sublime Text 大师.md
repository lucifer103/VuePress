---
title: 从这篇教程开始, 成为 Sublime Text 大师

meta:
  - name: description
    content: 从这篇教程开始, 成为 Sublime Text 大师
  - name: keywords
    content: Sublime Text,IDE

created: 2021/02/04

updated: 2021/02/05

tags:
  - DevTool
  - IDE

banner: https://cdn.vuepress.learnku.fit/banner/gdmJxS6XQe.jpg
---

开发比较复杂的项目之时，专业的编辑器 PHPStorm 当然是最佳选择，但是无奈电脑内存太小 (正在凑钱买新的 MBP) 以及速度上的追求，并不想放弃 Sublime 神器，某日游览 Laracast，看到 Jeffrey 在 Laracast 上的秘籍，终于得偿所愿，将手中的 Sublime 打造成利器，媲美 PHPStorm 和 Vim。

[下载最新版本 Sublime 3](https://www.sublimetext.com/)

#### 学会使用 Package Control

Package Control 是一个为了方便管理插件的插件。安装过程可以看看官网或者 check 一些博客

- How to use Package Control ? : [https://packagecontrol.io/](https://packagecontrol.io/)

#### 开发界面很重要

想要开发一个赏心悦目的产品，除了一个比较好的审美素养之外，开发工具的面子自然不能太 low。

![file](https://cdn.vuepress.learnku.fit/sublime/theme.png)

个人主题：Material Theme

- 如何安装 Material Theme ？ [GitHub](https://github.com/equinusocio/material-theme)

代码字体对缓解眼睛疲劳和提高阅读速度很重要， 比较推荐 [JetBrains Mono](https://www.jetbrains.com/lp/mono/) , 你们编代码都用神马字体呢？

- 如何安装字体？[JetBrains](https://www.jetbrains.com/lp/mono/)

Theme 也有很多细节配置，大家自行探索，有需要的时候去搜索一下教程就可以。

#### 重要的快捷键：两个必杀技

学习 Sublime， 记住这两个快捷键就可以啦。

- Command + P 快速进行文件切换
- Command + R / Command + Shift + R 在单个文件中进行函数之间的快速切换

#### 快速创建文件

话说，不要在每次浪费好久时间右键点击文件夹来新建删除文件了，试试这个组件：

- AdvancedNewFile：[https://github.com/skuroda/Sublime-AdvancedNewFile](https://github.com/skuroda/Sublime-AdvancedNewFile)

好像有人说过程序员的思维是花两个小时去自动化一个步骤，只是为了快 1 s.

#### 代码检查工具

[SublimeLinter](https://packagecontrol.io/search/SublimeLinter) 代码检查的功能，也是我的必备工具之一。强大之处在于， 用高亮提示用户编写的代码中存在的不规范和错误的写法，支持 JavaScript、CSS、HTML、Java、PHP、Python、Ruby 等十多种开发语言。

![file](https://cdn.vuepress.learnku.fit/sublime/sublimelinter.png)

个人平时工作生活写代码用的都是 PHP，所以把 SublimeLinter-php、SublimeLinter-phplint、SublimeLinter-phpcs、SublimeLinter-phpmd 都装了个遍。至于怎么玩，自己研究去吧～因为要 SublimeLinter-phpcs、SublimeLinter-phpmd 可能会折腾你很久。我自己也没能找到一个万用教程，总有时候会不起作用。所以真的要用就自己折腾或者也可以来问我。

#### 代码高亮提示

比如 [Laravel Blade Highlighter](https://packagecontrol.io/packages/Laravel%20Blade%20Highlighter) ，这个我一定会装。其实直接上 [Sublime Package](https://packagecontrol.io/search) 搜就可以，这些都是根据需求来的。高亮的关键词是 Highlighter，只是输入关键词 Laravel 也可以找到很多插件来使用。觉得高亮提示很有必要说一下的原因很简单，不就是看着舒服呀！ 所以这货也是必备的。

#### Vintage: 给 Vim 党的礼物

在 Preferences -> Settings - User 中的，ignored_packages 中移除 Vintage：

:::tip
但不要删除整个 ignored_packages 配置，即便值为空
:::

```json
...
"ignored_packages":
[
    Vintage
],
...
```

然后随意打开一个文件，敲击 Esc 键， Cool，Vim 的所有操作都会来啦，熟悉的味道，哈哈。

> 学习 Vim 很简单 :smirk:，在任何命令行终端里面输入 vimtutor , 就可以开始学习（入坑）。

#### 为 PHP Workflow 而打造

这里的主要核心其实是 snippets，这位仁兄收集了一下课程中关于 PHP 和 Laravel 的 snippets ，
可以查阅一下：

[https://github.com/jonasvanderhaegen/Handy-for-sublime-and-a-faster-better-workflow](https://github.com/jonasvanderhaegen/Handy-for-sublime-and-a-faster-better-workflow)

如果你还不会写 snippets，这里是一个起点：

- [非官方帮助文件](https://sublime-undocs-zh.readthedocs.io/en/latest/extensibility/snippets.html)
- [手把手教你写 Sublime 中的 Snippet](https://www.jianshu.com/p/356bd7b2ea8e)

有用的一些插件：

- [erichard/SublimePHPCompanion](https://github.com/erichard/SublimePHPCompanion) : Provides cool stuff for PHP 5.3+ coding session. 类似自动导入依赖等 PHPStorm 的功能。
- 你也可以绑定 Sublime 快键键去执行测试 [GitHub](https://github.com/evgeny-golubev/SimplePHPUnit-for-Sublime-Text)

#### For Artisan

通过 Package Install 检索 Laravel 5 Artisan，成功安装之后，我们就可以在 Sublime 中直接执行 Artisan Command。比如，我需要新建一个 Controller：

![file](https://cdn.vuepress.learnku.fit/sublime/artisan.png)

很是方便。

#### 自己动手，丰衣足食

还有一个比较重要的功能：

- 写出符合规范的代码（fabpot/php-cs-fixer）

尝试一下，自己搜集相关资料完成这部分的配置。

#### 我自己的配置文件，参考就好别直接复制哈～

```json
{
  "always_show_minimap_viewport": true,
  "caret_style": "phase",
  "color_scheme": "Packages/Material Theme/schemes/Material-Theme-Darker.tmTheme",
  "default_line_ending": "unix",
  "ensure_newline_at_eof_on_save": true,
  "findreplace_small": true,
  "font_face": "JetBrains Mono",
  "font_size": 14,
  "highlight_line": false,
  "hot_exit": false,
  "ignored_packages": [],
  "line_numbers": true,
  "line_padding_bottom": 8,
  "line_padding_top": 8,
  "phpunit-sublime-terminal": "iTerm",
  "remember_open_files": false,
  "show_definitions": false,
  "show_panel_on_build": false,
  "tab_size": 4,
  "tabs_small": false,
  "theme": "Material-Theme-Darker.sublime-theme",
  "translate_tabs_to_spaces": true,
  "trim_trailing_white_space_on_save": true,
  "word_wrap": true
}
```

#### 常用插件

:::tip
在 Sublime Text 中按下快捷键 Ctrl+Shift+P ，搜索 install 会自动补全，选择 Package Control: Install Package ，进入搜索插件列表，输入关键词后选中即可安装插件。
:::

|                                     插件名                                      |                                                                             功能描述                                                                              |
| :-----------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                  ColorsSublime                                  |                                                    代码高亮主题管理插件，安装成功后需要照着文档配置两个地方；                                                     |
|                                 Material Themel                                 |                                                            非常棒的编辑器主题，注意作者是 equinusocio                                                             |
|                                 Blade Snippets                                  |                                                                        Blade 模板自动补全                                                                         |
|                           Laravel Blade Hightlighter                            |                                                                        Blade 语法高亮支持                                                                         |
|                                  SyncedSideBar                                  |                                                                 自动在左边文件夹树中定位当前文件                                                                  |
|                                    ALignment                                    | 也是用快捷键操作，强迫症必备，「等号」对齐功能。Mac 下建议自己手动更改快捷键 [主页](https://github.com/wbond/sublime_alignment) [示例](https://imgur.com/eIBowAw) |
|   [BracketHighlighter](https://packagecontrol.io/packages/BracketHighlighter)   |                                                                          结尾处高亮 主页                                                                          |
|                                  EditorConfig                                   |                                                                   .editorconfig 编码格式化支持                                                                    |
|                [Emmet](https://packagecontrol.io/packages/Emmet)                |                                            写前端代码的必备插件，[快捷键](https://docs.emmet.io/cheat-sheet/) 操作为主                                            |
|                               SideBarEnhancements                               |                                                                       文件夹栏右键菜单增强                                                                        |
|                                      SCSS                                       |                                                                         官方版本语法高亮                                                                          |
|       [AdvancedNewFile](https://packagecontrol.io/packages/AutoFileName)        |                                             快速创建新文件 [主页](https://github.com/skuroda/Sublime-AdvancedNewFile)                                             |
|                                    GitGutter                                    |                                                 标记代码中做的编辑 [主页](https://github.com/jisaacks/GitGutter)                                                  |
|  [Laravel 5 Artisan](https://packagecontrol.io/packages/Laravel%205%20Artisan)  |                                                                      Artisan 命令行调用 主页                                                                      |
| [Laravel 5 Snippets](https://packagecontrol.io/packages/Laravel%205%20Snippets) |                                                                           代码片段 主页                                                                           |
|                                  SublimeLinter                                  |                                                                             代码检测                                                                              |
|                                SublimeLinter-PHP                                |                                                                       PHP 代码实时报错检测                                                                        |
|                          erichard/SublimePHPCompanion                           |                                            自动引入 namespace [主页](https://github.com/erichard/SublimePHPCompanion)                                             |
|            [DocBlockr](https://packagecontrol.io/packages/DocBlockr)            |                                                                         用来生成代码注释                                                                          |
|            [代码自动补全](https://packagecontrol.io/search/Snippets)            |                          好像 Laravel 就有 Blade Snippets、Laravel 5 Snippets，基本上只要你找找自己用的语言就会有的，这种按需引入就好。                           |
|         [SublimeLinter](https://packagecontrol.io/search/SublimeLinter)         |                                                                           代码检查工具                                                                            |
|        [ConvertToUTF8](https://packagecontrol.io/packages/ConvertToUTF8)        |                                                                         文件转码成 utf-8                                                                          |
|             [JsFormat](https://packagecontrol.io/packages/JsFormat)             |                                                                    Javascript 的代码格式化插件                                                                    |
|    [Bracket Highlighter](https://github.com/facelessuser/BracketHighlighter)    |                                                    可匹配 [], (), {}, “”, ”, ，高亮标记便于查看起始和结束标记                                                     |
|        [Trailing Spaces](https://github.com/SublimeText/TrailingSpaces)         |                                                                  检测并一键去除代码中多余的空格                                                                   |

#### 结语

安装插件时要特别慎重，编辑器的速度很重要。

> 文章参考于：[从这篇教程开始, 成为 Sublime Text 大师](https://learnku.com/laravel/t/2825/start-with-this-tutorial-and-become-a-sublime-text-master)，[为 Laravel 开发而配置的 Sublime Text 3](https://learnku.com/articles/3688/sublime-text-3-configured-for-laravel-development)，[安利一些好用的 Sublime 插件](https://learnku.com/laravel/t/4833/amway-some-useful-sublime-plug-ins)  
> 附带我每安装一次 Sublime 就会看的一些网上的帖子：[如何优雅地使用 Sublime Text](https://www.jeffjade.com/2015/12/15/2015-04-17-toss-sublime-text/)，[实用的 Sublime 插件集合](https://blog.csdn.net/jianhua0902/article/details/43761899)
