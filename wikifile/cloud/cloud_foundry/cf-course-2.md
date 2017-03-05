# Cloud Foundry与Travis-CI的集成

## 准备工作

在开始之前，你需要有一个Github账号

以及，你需要将[travis-ci](https://github.com/travis-ci/travis.rb#installation)的cli配置完成，你可能需要先安装[Ruby](https://www.ruby-lang.org/en/downloads/)，然后再用gem安装travis cli

Note: CLI并不是必须的。如果用户熟悉travis-ci，可以手动创建yml，然后在travis-ci网站上启用该项目即可

```bash
$ gem install travis -v 1.8.6 --no-rdoc --no-ri
```

## 创建项目

在github上创建一个空的项目，clone下来并创建相应项目

本文档用nodejs项目做示例

---

在项目根目录下创建两个文件

* **package.json**

```json
{
  "name": "node-travis-cf-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"skip test\" && exit 0"
  }
}
```

Note: 针对nodejs，travis-ci的测试，在默认情况下会执行```npm test```
而cloud foundry在没有指定command的情况下，启动时会执行```npm start```

* **index.js**

```javascript
const http = require('http');


http.createServer(function (req, res) {
  res.end(JSON.stringify({ server: 'hello world' }))
}).listen(parseInt(process.env.PORT || 8080))
```

Note: 我们让server默认监听环境变量中的端口，是为了让Cloud Foundry可以将流量导向我们的Server

以上两个文件定义了一个简单的nodejs项目

## travis-ci配置

项目创建完毕之后，在根目录下运行```travis init node```

```bash
$ travis init node
detected repository as Soontao/node-travis-cf-demo
.travis.yml file created!
enabled
```

这样就生成了一个**.travis.yml**文件，记录着构建信息

Attention: 记得把**.travis.yml**中的node版本换成较新的版本

如

```
language: node_js
node_js:
- 6.9.2
```

然后再运行```travis setup cloudfoundry```,指定你的cf的user,org和space

```bash
$ travis setup cloudfoundry
Detected repository as Soontao/node-travis-cf-demo, is this correct? |yes|
Cloud Foundry username: mrls@live.cn
Cloud Foundry password: 
Cloud Foundry organization: mrls-org
Cloud Foundry space: development
Deploy only from Soontao/node-travis-cf-demo? |yes|
Encrypt Password? |yes|
```

可以看到yml添加了cloud foundry的配置信息

```
language: node_js
node_js:
- 6.9.2
deploy:
  provider: cloudfoundry
  api: https://api.run.pivotal.io
  username: mrls@live.cn
  password:
    secure: secured-pass
  organization: mrls-org
  space: development
  on:
    repo: Soontao/node-travis-cf-demo
```

## Cloud Foundry配置

创建如下**manifest.yml**

```
---
applications:
-
  # application name
  name: node-travis-cf-demo

  # random route, avoid can not request a route
  random-route: true

  # refer spec buildpack
  buildpack: nodejs_buildpack

  # memory limit
  memory: 100M

  # disk limit
  disk_quota: 80M
```

## Commit-Push-Build-Deploy

最后的文件目录下有如下文件

```
.gitignore
.travis.yml
index.js
LICENSE
manifest.yml
package.json
README.md
```

将git项目提交并push，进入[https://travis-ci.org/](https://travis-ci.org/)即可看到构建情况，构建成功之后，travis会自动```cf push```到pivotal上。

从travis-ci的日志中，我们可以看到，最终分配的url是[https://node-travis-cf-demo-unbullied-flagitiousness.cfapps.io/](https://node-travis-cf-demo-unbullied-flagitiousness.cfapps.io/)

根据这个url，我们就可以访问部署后的项目了
