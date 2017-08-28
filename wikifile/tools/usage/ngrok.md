# NGROK

ngrok is a reverse proxy that creates a secure tunnel from a public endpoint to a locally running web service. ngrok captures and analyzes all traffic over the tunnel for later inspection and replay.

## install

download my compiled clients from [here](https://download.fornever.org/ngrok-clients/)

choose your system version, osx is `ngrok-darwin-amd64`, most linux is `ngrok-linux-amd64`.

and please download `.ngrok` too.

`self_signed.cer` is optional.

## use

expose your host 1323 port to global

```bash
ngrok-windows-amd64.exe -config=.ngrok 1323
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
ngrok -config=.ngrok -subdomain=test1323 1323
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

## other

不要用于production，请仅用于测试

服务器在日本，延迟在亚秒级

https是自签发证书，将`self_signed.cer`放置在系统的`收受信任的根颁发机构`，使浏览器信任