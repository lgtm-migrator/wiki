# DB2

## 第一章

### DB2 特点

1. Support **Internet**
1. Support **multimedia**
1. Strongly **parallel process** ability
1. Support **OO**

### DB2 提供的功能

1. 管理控制数据访问
1. 生成数据包
1. 事务管理
1. 保证数据完整性
1. 并行控制

### 客户端访问DB2的几种方式

1. DB2 客户机
1. DB2 连接
1. DB2 Net Data
1. DB2 典型连接
1. DB2 关系连接 - 连接访问DB2和Oracle中的数据
1. WebSphere 应用服务

### 关系扩展

扩展数据库并发展多媒体应用程序

1. 文本
1. 图像
1. 音频
1. 视频
1. XML
1. 网络引擎
1. 空间

## 第二章 

### 数据库 表空间 表

* 一个DB2实例可以定义多个数据库
* 一个数据库可以有多个表空间
* 表空间是数据库和表之间的逻辑层

### 创建数据库时的操作

1. 初始化新的数据库
1. 创建三个初始**表空间** SYSCATSPACE TEMPSPACE1 USERSPACE1
1. 设置数据库所需的所有**系统目录表**
1. 创建数据库**配置文件**和默认值
1. 分配数据库**恢复日志**
1. 将**实用程序绑定**到数据库

### 表空间类型

* simple
* segmented - 一个多个初始表，很多性能测试只能使用segment
* partitioned - 分区表
* LOB - 大对象数据
* [相关资料](https://www.ibm.com/developerworks/community/blogs/8b3f8d48-b83c-4bcb-a34e-2b9c8c13ab1f/entry/%E9%97%B2%E8%AF%B4DB2%E4%B9%8B%E8%A1%A8%E7%A9%BA%E9%97%B4?lang=en)

### SMS和DMS的区别

* SMS由操作系统管理，DMS由数据库管理器控制
* SMS可以按需分配，而DMS需要提前分配
* SMS更易管理
* DMS性能更高

## 第三章

### 列出详细访问DB2的几种方式

* DB2 CLI
* 配置助手
* TSO
* CAF
* CICS
* DB2I
* SPUFI

### DB2 CLI 连接

```
db2 catalog tcpip node testnode remote 123.123.123.13 server 448
db2 catalog db db-name as db-local-name at node testnode
db2 terminate
db2 connect to db-local-name user user-name using pass-word
```

### SPUFI

是一个DB2I的菜单选项

## 第四章

### 引入嵌入式SQL的原因？

SQL本身不是面向过程的，所以需要其他高级语言对它进行增强，以满足通用应用的需求，表现方式就是以其它语言为宿主语言，引入嵌入式SQL。

### 引入嵌入式SQL的步骤

1. 编写含有SQL的**源程序**
1. 使用DB2工具，**预编译源文件**
1. 使用宿主语言编译器，**编译**源文件
1. 链接相应的库，生成**执行文件**
1. 创建存取程序包
1. 运行应用程序

### 如何处理宿主变量中的NULL

使用smallint代替

### 使用游标？

通过反复Fetch，获取下一条数据，直到完成

```
EXEC SQL DECLARE C1 CURSOR FOR SELECT * FROM TABLE1 END-EXEC
EXEC SQL OPEN C1 END-EXEC
EXEC SQL FETCH C1 INTO :F1,:F2,:F3 END-EXEC
EXEC SQL CLOSE C1 END-EXEC
```

## 第五章

### JDBC Driver的类别

1. JDBC-ODBC 桥
1. 使用Native-API的JDBC Driver
1. JDBC-NET，纯Java Driver
1. 本地协议的Java Driver

### DB2提供的隔离级别

* 可重复读
* 读稳定性
* 游标稳定性
* 未落实读取

## 第七章

### 事务

一系列SQL操作，满足ACID

### ACID

* 原子性
* 一致性
* 隔离性
* 持续性

### 并发隐患

1. 脏读 - 其它事务过程中的数据
1. 不可重复读 - 原来数据丢失或改变
1. 幻象读 - 多次读取，读取到新数据
1. 丢失更新 

### 锁级别

* 表空间
* 表
* 行
* 索引

### 死锁检测

后台进程

如果检测到死锁，选择其中一个事务终止并回滚
