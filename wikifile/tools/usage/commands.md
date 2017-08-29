# 一些常用命令

Note: 一些常用到的命令, 作一个记录

## Linux

* `docker run -d --restart=always -p HOST_EXPOSE_PORT:CONTAINER_PORT image`

  运行docker容器

* `docker exec -u 0 *container_name* bash`

  以Root用户进入容器

* `echo 'Asia/Shanghai' > /etc/timezone`

  修改Linux的市区, 在某一些Java应用中比较重要, container中的时区一般是UTC

* `ssh-keygen -p -f ~/.ssh/id_dsa`

  重置私钥密码

## Windows

* ipconfig /flushdns

  刷新/清除本地DNS缓存, 主要用作远程DNS已经改变, 需要立即生效的时候