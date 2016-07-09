# 痛风随访系统

## Auth 权限管理

所有API受到权限管理,如果没有登录全部会返回未授权json

具体授权情况可以查看authsview视图

每个用户有1个token字段,url中使用token会恢复session,当新的token启用之后,以前的token自动失效

但是一个token可以登录多个设备，并且登录不会挤掉web端登录的设备

### 系统角色

usertype 1      管理员

usertype 5      医生用户

usertype 10     患者

usertype 99     未登录

## API使用

需要传值的地方,通常是new一个实体,填充所需字段后
将它转化成json字符串,以jsondata为key的形式,封装在HTTP实体部中

## 其他事项

带有'是否'的字段,约定 0 为 false ,1 为 true,不要使用bool值
需要登录的对象,都是User对象,患者的详情记录在PatientDetail表中
test项目中的org.uestc.gout.model对象是Java可以传递的实体
移动端需要在每一个请求中附上token

## 测试数据

*  用户

> 请连接suntao.science 数据库 gout查看
> admin 666666799
> zhouqiao 666666799 
> duzhekai7 666666799  