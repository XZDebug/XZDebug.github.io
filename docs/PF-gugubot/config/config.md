# config.yml

## QQ 相关设置

### admin_id
默认值: 无
- 管理员QQ号

### admin_group_id
默认值: 无
- 管理群群号 :: (可选)群内所有成员拥有管理权限

### group_id
默认值: 无
- qq群号 :: 要监听，转发的qq群号

### friend_is_admin
默认值: false
- 好友即是管理 :: 开放管理权限给机器人好友

### is_main_server
默认值: true
- 主服务器 :: 机器人群指令等功能开启

### server_name
默认值: ""
- 服务器名字 :: （可选）会在转发前面显示服务器名字

### custom_group_name
默认值: 无
- 自定义游戏内显示群名 :: （可选）不设置默认转发[群名称]
  群号: 定制的显示群名

## 指令开关
（可以通过机器人调整）

### bound_notice
默认值: true
- 是否进行绑定提示

## 指令相关

### ban_word
默认值: true
- 违禁词撤回

### execute_command
默认值: false
- 执行服务器指令

### group_admin
默认值: false
- 群指令 :: 只能被咱们的管理员执行

### ingame_key_word
默认值: true
- 游戏内关键词回复

### key_word
默认值: true
- 群内关键词回复

### list
默认值: true
- 在线查询

### mc
默认值: true
- 获取服务器内聊天内容

### name
默认值: true
- 机器人昵称

### qq
默认值: true
- 获取QQ聊天内容

### shenhe
默认值: false
- 辅助审核功能 :: 开发中

### start_command
默认值: true
- 开服指令

### whitelist
默认值: true
- 白名单功能

## 转发设置

### forward_other_bot
默认值: false
- 转发官方机器人回复

### keep_raw_image_link
默认值: false
- 转发图片链接

### mc_achievement
默认值: true
- 转发 MC 成就

### mc_death
默认值: true
- 转发 MC 死亡消息

### mc_to_qq
默认值: true
- 服务器往QQ群转发

### mc_to_qq_command
默认值: false
- 服务器指令转发

### player_notice
默认值: false
- 玩家上下线通知

### bot_notice
默认值: false
- 假人上下线通知

### qq_to_mc
默认值: true
- QQ群往服务器转发

### show_group_notice
默认值: false
- 上线显示最新群公告

## 命令前缀

### command_prefix
默认值: "#"
- 命令前缀

## 储存路径

### ban_word_dict
默认值: .//config//GUGUbot//ban_word.json
- 违禁词文件位置

### bound_image_path
默认值: .//config//GUGUbot//bound.jpg
- 绑定提示图文件位置

### customized_help_path
默认值: .//config//GUGUbot//help_msg.json
- 自定义帮助信息文件位置

### extra_style_path
默认值: ""
- 自定义风格文件

### font_path
默认值: ./config/GUGUbot/font/MicrosoftYaHei-01.ttf
- 字体路径文件位置

### key_word_dict
默认值: .//config//GUGUbot//key_word.json
- 关键词文件位置

### key_word_ingame_dict
默认值: .//config//GUGUbot//key_word_ingame.json
- 游戏内关键词文件位置

### shenhe_log
默认值: .//config//GUGUbot//shenhe_log.txt
- 审核日志文件位置

### shenheman
默认值: .//config//GUGUbot//shenheman.json
- 审核员文件位置

### start_command_dict
默认值: .//config//GUGUbot//start_commands.json
- 开服指令文件位置

### uuid_qqid
默认值: .//config//GUGUbot//uuid_qqid.json
- uuid 列表文件位置

### whitelist
默认值: .//server//whitelist.json
- 白名单文件位置

## 其他设置

### font_limit
默认值: 150
- 文字超长转图片 :: 默认大于150字转图片, 设置-1关闭

### max_bound
默认值: 1
- 绑定上限 :: 一个玩家可以绑定多少个名称

### random_template
默认值: true
- 随机发言模板 :: 转发使用随机发言模板，防止风控

### show_message_in_console
默认值: true
- 展示上报消息

### style
默认值: 正常
- 机器人回复风格 :: （可选） #风格 查看风格帮助

### style_cooldown
默认值: 0
- 风格切换冷却

### whitelist_add_with_bound
默认值: false
- 绑定ID自动绑定服务器白名单

### whitelist_remove_with_leave
默认值: true
- 退群时移除白名单