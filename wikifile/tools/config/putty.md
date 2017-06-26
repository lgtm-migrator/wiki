# Putty推荐配置

## 配置

Putty是一个Windows下，用于连接ssh服务器的应用

以下是我对于putty的推荐配置:

```bash
Window
  Appearance
    Font settings: Consolas,bold,14points
    Font quality: Default
Connection
  Sending of null packets to keep session active
    Seconds between keepalive: 3
  Data
    Login details
      Auto-login username: suntao
```

## Other

此外，选择ssh客户端的时候，推荐使用openssh客户端，配合mingw64 bash使用起来，和linux下体验差不多

使用git bash效果也是类似的