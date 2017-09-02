# Docker管理

Note: Check some docker related command from [here](../../tools/usage/commands.md)

一些Docker管理工具

## Shipyard

在Web中管理Docker容器，功能有限，但是对于个人用户来说十分简单方便

查看日志/重启/停止 这些是我常用的功能

用GUI启动Docker效率确实比较低，不太直观

可以直接用Docker部署，简单方便

![](https://res.cloudinary.com/digf90pwi/image/upload/v1504324424/2017-09-02_11-48-02_eb4x0z.gif)

## DaoCloud

国内一家云计算公司，主要提供Docker集群管理和CI/CD等服务，如果有大量Docker集群，而又不忌讳第三方管理的，可以考虑

实际体验也不错，而且还提供国内Docker Hub的镜像

服务器比较少的话，没什么意义

## cmd

push image to registry:

```bash
docker push theosun/testproject:latest
```

stop and remove container

```bash
docker rm -f container_name
```