# 安装指南

Note: 一些快速安装脚本

## NodeJS

On Ubuntu/Debian

```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

这样安装的话Node和NPM都装好了

NPM可以考虑使用中国镜像

```bash
npm config set registry https://registry.npm.taobao.org/
```

## PIP

Python的包管理器，有时候系统会缺少

```bash
curl https://bootstrap.pypa.io/get-pip.py | sudo python
```

## Caddy

Nice Web Server powered by Golang

Works on Ubuntu/Debian

```bash
curl https://getcaddy.com | sudo bash
wget https://caddyserver.com/download/linux/amd64
tar -zxvf amd64 init/linux-sysvinit/caddy
sudo mv init/linux-sysvinit/caddy /etc/init.d/caddy
sudo chmod 755 /etc/init.d/caddy
sudo chown root:root /etc/init.d/caddy
sudo mkdir /etc/caddy
sudo mkdir /etc/ssl/caddy
sudo touch /etc/caddy/Caddyfile
sudo chown www-data:www-data /etc/ssl/caddy -R
rm -rf init amd64
```

## Docker

Popular container platform

Works on Ubuntu/Debian

```bash
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update
sudo apt install docker-ce
sudo usermod -aG docker $USER
```

Note: Log out and log back in so that your group membership is re-evaluated.

验证安装

```bash
docker run --rm hello-world
```

## MariaDB(Docker)

Run mariadb by docker, persist data in /data/mariadb, and expose 3306 port

```bash
docker run -d --restart=always --name mariadb -v /data/mariadb:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=changethispassword -p 3306:3306 -d mariadb:10.3
```

and phpmyadmin

```bash
docker run -d --restart=always --name phpmyadmin -P --link mariadb:db phpmyadmin/phpmyadmin
```

## RQLITE

The lightweight, distributed relational database built on SQLite.

RQLITE node server should open 36001 and 36002 ports(or your prefer ports, for outside), 36001 serve http layer, and 36002 serve tcp layer.

For detail, port 36002 is used for raft discovery service, and 36001 for common sql service

```bash
# download install (for linux amd64)
wget https://github.com/rqlite/rqlite/releases/download/v4.0.0/rqlited-v4.0.0-linux-amd64.tar.gz
tar xvfz rqlited-v4.0.0-linux-amd64.tar.gz
mv rqlited-v4.0.0-linux-amd64 rqlite
cd rqlite
```

*start.sh*

** make sure your pub_address could be access by outside server, and main_node_api is correct**

```bash
# start server
export PUB_ADDRESS=2.node.rqlite.fornever.org
export MAIN_NODE_API=ksyun.fornever.org:14001
export NODE_ID=2
./rqlited -http-addr 0.0.0.0:36001 -http-adv-addr $PUB_ADDRESS:36001 -raft-addr 0.0.0.0:36002 -raft-adv-addr=$PUB_ADDRESS:36002 -join $MAIN_NODE_API node.$NODE_ID
```

if you have pm2, it will be a nice process manager for **shell**

```bash
pm2 start start.sh --name "rqlite.node.2"
```