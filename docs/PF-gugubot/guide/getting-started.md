# 安装指南

## 安装插件

### MCDR 快捷安装
- 在已经开启的 MCDReforged MC 服务端输入以下指令可快捷安装插件及前置：
   ```
   !!MCDR plugin install gugubot
   ```
### 手动下载安装
1. 下载插件依赖
   ```bash
   pip install pygame requests ruamel.yaml websocket-client "watchdog>=5.0.2" "pathlib>=1.0.1"
   ```
2. 前往插件 [MCDR 插件仓库](https://mcdreforged.com/zh-CN/plugins) 下载以下插件并放入 MCDR 根目录下的 `plugins` 文件夹:
   - [PF-gugubot](https://mcdreforged.com/zh-CN/plugin/gugubot/)
   - [PF-cq_qq_api](https://mcdreforged.com/zh-CN/plugin/cq_qq_api)
   - [PF-player_ip_logger](https://mcdreforged.com/zh-CN/plugin/player_ip_logger)
   - [mg_events](https://mcdreforged.com/zh-CN/plugin/mg_events)

## 配置文件
   配置文件位置如图
   ```shell
MCDR
├── config
│   ├── GUGUbot
│   │   ├── font
│   │   ├── ban_word.json
│   │   ├── bound.jpg
│   │   ├── config.yml # PF-gugubot 配置文件
│   │   ├── GUGUbot.json
│   │   ├── help_msg.json
│   │   ├── key_word_ingame.json
│   │   ├── key_word.json
│   │   ├── shenheman.json
│   │   ├── start_commands.json
│   │   └── uuid_qqid.json
│   ├── cq_qq_api
│   │   ├── config.json # PF-cq-api 配置文件
│   │   └── config_lang.json
│   └── player_ip_logger
│       └── config.json
├── plugins #插件文件位置
│   ├── cq_qq_api.mcdr
│   ├── GUGUbot.mcdr
│   ...
├── logs #MCDR 日志
├── server
├── config.yml
└── permission.yml
   ```
   admin_id: # 管理员 QQ 号,请以相同格式填写！
   #正确示范：
   - 1234563
   #错误示范：
   -1234563
   1234563
   ...
   group_id: # QQ 群号,要监听,转发的 QQ 群号,格式同上。
   - 1234561
   ```
   如果启动时提示缺少配置文件，请下载 `config_default.yml` 文件，将其重命名为 `config.yml`，并放入 `/config/GUGUbot/config.yml` 路径下。

   ### PF-cq_qq_api 
   ```json
   {
       "host": "127.0.0.1", // 更改为 QQ 机器人地址 *
       "port": 8080, // 正向 WebSocket 端口 *
   }
   ```

   上述配置为必要项。如果需要更深入的自定义体验，请阅读完整的[配置文档](../config/config.md)。