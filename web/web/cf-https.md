# 如何在Cloud Foundry上强制使用https

## CF

Cloud Foundry平台一般都提供http/https两种协议，但是某些时候我们只想使用https，这时候我们就可以通过cf提供的```x_forwarded_proto```来处理

## Flask

以Flask为例，在应用中加上如下语句即可

```python
@app.before_request
def before_request():
    if request.headers.get('x_forwarded_proto') != "https":
        return redirect(request.url.replace('http://', 'https://', 1), code=301)
```

## 原理

```x_forwarded_proto```是cf提供的http协议header，标准的http header是```X-Forwarded-Proto```，用于识别客户端发起请求时使用的协议。

上述的代码在请求之前先确认客户端协议，如果不是https就重定向。清楚原理之后，其它语言也就可以举一反三实现了