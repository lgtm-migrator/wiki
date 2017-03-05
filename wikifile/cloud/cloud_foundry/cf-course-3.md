# Cloud Foundry进阶

## 配置运行时的版本

语言不同，buildpack不同，配置方式也不同，具体语言的话可以参看[pivotal的官方文档](http://docs.cloudfoundry.org/buildpacks/)

例如python配置版本，可以直接在项目下创建一个runtime.txt，在里面声明python版本

**runtime.txt**

```
python-3.5.2
```

而对于node来说，直接在package.json里面配置engines就可以了


**package.json**

```json
{
  "name": "",
  "version": "1.0.13",
  "description": "",
  "main": "",
  "scripts": {
    "start": "node ./server",
  },
  "engines": {
    "node": "6",
    "npm": "4"
  }
}
```

## 构建

有时候我们想要在上传到cf之前做一些工作，例如初始化数据库，编译前端页面等，这些很明显cf是无法完成的

这些工作可以交给我们的构建工具来做，例如travis-ci

```
addons:
  apt:
    packages:
      - npm
      - sqlite3
  install:
    - npm i -g bower
  script:
    - sqlite3 fblog.db < db.sql
    - bower i
```

## 日志

很多时候我们只是想简单查看一下最近日志，不想打开网页去看全部日志，这时候可以使用如下命令

```bash
cf logs <yourappname> --recent
```

## 配置多个应用

你可以在一个仓库里面创建多个服务，然后一个manifest.yml可以将它们都部署上去

使用yaml的列表形式，可以直接部署多个应用

注意path，配置了之后，那个path就是上传的根目录

**部署两个微服务的示例manifest.yml**

```
---
applications:
- name: add-compute-service
  buildpack: nodejs_buildpack
  path: compute-service
  memory: 80M
  random-route: true
  disk_quota: 200M
  env:
    C_SERVER_URL: https://username:password@discover-theo.cfapps.io
- name: portal
  buildpack: nodejs_buildpack
  path: portal-service
  random-route: true
  memory: 80M
  disk_quota: 200M
  env:
    C_SERVER_URL: https://username:password@discover-theo.cfapps.io
```