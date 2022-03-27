(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{579:function(t,s,a){"use strict";a.r(s);var e=a(22),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"永久链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#永久链接"}},[t._v("#")]),t._v(" 永久链接")]),t._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("p",[t._v("在 1.x.x 版本之前，VuePress 会检索文档源目录下的所有 markdown 文件并按照文件的层次结构去定义页面链接。\n比如你有以下的文件结构：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├── package.json\n└── source\n    ├── _post\n    │   └── intro-vuepress.md\n    ├── index.md\n    └── tags.md\n")])])]),a("p",[t._v("那么你就会获得以下的可用页面：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/source/\n/source/tags.html\n/source/_post/intro-vuepress.html\n")])])]),a("p",[t._v("然而对于 blog 来说，我们希望文章的链接更加灵活，而不是局限于目录结构。VuePress 把这个功能称为永久链接 (permalinks) ，并从 "),a("code",[t._v("1.0.0")]),t._v(" 版本开始支持。")]),t._v(" "),a("p",[t._v("如果使用永久链接，那么实际的页面链接会像这样：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/source/\n/source/tags/\n/source/2018/4/1/intro-vuepress.html\n")])])]),a("p",[t._v("看起来我们已经看过了 blog 的阴暗面。那么让我们继续看下去。")]),t._v(" "),a("h2",{attrs:{id:"永久链接-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#永久链接-2"}},[t._v("#")]),t._v(" 永久链接")]),t._v(" "),a("p",[t._v("一个永久链接是一个旨在未来很多年里维持不变的 URL，由此产生一个发生链接失效（link rot"),a("sup",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Link_rot",target:"_blank",rel:"noopener noreferrer"}},[t._v("1"),a("OutboundLink")],1)]),t._v("）的可能性较小的超链接。VuePress 支持一种灵活的方式去生成固定链接，这种方式允许你使用各种模板变量。")]),t._v(" "),a("p",[t._v("默认的永久链接是"),a("code",[t._v("/:regular")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"配置永久链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置永久链接"}},[t._v("#")]),t._v(" 配置永久链接")]),t._v(" "),a("p",[t._v("你可以使用全局配置来向所有页面应用永久链接：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("permalink")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/:year/:month/:day/:slug"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("另外，你也可以只为单独一个页面去设置永久链接。这种方式比全局配置拥有更高的优先级。")]),t._v(" "),a("p",[t._v("📝 "),a("strong",[t._v("hello.md")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[t._v("title: Hello World\npermalink: /hello-world")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n\nHello!\n")])])]),a("h3",{attrs:{id:"模板变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板变量"}},[t._v("#")]),t._v(" 模板变量")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("变量")]),t._v(" "),a("th",[t._v("介绍")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v(":year")]),t._v(" "),a("td",[t._v("文章发布的年份 (4数字)")])]),t._v(" "),a("tr",[a("td",[t._v(":month")]),t._v(" "),a("td",[t._v("文章发布的月份 (2数字)")])]),t._v(" "),a("tr",[a("td",[t._v(":i_month")]),t._v(" "),a("td",[t._v("文章发布的月份 (前面不带0)")])]),t._v(" "),a("tr",[a("td",[t._v(":day")]),t._v(" "),a("td",[t._v("文章发布的日份 (2数字)")])]),t._v(" "),a("tr",[a("td",[t._v(":i_day")]),t._v(" "),a("td",[t._v("文章发布的日份 (前面不带0)")])]),t._v(" "),a("tr",[a("td",[t._v(":slug")]),t._v(" "),a("td",[t._v("蛞蝓化文件路径 (不带扩展名)")])]),t._v(" "),a("tr",[a("td",[t._v(":regular")]),t._v(" "),a("td",[t._v("VuePress默认的生成永久链接的方式，具体实现看 "),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/shared-utils/src/fileToPath.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1)])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);