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
        href: "//at.alicdn.com/t/font_3322271_muh07s1bjgl.css",
      },
    ],
  ],

  themeConfig,
});
