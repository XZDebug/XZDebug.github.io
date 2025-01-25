// import { NavbarOptions } from '@vuepress/theme-default'

export const sidebarZh = [
  {
    text: 'PF-gugubot',
    collapsible: true,
    children: [
      {
        text: '开始前的工作',
        collapsible: true,
        link: '/PF-gugubot/guide/before-started.md',
      },
      {
        text: '快速开始',
        collapsible: true,
        link: '/PF-gugubot/guide/getting-started.md',
      },
      {
        text: '高级配置',
        collapsible: true,
        children: [
          {
            text: '目录结构',
            collapsible: true,
            link: '/PF-gugubot/config/',
          },
          {
            text: 'Config.yml',
            collapsible: true,
            link: '/PF-gugubot/config/config.md',
          },
          {
            text: '关于自定义风格',
            collapsible: true,
            link: '/PF-gugubot/config/extra_style.md',
          },
        ],
      },
    ],
  },
  {
    text: 'PF-cq-api',
    collapsible: true,
    children: [
      {
        text: '安装',
        collapsible: true,
        link: '/PF-cq-api/guide/getting-started.md',
      },
      {
        text: '配置',
        collapsible: true,
        link: '/PF-cq-api/guide/config.md',
      },
    ],
  },
  {
    text: 'PF-webui',
    collapsible: true,
    children: [
      {
        text: '安装',
        collapsible: true,
        link: '/PF-webui/guide/getting-started.md',
      },
      {
        text: '配置',
        collapsible: true,
        link: '/PF-webui/guide/config.md',
      },
    ],
  },
  {
    text: '支持与反馈',
    link: '/support/',
  },
  {
    text: '关于文档',
    link: '/about/',
  },
];
