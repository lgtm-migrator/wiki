# 如何在Caddy中使用PHP

## prepare caddy

下载安装caddy server

通过linux包管理器安装php5-fpm及php5-mysql

安装mariadb或者mysql，并且配置好相应的root账户访问

## addtional prepare

caddy server中有相应的linux daemon配置文件，可以放入相应的文件夹中，简化服务的配置。

推荐在数据库中，创建一个新的zentao账户和zentao数据库，并授予zentao账户相关数据库的权限，以避免直接使用root账户。

## download the sources of Zentao

从[官网](http://www.zentao.net/download.html)下载开源版的源码包，[8.2.6版本点此下载](http://dl.cnezsoft.com/zentao/8.2.6/ZenTaoPMS.8.2.6.zip)

```bash
wget http://dl.cnezsoft.com/zentao/8.2.6/ZenTaoPMS.8.2.6.zip
unzip ZenTaoPMS.8.2.6.zip
```

使用unzip 或者tar解压之后，放入/var/www/路径中

授予程序读写权限(注意www-data是运行caddy的用户，如果运行的用户不是www-data，需要进行相应的修改)

```bash
sudo mv zentaopms /var/www/zentao
sudo chown www-data:www-data /var/www/zentao -R
```

## 配置 Caddyfile

视情况配置Caddyfile，如果是已经配置为服务的caddy，使用喜欢的编辑器打开/etc/caddy/Caddyfile，将以下行添加到其中。

```
:9936 {
  root /var/www/zentao/www
  fastcgi / /var/run/php5-fpm.sock php
}
```


## 安装zentao

进入http://ip:9936/install.php

输入数据库配置以及管理员账号即可

## 其他

caddy还有其它使用方法

可以监听其他端口，也可以配置Lets Encrypt 证书，可以参考这一份[文档](caddy.md)