---
title: Introduction
---

## 关于个人网站
<p style="text-indent:2em">
个人网站是由个人创建和维护的平台，专门用于分享个人的想法、经验、知识、兴趣或作品。
</p>

<p style="text-indent:2em">
受一些大佬的启发，比如
<a href="https://multifire.org" title="MultiFire.org" style="color:DodgerBlue"> MultiFire </a>,
<a href="https://www.gatesnotes.com" title="GatesNotes" style="color:DodgerBlue">GatesNotes</a>,
<a href="https://codefather.cn" title="liyupi" style="color:DodgerBlue">liyupi</a>，
我发现开发个人网站是一件非常有趣的事情。通过不断整合自己感兴趣的内容，不仅可以帮助理清思路，还能与志同道合的人分享和交流。因此，这是一种非常有效的促进自我成长的方式。
</p>

<p style="text-indent:2em">
当然，基于兴趣开发个人网站的可玩性非常高，但对于不熟悉的朋友来说，也面临一些挑战。对我而言，至少需要从零开始了解开发网站的两个关键阶段：一是<b>本地化网页开发</b>：至少需要熟悉 HTML、CSS 和 JavaScript 的基础知识，以便创建和设计网页。 二是<b>服务器部署</b>：需要将本地开发的网页上传到服务器，以便让他人能够访问。根据需要，还可以为网站配置一个独特的域名，以增强网站的个性和可访问性。
</p>

<p style="text-indent:2em">
作为一个零基础且动手能力较弱的人，个人网站的开发对我来说无疑是一个巨大的挑战。不过幸运的是，在UP主
<a href="https://www.bilibili.com/video/BV16A4y1X7vg/?spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=aae6d2f2986fbfc6933d738eccf70b4f" title="小枫社长" style="color:DodgerBlue"> 小枫社长</a>,
<a href="https://www.bilibili.com/video/BV1LQ4y1V79r/?spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=aae6d2f2986fbfc6933d738eccf70b4f" title="程序员鱼皮" style="color:DodgerBlue"> 程序员鱼皮 </a>
视频的帮助下，我找到一个非常能够满足我的需求的解决办法——
<a href="https://vuepress.vuejs.org/zh/" title="VuePress" style="color:DodgerBlue"> VuePress</a>, 一个由 Vue 驱动的静态网站生成器。
</p>



## 为什么是VuePress
 
<p style="text-indent:2em">
Vue 是一种渐进式的 JavaScript 框架，主要用于构建用户界面 (UI)。Vue的核心库专注于视图层，易于学习并与其他库或已有项目集成。Vue.js 由
<a href="https://zh.wikipedia.org/wiki/尤雨溪" title="尤雨溪 (Evan You) " style="color:DodgerBlue"> 尤雨溪 (Evan You) </a>
创建，并于 2014 年首次发布。<a href="https://vuepress.vuejs.org/zh/" title="VuePress" style="color:DodgerBlue"> VuePress</a> 是一个静态网站生成器，专注于为文档和博客等内容生成静态页面。VuePress 本身是基于 Vue 的，利用 Vue 的能力来生成和优化静态页面。
</p>


<p style="text-indent:2em">
VuePress 的基本工作原理是在构建阶段将 Markdown 文件转换为 Vue 组件，然后通过 Vue 及其相关工具渲染页面，最终输出为静态的 HTML 文件。于我而言，使用 VuePress 开发个人网站有以下好处：
<ul style="text-indent:2em">
<li style="text-indent:0em"> <b>以 Markdown 为核心</b>：VuePress 的项目结构以 Markdown 为中心，使得撰写和管理内容变得极为简单。你可以直接在 Markdown 文件中编写内容，无需深入了解复杂的 HTML 或前端框架。同时，Markdown 与 HTML 的良好兼容性允许你通过简单的 HTML 标签为文档添加代码块、LaTeX 公式、音频、视频、PDF 文件等多种元素。</li>
<li style="text-indent:0em"> <b>丰富的主题和插件支持</b>：VuePress 提供了多种主题选择和强大的插件 API，这大大减少了工作量和编程的复杂性。你可以轻松添加搜索功能、自适应侧边栏、增强 Markdown 语法支持等功能，提升站点的功能性和用户体验。</li>
<li style="text-indent:0em"> <b>高度自定义</b>：VuePress 的高度自定义性使你能够根据需要定制主题模块、插件和 Vue 组件。这不仅允许你实现更复杂的功能，还能让你的个人网站展现个性化和独特性。</li> 
<li style="text-indent:0em"> <b>简便的部署</b>：由于 VuePress 生成的是静态文件，站点可以托管在任何静态文件托管服务上，如 GitHub Pages，从而简化了部署过程。</li> 
<li style="text-indent:0em"> <b>详尽的文档支持</b>：VuePress 提供了全面的官方文档，帮助你快速上手并解决可能遇到的问题，确保开发过程顺利进行。</li> 
</ul>
</p>

当然，VuePress 也有其不完美之处。尽管 VuePress 提供了对 Markdown 的增强支持，但其灵活性仍不及 LaTeX. 在处理稍微复杂的内容时，仍然需要回到 HTML 标签来实现更精细的布局和功能。