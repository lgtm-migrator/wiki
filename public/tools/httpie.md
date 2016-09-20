# Httpie 新手入门

调试web api的时候，时常需要一个工具用来发送请求

除了postman之外，httpie也是一个不错的选择，而且使用命令行，比图形工具快乐很多

将以下api作为测试目标

```json
    {
    "type": "post",
    "url": "/api/echo",
    "title": "Echo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "value",
            "description": "<p>任意字段任意值</p>"
          }
        ]
      }
    },
  },
  {
    "type": "get",
    "url": "/api/echo",
    "title": "echo page",
  }
```

## 安装

```
[sudo] pip instal httpie
```
任意版本Python都可以

## GET

```
http :3000/api/echo
```
或者指明get方法
```
http get :3000/api/echo
```

Example
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

<body>
    <h1>Login-Echo</h1>


<form action="/api/echo" method="post">
    Username
    <br><input name="username" type="text"><br><br>
    Password
    <br><input type="password" name="password"><br><br>
    <input type="submit">
</form>

</body>

</html>


```


## POST

```
http :3000/api/echo param1=value1 param2=value2
```
或者也可指明方法

Example
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

```
> http [METHOD] URL [REQUEST_ITEM ...]
```

在url中如果没有指定主机名，那么host就是localhost

例如:3000/api/echo,访问的就是http://localhost:3000/api/echo
