# 安装指南

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