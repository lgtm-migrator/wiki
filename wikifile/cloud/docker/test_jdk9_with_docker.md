# 使用Docker来尝试Jshell

JShell是Java的REPL，由[JEP222](http://openjdk.java.net/jeps/222)提出，将在JDK9中被实现

## 确认Docker

示例所使用的Docker版本是1.12.3，理论上其它版本也能支持

先在terminal中输入```docker ps```，如果显示出运行的容器，那么docker已经安装正确了

Note: 如果你的docker只能在root权限下运行，请尝试将linux的docker group分配给你的用户，并重启shell

## 拉取openjdk9 image

在terminal输入以下命令

```bash
docker pull openjdk:9
```

Note: 如果pull image的速率太慢，或者根本无法和docker hub建立连接，请尝试使用国内的docker加速器，在[DaoCloud](https://www.daocloud.io/mirror#accelerator-doc)注册一个账号，然后使用它的加速器

## 启动一个容器

命令如下

```bash
docker run -it --rm openjdk:9 jshell
```

```docker run```命令是根据image启动一个container，```-it```是交互模式，```--rm```是自动销毁停止的container，openjdk:9指定了container基于的image，jshell指定了container启动时运行的命令

## 测试

简单运行一个Hello World

```bash
suntao@hostnamexx:~$ docker run -it --rm openjdk:9 jshell
Feb 03, 2017 3:29:32 AM java.util.prefs.FileSystemPreferences$1 run
INFO: Created user preferences directory.
|  Welcome to JShell -- Version 9-Debian
|  For an introduction type: /help intro

jshell> System.out.println("hello jshell");
hello jshell
```

## 删除image

当你玩儿够了之后，可以删除image

```bash
> docker rmi openjdk:9
Untagged: openjdk:9
Untagged: openjdk@sha256:a84088fbcb075deda5d13153bc3000d609a705a6ad7894593eacc5deaf55060e
Deleted: sha256:64a0088ee841a5a3b117e8b9a8156ae8e8022a19bb929fb16b99a59032f946d0
Deleted: sha256:8353d9e0a878af61fa7df79d3dab4ce40be4bd313149e21f188b89bd441eb8cb
Deleted: sha256:bb508ce67980b464cc956b0eecbc7512135128ef31cda885e9ab1aa6ede683e4
Deleted: sha256:c7740c43be4074dfad66000c02fcf9bf8ef33acc75be20fd379c64b473464b30
Deleted: sha256:c0288fcb728d526bccc668465b3f8a77307a7db854361729357722b9b5107cbf
Deleted: sha256:668b26d3526e9d6792e3b0e33c304f9bd258704029013072b69aa591a92cb8af
Deleted: sha256:0a976cda24e7438afe17e77b743a74392102ad319ceb184fdc1fbfd7089a5153
Deleted: sha256:56729f7b7db9056dceaff40a3ccb06f7f57217a5cbf05c5ed9cebd39ce57b6fc
```