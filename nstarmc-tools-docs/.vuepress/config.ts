import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  lang: "zh-CN",
  title: "NSTARMC-Tools Docs",
  description: "NSTARMC-Tools 帮助文档",

  base: "/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_3322271_268e7tohvs5.css",
      },
    ],
    [
      "script",
      {
        async: "",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3827719938880025",
        crossorigin: "anonymous",
      }
    ],
  ],

  themeConfig,
});
