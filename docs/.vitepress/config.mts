import { defineConfig } from "vitepress";

import { withMermaid } from "vitepress-plugin-mermaid"; // [!code ++]

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "UI Chat",
  description: "ui-chat docs website",
  head: [["link", { rel: "icon", href: "/images/logoIcon-192.png" }]],
  mermaid: {
    // 配置参考： https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults
  },
  // 可选地使用MermaidPluginConfig为插件本身设置额外的配置
  mermaidPlugin: {
    class: "mermaid my-class", // 为父容器设置额外的CSS类
  },
  themeConfig: {
    logo: "/images/logoIcon-192.png",

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "指北", link: "/guide/index" },
      { text: "API 参考", link: "/api-reference/index" },
      { text: "思考", link: "/blogs/index" },
    ],

    sidebar: [
      {
        text: "指南",
        items: [
          { text: "什么是UIChat?", link: "/guide/index" },
          { text: "快速开始", link: "/guide/quickStart" },

          // { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },

      {
        text: "开发参考",
        items: [
          { text: "配套生态", link: "/api-reference/index" },
          // { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/dangjingtao/ui-chat-view" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025 Tomz Dang",
    },
  },
});
