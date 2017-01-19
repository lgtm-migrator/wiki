# Httpie 新手入门

调试web api的时候，时常需要一个工具用来发送请求

除了postman之外，httpie也是一个不错的选择

使用命令行，比图形工具快速很多

将以下api作为测试目标

```json
[{
    "type": "post",
    "url": "/api/echo",
    "params":"......"
},
{
    "type": "get",
    "url": "/api/echo",
}]
```

## 安装

需要安装Python，python2.7 或者pyhon3.x都可以

然后使用pip安装httpie

```
[sudo] pip instal httpie
```



## GET

```
http :3000/api/echo
```

或者指明get方法

```
http get :3000/api/echo
```

如果使用query string

```
http :3000/api/echo param1==value1
```

---

GET请求示例

```
> http :3000/api/echo
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 601
Content-Type: text/html; charset=utf-8
Date: Tue, 20 Sep 2016 06:59:27 GMT
ETag: W/"259-Mi/JCUuUp7NofnJWX1wSbA"
X-Powered-By: Express

<!DOCTYPE html>
<html>

<head>
    <title>echo</title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
    <link rel="stylesheet" href="/lib/semantic/dist/semantic.min.css">
    <script src="/lib/jquery/dist/jquery.min.js"></script>
    <script src="/lib/semantic/dist/semantic.min.js"></script>
</head>
......

```


## POST

```
http :3000/api/echo param1=value1 param2=value2
```

或者也可指明方法

```
http post :3000/api/echo param1=value1 param2=value2
```

---

POST请求示例

```
> http :3000/api/echo param1=value1 param2=value2
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 37
Content-Type: application/json; charset=utf-8
Date: Tue, 20 Sep 2016 07:02:28 GMT
ETag: W/"25-52E+BHh2qEdhVG2vX9nDtg"
X-Powered-By: Express

{
    "param1": "value1",
    "param2": "value2"
}
```

## OTHER

命令详解

```
> http [METHOD] URL [REQUEST_ITEM ...]
```

在url中如果没有指定主机名，那么host就是localhost

例如:3000/api/echo,请求的就是http://localhost:3000/api/echo


## 相关网站

[官方网站](https://httpie.org/)

[GItHub](https://github.com/jkbrzt/httpie)