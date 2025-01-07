// import { NavbarOptions } from '@vuepress/theme-default'

export const sidebarZh = [
  {
    text: 'PF-plugins',
    collapsible: true,
    children: [
      {
        text: 'PF-gugubot',
        collapsible: true,
        children: [
          {
            text: '安装',
            collapsible: true,
            link: '/PF-gugubot/guide/getting-started.md',
          },
          {
            text: '配置',
            collapsible: true,
            link: '/PF-gugubot/guide/config.md',
          },
        ],
      },
      {
        text: 'PF-cq-api',
        collapsible: true,
        children: [
          {
            text: '安装',
            collapsed: true,
            link: '/PF-cq-api/guide/getting-started.md',
          },
          {
            text: '配置',
            collapsed: true,
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
            link: '/PF-webui/guide/getting-started.md',
          },
          {
            text: '配置',
            link: '/PF-webui/guide/config.md',
          },
        ],
      },
      {
        text: 'PF-player_ip_logger',
        collapsible: true,
        children: [
          {
            text: '安装',
            link: '/PF-player_ip_logger/guide/getting-started.md',
          },
          {
            text: '配置',
            link: '/PF-player_ip_logger/guide/config.md',
          },
        ],
      },
    ],
  },
  {
    text: '支持与反馈',
    link: '/support/',
  },
  {
    text: '资源链接',
    collapsible: true,
    children: [
      {
        text: '官方文档',
        link: 'https://v2.vuepress.vuejs.org/zh/',
      },
      {
        text: 'GitHub 仓库',
        link: 'https://github.com/vuepress/vuepress-next',
      },
      {
        text: '社区交流',
        link: 'https://discord.com/invite/HBherRA',
      },
    ],
  },
];
