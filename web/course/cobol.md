COBOL
=======
# COBOL 的特点
* 自文档
* 简单
* 可移植
* 便于维护
* 比较繁琐

# COBOL 书写规范
* **前六列**是保留来编制顺序号用的
* **第七列**用“-”来表示续行或者“*”  表示注释
* **程序**文本**从第8列开始**
* 8到11列为称为A区
* 12到72列称为B区
* 部名、区名、段名、FD和01层的数据(理论上)必须在A区开始
* 相邻的两个字之间必须留一个以上的空格
* **用户自定义字, 只允许使用字母数字和'-'符号**


# COBOL 字符集
* 0～9
* a～b
* A～B
* 一些符号
* **没有下划线**



# COBOL 程序结构


## 标识部 IDENTIFICATION DIVISION
* 必须有一个名字
* 如果要被子程序调用,名字必须和编译的名字相对应
  `IDENTIFICATION DIVISION.`
  `PROGRAM-ID. 程序名.`
* 其他字段用于阅读,编译器忽略

## 环境部 ENVIRONMENT DIVISION
* 访问硬件 打印机 网络
* 其中所有节都是可选的
#### 配置节 CONFIGURATION SECTION
* ~~配置SOURCE-COMPUTER.OBJECT-COMPUTER~~
* 专用名段 修改指定符号
#### 输入输出节 INPUT-OUTPUT SECTION
* 文件控制段 FILE-CONTROL
  给程序使用的文件命名
* ~~IO控制端 I-O-CONTROL~~

## 数据部 DATA DIVISION
* 唯一描述输入输出数据的部分
* 输入输出,中间数据都要在数据部中加以说明
#### 变量(数据项)
* 数据项在定义时确定名字,分配内存
* 初等项 没有子变量的变量
* 组合项 包含多个子变量的变量
* 孤立变量 不被其它变量包含的初等项
* 组合变量 不是孤立变量
#### 层次
* 层次标号 01-49
* 从属项层号更高
* 层号不必连续 -- 不连续方便改变数据结构
#### 结构
* 文件节 FILE SECTION
  输入输出文件 
* 工作单元节 WORKING-STORAGE SECTION
  中间数据项
* 链接节 LINKAGE SECTION
  调用程序间传递数据项
* 报表节 REPORT SECTION -- 不涉及
  数据裁剪报表

##过程部 PROCEDURE DIVISION
#### 基本输入输出
* ACCEPT 从指定输入设备接收数据
* DISPLAY 标准输出
#### 计算
* ADD A TO B [GIVING C]

  A+B=>B[=>C]

* SUBTRACT B FROM A [GIVING C]

  A-B=>A[=>C]

* MULTIPLY A BY B [GIVING C]

  A*B=>B[=>C] 注意不能赋值给常量

* DIVIDE A BY B [GIVING C]

  A/B=>B[=>C]

* 加减可以有两个以上数值,乘除只能有两个变量 注意介词和顺序 GIVING来确定赋值

* COMPUTE标识符,[标识符]... = 算数表达式

  `算数表达式(空格 注意优先级)` 

  `COMPUTE A = B ** 2 + C * X`

  `COMPUTE T = A `

  `只能是数值 `

  `COMPUTE A,B = 3 * 5 `

  `A=B=15`
#### 控制
* MOVE 

  传送语句,赋值,如果类型不同,数值按小数点对齐,多余补零,少则截断.而字符串按左对齐,多补空格,少则截断

  可以传送组合项

  MOVE 标识符 TO 标识符,[标识符]....

* IF 条件语句

  IF ... [ELSE ...] END-IF

* PERFORM 循环
  `PERFORM WITH TEST [BEFORE|AFTER] UNTIL 条件`
  `DO SOMETHING`
  `END-PERFORM`
* GO TO 语句

  GO [TO] 过程名

  GO [TO] 过程名,[过程名]...[DEPENDING] ON 标识符,标识符对应的数值与执行过程的顺序对应

* STOP 停止语句

  STOP RUN

  STOP `常数` 不常用
## 结构化程序设计
* 顺序 SEQUENCE 序列
* 重复 ITERATION 迭代
* 选择 SELECTCION 选择
***
* 微机版COBOL