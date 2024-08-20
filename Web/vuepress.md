---
title: VuePress介绍
sidebar: true
tags:
    - Web
    - highlight
category:
    - HTML
    - Web
---
# VuePress介绍
## 快速上手

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在开发一个不太熟悉的内容时，我认为最快的方法是找到一个相关的开源项目并运行它以查看效果。这个方法对于我来说是非常有效的。我使用的开源模板是[<span style="color: DodgerBlue;">template</span>](https://github.com/liyupi/codefather/tree/template). 关于这个模板的部分代码细节和操作过程，点击[<span style="color: DodgerBlue;">视频</span>](https://www.bilibili.com/video/BV1LQ4y1V79r/?spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=aae6d2f2986fbfc6933d738eccf70b4f)了解更多信息。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;基于 Vuepress 的个人网站项目一般具有以下的[<span style="color: DodgerBlue;">文件结构</span>](https://www.vuepress.cn/guide/directory-structure.html#%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1)：
``` md 
.                          # 根目录                                   
├── docs                    
│   ├── .vuepress          # 配置文件路径
│   │   ├── 
│   │   ├── config.js      # 主要的配置文件
│   │ 
│   ├── README.md          # 显示主页的 markdown 文件
│ 
└── package.json           # 包含已安装组件的版本信息、调试脚本的 json 文件
```

::: warning 注意
1. 模版[<span style="color: DodgerBlue;">template</span>](https://github.com/liyupi/codefather/tree/template)的文件内容省略掉了`docs/`, 该项目的文件结构从根目录`./`开始。

2. vuepress有1.x版本和2.x版本之分，这两者的脚本编写方式有所不同。模版[<span style="color: DodgerBlue;">template</span>](https://github.com/liyupi/codefather/tree/template)使用的是vuepress 1.x版本。另外，推荐使用vuepress 1.x版本，vuepress 2.x还处于 RC (Release Candidate) 阶段, 它的配置和API还不够稳定，详见[<span style="color: DodgerBlue;">更新日志</span>](https://github.com/vuepress/core/blob/main/CHANGELOG.md)。
:::

### 安装环境
- JavaScript运行环境：Node.js
- 管理 JavaScript 包的工具：npm (或yarn或pnpm)
- 代码编辑器：比如Visual Studio Code

### 本地编译
下载[<span style="color: DodgerBlue;">template</span>](https://github.com/liyupi/codefather/tree/template)到本地，在终端（macOS自带的终端或编辑器的终端）执行以下命令进行本地编译。
``` sh
npm run docs:dev
```
编译成功后，在本地浏览器打开`http://localhost:8080/`即可看到生成的网页。

### 部署到Github Pages
#### 1. 打包代码
将本地代码编译成 HTML, CSS, JavaScript 文件：在[<span style="color: DodgerBlue;">template</span>](https://github.com/liyupi/codefather/tree/template)所在目录下终端窗口执行以下命令
``` sh
npm run docs:build
```
编译成功后在`.vuepress/`路径下会生成一个新的`/dist/`路径。

#### 2. 推送到远程仓库
将`/dits/`文件夹发送到 Github 仓库。注意，在发送之前需要对`/dist/`路径下的`git`进行提交。

如果无法访问 GitHub 仓库，请检查 Github 是否添加了本地的 SSH 密钥。

::: details 点击：从 Github 添加本地的 SSH 密钥
1. <b>检查 SSH 密钥是否存在</b>
确保你在本地生成了 SSH 密钥对，并且公钥已添加到 GitHub 账户中。你可以检查本地是否存在 SSH 密钥：
``` bash
ls -al ~/.ssh
查看是否有类似 id_rsa 和 id_rsa.pub 的文件。id_rsa 是私钥，id_rsa.pub 是公钥。
```
2. <b>生成新的 SSH 密钥对（如果没有）</b>
如果没有 SSH 密钥对，可以生成一个新的：
``` bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
按照提示保存密钥文件，并记住密钥的路径和名称（通常是 ~/.ssh/id_rsa）。
```
3. <b>将公钥添加到 GitHub </b>
将生成的公钥 (id_rsa.pub) 添加到 GitHub：

复制公钥内容：
``` bash
cat ~/.ssh/id_rsa.pub
复制输出的内容。
```
在 GitHub 上添加公钥：

- 登录到 GitHub。
- 转到你的账户设置 (Settings)。
- 选择 SSH and GPG keys。
- 点击 New SSH key。
- 将复制的公钥粘贴到 Key 字段，添加一个描述，然后点击 Add SSH key。
:::

#### 3. 启动 Github Pages

::: details 点击：查看详细步骤
1. 访问仓库的设置：
- 在你仓库主页，点击上方的 Settings。

2. 启用 GitHub Pages：

- 在左侧菜单中，找到 Pages 选项
- 在 Branch 下拉菜单中，选择你要用来生成 GitHub Pages 的分支(<span style="color:red;" > 注意：该分支需与你从本地推送到 Github 仓库的分支相同</span>)
3. 保存更改：
- 设置完成后，点击 Save 按钮。
4. 自定义域名（可选）：
- 如果你有自定义域名，可以在 Custom domain 部分输入你的域名，并根据需要配置 DNS 设置。
5. 访问生成的页面
启用 GitHub Pages 后，GitHub 会自动生成并部署你的静态网站。通常几分钟内你就可以访问到你的网站，URL 的格式是：
- 用户或组织网站：https://username.github.io/
- 项目页面：https://username.github.io/repository-name/
:::

::: warning 注意
如果远程仓库不在主页，仓库名称为`repository-name`，那么需要在打包代码之前需要在本地`.vuepress/config.ts`文件中修改`base`参数：
``` ts
export default defineConfig({
  // 名称中的"/"不可省略
  base: "/repository-name/",
})
```
:::

#### 4. 一键部署脚本
以上执行的三个步骤可以下载一个`.sh`脚本中：
``` sh
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:ciaotomorrow/blog.git main:gh-pages

cd -
```
在当前路径的终端执行以下命令，即可完成一键部署：
``` sh
sh deploy.sh
```

### Github Action

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在[部署到Github Pages](#部署到github-pages)描述的部署方法中，我们将本地源文件编译成静态网页并存储到 `/dist/` 目录，然后将其推送到 GitHub 仓库，通常是一个相对简单的过程。然而，当文件较大、素材丰富时，每次在本地进行编译不仅耗时，还会占用额外的存储空间。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;幸运的是，GitHub 官方提供了一个强大的工具：GitHub Actions。借助它，我们可以将本地源文件上传到 GitHub 仓库的 `main` 分支，并自动将其编译为静态网页文件，部署到 `gh-pages` 分支（分支名称可以自定义）。这样，我们可以专注于内容创作，每次推送到远程仓库后，GitHub Actions 会自动处理后续工作。接下来，我们来看看如何使用 GitHub Actions 自动部署我们的博客。

#### 1. 生成Token
要部署 Actions，那么它就需要有能够操作我们仓库的权限，因此需要提前设置个人访问令牌（Github personal access）。
#### 2. 设置Secrets
在 Github 中存放源文件的仓库，进入 Settings, 在左侧边栏中找到 Secrets and variables, 点击 Actions, 新建一个 repository secret, 如下图所示：
<figure>
  <img src="/blog/cited-images/github_action1.png" alt="github_action." title="github_action." />
</figure>
将新建的 secret 命名为 ACCESS_TOKEN, 将上一步生成的 Token 复制到这里。

#### 3. 编写 Action
在 Github 中存放源文件的仓库，进入 Actions, 点击 New workflow, 进入 set up a workflow yourself, 编写`.yml`文件并存放到`main`分支。
``` yml
# name 可以自定义
name: Deploy GitHub Pages

# 触发条件：在 push 到 main/master 分支后，新的 Github 项目 应该都是 main，而之前的项目一般都是 master
on:
  push:
    branches:
      - main

# 任务
jobs:
  build-and-deploy:
    # 服务器环境：最新版 Ubuntu
    runs-on: ubuntu-latest
    steps:
      # 拉取代码
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false

      # 生成静态文件
      - name: Build
        run: npm install && npm run docs:build

      # 部署到 GitHub Pages
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }} # 也就是我们刚才生成的 secret
          BRANCH: gh-pages # 部署到 gh-pages 分支，因为 main 分支存放的一般是源码，而 gh-pages 分支则用来存放生成的静态文件
          FOLDER: .vuepress/dist # vuepress 生成的静态文件存放的地方
```
## 基本配置

我的模版的基本配置。

<code-group>
<code-block title="(根目录)./">
```{2}
.                          # 根目录                                   
├── .vuepress/             # 项目配置的核心部分，存放与 VuePress 配置、主题、插件、静态资源等相关的内容           
├── en/                    # 存放`英语`语言模式下的 Markdown 文件
├── zh/                    # 存放`中文`语言模式下的 Markdown 文件
├── node_modules/          # 存储项目依赖包
├── package-lock.json      # 记录了项目的完整依赖树，包括每个依赖项及其子依赖的确切版本、来源地址等信息
├── package.json           # 存放当前项目的依赖项、脚本、版本等信息
└── README.md              # 主页显示内容
```
</code-block>

<code-block title=".vuepress/">
```{7}
.vuepress                   
│   ├── components/         # 存放自定义的 Vue 组件，并且会被自动注册为全局组件
│   ├── public/             # 存放静态资源，这些资源会在构建时直接复制到生成的静态网站的根目录中
│   ├── sidebars/           # 存放侧边栏的结构，该目录下的文件需要导入到 sidebar_en.ts 或 sidebar_zh.ts 中
│   ├── styles/             # 存放样式相关的文件
│   ├── theme/              # 存放本地主题。
│   ├── config.ts           # 配置项目的核心文件
│   ├── extraSideBar.ts     # 配置额外侧边栏样式的文件，需要导入到 config.ts 中
│   ├── footer.ts           # 配置页脚样式的文件，需要导入到 config.ts 中
│   ├── navbar.ts           # 配置导航栏样式的文件，需要导入到 config.ts 中
│   ├── sidebar_en.ts       # 配置`英语`语言模式下侧边栏的文件，需要导入到 config.ts 中
└── ——— sidebar_zh.ts       # 配置`中文`语言模式下侧边栏的文件，需要导入到 config.ts 中
```
</code-block>

<code-block title=".vuepress/components/">
```
.vuepress/components
│   │   ├── Collapse.vue       # 折叠组件
│   │   ├── CurrentTime.vue    # 显示当前时间到组件
│   │   ├── LatexRenderer2.vue # 带有编号和索引 id 的 LaTeX 公式块组件
└── ——— ——— LatexRefByID2.vue  # 在文本中索引 LatexRenderer2.vue 公式的组件
```
</code-block>
</code-group>

::: tip 
需要在项目展示的图片、PDF文件、音视频文件都需要存放到`./.vuepress/public/`路径下，并且在该路径下文件的索引位置从根目录开始`./`.
:::

### 多语言模式

启用 VuePress 的多语言支持，首先需要在 `.vuepress/config.js` 中增加 `locales` 选项：
``` ts
import { defineConfig } from "vuepress/config";
export default defineConfig({
    ...
    locales: {
    '/en/': {
      lang: 'en-US', // 英文
      title: 'Stargaze',
      description: 'Description in English'
    },
    '/zh/': {
      lang: 'zh-CN', // 中文
      title: '望星空',
      description: '中文描述'
    }
  },
  ...
})
```

然后在<b>默认主题</b>设置里增加`locales`选项：
``` ts
import { defineConfig } from "vuepress/config";
export default defineConfig({
    ...
    themeConfig: {
        ...
        locales: {
        '/en/': {
            selectText: 'Languages',
            label: 'English',
            ariaLabel: 'Languages',
            editLinkText: 'Edit this page on GitHub',
            lastUpdated: 'Last Updated',
            nav: navbar_en,
            sidebar: sidebar_en,
        },
        '/zh/': {
            selectText: '选择语言',
            label: '简体中文',
            ariaLabel: '选择语言',
            editLinkText: '在 GitHub 上编辑此页',
            lastUpdated: '最后更新',
            nav: navbar_zh,
            sidebar: sidebar_zh,
        }
        }
    },
})
```
每个语言模式都可以拥有自己的<b>页脚</b>、<b>导航栏</b>和<b>侧边栏</b>等配置。如果根目录下没有默认的语言模式设置（如上所示），那么需要在显示主页的 `README.md` 中增加索引，跳转到指定的语言目录下：
``` ts
<script>
// ./README.md 
// 首页路径跳转到 ./en/ 目录
export default {
  mounted() {
    window.location.href = '/en/';
  }
}
</script>
```
### 修改主题样式

#### 修改主题的默认颜色

更改主题的默认颜色可以在文件`./.vuepress/styles/paletter.styl`文件中增加以下修改

``` style
$accentColor = black    //默认主题颜色
$textColor = black      //默认字体颜色
$borderColor = #eaecef  //默认边框颜色
$codeBgColor = #282c34  //默认背景颜色
```

#### 修改各级标题颜色

在文件`./.vuepress/styles/index.styl`文件中增加以下修改

``` styl
/* 修改 h1, h2, h3, h4, h5, h6 标题的颜色 */
.content__default h1 {
    color: #000000; /* 你想要的颜色 */
}
.content__default h2 {
    color: #000000;
}
.content__default h3 {
    color: #000000;
}
.content__default h4 {
    color: #000000;
}
.content__default h5 {
    color: #000000;
}
.content__default h6 {
    color: #000000;
}
```

#### 修改url的颜色

在文件`./.vuepress/styles/index.styl`文件中增加以下修改

``` styl
/* 修改url的颜色*/
a {
  color: #000000; /* 修改为你想要的颜色 */
}
```

#### 修改目录的颜色

在文件`./.vuepress/styles/index.styl`文件中增加以下修改

``` styl
/* 修改目录的颜色*/
.table-of-contents a {
  color: #000000; /* 修改为你想要的颜色 */
}
```

#### 修改索引项的悬停颜色

在文件`./.vuepress/styles/index.styl`文件中增加以下修改

``` styl
/* 修改索引项的悬停颜色 */
.table-of-contents a:hover {
  color: #000000; /* 修改为你想要的悬停颜色 */
}
```

#### 修改主题的字体大小

在文件`./.vuepress/styles/index.styl`文件中增加以下修改

``` styl
/* 各级标题字体大小 */
h1 {
  font-size: 2.25em; /* 36px */
}

h2 {
  font-size: 1.875em; /* 30px */
}

h3 {
  font-size: 1.5em; /* 24px */
}

h4 {
  font-size: 1.25em; /* 20px */
}

h5 {
  font-size: 1em; /* 16px */
}

h6 {
  font-size: 0.875em; /* 14px */
}

/* 正文字体大小 */
p {
  font-size: 1em; /* 16px */
}
```


### Vue 组件

#### LaTeX插件
LaTeX相关的插件有很多，包括`"markdown-it-katex"`, `"vuepress-plugin-latex"`, `"vuepress-plugin-mathjax"`等，这里我使用的是第一个。
安装该插件并在导入到该项目设置如下。
::: details 点击：查看`"markdown-it-katex"`插件安装步骤
1. 在当前项目路径下的终端窗口使用`npm`包管理工具安装插件
``` sh
npm install markdown-it-katex
```
2. 在 .vuepress/config.js 文件中配置如下：
``` ts
import { defineConfig } from "vuepress/config";
import markdownItKatex from "markdown-it-katex";

export default defineConfig({
    ...
    markdown: {
        ...
        extendMarkdown: md => {
        md.set({ breaks: true })
        // 使用 markdown-it-katex 插件
        md.use(markdownItKatex);
        },
    }
})
```
:::


#### LaTeX公式块编号

虽然插件`"markdown-it-katex"`支持在 Markdown 文件中使用 LaTeX 公式，但是 LeTeX 公式块无法支持编号和引用。因此需要自定义一个渲染 LaTeX 的 Vue 组件。这里我使用`katex`包所集成的渲染方法：

<code-group>
<code-block title="LatexRenderer2.vue">
``` ts
<template>
    <div :id="id" class="latex-container" :data-tag="tag">
      <div v-html="renderedLatex"></div>
    </div>
</template>
  
<script>
  import katex from 'katex';
  import 'katex/dist/katex.min.css';
  
  export default {
    name: 'LatexRenderer2',
    props: {
      latexCode: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        default: '',
      },
      tag: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        renderedLatex: '', // Store the rendered LaTeX here
      };
    },
    watch: {
      latexCode: 'updateLatex',
      tag: 'updateLatex',
    },
    methods: {
      renderLatex(code) {
        try {
          return katex.renderToString(code, {
            throwOnError: false,
            displayMode: true, // Use display mode for block-level equations
          });
        } catch (e) {
          console.error('Error rendering LaTeX:', e);
          return `<p>Error rendering LaTeX: ${e.message}</p>`;
        }
      },
      updateLatex() {
        this.renderedLatex = this.renderLatex(this.latexCode + "\\tag{" + this.tag + "}");
      },
    },
    mounted() {
      this.updateLatex(); // Initial render
    },
  };
  </script>
  
  <style scoped>
  .latex-container {
    margin: 1em 0;
  }
</style>
```
</code-block>

<code-block title="LatexRefByID2.vue">
``` ts
<template>
    <!-- <div v-html="getTagById(id)"></div> -->
    <p>{{ tagValue }}</p>
</template>
  
<script>  
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    data() {
    return {
      tagValue: '',
    };
    },
    mounted() {
        this.$nextTick(() => {
        const element = document.querySelector(`#${this.id}`);
        if (element) {
            this.tagValue = element.getAttribute('data-tag');
        } else {
            this.tagValue = 'No tag found';
        }
        });
  },
  };
</script>
```
</code-block>
</code-group>

在 Markdown 文件中的调用方式如下：

<code-group>
<code-block title="生成LaTeX公式块">
``` md
<!--
输入的参数： 
latexCode: LaTeX源码
id: 被引用的名称
tag: 公式块的序号或特定的名称
-->
<LatexRenderer2 latexCode="3 \int_0^1 x^2 \mathrm{d} x = 1"
id="integral-formula"
tag="1"/>
```
</code-block>

<code-block title="引用LaTeX公式块">
``` sh
# 使用 markdown 的 []() 格式引用
[<LatexRefByID2 id="integral-formula"/>](#integral-formula)
```
</code-block>
</code-group>

::: tip
该 Vue 组件目前只能手动为公式添加编号标记，并手动引用这些标记，无法像 LaTeX 那样实现公式的自动编号。之所以没有引入自动编号功能，主要有两个原因：
- 首先，在 Vue 组件中实现这一功能相对复杂，在 Markdown 中调用时会影响文本的简洁性，从而增加后期维护的难度；
- 其次，我的技术能力有限。

因此，目前采取的方案是在 Markdown 文件中实现简单的 LaTeX 文本。如果需要实现复杂、严谨且高度交叉引用的 LaTeX 文本，建议通过 LaTeX 源码编译成 PDF 文件，然后将其插入到 HTML 中。
:::

#### Markdown 文本加密
利用`@oak-tree-house/vuepress-plugin-encrypt`插件，参考博客：[<span style="color: DodgerBlue;">iMaeGoo</span>](https://www.imaegoo.com/2020/vuepress-encrypt/).

##### 1. 安装插件
使用`npm`安装完该插件后，在`.vuepress/config.ts`文件中更新配置：
``` ts
import { defineConfig } from "vuepress/config";
export default defineConfig({
  plugins: [
        ['@oak-tree-house/vuepress-plugin-encrypt', {
        contentTitle: 'Encrypted Content',
        unencryptedText: 'This is an encryptable content.',
        encryptedText: 'This part of content is encrypted. To view it, you need to enter the correct key in the input field below.',
        decryptedText: 'The encrypted content is successfully decrypted and shown below.',
        decryptButtonText: 'Decrypt',
        decryptFailText: 'Failed to decrypt!',
        unencryptedIcon: undefined,
        encryptedIcon: undefined,
        decryptedIcon: undefined
        }],
    ],
});
```

##### 2. 配置密码和加密、解密脚本

所有用于加密文本的密码在`./keys.json`文件配置：允许有多个`user`, 每个`user`允许拥有多个密码关键字（存放于`keys`下）。
``` json
{
  "user": "USER-NAME",
  "keys": {
    "passward": "1234"
  }
}
```

在`./package.json`文件中增加可执行脚本用于加密和解密：
``` json
{
  ...
  "scripts": {
    "decrypt": "encrypt decrypt --source-dir . --key-file ./keys.json --temp .temp-encrypt",
    "encrypt": "encrypt encrypt --source-dir . --key-file ./keys.json --temp .temp-encrypt",
  },
  ...
}
```
在`package.json`文件中，`--source-dir`指定需要加密或解密的文件所在路径，`.`表示根目录。`--key-file`指定放置密码的 json 文件。`--temp`指定用于存放加密和解密过程产生的临时文件路径，这里`.temp-encrypt`表示根目录下的`temp-encrypt`文件夹。如果使用`git`管理文件系统，可以将文件`keys.json`和路径`temp-encrypt`放入`.gitignore`中。

##### 3. 在 Markdown 文件中使用加密容器
在 Markdown 文件中需要加密的位置，定义一个加密容器，放置需要加密的内容，同时指定密码和用户名。
``` md
::: encrypt key=passward owners=username
The content is encrypted.
:::
```

##### 4. 执行加密/解密脚本
执行加密脚本，对有加密标记的 Markdown 文本位置进行加密：
``` sh
npm run encrypt
```
::: warning 注意
执行加密脚本后，有加密标记的文本将被加密成不可读密文，因此加密后的文本不能直接更新。
:::

执行解密脚本，对加密的文本进行解密：
``` sh
npm run decrypt
```

#### 选项卡容器

##### 1. 定义 vue 组件

在`.vuepress/components/`路径下定义 Vue 组件 `TabContainer.vue`如下：
``` vue
<template>
    <div>
      <div class="tab-titles">
        <button
          v-for="tab in tabs"
          :key="tab.name"
          :class="{ active: currentTab === tab.name }"
          @click="currentTab = tab.name"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="tab-content">
        <slot :name="currentTab"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentTab: this.tabs[0]?.name || '',
      };
    },
    props: {
      tabs: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .tab-titles {
    display: flex;
    cursor: pointer;
  }
  .tab-titles button {
    flex: 1;
    padding: 10px;
    border: none;
    background: #f0f0f0;
    cursor: pointer;
  }
  .tab-titles button.active {
    background: #ddd;
    font-weight: bold;
  }
  .tab-content {
    padding: 20px;
    border: 1px solid #ddd;
    border-top: none;
  }
  </style>
```

##### 2. 在 Markdown 文件调用组件

``` md
<TabContainer :tabs="[
  { name: 'tab1', label: 'Tab 1' },
  { name: 'tab2', label: 'Tab 2' },
  { name: 'tab3', label: 'Tab 3' }
]">
  <template v-slot:tab1>
    <h2>Content for Tab 1</h2>
    <p>This is the content for the first tab.</p>
  </template>
  <template v-slot:tab2>
    <h2>Content for Tab 2</h2>
    <p>This is the content for the second tab.</p>
  </template>
  <template v-slot:tab3>
    <h2>Content for Tab 3</h2>
    <p>This is the content for the third tab.</p>
  </template>
</TabContainer>
```
生成的选项卡容器如下所示：
<TabContainer :tabs="[
  { name: 'tab1', label: 'Tab 1' },
  { name: 'tab2', label: 'Tab 2' },
  { name: 'tab3', label: 'Tab 3' }
]">
  <template v-slot:tab1>
    <h2>Content for Tab 1</h2>
    <p>This is the content for the first tab.</p>
  </template>
  <template v-slot:tab2>
    <h2>Content for Tab 2</h2>
    <p>This is the content for the second tab.</p>
  </template>
  <template v-slot:tab3>
    <h2>Content for Tab 3</h2>
    <p>This is the content for the third tab.</p>
  </template>
  <template v-slot:tab3>
    <h2>Content for Tab 3</h2>
    <p>This is the content for the third tab.</p>
  </template>
</TabContainer>

::: warning 注意
`<TabContainer>` 容器中的内容需要用 HTML 语言编写，无法支持 Markdown 语言。
:::

<!-- <figure>
<figcaption>关于郑州的记忆 - 李志</figcaption>
  <audio controls>
  <source src="/songs/关于郑州的记忆.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
  </audio>
</figure> -->










<!-- 以下部分放在文档最后 -->
<!-- ######################################## -->
<!-- ######################################## -->

<!-- 增加编辑时间 -->
<div style="text-align: right;">
    编辑时间：
    <div>2024-08-13 20:00</div>
</div>