import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  { text: "首页", icon: "home", link: "/" },
  {
    text: "文档",
    icon: "icon_shiyongwendang",
    prefix: "/docs/",
    children: [
      "pack-manage/",
      "game-launch/",
      "tools-setting/"
        ],
      },
  {
    text: "MCBBS原帖",
    icon: "tiezi",
    link: "https://www.mcbbs.net/thread-1025346-1-1.html",
  },
  {
    text: "夜阑星空-Minecraft",
    icon: "guanwangfangwen",
    link: "https://www.nstarmc.cn",
  },
]);
