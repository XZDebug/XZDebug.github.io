// import { NavbarOptions } from '@vuepress/theme-default'

export const navbarZh = [
  {
    text: '首页',
    link: '/',
  },
  {
    text: '插件列表',
    children: [
      {
        text: 'PF-gugubot',
        link: '/PF-gugubot/'
      },
      {
        text: 'PF-cq-api',
        link: '/PF-cq-api/',
      },
      {
        text: 'PF-webui',
        link: '/PF-webui/',
      },
    ],
  },
  {
    text: '常见问题',
    link: '/faq/',
  },
  {
    text: '支持与反馈',
    link: '/faq/',
  },
  {
    text: 'Github',
    children: [
      {
        text: 'PF-gugubot',
        link: 'https://github.com/LoosePrince/PF-GUGUBot'
      },
      {
        text: 'PF-cq-api',
        link: 'https://github.com/XueK66/PF-cq_qq_api',
      },
      {
        text: 'PF-webui',
        link: 'https://github.com/LoosePrince/PF-MCDR-WebUI',
      },
    ],
  },
]