# 痛风随访系统

## Auth 权限管理

/admin/路径下(以及所有子路径下)API受到权限管理,如果没有登录全部会返回no auth

每个用户有1个token字段,url中使用token会恢复session,当新的token启用之后,以前的token自动失效

### 系统角色

usertype 1     管理员

usertype 5     医生用户

usertype 10   普通用户 患者

### API 的使用

需要传值的地方,通常是new一个实体,填充所需字段后
将它转化成json字符串,以jsondata为key的形式,封装在HTTP实体部中

***

API返回的是一个Message对象的JSON字符串
对于Java来说 : 

> message是一个泛型对象
> type是一个String 对象 用来判断message的类型
> success是一个Boolean值,用来判断这个API的功能是否得到了正常响应
> JSON正反序列化具体使用,可以参看/gout/Test下test项目,import导入时选择existing maven project

对于JavaSricpt来说 :

> 一般情况下json 字符串js直接就可以解析成对象
> 如果js将获取的数据识别为字符串,可以调用JSON.parse(jsonstr)方法转化成对象(可能需要第三方库)

JSON简介 : 

> {} 中是一个对象
> > {成员名:成员值}


> [] 中是一个列表
> > [{对象1成员甲:值,对象1成员乙:值},{对象2成员甲:值,对象2成员乙:值}]


## 其他事项

带有'是否'的字段,约定 0 为 false ,1 为 true,不要使用bool值
需要登录的对象,都是User对象,患者的详情记录在PatientDetail表中
test项目中的org.uestc.gout.model对象是Java可以传递的实体
移动端需要在每一个请求中附上token

## 测试数据

*  用户

> 请连接suntao.science 数据库 gout查看
> admin admin
> zhouqiao 666666799
> zhangsan 666666799