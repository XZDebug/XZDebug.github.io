# 快速安装

## 安装插件

### MCDR 快捷安装
- 在已经开启的 MCDReforged MC 服务端输入以下指令可快捷安装插件及前置：
   ```text
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

## 基础配置
   进行基础配置所要调整的文件位置如图:
   ```shell
   MCDR
   ├── config
   │   ├── GUGUbot
   │   │   ├── font
   │   │   ├── config.yml # PF-gugubot 配置文件
   │   │   ...
   │   ├── cq_qq_api
   │   │   ├── config.json # PF-cq-api 配置文件
   │   │   ...
   │   ...
   ├── plugins #插件文件位置
   │   ├── cq_qq_api.mcdr
   │   ├── GUGUbot.mcdr
   │   ...
   ...
   ```
   ### 配置 PF-gugubot
   找到 `/config/GUGUbot/config.yml` ，以以下格式填写 admin_id, group_id:
   ```yaml
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

   ### 配置 PF-cq_qq_api 
   找到 `/config/cq_qq_api/config.json`,填写相关选项。
   ```json
   {
    "host": "127.0.0.1", //更改为 QQ 机器人的 IP地址
    "port": 8080, //设置为 WebSocket 服务端端口
    "post_path": "", //对应数据上报的终点名(不知道用途不要动！)
    "token": "", //对应数据上报的token，用于加密信息
    "language": "zh", //语言包[zh/en](不知道用途不要动！)
   ...
}
   ```

   上述配置为必要项,如果需要更深入的自定义体验，请阅读完整的[Config.yml](../config/)