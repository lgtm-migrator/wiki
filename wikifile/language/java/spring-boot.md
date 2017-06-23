# Spring Boot的基础使用

## 创建项目

先访问 http://start.spring.io/ 创建一个Spring Boot项目 

在这里，我们选择如下配置

Group -- com.example
Artifact -- demo
Dependencies -- Web JPA h2

然后点击Generate Project，保存文件，解压缩该文件

## 导入初始项目到Eclipse

其实导入到Eclipse或者IDEA都差不多

这里用Eclipse做示例

点击左上的File菜单，选择import..

在弹出的窗口中选择Maven-Existing Maven Projects

Root Directory选择刚刚解压的目录

导入之后，慢慢等待构建，构建完毕之后，环境就搭好了

## 数据库配置

如果在pom中加入了嵌入式/内存数据库，那么就不用配置那么多

## 创建Rest服务

在一个类上添加一个@RestController

然后在一个方法上添加@RequestMapping映射即可

## 运行

省略

---

这份wiki被省略

示例可参看[这里](https://github.com/Soontao/dbtest)，导入maven项目就可以了，有什么问题请email我