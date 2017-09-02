# Resource

Note: 资源推荐页面。以下都是我自己用过，并且使用体验很好的资源，推荐给大家

## Web

### Caddy -- The HTTP/2 web server with automatic HTTPS 

基于Go集成Let's Encrypt的Web服务器

极易使用的Web服务器，简化的配置文件，轻松实现反向代理/HTTPS加密

提供linux守护进程文件

[这里](./tools/server/caddy.md)有一份教程

### BootCDN -- 国内的免费cdn服务

常用类库的免费CDN服务，支持https

### Gogs -- Go git service

快速搭建一个私有的git服务器

---

## Site

### 邪恶十六进制

安全与攻击网站，包括但不限于Web，物联网，Wifi攻击

文章更新比较慢

### DevDocs

一些文档，做成了渐进式应用PWA，可以离线查看，体验不错，在网络不好的时候也可以用

---

## Services

### Coding.net 国内免费私有Git仓库

学生/小团队可以尝试使用

### Host1Plus

海外的VPS服务提供商，只要2刀就可以提供一个256M的VPS，用于shadowsock足够了

最大的优点是支持支付宝

**稳定性比较低, SS不定时会断掉，但是很实惠**

### **Vultr**

之前提供2.5刀512M内存, 现在2.5刀的plan缺货, 但是5刀/1G的plan也比国内的便宜

就算不用来搭建VPN, 用作普通的服务器性能也很好

唯一的问题就是 -- 只支持Paypal和信用卡, 但是相信我, 这个服务商值得花费你一点时间去注册Paypal

**日本的服务器用来搭建ss的话，无法访问google scholar，如果要访问google scholar，推荐使用host1plus的LA机房**

### 金山大米云

99RMB = 2 core + 4G mem + 1M 带宽 + 公网IP

绝对是最具性价比的云

### Cloudinary

OSS对象存储，对免费账户有2GB的空间，并且对于多种语言有良好的SDK

除此之外，CD还可以对图片做一些处理，例如模糊/裁剪/压缩等等，非常好用

现在我的网页图片通常是放在CD上面

### Pivotal

Cloud Foundry服务提供商，注册就提供2G内存使用(受到限制)，可以部署非常多的小应用上去

唯一的弱点是，在大陆访问可能延迟有些高，但是用于CI&CD的测试是完全足够了

和travis-ci搭配使用，效果很好

如果试用账号赠送的费用消费完毕，就会停止服务

---

## Tools

一些好用的工具

### PotPlayer

合格的多媒体播放器

### PM2 -- NodeJS守护进程

NodeJS实现的守护进程，提供部署，检测，自动重启和日志功能。不止nodejs可以使用。

同时推荐使用[pm2-auto-pull](https://github.com/pm2-hive/pm2-auto-pull)工具，每隔一段时间自动pull，配合watch使用感觉良好

```bash
# Install
$ pm2 install pm2-auto-pull
## Configure auto pull interval
$ pm2 set pm2-auto-pull:interval 60000
```

### VS code -- 足够重量级的编辑器

用来调试nodejs很方便，各种代码提示

方便集成各种插件，乃至build，package都支持

Python/Java/Go都有相应的插件，并且效果都不错，当作轻量级的IDE都可以

### Httpie -- HTTPie is a command line HTTP client with an intuitive UI

命令行中快速调试Web API

```bash
http :80
```

### nvm-windwos -- windows下nodejs版本管理

Windwos下的node版本管理工具，有安装包，可用性好

win7-win10可用，win7好像有一些问题

### QuickLook -- Bring OS X “Quick Look” feature to Window

外观比起mac上的quicklook差远了，但是很实用，支持的文件也很多

### ShellInaBox -- run shell in your browser

使用http协议传送ssh终端，默认端口是4200

项目会生成自签发ssl证书，如果要自己反向代理，修改配置文件，添加一个参数```--disable-ssl```

```bash
sudo apt-get install shellinabox
```

修改配置

```bash
sudo vim /etc/default/shellinabox
```

### Navicat -- the best db management tool

这是我用过的最棒的数据库管理工具，非常全面和易用。唯一的缺点可能是比较贵

You could download it from [here](https://download.fornever.org/Navicat/)

### Docsify -- A magical documentation site generator

动态MD文档生成器, 对于单文件md文档支持比较好

对于多文件md, 配置略微繁琐

可用, 界面也不错

---

## Hardware

### 360云路由

我自己都不敢相信自己会推荐360的硬件，直到我买了一台

路由性能和界面不错，配置非常容易，信号也不错，总之确实是挺不错的，价廉物美

当然，如果要更高级的功能，我还是推荐你去TB买一个OpenWRT的路由

### 迅雷下载宝

用来当作nas是很好的，支持千兆网络，samba以及dlan，授权的话不支持多用户，作为家庭使用非常棒

价格也不高，150-200即可入手

---

## Videos

### 孤单又灿烂的神 - 鬼怪

真的好看, 金高银超可爱

### 花间提壶方大厨

超治愈超甜的古装剧，女主超可爱

---

## Games

### FF10/10-2

最终幻想10，经典, 已上架Steam

尤娜桑超美

以及最好听的BGM, [素敌](https://music.163.com/#/song?id=540418)

### Hand of fate -- 加入动作元素的地下城游戏

有些新意，可玩度不错

融合了卡牌, 地下城, 动作几个要素. 动作部分其实不是很好, 但也算及格了

### Hacknet -- 黑客模拟

模拟黑客入侵过程，敲键盘的感觉真棒, 已上架Steam

### 地下城堡2

简单的地下城游戏，可以玩儿很久

### 浅塘

一个很好玩儿的手机游戏, Android/IOS都有, 类似于华容道的玩儿法, 有一千多关, 足以打发地铁公交上的时间了

### Out There

太空探索生存类游戏, 作为一个从冬眠仓醒来的人, 努力回到地球. 好玩儿

真的很容易死啊, 到了目的地才发现这还是个N周目游戏.

IOS/Steam上架