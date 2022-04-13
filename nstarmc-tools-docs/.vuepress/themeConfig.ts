import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://packs.nstarmc.cn",

  author: {
    name: "luluxiaoyu",
    url: "https://packs.nstarmc.cn",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo2.png",

  repo: "nstarmc/nstarmc-tools-docs",
  docsDir:"nstarmc-tools-docs",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "NSTARMC-Tools | Copyright © NSTARMC 2020-2022 All rights reserved.",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],


  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using giscus
       */
      type: "giscus",
      repo: "nstarmc/nstarmc-tools-docs",
      repoId: "R_kgDOHKa5Xg",
      category: "Q&A",
      categoryId: "DIC_kwDOHKa5Xs4COh6T",

      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
