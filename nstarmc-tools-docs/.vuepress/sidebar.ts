import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([
  "",
  {
    text: "下载",
    icon: "xiazai",
    prefix: "download/",
    link: "download/",
    children: "structure",
  },
  {
    text: "启动游戏",
    icon: "qidong1",
    prefix: "docs/game-launch/",
    collapsable: true,
    children: [
      ""
    ],
  },
  {
    text: "整合包管理",
    icon: "changjingguanli",
    prefix: "docs/pack-manage/",
    collapsable: true,
    children: [
      "download_java",
      "download_pack"
    ],
  },
  "feedback/"
]);
