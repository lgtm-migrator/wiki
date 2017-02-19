# shadowsocks -- ~~某科学的上网方法~~

shadowsocks是一个代理工具，用来翻墙

[相关的教程](https://github.com/shadowsocks/shadowsocks/wiki)在这里，各个平台的客户端都用，但是据我使用，Android客户端可能有些问题，装了手机会很卡

## 如何使用

安装客户端之后，将SS服务器的配置填进去即可

我偏向于，让SS客户端开启代理服务器，然后chrome使用swichy sharp插件，选择性的代理，这样我可以操作某一些指定的域名经过代理，某一些域名直接访问

## 服务器？

有客户端，自然有服务端，你可能需要一个在国外的服务器，运行服务端程序即可，[这里有ss的搭建教程](https://github.com/shadowsocks/shadowsocks/wiki/Shadowsocks-%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E)

当然，国外的服务器不是人人都有，也不是人人都会ssh什么的，能看到这里，算是有缘人，以下是我的ss服务器配置

```bash
host: 191.101.15.116
port: 443
encrypt: RC4-MD5
password: password
```

如果还是不会配置的话，Call me

## 其他

我的服务器每月只有500G流量，上网绝对足够了，看电影什么的就算了吧