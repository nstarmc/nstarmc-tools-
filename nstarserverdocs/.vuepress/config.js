const { config } = require("vuepress-theme-hope");

module.exports = config({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'NSTAR-Tools帮助文档',
      description: 'NSTAR-Tools帮助文档'
    }
  },
  title: "NSTAR-Tools帮助文档",
  description: "NSTAR-Tools帮助文档",

  dest: "./docs",
  lang: "zh-CN",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],


  themeConfig: {
    pwa:false,
    logo: "/favicon.png",
    hostname: "https://packs.nstarmc.cn",
    repo: "nstarmc/nstar-tools-docs",
    docsDir: 'nstarserverdocs',
    author: "小宇",


    nav: [
      { text: "文档首页", link: "/", icon: "shouye" },
      {
        text: "整合包原帖",
        link: "https://www.mcbbs.net/thread-1025346-1-1.html",
        icon: "home",
      },
    ],

    sidebar: {
      "/": [
        "",
        {
          title: "下载",
          icon: "123_huaban1fuben2",
          prefix: "download/",
          children: [
            "", 
            "download_pack",
            "download_java"
          ],
        },
        {
          title: "反馈",
          icon: "home",
          prefix: "feedback/",
          children: [
            ""
          ],
        }
        
      ],
    },


    footer: {
      display: true,
      content: "NSTARMC-Tools文档",
    },


    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },
  },
});
