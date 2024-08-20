import {SidebarConfig4Multiple} from "vuepress/config";

import {Reading} from "./sidebars/sideBar_zh";
// @ts-ignore
export default {
    "/zh/Reading/": Reading,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;