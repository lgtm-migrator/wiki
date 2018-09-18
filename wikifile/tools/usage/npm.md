# npm私有仓库

verdaccio是一个简易的npm registry，可以使用它

* 镜像npmjs.org模块
* 上传私有模块

若保证私有模块的安全，最好还是内网部署

[这是](https://npm.uk01.fornever.org/)一个部署在英国的verdaccio实例，延迟比较大

## 如何搭建

1. 使用npm全局安装`verdaccio`后，命令行启动
1. 使用`docker run -it -d --name verdaccio -p 34873:4873 verdaccio/verdaccio`, 然后访问localhost:34873即可

## 设定scope对应的registry

```bash
npm config set @csc:registry https://npm.uk01.fornever.org
```

这样，当使用npm install @csc开头的模块时，会首先检查该私有registry

## 添加用户

```bash
npm adduser --registry  https://npm.uk01.fornever.org
```

## 上传模块

模块的`pacakge.json`的name需要限定scope，例如`@csc/static-check`, private需要设为true

开发完成后，使用`npm publish`即可