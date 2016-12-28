# CICS 复习

## 第一章

### OLTP

联机事务处理系统

### ACID

* A 原子性，一项操作只能是完成/不完成中的一种状态
* C 一致性，一致的初状态，一致的结果状态
* I 孤立性，各操作并发执行，不会互相影响，就如同顺序执行一样
* D 持久性，事物的结果将持久的保存，并免于故障，可以向前恢复

### ISC

跨系统通信，Intersystem Communication

### Region 区域

类似于进程概念，拥有相应资源，有执行线程的地址空间

### 开发语言

可以使用其它语言编写CICS应用程序

### 命令格式

* 发送消息

```
EXEC CICS SEND FROM (MSG) LENGTH (80) END-EXEC
```

* 读取修改VSAM

```
EXEC CICS READ FILE ('FILE1') INTO (CUS-REC) RIDEFLD (CUS-NUM)
```

* 读取修改数据库

```
EXEC SQL SELECT COL1 INTO VAR1 FROM TABLE1 WHERE COL2 = 1 ENE-EXEC
```

* 处理异常事物

```
IF RESP = DFHRESP(NOTFND)
    DO SOMETHING
```

### 基本映像支持BMS

### CICS API主要服务

* CICS队列
  * TDQ 瞬时数据队列
  * TSQ 临时存储队列

* CICS事务启动
  * 终端输入
  * 通过TDQ触发
  * 在程序逻辑中，用START启动任务并传输相应数据

* CICS程序控制
  * RETURN 把控制权交回给上级程序
  * LINK 执行并等待子程序
  * XCTL 执行并返回CICS

### CICS程序的安装

1. 预编译，将相应语句转换成相应语言

2. 编译源程序

3. 放入装载库中

### 开发调试

1. CEDF，交互式调试

2. CECI，命令解释

3. CECS，语法检查

4. CEBR，队列浏览

### 系统管理

* 资源定义
  * 应用程序资源定义
    * 事务
    * 程序
    * 映像集
  * 文件和数据库定义
  * 队列定义
  * 终端定义
* 系统数据集
* 恢复工具
  * LUW
  * 资源顺序访问
  * 资源回滚
  * 根据日志向前恢复

### CICS重启动

* 冷启动 - 新安装/正常关闭
* 热启动 - 顺序完成任务
* 紧急启动 - 非正常关闭，会回滚LUW

### 安全性

* 访问CICS权限
* 事务权限
* 资源权限


## 第二章

### CICS管理功能列表

* 终端管理
* 安全管理
* 任务管理
* 程序管理
* 文件管理
* 队列管理
* 恢复管理
* 系统服务

### 概念

* 事务，CICS启动的单位，终端和数据库的一次交换
* 任务，事务的一次运行


## 第三章

### MAP常见属性

* PROTECTED，保护，不允许输入
* ASKIP，保护并跳过此区域
* NUM，只允许输入数字
* MDT/NOMDF，数据是否传送
* IC，光标指示物，用于放置默认的光标位置

### 物理映像和字符映像

* 物理映像，屏幕显示
* 字符映像，数据模型

### MAP输出

* 默认情况，输出合并的两种映像
* SEND MAP MAPSET DATAONLY 只输出数据映像
* SEND MAP MAPSET MAPONLY 只输出物理映像

```
EXEC CICS SEND MAP('MAPNAME') MAPSET('SETA') END-EXEC
```

### 接收MAP输入

```
EXEC CICS RECEIVE MAP('MAPNAME') MAPSET('SETA') RESP(RESP) END-EXEC
```

## 第五章

### VSAM

* ESDS 进入顺序数据集
* KSDS 键顺序数据集
* RRDS 相对记录数据集

#### CLUSTER

VSAM使用三个编目描述一个CLUSTER

* 一个CLUSTER项，把CLUSTER描述为一个部件
* 一个数据项描述CLUSTER的数据部件
* 一个索引项描述一个索引部件

#### CI - VSAM访问单位

* 逻辑记录
* 自由空间
* 控制信息

## 第六章

### LINK

被连接的程序在一个新的逻辑层次上运行

### XCTL

在同一个逻辑层次上运行

### START

启动一个新的任务
