# Docker Compose Guide

Note: Docker Compose是一个docker工具，正如其名，它用于将多个docker container给组合起来。

Attention: 简化版本，详细版本正在构建中

## 首先

我们当然得把Dockerfile给编写好

## 然后

编写一个docker-compose.yml，这个yml文件定义了一个或多个container

## 启动

```bash
docker-compose up
```

系统会自动build image，然后run相应数量的container

## 停止

```bash
docker-compose down
```

关闭并删除相应container

## 其它

* 后台启动

  ```docker-compose up -d```

* 删除image

  ```docker-compose down --rmi local```
