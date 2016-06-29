# Caddy和反向代理

Caddy是一个用Go语言实现的Web服务器，亮点在于支持自动部署Let's Encrypt，也就是轻易从HTTP切换到HTTPS协议

## 安装

到[Caddy官网](https://caddyserver.com/download)下载二进制文件 

解压缩到caddy目录下

## 静态文件服务器

直接运行caddy.exe(或者./caddy)

当年目录为Web文件目录，端口为80(Linux下可能需要Root权限)

```
sudo ./caddy -port 80 -root .
```

这样caddy目录下的所有文件都可以被访问了

再将设定好的index.html放进caddy目录下，浏览器打开localhost就可以访问了

## 反向代理

在caddy目录下创建Caddyfile文件，写下反向代理配置（如果文件不与caddy二进制文件同目录，后面的-conf参数需要修改Caddyfile的路径）

```json
subname.example.com {
    proxy / localhost:PORT
}
```

将subname.example.com下的所有连接全部反向代理到本机的PORT端口

例如本网站，就是利用caddy反向代理wiki.xxxxx.xxx到了本地的3000端口。

然后运行

```
sudo ./caddy -conf 'Caddyfile'
```

可以发现caddy的配置比Apache2简单多了

## Let's Encrypt

在可能的情况下，caddy会将http自动切换到https

**因为证书是颁发给域名的，所以在本机测试(localhost/127.x.x.x)的时候，是无法切换到HTTPS的**

当部署到远程的服务器上时，就可以了

## 后台运行

linux下

```
sudo nohup ./caddy -conf 'Caddyfile' &
```

## 官方文档

此页面只是作抛砖引玉用，[官方文档](https://caddyserver.com/docs)在此处，Caddy有很多功能，包括支持PHP，喜欢新鲜的朋友不妨尝试一下