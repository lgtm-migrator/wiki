# ShadowSocks

shadowsocks是一个代理工具，用作安全代理

[相关的教程](https://github.com/shadowsocks/shadowsocks/wiki)在这里，各个平台的客户端都用

## 如何使用

安装客户端之后，将SS服务器的配置填进去即可

我偏向于，让SS客户端开启代理服务器，然后chrome使用swichy sharp插件，选择性的代理，这样我可以操作某一些指定的域名经过代理，某一些域名直接访问

使用Windows客户端，可以自动下载一个gfwlist，选择性使用ss代理

## 客户端及配置

各个系统可以到[这里](https://github.com/shadowsocks/shadowsocks/wiki/Ports-and-Clients)寻找相应的ss客户端

[Windows桌面客户端](https://download.fornever.org/shadowsocks.exe)下载，双击运行之后，配置运行即可，win10可以直接运行，win8等系统需要安装.net 4.5框架

[Android客户端下载](http://oss-theo.oss-cn-shenzhen.aliyuncs.com/download/shadowsocks--universal-4.6.1.apk)

[Windows Golang二进制客户端](https://oss-theo.oss-cn-shenzhen.aliyuncs.com/download/ss-go.zip)，不想安装.net可以尝试

[IOS客户端OpenWingy - 已失效](https://itunes.apple.com/cn/app/openwingy/id1294672758?mt=8)

[ShadowsocksR Desktop Client](https://github.com/erguotou520/electron-ssr)，这是一个通用的SSR客户端，面向所有桌面操作系统

---

香港Shadowsocks(低延迟), 复制连接后在右上角从剪贴板导入

```text
ss://cmM0LW1kNTpzc3Bhc3N3b3Jk@hk01.fornever.org:8443#hk01
```

或者手动配置

```json
{
    "server":"hk01.fornever.org",
    "server_port":8443,
    "password":"sspassword",
    "timeout":60,
    "method":"rc4-md5"
}
```

---

新加坡Shadowsocks

```json
{
    "server":"vps3.fornever.org",
    "server_port":8443,
    "password":"sspassword",
    "timeout":60,
    "method":"rc4-md5"
}
```

---

新加坡(ShadowSocksR服务器, up to 2MB/s), 复制后从剪贴板导入

```text
ssr://dnBzMy5mb3JuZXZlci5vcmc6NjAwMDE6b3JpZ2luOmNoYWNoYTIwOnBsYWluOk5qWTJOalkyTnpnLz9vYmZzcGFyYW09Jmdyb3VwPVUxTlNMblp3Y3pN
```

或者手动配置

```json
{
    "server":"vps3.fornever.org",
    "server_port":60001,
    "password":"66666678",
    "timeout":120,
    "method":"chacha20",
    "protocol":"origin",
    "protocol_param":"",
    "obfs":"plain",
    "obfs_param":"",
    "redirect":"",
    "dns_ipv6":false,
    "fast_open":false,
    "workers":1
}
```

## 服务器？

有客户端，自然有服务端

需要一个在国外的服务器，启动后运行服务端程序即可，[这里有ss的搭建教程](https://github.com/shadowsocks/shadowsocks/wiki/Shadowsocks-%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E)

### 内核参数优化

ADD lines to /etc/security/limits.conf

```text
* soft nofile 51200
* hard nofile 51200
```

CHANGE file /etc/sysctl.conf

```text
fs.file-max = 51200
net.core.rmem_max = 67108864
net.core.wmem_max = 67108864
net.core.netdev_max_backlog = 250000
net.core.somaxconn = 4096
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_tw_recycle = 0
net.ipv4.tcp_fin_timeout = 30
net.ipv4.tcp_keepalive_time = 1200
net.ipv4.ip_local_port_range = 10000 65000
net.ipv4.tcp_max_syn_backlog = 8192
net.ipv4.tcp_max_tw_buckets = 5000
net.ipv4.tcp_fastopen = 3
net.ipv4.tcp_rmem = 4096 87380 67108864
net.ipv4.tcp_wmem = 4096 65536 67108864
net.ipv4.tcp_mtu_probing = 1
net.ipv4.tcp_congestion_control = hybla
```

make it work

```bash
sysctl -p
```

## 基于SS的，SOCKS5代理 (该代理已失效，仅用作参考)

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

```text
https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt
```
