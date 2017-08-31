# Ngrok proxy

ngrok is a reverse proxy that creates a secure tunnel from a public endpoint to a locally running web service. ngrok captures and analyzes all traffic over the tunnel for later inspection and replay.

## install

download my compiled clients from [here](https://download.fornever.org/ngrok-clients/)

choose your system version, osx is `ngrok-darwin-amd64`, most linux is `ngrok-linux-amd64`.

or directly download `ngrok.windows.zip`

`self_signed.cer` is optional for self signed https cert.

## use

expose your host 1323 port to global

```bash
ngrok-windows-amd64.exe 1323
```

result

```bash
ngrok                                                                               (Ctrl+C to quit)

Tunnel Status                 online
Version                       1.7/1.7
Forwarding                    https://7bb68231.ngrok.vps3.fornever.org -> 127.0.0.1:1323
Forwarding                    http://7bb68231.ngrok.vps3.fornever.org -> 127.0.0.1:1323
Web Interface                 127.0.0.1:4040
# Conn                        0
Avg Conn Time                 0.00ms
```

open [http://localhost:4040](http://localhost:4040) to see requests trace.

## adavance

选择一个你喜欢的次级域名

```bash
ngrok-windows-amd64.exe -subdomain=test1323 1323
```

result

```bash
ngrok                                                                               (Ctrl+C to quit)

Tunnel Status                 online
Version                       1.7/1.7
Forwarding                    http://test1323.ngrok.vps3.fornever.org -> 127.0.0.1:1323
Forwarding                    https://test1323.ngrok.vps3.fornever.org -> 127.0.0.1:1323
Web Interface                 127.0.0.1:4040
# Conn                        0
Avg Conn Time                 0.00ms
```

## aditional

Server配置了on-demand获取证书，第一次访问浏览器可能会显示不安全，过一段时间拿到授信证书就好了

## simple way

download [ngrok.windows.zip](https://oss-theo.oss-cn-shenzhen.aliyuncs.com/download/ngrok.windows.zip), unzip and double click `run-ngrok.bat`.

## arch

`ngrokd` is deployed in docker container

```bash
vultr vps (infrastructure) -> caddy (http(s) reverse proxy) -> docker (application container) -> your host (localhost port)
```

## other

dont use it in production, only for test.

ngrok server is at Japan, rtt less than one second.