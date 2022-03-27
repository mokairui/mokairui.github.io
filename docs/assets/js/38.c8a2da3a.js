(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{578:function(t,a,s){"use strict";s.r(a);var e=s(22),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"markdown-拓展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-拓展"}},[t._v("#")]),t._v(" Markdown 拓展")]),t._v(" "),s("h2",{attrs:{id:"header-anchors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#header-anchors"}},[t._v("#")]),t._v(" Header Anchors")]),t._v(" "),s("p",[t._v("所有的标题将会自动地应用 anchor 链接，anchor 的渲染可以通过 "),s("RouterLink",{attrs:{to:"/config/#markdown-anchor"}},[s("code",[t._v("markdown.anchor")])]),t._v(" 来配置。")],1),t._v(" "),s("h2",{attrs:{id:"链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),s("h3",{attrs:{id:"内部链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内部链接"}},[t._v("#")]),t._v(" 内部链接")]),t._v(" "),s("p",[t._v("网站内部的链接，将会被转换成 "),s("code",[t._v("<router-link>")]),t._v(" 用于 SPA 导航。同时，站内的每一个文件夹下的 "),s("code",[t._v("README.md")]),t._v(" 或者 "),s("code",[t._v("index.md")]),t._v(" 文件都会被自动编译为 "),s("code",[t._v("index.html")]),t._v("，对应的链接将被视为 "),s("code",[t._v("/")]),t._v("。")]),t._v(" "),s("p",[t._v("以如下的文件结构为例：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".\n├─ README.md\n├─ foo\n│  ├─ README.md\n│  ├─ one.md\n│  └─ two.md\n└─ bar\n   ├─ README.md\n   ├─ three.md\n   └─ four.md\n")])])]),s("p",[t._v("假设你现在在 "),s("code",[t._v("foo/one.md")]),t._v(" 中：")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("Home")]),t._v("]("),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("/")]),t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 跳转到根部的 README.md --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("foo")]),t._v("]("),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("/foo/")]),t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 跳转到 foo 文件夹的 index.html --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("foo heading")]),t._v("]("),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("./#heading")]),t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 跳转到 foo/index.html 的特定标题位置 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("bar - three")]),t._v("]("),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("../bar/three.md")]),t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 具体文件可以使用 .md 结尾（推荐） --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("bar - four")]),t._v("]("),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("../bar/four.html")]),t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 也可以用 .html --\x3e")]),t._v("\n")])])]),s("h3",{attrs:{id:"链接的重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接的重定向"}},[t._v("#")]),t._v(" 链接的重定向")]),t._v(" "),s("p",[t._v("VuePress 支持重定向到干净链接。如果一个链接 "),s("code",[t._v("/foo")]),t._v(" 找不到，VuePress 会自行寻找一个可用的 "),s("code",[t._v("/foo/")]),t._v(" 或 "),s("code",[t._v("/foo.html")]),t._v("。反过来，当 "),s("code",[t._v("/foo/")]),t._v(" 或 "),s("code",[t._v("/foo.html")]),t._v(" 中的一个找不到时，VuePress 也会尝试寻找另一个。借助这种特性，我们可以通过官方插件 "),s("a",{attrs:{href:"https://vuepress.github.io/plugins/clean-urls/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-clean-urls"),s("OutboundLink")],1),t._v(" 定制你的网站路径。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("无论是否使用了 permalink 和 clean-urls 插件，你的相对路径都应该依赖于当前的文件结构来定义。在上面的例子中，即使你将 "),s("code",[t._v("/foo/one.md")]),t._v(" 的路径设为了 "),s("code",[t._v("/foo/one/")]),t._v("，你依然应该通过 "),s("code",[t._v("./two.md")]),t._v(" 来访问 "),s("code",[t._v("/foo/two.md")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"page-suffix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page-suffix"}},[t._v("#")]),t._v(" Page Suffix")]),t._v(" "),s("p",[t._v("Pages and internal links get generated with the "),s("code",[t._v(".html")]),t._v(" suffix by default.")]),t._v(" "),s("p",[t._v("You can customize this by setting "),s("RouterLink",{attrs:{to:"/config/#markdown-pagesuffix"}},[t._v("config.markdown.pageSuffix")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"外部链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#外部链接"}},[t._v("#")]),t._v(" 外部链接")]),t._v(" "),s("p",[t._v("外部的链接将会被自动地设置为  "),s("code",[t._v('target="_blank" rel="noopener noreferrer"')]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuejs.org"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress on GitHub"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("你可以自定义通过配置 "),s("RouterLink",{attrs:{to:"/config/#markdown-externallinks"}},[t._v("config.markdown.externalLinks")]),t._v(" 来自定义外部链接的特性。")],1),t._v(" "),s("h2",{attrs:{id:"front-matter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#front-matter"}},[t._v("#")]),t._v(" Front Matter")]),t._v(" "),s("p",[t._v("VuePress 提供了对 "),s("a",{attrs:{href:"https://jekyllrb.com/docs/frontmatter/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YAML front matter"),s("OutboundLink")],1),t._v(" 开箱即用的支持:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Blogging Like a Hacker\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lang")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" en"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("US\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),s("p",[t._v("这些数据可以在当前 markdown 的正文，或者是任意的自定义或主题组件中使用。")]),t._v(" "),s("p",[t._v("想了解更多，请移步 "),s("RouterLink",{attrs:{to:"/guide/frontmatter.html"}},[t._v("Front Matter")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"github-风格的表格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-风格的表格"}},[t._v("#")]),t._v(" GitHub 风格的表格")]),t._v(" "),s("p",[s("strong",[t._v("输入")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n")])])]),s("p",[s("strong",[t._v("输出")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Tables")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Are")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("Cool")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("col 3 is")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("right-aligned")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("$1600")])]),t._v(" "),s("tr",[s("td",[t._v("col 2 is")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("centered")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("$12")])]),t._v(" "),s("tr",[s("td",[t._v("zebra stripes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("are neat")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("$1")])])])]),t._v(" "),s("h2",{attrs:{id:"emoji"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emoji"}},[t._v("#")]),t._v(" Emoji")]),t._v(" "),s("p",[s("strong",[t._v("输入")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(":tada: :100:\n")])])]),s("p",[s("strong",[t._v("输出")])]),t._v(" "),s("p",[t._v("🎉 💯")]),t._v(" "),s("p",[t._v("你可以在"),s("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个列表"),s("OutboundLink")],1),t._v("找到所有可用的 Emoji。")]),t._v(" "),s("h2",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),s("p",[s("strong",[t._v("输入")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[[toc]]\n")])])]),s("p",[s("strong",[t._v("输出")])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#header-anchors"}},[t._v("Header Anchors")])]),s("li",[s("a",{attrs:{href:"#链接"}},[t._v("链接")]),s("ul",[s("li",[s("a",{attrs:{href:"#内部链接"}},[t._v("内部链接")])]),s("li",[s("a",{attrs:{href:"#链接的重定向"}},[t._v("链接的重定向")])]),s("li",[s("a",{attrs:{href:"#page-suffix"}},[t._v("Page Suffix")])]),s("li",[s("a",{attrs:{href:"#外部链接"}},[t._v("外部链接")])])])]),s("li",[s("a",{attrs:{href:"#front-matter"}},[t._v("Front Matter")])]),s("li",[s("a",{attrs:{href:"#github-风格的表格"}},[t._v("GitHub 风格的表格")])]),s("li",[s("a",{attrs:{href:"#emoji"}},[t._v("Emoji")])]),s("li",[s("a",{attrs:{href:"#目录"}},[t._v("目录")])]),s("li",[s("a",{attrs:{href:"#自定义容器-badge-text-默认主题"}},[t._v("自定义容器 "),s("Badge",{attrs:{text:"默认主题"}})],1)]),s("li",[s("a",{attrs:{href:"#代码块中的语法高亮"}},[t._v("代码块中的语法高亮")])]),s("li",[s("a",{attrs:{href:"#代码块中的行高亮"}},[t._v("代码块中的行高亮")])])])]),s("p"),t._v(" "),s("p",[t._v("目录（Table of Contents）的渲染可以通过  "),s("RouterLink",{attrs:{to:"/config/#markdown-toc"}},[s("code",[t._v("markdown.toc")])]),t._v(" 选项来配置。")],1),t._v(" "),s("h2",{attrs:{id:"自定义容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义容器"}},[t._v("#")]),t._v(" 自定义容器 "),s("Badge",{attrs:{text:"默认主题"}})],1),t._v(" "),s("p",[s("strong",[t._v("输入")])]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("::: tip\n这是一个提示\n:::\n\n::: warning\n这是一个警告\n:::\n\n::: danger\n这是一个危险警告\n:::\n\n::: details\n这是一个详情块，在 IE / Edge 中不生效\n:::\n")])])]),s("p",[s("strong",[t._v("输出")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("这是一个提示")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("这是一个警告")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("这是一个危险警告")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("DETAILS")]),t._v(" "),s("p",[t._v("这是一个详情块，在 IE / Edge 中不生效")])]),t._v(" "),s("p",[t._v("你也可以自定义块中的标题：")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("::: danger STOP\n危险区域，禁止通行\n:::\n\n::: details 点击查看代码\n"),s("span",{pre:!0,attrs:{class:"token code"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")]),s("span",{pre:!0,attrs:{class:"token code-language"}},[t._v("js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token code-block language-js language-js"}},[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你好，VuePress！'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")])]),t._v("\n:::\n")])])]),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("STOP")]),t._v(" "),s("p",[t._v("危险区域，禁止通行")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("点击查看代码")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你好，VuePress！'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("p",[s("strong",[t._v("参考:")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://vuepress.github.io/plugins/container/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-container"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"代码块中的语法高亮"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码块中的语法高亮"}},[t._v("#")]),t._v(" 代码块中的语法高亮")]),t._v(" "),s("p",[t._v("VuePress 使用了 "),s("a",{attrs:{href:"https://prismjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prism"),s("OutboundLink")],1),t._v(" 来为 markdown 中的代码块实现语法高亮。Prism 支持大量的编程语言，你需要做的只是在代码块的开始倒勾中附加一个有效的语言别名：")]),t._v(" "),s("p",[s("strong",[t._v("输入")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("``` js\nexport default {\n  name: 'MyComponent',\n  // ...\n}\n```\n")])])]),s("p",[s("strong",[t._v("输出")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyComponent'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("输入")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('``` html\n<ul>\n  <li\n    v-for="todo in todos"\n    :key="todo.id"\n  >\n    {{ todo.text }}\n  </li>\n</ul>\n```\n')])])]),s("p",[s("strong",[t._v("输出")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("todo in todos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":key")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("todo.id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ todo.text }}\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("在 Prism 的网站上查看 "),s("a",{attrs:{href:"https://prismjs.com/#languages-list",target:"_blank",rel:"noopener noreferrer"}},[t._v("合法的语言列表"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"代码块中的行高亮"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码块中的行高亮"}},[t._v("#")]),t._v(" 代码块中的行高亮")]),t._v(" "),s("p",[s("strong",[t._v("输入")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("``` js {4}\nexport default {\n  data () {\n    return {\n      msg: 'Highlighted!'\n    }\n  }\n}\n```\n")])])]),s("p",[s("strong",[t._v("输出")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("msg")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Highlighted!'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("除了单行以外，你也可指定多行，行数区间，或是两者都指定。")]),t._v(" "),s("ul",[s("li",[t._v("行数区间: 例如 "),s("code",[t._v("{5-8}")]),t._v(", "),s("code",[t._v("{3-10}")]),t._v(", "),s("code",[t._v("{10-17}")])]),t._v(" "),s("li",[t._v("多个单行: 例如 "),s("code",[t._v("{4,7,9}")])]),t._v(" "),s("li",[t._v("行数区间与多个单行: 例如 "),s("code",[t._v("{4,7-13,16,23-27,40}")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);