# 自定义风格

可以给机器人换一个性格支持自定义风格:
1. 在 `./config/GUGUbot/` 中创建 `extra_style.json`
2. 安装下面标准文件格式，进行自定义填写。
3. 在 `./config/GUGUbot/config.yml` 中设定 `extra_style.json` 的路径 `extra_style_path`  
4. 然后使用以下指令重载 PF-gugubot 开始切换叭!
``` text
!!MCDR plugin reload gugubot
```
## 标准文件
@[code](../files/extra_style.json)
