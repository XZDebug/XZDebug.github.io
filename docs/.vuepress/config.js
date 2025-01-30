import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { navbarZh,sidebarZh, } from './configs/index.js'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'PF-plugins',
  description: 'PFingan服务器 MCDR的QQ机器人插件，集QQ群管理和白名单管理一体，添加许多功能。',

  theme: defaultTheme({
    logo: '/images/favicon.ico',
    navbar: navbarZh,
    sidebar: sidebarZh,
    sidebarDepth: 1,
  }),

    // 在 head 配置项中添加 favicon 图标
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }]  // 如果图标是 favicon.ico
  ],

  bundler: viteBundler(),

  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]
})
