# Cloud Foundry 快速入门

## What's that?

> Cloud Foundry是VMware推出的业界第一个开源PaaS云平台，它支持多种框架、语言、运行时环境、云平台及应用服务，使开发人员能够在几秒钟内进行应用程序的部署和扩展，无需担心任何基础架构的问题。

就我个人的使用情况而言，CF有几个非常好的特性

1. CF是非常好的部署环境，我在本地能打包运行的程序，100%能在CF上运行
1. 易于扩展，一个应用下下可以对应多个实例，并自动负载均衡，支持灰度更新
1. 健康检测
1. 易于和CI工具集成，例如travis-ci
1. 域名，不需要我关心，提供统一免费的二级域名
1. 极度易用的Cli工具，上传App只需要```cf push```即可

## Before All

Before Anything, Remember your web app, 必须监听系统环境变量制定的端口，伪代码如下

```java
Server server = new Server();
int port = os.getEnv("PORT");
server.listen(port);
```

**CF针对它指定的PORT进行路由**，以及进行健康检测，如果不对App进行配置的话，CF会认为App启动失败，并终止它

虽然可以配置CF不进行健康监测，**但如果App不监听CF指定的端口，CF也无法将流量导向App**，这样部署毫无意义

**另外，如果出现注册\登陆\上传异常，请使用代理服务器，例如ShadowSocks**

## Pivotal？

> Pivotal公司是由EMC和VMware联合成立的一家新公司

Pivotal提供CloudFoundry平台，并提供**为免费账户提供2GB内存使用**

所以，在开始我们的Course之前，先注册一个账户吧。

[点击这里注册Pivotal账户](https://pivotal.io/get-started)，注册完毕之后，到[这里登陆](https://console.run.pivotal.io/)

登陆进去之后，会显示一个CF的Dashboard，可能会让你Create a space or organization之类的，随便填就是了。

当org和space都创建完毕之后，就可以进入下一步了

## 安装Cloud Foundry Cli [(CF Cli)](https://github.com/cloudfoundry/cli)

Cloud Foundry官方的Command Line Client，去[github](https://github.com/cloudfoundry/cli/releases)上，选择相应版本下载即可

Windows下载Installer - Windows 32/64 bit

然后使用cmd/terminal测试一下

```
λ cf version
cf version 6.19.0+b29b4e0-2016-06-08
```

## 使用cli连接pivotal

**下列命令国内是可以使用的，如果cli总是提示error，换一个版本的cli，如果还不行，就得尝试挂代理了，比如```set http_proxy=http://127.0.0.1:1080```之类的**

使用```cf api```指定api地址

```
λ cf api api.run.pivotal.io
Setting api endpoint to api.run.pivotal.io...
OK


API endpoint:   https://api.run.pivotal.io (API version: 2.69.0)
Not logged in. Use 'cf login' to log in.

```

然后使用```cf login```登录

因为我有两个space，只有一个space登录的话不会这么长

```
λ cf login
API endpoint: https://api.run.pivotal.io

Email> myemail@emailserver.cn

Password>
Authenticating...
OK

Targeted org mrls-org

Select a space (or press enter to skip):
1. development
2. spring-cloud

Space> development
Targeted space development


Cloud Foundry API version 2.69.0 requires CLI version 6.22.0.  You are currently on version 6.19.0+b29b4e0. To upgrade your CLI, please visit: https://github.com/cloudfoundry/cli#downloads


API endpoint:   https://api.run.pivotal.io (API version: 2.69.0)
User:           mrls@live.cn
Org:            mrls-org
Space:          development
```

登陆成功之后可以执行一次```cf apps```，以检测自己是否登陆成功了

## 创建一个测试app

我们创建一个spring boot应用

首先，进入[spring initializr](https://start.spring.io/)，**在右边Dependencies输入并选择Web**，(其它比如group和artifact不建议更改，如果更改的话，后面的package和路径需要小心)

<br>
<p align="center">
    <img src="../img/springbootweb.png" />
</p>
<br>

然后点下面的generate project

将下载下来的压缩包解压，然后修改其中的DemoApplication.java

<br>
<p align="center">
    <img src="../img/springdemotree.png" />
</p>
<br>

建议直接复制代码，这个App在'/'路径下映射了一个方法，返回一个json字符串

```java
package com.example;

import java.util.HashMap;
import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController

public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@GetMapping("/")
	public Map<String, String> home() {
		return new HashMap<String, String>() {
			{
				put("hello", "cloud foundry");
			}
		};
	}

}
```

然后在项目根目录下（有src文件夹），打开cmd，输入

```
mvnw.cmd package
```

如果构建成功(如下图)，就可以开始准备上传了

<br>
<p align="center">
    <img src="../img/mvnbuildsuccess.png" />
</p>
<br>


## manifest.yml - 上传配置

manifest.yml记录着一个cf app的元信息

同样，在项目根路径下创建一个名为```manifest.yml```的文件，包含如下内容

```
---
applications:
-   name: spring-boot-demo 
    # app的名字，使用cf apps时会显示出来

    random-route: true 
    # 使用随机的路由(URL)。
    # 默认情况cf会申请以name为开头的url，但是url是唯一的，如果多个人做这个教程的话，会因为url申请不下来而导致失败
    # 使用随机的后缀以区分不同的实验者

    memory: 400M
    # 内存限制，简单的Spring Boot内存占用在300M左右

    path: target/demo-0.0.1-SNAPSHOT.jar
    # maven构建的jar包路径，如果版本和名字不一样，需要修改

    buildpack: java_buildpack
    # 使用java构建包，主要是包含一个java环境
```

## cf push - 打包上传

使用```cf push```命令上传

```bash
> cf push
Using manifest file \home\xxx\demo\manifest.yml

Creating app spring-boot-demo in org mrls-org / space development as mrls@live.cn...
OK

Creating route spring-boot-demo-unplumed-bn.cfapps.io...
OK

Binding spring-boot-demo-unplumed-bn.cfapps.io to spring-boot-demo...
OK

Uploading spring-boot-demo...
Uploading app files from: C:\Users\xxxxxx\AppData\Local\Temp\unzipped-app245412799
Uploading 457.5K, 88 files
Done uploading
OK

Starting app spring-boot-demo in org mrls-org / space development as mrls@live.cn...
Downloading java_buildpack...
Downloaded java_buildpack
Creating container

# 这里跳过了一些log

0 of 1 instances running, 1 starting
1 of 1 instances running

App started


OK

App spring-boot-demo was started using this command `CALCULATED_MEMORY=$($PWD/.java-buildpack/open_jdk_jre/bin/java-buildpack-memory-calculator-2.0.2_RELEASE -memorySizes=metaspace:64m..,stack:228k.. -memoryWeights=heap:65,metaspace:10,native:15,stack:10 -memoryInitials=heap:100%,metaspace:100% -stackThreads=300 -totMemory=$MEMORY_LIMIT) && JAVA_OPTS="-Djava.io.tmpdir=$TMPDIR -XX:OnOutOfMemoryError=$PWD/.java-buildpack/open_jdk_jre/bin/killjava.sh $CALCULATED_MEMORY -Djavax.net.ssl.trustStore=$PWD/.java-buildpack/container_certificate_trust_store/truststore.jks -Djavax.net.ssl.trustStorePassword=java-buildpack-trust-store-password" && SERVER_PORT=$PORT eval exec $PWD/.java-buildpack/open_jdk_jre/bin/java $JAVA_OPTS -cp $PWD/. org.springframework.boot.loader.JarLauncher`

Showing health and status for app spring-boot-demo in org mrls-org / space development as mrls@live.cn...
OK

requested state: started
instances: 1/1
usage: 400M x 1 instances
urls: spring-boot-demo-unplumed-bn.cfapps.io
last uploaded: Thu Jan 26 07:40:31 UTC 2017
stack: unknown
buildpack: java_buildpack

     state     since                    cpu     memory           disk           details
#0   running   2017-01-26 03:41:18 PM   36.1%   227.5M of 400M   136.8M of 1G
```

你可能会注意到一行信息
```
Binding spring-boot-demo-unplumed-bn.cfapps.io to spring-boot-demo...
```

没错，```spring-boot-demo-unplumed-bn.cfapps.io```就是这个app的域名(**你的app的域名一定和这个不一样，请自己查看log并获取**)，你可以直接打开浏览器访问

```json
{"hello":"cloud foundry"}
```

## 其它

以上差不多就是整个上传流程了，除了java之外，cf还支持所有主流的语言，包括node，go，python等

cf也可以和一些CI服务器集成，比如这个wiki就是放在github上，使用travis-ci build，然后打包上传到CF

以下是一些你可能需要的命令

* 使用```cf apps```查看当前space的所有应用信息，包括它们的url
* 使用```cf app spring-boot-demo```查看这个应用的详细信息
* 使用```cf delete spring-boot-demo```删除刚刚建立的应用

## 参考项目结构

```
demo
    │   .classpath
    │   .gitignore
    │   .project
    │   manifest.yml
    │   mvnw
    │   mvnw.cmd
    │   pom.xml
    │
    ├───.mvn
    │   └───wrapper
    │           maven-wrapper.jar
    │           maven-wrapper.properties
    │
    ├───.settings
    │       org.eclipse.core.resources.prefs
    │       org.eclipse.jdt.core.prefs
    │       org.eclipse.m2e.core.prefs
    │
    ├───src
    │   ├───main
    │   │   ├───java
    │   │   │   └───com
    │   │   │       └───example
    │   │   │               DemoApplication.java
    │   │   │
    │   │   └───resources
    │   │       │   application.properties
    │   │       │
    │   │       ├───static
    │   │       └───templates
    │   └───test
    │       └───java
    │           └───com
    │               └───example
    │                       DemoApplicationTests.java
    │
    └───target
        │   demo-0.0.1-SNAPSHOT.jar
        │   demo-0.0.1-SNAPSHOT.jar.original
        │
        ├───classes
        │   │   application.properties
        │   │
        │   └───com
        │       └───example
        │               DemoApplication$1.class
        │               DemoApplication.class
        │
        ├───generated-sources
        │   └───annotations
        ├───generated-test-sources
        │   └───test-annotations
        ├───maven-archiver
        │       pom.properties
        │
        ├───maven-status
        │   └───maven-compiler-plugin
        │       ├───compile
        │       │   └───default-compile
        │       │           createdFiles.lst
        │       │           inputFiles.lst
        │       │
        │       └───testCompile
        │           └───default-testCompile
        │                   createdFiles.lst
        │                   inputFiles.lst
        │
        ├───surefire-reports
        │       com.example.DemoApplicationTests.txt
        │       TEST-com.example.DemoApplicationTests.xml
        │
        └───test-classes
            └───com
                └───example
                        DemoApplicationTests.class

```