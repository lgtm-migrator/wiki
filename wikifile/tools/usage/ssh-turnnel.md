# SSH 隧道使用

![](https://res.cloudinary.com/drxgh9gqs/image/upload/v1507862394/how-does-ssh-protocol-work-920x272-SWKuhzNV_ydqzlk.png)

Note: SSH除了作为远程控制shell，自身提供相当强大的隧道功能

## SSH动态转发

使用ssh server作为代理服务器，ssh client作为socks代理服务器。可视作科学上网工具。

以下命令在本地8080端口开启了代理服务，使用ssh协议传输数据。

```bash
ssh -Nf -D 8080 sshuser@server.host
```

## SSH本地转发

将远程服务器可访问的资源映射到本地端口。可视作内网穿透。

如以下命令，将server.host服务器访问的127.0.0.1:3306端口(也就是服务器本机的3306端口)，映射到本地的3306端口。

因为MYSQL等为了增强安全性，可能bind localhost或者bind内网，通过一台堡垒机访问的话，可以使用ssh映射的方式。

```bash
ssh -Nf -L 3306:127.0.0.1:3306 sshuser@server.host
```

## SSH远程转发

将本地的资源映射到远程服务器。可类似为ngrok等。

如以下命令，将本地127.0.0.1:3306端口映射到server.host主机的3306端口，并bind 0.0.0.0，可被任意主机访问。

```bash
ssh -Nf -L 3306:0.0.0.0:3306 sshuser@server.host
```

## Nf

`-Nf`?，N表示没有命令执行，f代表后台运行。