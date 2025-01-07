# 安装指南

## 开始前的工作
   安装以下内容：
 - [MCDReforged](https://mcdreforged.com/zh-CN)一个管理 Minecraft 服务器的工具，拥有自定义插件系统。完全无需修改 Minecraft 服务器本身
 - [NapCatQQ](https://napneko.github.io)或者[LLOneBot](https://llonebot.github.io)，或支持基于 CQ 码的正向 WebSocket QQ 机器人。
 - 亿点点耐心
## 安装插件

### MCDR 快捷安装
- 在已经开启的 MCDReforged MC 服务端输入以下指令可快捷安装插件及前置：
   ```
   !!MCDR plugin install gugubot
   ```
   ::: tip Tip
   什么？你还不知道什么是 MCDReforged ? [前往了解](https://mcdreforged.com/zh-CN)
   :::
### 手动下载安装
1. 下载插件依赖
   ```bash
   pip install pygame requests ruamel.yaml websocket-client "watchdog>=5.0.2" "pathlib>=1.0.1"
   ```
2. 前往插件 [MCDR 插件仓库](https://mcdreforged.com/zh-CN/plugins) 下载以下插件并放入根目录下的 `plugins` 文件夹:
   - [PF-gugubot](https://mcdreforged.com/zh-CN/plugin/gugubot/)
   - [PF-cq_qq_api](https://mcdreforged.com/zh-CN/plugin/cq_qq_api)
   - [PF-player_ip_logger](https://mcdreforged.com/zh-CN/plugin/player_ip_logger)
  
## 安装 QQBOT
   - 需要支持基于 CQ 码的正向 WebSocket QQ 机器人。
   - 推荐项目:[NapCatQQ](https://napneko.github.io)、[LLOneBot](https://llonebot.github.io)
   ::: warning 注意
   请开启 QQ 机器人的 WebSocket 服务端（正向 WS 连接），配置到未被占用的端口，并将上报格式设置为 String 类型！
   :::
