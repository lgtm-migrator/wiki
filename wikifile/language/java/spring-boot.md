# Spring Boot的基础使用

## 创建项目

先访问 [https://start.spring.io/](https://start.spring.io/) 创建一个Spring Boot项目

在这里，我们选择如下配置

Group -- com.example
Artifact -- demo
Dependencies -- Web JPA h2

然后点击Generate Project，保存文件，解压缩该文件

Note: 如果安装了STS, 那么直接在IDE就可以新建了

## 导入初始项目到Eclipse

其实导入到Eclipse或者IDEA都差不多

这里用Eclipse做示例

点击左上的File菜单，选择import..

在弹出的窗口中选择Maven-Existing Maven Projects

Root Directory选择刚刚解压的目录

导入之后，慢慢等待构建，构建完毕之后，环境就搭好了

## 数据库配置

如果在pom中加入了数据库Driver, 那么Spring Boot会自动识别, 并尝试连接

如果是内存数据库如Sqlite/H2那么直接就可以跑, 如果是mysql一类需要认证的数据库, 那么还有一些额外的配置

```yaml
spring:
  jpa:
    hibernate:
      ddl-auto: update
```

## 创建Rest服务

在一个类上添加一个@RestController

然后在一个方法上添加@RequestMapping映射即可

一个简单的例子

```java
package corp.sap.hana.spring.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Application {

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }

  @GetMapping("/")
  public String hello() {
    return "hello spring";
  }
}
```

## 运行

在项目路径下直接运行如下命令, Spring Boot项目就运行起来了

```bash
mvn spring-boot:run
```

---

这份wiki被省略

示例可参看[这里](https://github.com/Soontao/dbtest)，导入maven项目就可以了，有什么问题请email我