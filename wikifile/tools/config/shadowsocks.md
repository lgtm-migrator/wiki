# ShadowSocks

shadowsocks是一个代理工具，用作安全代理

[相关的教程](https://github.com/shadowsocks/shadowsocks/wiki)在这里，各个平台的客户端都用

(2017年3月)，当前Android客户端可能有些问题，手机资源占用比较厉害

## 如何使用

安装客户端之后，将SS服务器的配置填进去即可

我偏向于，让SS客户端开启代理服务器，然后chrome使用swichy sharp插件，选择性的代理，这样我可以操作某一些指定的域名经过代理，某一些域名直接访问

使用Windows客户端，可以自动下载一个gfwlist，选择性使用ss代理

## 服务器？

有客户端，自然有服务端，你可能需要一个在国外的服务器，运行服务端程序即可，[这里有ss的搭建教程](https://github.com/shadowsocks/shadowsocks/wiki/Shadowsocks-%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E)

当然，国外的服务器不是人人都有，以下是我的ss服务器配置

日本

```text
host: vps3.fornever.org
port: 8443
encrypt: RC4-MD5
password: sspassword
```

新加坡(ShadowSocksR服务器, up to 2MB/s)

```text
ssr://dnBzMy5mb3JuZXZlci5vcmc6NjAwMDE6b3JpZ2luOmNoYWNoYTIwOnBsYWluOk5qWTJOalkyTnpnLz9vYmZzcGFyYW09Jmdyb3VwPVUxTlNMblp3Y3pN
```

日本延迟小一些，但是不能访问Google Scholar

## 客户端

各个系统可以到[这里](https://github.com/shadowsocks/shadowsocks/wiki/Ports-and-Clients)寻找相应的ss客户端

[Windows C#客户端](https://download.fornever.org/shadowsocks.exe)下载，双击运行之后，配置运行即可

[安卓客户端下载](https://oss-theo.oss-cn-shenzhen.aliyuncs.com/download/shadowsocks-nightly-4.2.5.apk)

Windows [Golang客户端](https://oss-theo.oss-cn-shenzhen.aliyuncs.com/download/ss-go.zip)

[IOS客户端OpenWingy](https://itunes.apple.com/cn/app/openwingy/id1294672758?mt=8)

[ShadowsocksR Client](https://github.com/erguotou520/electron-ssr)

```json
{
    "server":"vps4.fornever.org",
    "server_port":8388,
    "local_port":1080,
    "password":"sspassword",
    "method": "RC4-MD5",
    "timeout":600
}
```

## 基于SS的，SOCKS5代理

如果不想安装ShadowSocks客户端的话，可以在Chrome上安装SwitchyOmega，这样在浏览器中就可以使用代理了

然后配置一个代理到```ksyun.fornever.org:8888```，类型是```Socks5```

拓扑结构:

```text
pc (as socks5 client) -> socks5 server (as ss client) -> shadowsocks server
```

### 相关配置

run

```bash
/usr/bin/python  /usr/local/bin/sslocal -c /etc/shadowsocks.json -d restart
```

with config

```json
{
    "server":"sshost",
    "server_port":"ssport",
    "local_address":"0.0.0.0",
    "local_port":"expose port",
    "password":"sspassword",
    "timeout":30,
    "method":"rc4-md5",
    "fast_open":false,
    "workers":4
}
```

## gfwlist

用于过滤需要代理的服务器

```https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt```
