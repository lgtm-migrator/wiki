# 安装指南

Note: 一些快速安装脚本

## NodeJS

On Ubuntu/Debian

```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

这样安装的话Node和NPM都装好了

可以考虑使用中国镜像

```bash
npm config set registry https://registry.npm.taobao.org/
```

## PIP

Python包管理器

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