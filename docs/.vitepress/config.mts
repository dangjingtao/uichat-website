import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "UI Chat",
  description: "ui-chat docs website",
  head: [["link", { rel: "icon", href: "/images/logoIcon-192.png" }]],
  themeConfig: {
    logo: "./images/logoIcon-192.png",

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "指北", link: "/guide/index" },
      { text: "API 参考", link: "/api-reference/index" },
    ],

    sidebar: [
      {
        text: "指南",
        items: [
          { text: "快速开始", link: "/guide/index" },
          // { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },

      {
        text: "API 参考",
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
