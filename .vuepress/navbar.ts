/*
    导航栏，分别export英文版(navbar_en)和中文版(navbar_zh)
*/
import {NavItem} from "vuepress/config";

export const navbar: NavItem[] = [
    {
        text: "All",
        items:[
            {text: "Reading", link: "/Reading/"},
            {text: "Mathematics", link: '/Mathematics/'},
            {text: "Photography", link: '/Photography/'},
            {text: "Web", link: '/Web/'},
            {text: "无聊", link: '/Thoughts/'},
        ]
    },
    {
        text: "Reading",
        link: "/Reading/",
    },
    {
        text: "Mathematics",
        link: '/Mathematics/',
    },
    {
        text: "Web",
        link: "/Web/"
    }
] as NavItem[];


