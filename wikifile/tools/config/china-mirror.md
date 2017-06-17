# 使用中国镜像

Note: 在国内, 因为种种原因, 通过maven/npm/yarn/apt的下载速度很慢, 所以才有了镜像这一说法. 下面的配置是如何配置中国的镜像

## Maven

这里有一篇[文章](https://yq.aliyun.com/articles/46991), 详细的讲述了如何配置镜像

首先就是找到**Maven的安装路径**, 修改conf目录中的```settings.xml```, 将mirrors节点做如下修改

```xml
<mirrors>
   <mirror>
        <id>nexus-aliyun</id>
        <mirrorOf>*</mirrorOf>
        <name>Nexus aliyun</name>
        <url>http://maven.aliyun.com/nexus/content/groups/public</url>
    </mirror>
</mirrors>
```

## npm/yarn

npm/yarn作为前端必备工具, 在国内也是慢的要死

依旧是使用[Taobao的镜像](https://npm.taobao.org/), 运行如下命令即可

`For NPM`

```bash
npm config set registry https://registry.npm.taobao.org/
```

`For YARN`

```bash
yarn config set registry https://registry.npm.taobao.org/
```

## pypi

pip是python的包管理器，可惜通常情况下，下载速度都太慢了，可以换用ustc的镜像

*~/.pip/pip.conf*

```text
[global]
index-url = https://mirrors.ustc.edu.cn/pypi/web/simple
format = columns
```

## package manager

[mirrors.ustc.edu.cn](http://mirrors.ustc.edu.cn/), 是中国科技大学的镜像网站, 里面包含了很多linux发行版的镜像, 以及很多包管理器的镜像.

在[这个网址](http://mirrors.ustc.edu.cn/help/)可以看到如何配置各个包管理器的源

比较有用的

### Docker

`/etc/docker/daemon.json`

```json
{
  "registry-mirrors": ["https://mirrors.ustc.edu.cn/dockerhub/"]
}
```

重启docker即可生效

### ubuntu

以16.04为例

`/etc/apt/source.list`

```text
deb http://mirrors.ustc.edu.cn/ubuntu/ xenial main restricted universe multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ xenial main restricted universe multiverse

deb http://mirrors.ustc.edu.cn/ubuntu/ xenial-security main restricted universe multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ xenial-security main restricted universe multiverse

deb http://mirrors.ustc.edu.cn/ubuntu/ xenial-updates main restricted universe multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ xenial-updates main restricted universe multiverse

deb http://mirrors.ustc.edu.cn/ubuntu/ xenial-backports main restricted universe multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ xenial-backports main restricted universe multiverse

## Not recommended
# deb http://mirrors.ustc.edu.cn/ubuntu/ xenial-proposed main restricted universe multiverse
# deb-src http://mirrors.ustc.edu.cn/ubuntu/ xenial-proposed main restricted universe multiverse
```

使用[配置生成器](https://mirrors.ustc.edu.cn/repogen/)会更加方便