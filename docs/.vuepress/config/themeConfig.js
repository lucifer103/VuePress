const links = require("./links.js"); // 引入友链配置
const nameplate = require("./nameplate"); // 引入标示牌配置

module.exports = {
  // 当前网站语言 en zh-CN
  lang: "zh-CN",
  // 网站 logo
  logo: "/logo.png",
  // 标示牌
  nameplate,
  // 文章随机封面
  postCover: [
    "https://cdn.vuepress.learnku.fit/1039d85f155ebe572ff56f90a626b7a1.jpg",
    "https://cdn.vuepress.learnku.fit/259d10ede304468d1c12df2f49ed2afd.jpg",
    "https://cdn.vuepress.learnku.fit/56e0e59e0ab812163e669e6ed52f7fa3.jpg",
    "https://cdn.vuepress.learnku.fit/6f6ca5b0cb3bc43e5895911cc40a343d.jpg",
    "https://cdn.vuepress.learnku.fit/766bb99cdfea168a5611d5ed3ee87e6a.jpg",
    "https://cdn.vuepress.learnku.fit/abea283e65f3460e6f33383dceec550b.jpg",
    "https://cdn.vuepress.learnku.fit/b49fa49c69ff125aff9a08b177f94cec.jpg",
    "https://cdn.vuepress.learnku.fit/bae275e9f50a46e61498e227df586eb9.jpg",
    "https://cdn.vuepress.learnku.fit/bc8cd22dd19d42b85dfa8abc871215bf.jpg",
    "https://cdn.vuepress.learnku.fit/d4650c2a40868b84eda513bca9d13513.jpg",
    "https://cdn.vuepress.learnku.fit/eb92164f38952ef26315499f112b963a.jpg",
    "https://cdn.vuepress.learnku.fit/fb03a35ac8a7ca43a69b89c298b2165a.jpg",
  ],
  //打赏图片
  reward: ["https://cdn.vuepress.learnku.fit/%E5%BE%AE%E4%BF%A1%E8%B5%9E%E8%B5%8F%E7%A0%81.png", "https://cdn.vuepress.learnku.fit/%E6%94%AF%E4%BB%98%E5%AE%9D%E6%94%B6%E6%AC%BE%E7%A0%81.png"],
  // 开启友链的页面
  links,
  // 开启关于我的页面
  about: true,
  //cdn
  //cdn: 'https://cdn.vuepress.learnku.fit'
  // 页脚备案信息
  beiAn: "晋 ICP 备 20002124 号",
  // 生成 sitemap
  hostname: "https://learnku.fit",
  // 语言本地化，详情见：https://cdn.jsdelivr.net/gh/cnguu/vuepress-theme-yur@master/yur/plugins/Translation/locales/zh-CN.js
  locales: {
    title: "月上陌阡",
    description: "责难无以成事",
  },
  // 分类配置
  menuCategories: [
    { text: "编程技术", link: "programe" },
    { text: "生活兴趣", link: "life" },
    { text: "软件工具", link: "tool" },
    { text: "其他", link: "other" },
  ],
  //百度统计
  baiDu: {
    tongJi: "https://hm.baidu.com/hm.js?tongJi",
    autoPush: true,
    pinYin: true,
  },
  //客服在线聊天
  crisp: "c19c39c9-c33a-43cc-ba56-d09aa1ea2b1a",
  //封面图
  // banner: '/banner.png',
};
