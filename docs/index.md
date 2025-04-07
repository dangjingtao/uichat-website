---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "UI Chat"
  # text: "一个由AI提供的slogan"
  tagline: 一个由AI提供的slogan
  image:
    src: /images/未标题-1.png
  alt: VitePress
  actions:
    - theme: brand
      text: 来试试
      link: /guide/index
    - theme: alt
      text: 尿解更多
      link: /api-reference/index



features:
  - title: 客户不友好
    details: 所有操作完全基于浏览器（没错又是系统恶霸Chrome），不能说零配置，因为零配置是给傻逼用的。（为哈子不继续营销之为负配置呢？）
  - title: 紧跟一线更新
    details: RAG / 工具链调用 / MCP 支持...拳打openAI 脚踢Claude... 营销号说的，你都有...low B 版。
  - title: 插件机制
    details: 所有插件基于一套简单的json协议，用户轻松创建属于自己的“智能体”（如果这么简单的东西也能被营销号们称为智能体）
    
---

<br>

<VPTeamMembers size="small" :members="members" />


<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/20751798?s=48&v=4',
    name: 'Tomz Dang',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/dangjingtao' },
    ]
  },
]
</script>

