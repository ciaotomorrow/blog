/*
    导航栏，分别export英文版(navbar_en)和中文版(navbar_zh)
*/
import {NavItem} from "vuepress/config";

export const navbar_en: NavItem[] = [
    {
        text: "ALL",
        items:[
            {text: "Reading", link: "/Reading/"},
            {text: "Mathematics", link: '/Mathematics/'},
            {text: "Photography", link: '/Photography/'},
            {text: "Web", link: '/Web/'}
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



export const navbar_zh: NavItem[] = [
    {
        text: "阅读",
        link: '/zh/Reading/'
    },
    {
        text: "数学",
        link: '/zh/Mathematics/'
    },
] as NavItem[];

export default navbar_en;