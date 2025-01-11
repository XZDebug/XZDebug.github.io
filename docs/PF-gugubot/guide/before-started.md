# 开始前的工作

## 准备运行环境
   安装以下内容：
   1. [Python](https://www.python.org/downloads/)(需要附带安装 pip )
   2. [MCDReforged](https://mcdreforged.com/zh-CN)一个管理 Minecraft 服务器的工具，拥有自定义插件系统。完全无需修改 Minecraft 服务器本身。
   3. 支持基于 CQ 码的正向 WebSocket QQ 机器人。(如: [NapCatQQ](https://napneko.github.io)、[LLOneBot](https://llonebot.github.io))
   4. 亿点点耐心(加油，相信你可以的！)

## 安装相关内容

### 安装 MCDR
   请参阅 MCDReforged 的[安装](https://docs.mcdreforged.com/zh-cn/latest/quick_start/install.html)章节。
### 安装 QQBOT
   - 推荐项目:[NapCatQQ](https://napneko.github.io)、[LLOneBot](https://llonebot.github.io)(以下以 NapCatQQ 作为教程)
   1. 安装 NapCatQQ  
   参考官方文档的[安装方式](https://napneko.github.io/guide/install)进行安装,推荐使用[NapCat.Win.绿色版本](https://github.com/NapNeko/NapCatQQ/releases)  
   2. 启动 NapCatQQ  
   解压好下载后的文件，点击 `NapCatWinBootMain.exe` 启动 NapCat ,如果需要快速启动,请在 NapCat 根目录新建 `run.bat` 文件写入如下例子 :
   ```bat
   NapCatWinBootMain.exe 你想要快速登录的QQ号
   ```
   3. 开启正向 WS  
   
   ::: warning 注意
   请配置到**未被占用**的端口，并将上报格式设置为 String 类型！
   :::
