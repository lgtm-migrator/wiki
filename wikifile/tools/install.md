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

## ShellInaBox

host ssh client in web page

```bash
sudo apt-get install shellinabox
```

## shadowsocks-libev

install shadowsocks lib

```bash
sudo add-apt-repository ppa:max-c-lv/shadowsocks-libev
sudo apt-get update
sudo apt install shadowsocks-libev
# edit server/client config
sudo vim /etc/shadowsocks-libev/config.json
```

## golang

install golang 1.8

```bash
wget https://storage.googleapis.com/golang/go1.8.3.linux-amd64.tar.gz
tar -zxvf go1.8.3.linux-amd64.tar.gz
rm go1.8.3.linux-amd64.tar.gz
mv go .bin_go
mkdir .go_path
echo 'export GOROOT=$HOME/.bin_go' >> $HOME/.profile
echo 'export GOHOME=$HOME/.go_path' >> $HOME/.profile
echo 'export PATH=$PATH:$GOROOT/bin:$GOPATH/bin' >> $HOME/.profile
```