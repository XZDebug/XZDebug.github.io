# 配置

## QQ 机器人


## PF-GUGUbot 
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
如果启动时提示缺少配置文件，请下载 `config_default.yml` 文件，将其重命名为 `config.yml`，并放入 `/config/GUGUbot/config.yml` 路径下。

## PF-cq_qq_api 
```json
{
    "host": "127.0.0.1", // 更改为 QQ 机器人地址 *
    "port": 8080, // 正向 WebSocket 端口 *
...
}
```

上述配置为必要项。如果需要更深入的自定义体验，请阅读完整的[配置文档](/guide/config.md)。