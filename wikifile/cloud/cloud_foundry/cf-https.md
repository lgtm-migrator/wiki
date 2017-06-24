# 如何在Cloud Foundry上强制使用https

## CF

Cloud Foundry平台一般都提供http/https两种协议，但是某些时候我们只想使用https，这时候我们就可以通过cf提供的```X-Forwarded-Proto```来处理

## Flask

以Flask为例，在应用中加上如下语句即可

```python
@app.before_request
def before_request():
    if request.headers.get('X-Forwarded-Proto') != "https":
        return redirect(request.url.replace('http://', 'https://', 1), code=301)
```

## 原理

标准的http header```X-Forwarded-Proto``` 由反向代理添加，用于识别客户端发起请求时使用的协议

上述Python代码在请求之前先确认客户端协议，如果不是https就重定向。清楚原理之后，其它语言也就可以举一反三实现了

## Other

配合**Strict-Transport-Security**头，效果更好