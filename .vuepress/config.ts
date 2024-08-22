import { defineConfig } from "vuepress/config";

import {navbar } from "./navbar";
import sidebar from "./sidebar";


import footer from "./footer";

import extraSideBar from "./extraSideBar";
// import { katex } from "@mdit/plugin-katex";

import markdownItKatex from "markdown-it-katex";

import markdownIt from 'markdown-it';
import markdownItContainer from 'markdown-it-container';

const author = "Leon Wang";
const domain = "https://github.com/ciaotomorrow/blog/";
const tags = ["Study", "Mathematics", "Computer"];



export default defineConfig({
  base: "/blog/",
  head: [
    // 站点图标
    ["link", { rel: "icon", href: "/favicon2.ico" }],
    // SEO
    [
      "meta",
      {
        name: "keywords",
        content:
          "望星空, Stargaze, 王怀瑾, Wanghuaijin, Wang Huaijin",
      },
    ],
    // 百度统计
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?2675818a983a3131404cee835018f016";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `,
    ],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],      // 让md支持数学公式
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }],  // 让md支持数学公式
    // ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css' }],
    // ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap' }],
    ],
  permalink: "/:slug",


  // 监听文件变化，热更新
  extraWatchFiles: [".vuepress/*.ts", ".vuepress/sidebars/*.ts"],
  markdown: {
    // 开启代码块的行号
    lineNumbers: true,
    // 支持 4 级以上的标题渲染
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
    extendMarkdown: md => {
      md.set({ breaks: true })
      // 使用 markdown-it-katex 插件
      md.use(markdownItKatex);
      // 添加自定义的规则或类名（例如将所有公式包裹在一个 div 中）
  //     md.renderer.rules.katex = (tokens, idx) => {
  //       return `<div class="my-custom-katex">${tokens[idx].content}</div>`;
  // };
    },
  },
  // @ts-ignore
  plugins: [
    ["@vuepress/back-to-top"],
    // Google 分析
    [
      "@vuepress/google-analytics",
      {
        ga: "G-QY734ZWXRJ", // 补充自己的谷歌分析 ID，比如 UA-00000000-0
      },
    ],
    ["@vuepress/medium-zoom"],
    // https://github.com/lorisleiva/vuepress-plugin-seo
    [
      "seo",
      {
        siteTitle: (_, $site) => $site.title,
        title: ($page) => $page.title,
        description: ($page) =>
          $page.frontmatter.description || $page.description,
        author: (_, $site) => $site.themeConfig.author || author,
        tags: ($page) => $page.frontmatter.tags || tags,
        type: ($page) => "article",
        url: (_, $site, path) =>
          ($site.themeConfig.domain || domain || "") + path,
        image: ($page, $site) =>
          $page.frontmatter.image &&
          (($site.themeConfig.domain &&
            !$page.frontmatter.image.startsWith("http")) ||
            "") + $page.frontmatter.image,
        publishedAt: ($page) =>
          $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: ($page) => $page.lastUpdated && new Date($page.lastUpdated),
      },
    ],
    // https://github.com/ekoeryanto/vuepress-plugin-sitemap
    [
      "sitemap",
      {
        hostname: domain,
      },
    ],
    // https://github.com/IOriens/vuepress-plugin-baidu-autopush
    ["vuepress-plugin-baidu-autopush"],
    // https://github.com/zq99299/vuepress-plugin/tree/master/vuepress-plugin-tags
    ["vuepress-plugin-tags"],
    // https://github.com/znicholasbrown/vuepress-plugin-code-copy
    [
      "vuepress-plugin-code-copy",
      {
        successText: "Code copied",
        align: "left",
      },
    ],
    // https://github.com/webmasterish/vuepress-plugin-feed
    [
      "feed",
      {
        canonical_base: domain,
        count: 10000,
        // 需要自动推送的文档目录
        posts_directories: [],
      },
    ],
    // https://github.com/tolking/vuepress-plugin-img-lazy
    ["img-lazy"],
    [
      'vuepress-plugin-serve'
    ],
    ["vuepress-plugin-tooltip"],
    // https://github.com/leo-buneev/vuepress-plugin-fulltext-search
    ['fulltext-search'],
    // ["@vuepress/plugin-vuepress"],
    // latex interpreter
    // ["markdown-it-mathjax3"],
    // ["vuepress-plugin-katex"],
    // ["@vuepress/plugin-katex"],
    // ["vuepress-plugin-mathjax"], 
    // ["vuepress-plugin-latex"], 
    // [
    //   "md-enhance",
    //   {
    //     // 启用 TeX 支持
    //     tex: true,
    //   },
    // ],

    ['@vuepress/plugin-mathjax', {
      target: 'svg',  // 使用 SVG 渲染 MathJax
      macros: {
        // 可以在这里添加自定义宏
      },
      mathjaxOptions: {
        tex: {
          tags: 'all'  // 启用公式编号
        },
        options: {
          // 其他 MathJax 配置选项
        }
      }
    }],

    // markdown文本加密：https://www.imaegoo.com/2020/vuepress-encrypt/
    ['@oak-tree-house/vuepress-plugin-encrypt', {
      contentTitle: 'Encrypted Content',
      unencryptedText: 'This is an encryptable content.',
      encryptedText: 'This part of content is encrypted. To view it, you need to enter the correct key in the input field below.',
      decryptedText: 'The encrypted content is successfully decrypted and shown below.',
      decryptButtonText: 'Decrypt',
      decryptFailText: 'Failed to decrypt!',
      unencryptedIcon: undefined,
      encryptedIcon: undefined,
      decryptedIcon: undefined
    }],
    // [
    //   'vuepress-plugin-reading-time',
    //   {
    //     wordCount: text => {
    //       // 中文字符统计（每个汉字算作一个字）
    //       const chineseCharacters = text.match(/[\u4e00-\u9fa5]/g) || [];
    //       // 非中文字符的统计（按照单词计算）
    //       const nonChineseWords = text.match(/\b\w+\b/g) || [];

    //       // 总字数 = 中文字符数 + 非中文单词数
    //       return chineseCharacters.length + nonChineseWords.length;
    //     },
    //     // wordCount: true,  // 启用字数统计
    //     // excludeCodeBlock: true,  // 排除代码块中的字数
    //     wordPerminute: 200,
    //   },
    // ],

    [
      '@vuepress/plugin-search',
      {
        // 配置选项
        searchMaxSuggestions: 100, // 最大搜索建议数量
        searchDepth: 6, // 搜索标题的最大深度，h1=1, h2=2
        indexContent: true,
        getExtraFields: (page) => page.frontmatter.tags || [],
      },
    ],
    ['demo-block', {
      // 插件配置选项
    }],
    // ['vue-pdf'],
  ],
  // 主题配置
  // locales: {
  //   '/': {
  //     lang: 'en-US', // 英文
  //     title: '',
  //     description: ''
  //   },
  //   '/zh/': {
  //     lang: 'zh-CN', // 中文
  //     title: '',
  //     description: ''
  //   }
  // },
  lang: 'en-US', // 英文
  title: "",
  description: '',

  themeConfig: {
    logo: "/logo2.png",

    nav: navbar,
    sidebar,
    lastUpdated: "Last updated",

    // GitHub 仓库位置
    repo: "ciaotomorrow/blog",
    docsBranch: "main",

    // 编辑链接
    // editLinks: true,
    // editLinkText: "完善页面",

    // @ts-ignore
    // 底部版权信息
    footer,
    // 额外右侧边栏
    extraSideBar,


    // locales: {
    //   '/': {
    //     selectText: 'Languages',
    //     label: 'English',
    //     ariaLabel: 'Languages',
    //     editLinkText: 'Edit this page on GitHub',
    //     lastUpdated: 'Last Updated',
        
    //   },
    //   '/zh/': {
    //     selectText: '选择语言',
    //     label: '简体中文',
    //     ariaLabel: '选择语言',
    //     editLinkText: '在 GitHub 上编辑此页',
    //     lastUpdated: '最后更新',
    //     nav: navbar_zh,
    //     sidebar: sidebar_zh,
    //   }
    // }
  },
});
