# 开始前的工作

## 准备运行环境
   需要以下内容：
   1. [Python](https://www.python.org/downloads/)(需要附带安装 pip )
   2. [MCDReforged](https://mcdreforged.com/zh-CN)一个管理 Minecraft 服务器的工具，拥有自定义插件系统。完全无需修改 Minecraft 服务器本身。
   3. 因为 FP-gugubot 需要接受和发送 QQ 消息，至少需要一个基于 OneBot 11 正向 WS 协议标准的 QQ 机器人。(推荐项目: [NapCatQQ](https://napneko.github.io)、[LLOneBot](https://llonebot.github.io))
   4. 亿点点耐心(加油，相信你可以的！)

## 安装相关内容

### MCDR 相关
   请参阅 MCDReforged 的[安装](https://docs.mcdreforged.com/zh-cn/latest/quick_start/install.html)章节。
### QQBOT 相关
   推荐项目:[NapCatQQ](https://napneko.github.io)、[LLOneBot](https://llonebot.github.io)  
   安装和配置 QQBOT 部分暂以 [NapCat.Win.无头绿色版](https://github.com/NapNeko/NapCatQQ/releases) 作为入门教程。
#### 安装 NapCat
   请参考官方文档的[NapCat.Win.绿色版本](https://napneko.github.io/guide/boot/Shell#napcat-win-%E7%BB%BF%E8%89%B2%E7%89%88%E6%9C%AC)进行安装,推荐使用[NapCat.Win.无头绿色版](https://github.com/NapNeko/NapCatQQ/releases)  
   2. 启动 NapCatQQ  
   解压好下载后的文件，点击 `napcat.bat` 启动 NapCat ,如果需要快速启动,请在登录一次后，编辑 NapCat 根目录下的 `napcat.quick.bat` 文件将 “10086” 替换为需要快速登录的 QQ 号:
   ```bat
   @echo off
   chcp 65001
   .\NapCatWinBootMain.exe 需要快速登录的 QQ 号
   pause
   ```
#### 开启 WS 服务端端口
   可参考官方教程的基础配置:[基础配置](https://napneko.icu/config/basic)  
   1. 打开 NapCat WebUi  
   找到 NapCat 按住 Ctrl 点击日志中的链接或者将链接复制到浏览器打开 NapCat WebUi:
   ```text
   xx-xx xx:xx:xx [info] [NapCat] [WebUi] WebUi Local Panel Url: http://127.0.0.1:6099/webui?token=xxxxxxxxxxx
   ```
   点击网页中的登录即可进入设置页面  

   2. 配置 WebSocket 服务端设置  
   点击 `网络配置`，然后点击右上角的 `添加配置`,输入名称，类型选择 `WebSocket 服务器`,勾选 `启用`,消息格式设置为 `String`,然后点击确定。
   ::: warning 注意
   如遇到端口冲突，请配置到**未被占用**的端口！
   :::
