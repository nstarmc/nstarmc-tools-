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
    text: "帮助文档",
    icon: "icon_shiyongwendang",
    prefix: "docs/",
    children: [
      "download_java",
      "download_pack"
    ],
  },
  {
    text: "反馈",
    icon: "fankui",
    prefix: "feedback/",
    children: [
      ""
    ],
  },
]);
