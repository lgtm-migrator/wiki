# API

除了根路径下的API, 其他API调用时都可能出现no auth
这是因为无权限/未登录

```json
{"message":"no auth","type":"err message","success":false}
```

## / 根路径

* 登录

> URL : /login
> 需求权限 : 否
> 方法 : POST
> 参数 : 字段名 : jsondata 类型 : 字符串 格式 : {username:'user\'s name',password:'user\'s password'}
> 返回值(典型):
> > 成功 : 

```json
{"success":true,"message":"3c05c75fb0794dcc812298fe90004018","type":"token"}
```
> > 失败 param error 

```json
{"successs":false,"message":"param error","type":"err message"}
```
> > 失败 password error or no such user

* 患者注册

> URL : /signin
> 需求权限 : 无
> 方法 : POST
> 参数 : 字段名 : jsondata 类型 : 字符串 格式 : { ... } 用户实体的json字符串 至少包含username和password两个字段
> 其他 : 注册用户类型被强制设定为10 
> 返回值(典型): 
> > 成功 (返回添加的对象,userdetail是另外一个表的实体,在新建患者的时候自动新建一个对应的记录) : 

```json
 {"message":{"userid":4,"usertypeid":10,"username":"wangwu","realname":null,"token":null,"registerdate":null,"userdetail":{"id":2,"patientid":4,"userdocterid":null,"gender":null,"height":null,"weight":null,"age":null,"nation":null,"nativeplace":null,"job":null,"phonenumber":null,"email":null,"firstvisitdate":null,"isrelativegout":null}},"type":"obejct","success":true}
```
> > 失败 (参数错误)
> > 失败 (未授权)

* 用户名检验

> URL : /hasuser
> 需求权限 : 无
> 方法 : POST
> 参数 : jsondata = '{username : 'xxxxyyyy'}'
> 返回值(典型):
>> 成功(有用户) : <pre>{\"message\":true,\"type\":\"boolean hasuser\",\"success\":true}</pre>
>> 成功(无用户) : <pre>{\"message\":false,\"type\":\"boolean hasuser\",\"success\":true}</pre>
>>  失败(参数错误)

## /app 路径

* 最新APP版本

> URL : /app/current/version
> 需求权限 : 无
> 方法 : ALL
> 返回值

```json
{"success":true,"type":"current version","message":"1"}
```

* 最新APP下载地址

> URL : /app/current/updateurl
> 需求权限 : 无
> 方法 : ALL
> 返回值

```json
{"success":true,"type":"URL","message":"http://gout.suntao.science/app/current/download"}
```

* 分页获取appnews表的数据

> URL: /app/news/gets/:page
> 需求权限 无
> 方法 : ALL
> 返回值 

```json
{"success":true,"type":"object list","message":[{"id":1,"title":"第一篇文章","intro":"这一片文章并没有内容","content":"<p>我走过山时，山不说话，<br/>我路过海时，海不说话，<br/>小毛驴滴滴答答，倚天剑伴我走天涯。<br/>大家都说我因为爱着杨过大侠，才在峨眉山上出了家，<br/>其实我只是爱上了峨眉山上的云和霞，<br/>像极了十六岁那年的烟花。</p>","url":"/app/news/first","createdate":"2016-07-04T01:20:51.000Z"},{"id":2,"title":"第二篇文章","intro":"这一篇并没有文章","content":"","url":"/app/news/2","createdate":"2016-07-04T01:21:24.000Z"},{"id":3,"title":"插入测试","intro":null,"content":null,"url":null,"createdate":"2016-07-04T06:34:55.000Z"},{"id":4,"title":"插入测试","intro":null,"content":null,"url":null,"createdate":"2016-07-04T07:02:54.000Z"}]}
```


* 获取单条新闻的准确信息

> URL: /app/news/get/:newid
> 需求权限 无
> 方法 : ALL
> 返回值 

```json
{"success":true,"type":"object","message":{"id":2,"title":"第二篇文章","intro":"这一篇并没有文章","content":"","url":"/app/news/2","createdate":"2016-07-04T01:21:24.000Z"}}
```

* 获取渲染的页面

> URL: /app/news/render/:newid
> 需求权限 无
> 方法 : ALL
> 返回值  一个页面


* 插入一条文章appnews

> URL: /app/news/add
> 需求权限 1 5
> 方法 : POST
> 返回值 

```json
{"success":true,"type":"object list","message":[{"id":4,"title":"插入测试","intro":null,"content":null,"url":null,"createdate":null}]}
```

* 删除一条文章

> URL : /app/new/delete/:newid
> 需求权限 1 5
> 方法 ALL
> 返回值 成功
1
```json
{"success":true}
```
> 失败

```json
{"success":false,"type":"err message","message":"no such record"}
```

## /admin路径

> URL : /admin/db/:table/:op[/:id]
> :table   数据库中的table名称

> :op

* /select/:id
* /selects
* /update/:id
* /insert 
* /delete/:id

> 参数  
>> table对应的实体 不需要转化成jsondata 
>> id需要注意一定是那个表的主键

* 为EasyUI提供的视图查询API(table 也可以)

> URL : /admin/db/:view/gets[/:col/:value]/[/sheet]
> 方法 POST
> 参数 
>> rows page (EasyUI会自动传递)
>> :view 指定view名/table名
>> 如果添加[/col/value]将会在SQL中附上where col == value
>> 如果添加[/sheet]将会变成对应表格文件下载(所有行)
> 示例参看/html/pdp.html

* 获取天气信息

> URL : /app/weather/:location
> 方法 : ALL
>> 例如 /app/weather/北京
>> 返回值

```json
{"date":"周三 07月20日 (实时：22℃)","dayPictureUrl":"http://api.map.baidu.com/images/weather/day/baoyu.png","nightPictureUrl":"http://api.map.baidu.com/images/weather/night/zhongyu.png","weather":"暴雨转小到中雨","wind":"东北风3-4级","temperature":"23 ~ 21℃"}
```

## /admin/users路径

* 当前用户

> URL : /admin/users/currentuser
> 需求权限 : 1 5 10
> 方法 : ALL
> 参数 : 无
> 返回值(典型):
> > 成功 : <pre>{"message":{"userid":2,"usertypeid":10,"username":"zhangsan","realname":"张三","token":"3c05c75fb0794dcc812298fe90004018","registerdate":"2016-04-21T07:37:22.000Z"},"type":"obejct","success":true}</pre>
> > 失败(未认证) : <pre>{\"message\":\"no auth\",\"type\":\"err message\",\"success\":false}</pre>

* 获取用户

> URL : /admin/users/getuser
> 需求权限 : 1
> 方法 : POST
> 参数 : username
> 返回值(典型) : 
> > 成功 : <pre>{\"message\":{\"userid\":1,\"username\":\"doc1\",\"password\":\"admin\",\"usertype\":5,\"token\":\"\"},\"type\":\"object\",\"success\":true}</pre>
> > 失败(无权限) : 
> > 失败(不存在) : <pre>{\"message\":\"no such user\",\"type\":\"err message\",\"success\":false}</pre>


* 所有用户

> URL : /admin/users/allusers
> 需求权限 : 1
> 方法 : ALL
> 参数 : 无
> 返回值(典型) : 
> > 成功 : 
> > <pre>{\"message\":[{\"userid\":1,\"username\":\"doc1\",\"password\":\"admin\",\"usertype\":5,\"token\":\"\"},{\"userid\":2,\"username\":\"admin1\",\"password\":\"admin\",\"usertype\":1,\"token\":\"77dca769b21f416587ed66dafb6e7078\"}],\"type\":\"obejctlist\",\"success\":true}</pre>
> > 失败(未认证)




* 获取指定患者详细信息

> URL : /admin/users/getpatientdetail
> 需求权限 : <= 5
> 方法 : POST
> 参数 jsondata = patientdetail实体,该实体patientid不能为空 示例 : <pre>jsondata:{"patientid":"2"}</pre>
> 返回值 :
> > 成功 : <pre>{"message":{"id":1,"patientid":2,"docterid":null,"gender":0,"height":null,"weight":null,"age":null,"nation":null,"nativeplace":null,"job":"教师","phonenumber":null,"email":null,"firstvisitdate":null,"isrelativegout":1},"type":"obejct","success":true}</pre>
> > 失败 : 未授权
> > 失败 : 无此患者

* 获取当前患者详细信息(移动端)

> URL : /admin/users/getcurrentpatientdetail
> 需求权限 : 10
> 方法 : ALL
> 参数 : 无
> 返回值 :
> > 成功 : <pre>{"message":{"id":1,"patientid":2,"docterid":null,"gender":0,"height":null,"weight":null,"age":null,"nation":null,"nativeplace":null,"job":"教师","phonenumber":null,"email":null,"firstvisitdate":null,"isrelativegout":1},"type":"obejct","success":true}</pre>
> > 失败 : 未授权

* 修改指定患者信息

> URL: /admin/users/updatepatientdetail
> 需求权限 :  1 5
> 方法 : POST
> 参数 : jsondata,至少需要一个patientid参数指定修改的患者id,其他字段参看数据库
> 其他 : 
> 返回值:
> > 成功 
> > 失败 : param error 缺少jsondata 或者jsondata缺少patientid
> > 失败 : no such patient 根据patientid查找不到该患者

* 修改当前患者信息(移动端)

> URL: /admin/users/updatecurrentpatientdetail
> 需求权限 :  10
> 方法 : POST
> 参数 : jsondata=patientdetail实体,不需要指定patientid和id(指定也没用),后台会自动根据token判断
> 返回值:
> > 成功 
> > 失败 : no such patient 根据patientid查找不到该患者

* 修改当前用户密码

> URL : /admin/users/updatecurrentuserpassword
> 需求权限 : 登录
> 方法 : POST
> 参数 : jsondata 对应一个User实体,实体需要password字段
> 返回值 : 
> > 成功 : <pre>{"success":true,"type":"string","message":"token has be reset"}</pre>
> > 失败 : 未授权
> > 失败 : 参数错误

* 所有患者

> URL: /admin/users/allpatients
> 需求权限 : 1 5
> 方法 : ALL
> 参数 : 
> 返回值同 获取所有用户

* 所有患者总数

> URL : /admin/users/allpatientscount
> 需求权限 : 1 5
> 方法 : ALL
> 参数 : keyword 可选 存在时会对realname字段进行like检索
> 返回值
> 成功 : <pre>{"message":4,"type":"integer","success":true}</pre>
> 失败 未授权

* 按页获取患者列表(网页) **2016-7-4已修改**

> URL: /admin/users/getpatientsdetailbypage
> 需求权限 : 1 5
> 方法 : ALL
> 参数(可选) : jsondata = {startindex : '开始值',endindex : '结束值',ordercol : '排序列名字'} 默认值为 0 10 userid,即以userid排序的前十条数据
> 其他 : 对应SQL语句 

```sql
SELECT * from patientengview where usertypeid = 10 and realname like keyword order by ? limit ? , ? 
```
> > 成功 : 返回一个列表 这个列表不是标准的数据库实体
> > 

```json
{"message":[{"userid":3,"usertypeid":10,"username":"zhangsan","realname":"张三","doctorname":"zhouqiao","gender":1,"height":10,"weight":130,"age":null,"nation":"1","nativeplace":"1","job":"教师","phonenumber":null,"email":"1","firstvisitdate":null,"isrelativegout":1},{"userid":4,"usertypeid":10,"username":"duzhekai7","realname":"杜哲凯","doctorname":null,"gender":1,"height":175,"weight":66,"age":20,"nation":"汉","nativeplace":"浙江慈溪","job":null,"phonenumber":"13402889510","email":"646424878@qq.com","firstvisitdate":null,"isrelativegout":0},{"userid":6,"usertypeid":10,"username":"xhen","realname":"xhen很好","doctorname":null,"gender":1,"height":100,"weight":1,"age":null,"nation":"1","nativeplace":"1","job":"1","phonenumber":null,"email":"1","firstvisitdate":null,"isrelativegout":null},{"userid":59,"usertypeid":10,"username":"duzhekai11","realname":"杜泽楷fdhakjf","doctorname":null,"gender":null,"height":null,"weight":null,"age":null,"nation":null,"nativeplace":null,"job":null,"phonenumber":null,"email":null,"firstvisitdate":null,"isrelativegout":null}],"type":"object list","success":true}
```
> > 失败 : 未授权

* 获取patientengview视图对应的表格文件

> 获取所有患者的信息
> URL : /admin/users/patientview/gets/sheet
> 方法 : ALL
> 需求权限 : 1 5 10
> 参数 : 无
> 返回值
>> 成功 : 下载patientview.xlsx文件
>> 失败 : 参数错误 未授权


* 获取patientengview视图对应json

> 获取所有患者的信息
> URL : /admin/users/patientengview/gets/:keyword/:order/:start/:end
> URL : /admin/users/patientengview/gets/:order/:start/:end
> 方法 : ALL
> 需求权限 : 1 5
> 参数 : [:keyword(可选),:order,:start,:end]
> 返回值
>> 成功 : 

```python
# 查找realname中有 泽 这个字的人
url = "http://localhost:2999/"+"admin/users/patientengview/gets/泽/userid/0/10" +"?token="+token
r=requests.get(url);
print r.content
```

```json
{"message":[{"userid":59,"usertypeid":10,"username":"duzhekai11","realname":"杜泽楷fdhakjf","doctorname":null,"gender":null,"height":null,"weight":null,"age":null,"nation":null,"nativeplace":null,"job":null,"phonenumber":null,"email":null,"firstvisitdate":null,"isrelativegout":null}],"type":"object list","success":true}
```
>> 失败 : 参数错误 未授权


* 注销

> URL : /admin/users/logout
> 需求权限 : 登录
> 方法 : ALL
> 参数 : 无
> 返回值 : 
>> 成功 : <pre>{\"successs\":true,\"message\":\"user admin logout\",\"type\":\"string\"}</pre>
>> 失败(未授权)

*** 

## /admin/records路径

* 添加每周习惯记录

> URL : /admin/records/addcurrentuserweekrecord
> 需求权限 10
> 方法 : ALL
> 参数 : weekhabit实体对应的jsondata 不需要habitid和userid
> 返回值
>> 成功 {"success":true}
>> 失败 参数错误 未授权 


* 修改每周习惯记录

> URL : /admin/records/updateuserweekrecord
> 需求权限 1 5 10
> 方法 : ALL
> 参数 : weekhabit实体对应的jsondata **至少需要habitid**
> 返回值
>> 成功 {"success":true}
>> 失败 参数错误 未授权 

* 每周习惯列表

> URL : /admin/records/getcurrentuserweekrecordlist
> 需求权限 10
> 方法 : ALL
> 参数 :  data = {'jsondata':'{"top":3}'} top默认值为5
> 返回值 
>> 成功 <pre> '{"message":[{"habitid":6,"userid":4,"staplefood":1,"staplefoodamount":2,"taste":2,"dietarypreference":5,"drinktype":2,"fishpd":2,"seafoodpd":3,"beefpd":4,"porkpd":2,"poultrypd":3,"visceralpd":4,"vegetablepd":3,"beanpd":2,"eggpd":5,"nutpd":4,"fruitpd":4,"saltpd":null,"beerpd":2,"milkpd":3,"liquorpd":2,"wirepd":3,"teatype":null,"teapd":3},{"habitid":7,"userid":4,"staplefood":1,"staplefoodamount":2,"taste":2,"dietarypreference":5,"drinktype":2,"fishpd":2,"seafoodpd":3,"beefpd":4,"porkpd":2,"poultrypd":3,"visceralpd":4,"vegetablepd":3,"beanpd":2,"eggpd":5,"nutpd":4,"fruitpd":4,"saltpd":null,"beerpd":2,"milkpd":3,"liquorpd":2,"wirepd":3,"teatype":null,"teapd":3},{"habitid":8,"userid":4,"staplefood":1,"staplefoodamount":2,"taste":2,"dietarypreference":5,"drinktype":2,"fishpd":2,"seafoodpd":3,"beefpd":4,"porkpd":2,"poultrypd":3,"visceralpd":4,"vegetablepd":3,"beanpd":2,"eggpd":5,"nutpd":4,"fruitpd":4,"saltpd":null,"beerpd":2,"milkpd":3,"liquorpd":2,"wirepd":3,"teatype":null,"teapd":3}],"success":true,"type":"object list"}'</pre>
>> 失败 未授权

* 个人每周习惯列表获取

> URL: /admin/records/gettargetuserweekrecordlist
> 需求权限 : 1 5
> 方法 : ALL
> 参数 : 
>> jsondata = {"start":0,"end":1,"ordercol":"createtime","order":"asc","userid":1};
>> 所有字段可选,默认值为0 10 createtime desc 当前用户
> 返回值
>> 成功 <pre>{"message":[{"habitid":1,"userid":1,"staplefood":1,"staplefoodamount":2,"taste":null,"dietarypreference":null,"drinktype":null,"fishpd":null,"seafoodpd":null,"beefpd":null,"porkpd":null,"poultrypd":null,"visceralpd":null,"vegetablepd":null,"beanpd":null,"eggpd":null,"nutpd":null,"fruitpd":null,"saltpd":null,"beerpd":null,"milkpd":null,"liquorpd":null,"wirepd":null,"teatype":null,"teapd":null,"createtime":"0000-00-00 00:00:00","modifytime":null}],"success":true,"type":"object list"}
</pre>
>> 失败 未授权

* 获取指定habitid的每周习惯记录

> URL : /admin/records/getweekrecord
> 需求权限 : 1 5
> 方法 POST
> 参数  : jsondata={"habitid":16} habitid必选
> 返回值
>> 成功 <pre>{"message":{"habitid":16,"userid":4,"staplefood":2,"staplefoodamount":3,"taste":3,"dietarypreference":3,"drinktype":3,"fishpd":null,"seafoodpd":2,"beefpd":4,"porkpd":4,"poultrypd":4,"visceralpd":4,"vegetablepd":4,"beanpd":4,"eggpd":4,"nutpd":4,"fruitpd":5,"saltpd":5,"beerpd":null,"milkpd":2,"liquorpd":3,"wirepd":2,"teatype":6,"teapd":2,"createtime":"2016-05-19T12:27:38.000Z","modifytime":"2016-05-22T09:54:34.000Z"},"success":true,"type":"object"}</pre>
>> 失败 参数错误 未授权

* 获取指定assayid的每月习惯记录

> URL : /admin/records/month/get/:assayid
> 方法 ALL
-- 或者
> URL : /admin/records/getmonthrecord
> 方法 POST
> 参数  : jsondata={"assayid":16} assayid必选
--
> 返回值
>> 成功 

```json
{"message":{"assayid":5,"userid":4,"assay_docid":2,"diseasecourse":0,"isjointpain":0,"painpart":"","isjointswelling":0,"swellingpart":"","isdietchange":0,"isexercise":0,"esr":0,"crp":0,"ua":0,"ganyousanzhi":0,"totalcholesterol":0,"tmdasajzym":0,"basajzym":0,"cr":0,"cbc":"","havetophus":0,"b_modeus":0,"havehypertension":0,"havediabetes":0,"haveheartdisease":0,"havehlp":0,"haveotherdisease":0,"hypertensionmedicine":"","diabetesmedicine":"","heartdiseasemedicine":"","hlpmedicine":"","otherdiseasemedicine":"","gcsdosage":0,"colcdosage":0,"allopurinoldosage":0,"benzbromaronedosage":0,"nsaiddosage":0,"febuxostatdosage":0,"createtime":"2016-06-01T11:07:53.000Z","modifytime":"2016-06-01T11:07:53.000Z"},"success":true,"type":"object"}
```
>> 失败 参数错误 未授权



* 添加当前用户每月化验数据

> URL :  /admin/records/addcurrentusermonthlyrecord
> 需求权限 : 1 5 10
> 方法 POST
> 参数 : jaondata = monthyassay实体 请务必保证实体的完整性
> 返回值 
>> 成功 返回添加的记录 <pre>{"message":[{"assayid":1,"userid":4,"assay_docid":null,"diseasecourse":null,"isjointpain":null,"painpart":null,"isjointswelling":null,"swellingpart":null,"isdietchange":null,"isexercise":null,"esr":null,"crp":1,"ua":null,"ganyousanzhi":null,"totalcholesterol":null,"tmdasajzym":null,"basajzym":null,"cr":null,"cbc":null,"havetophus":null,"b_modeus":null,"havehypertension":null,"havediabetes":null,"haveheartdisease":null,"havehlp":null,"haveotherdisease":null,"hypertensionmedicine":null,"diabetesmedicine":null,"heartdiseasemedicine":null,"hlpmedicine":null,"otherdiseasemedicine":null,"gcsdosage":null,"colcdosage":null,"allopurinoldosage":null,"benzbromaronedosage":null,"nsaiddosage":null,"febuxostatdosage":null,"createtime":"2016-05-23T06:30:42.136Z","modifytime":"2016-05-23T06:30:42.136Z"}],"success":true,"type":"added model"}</pre>
>> 失败 参数错误 未授权

* 修改每月化验信息

> URL : /admin/records/updateusermonthlyrecord
> 需求权限 : 1 5 10 
> 方法 : POST
> 参数 : jsondata = monthyassay实体 至少需要指定assayid
> 返回值 
>> 成功 : <pre>{"success":true}</pre>
>> 失败 : 参数错误 未授权

* 获取每月化验信息列表

> URL : /admin/records/gettargetusermonthlyrecordlist
> 方法 : POST
> 参数 : 
>> jsondata = {"start":0,"end":1,"ordercol":"createtime","order":"asc","userid":4};
>> 所有字段可选,默认值为0 5 createtime desc 当前用户

> 返回值
>> 成功 : 

```json
{"message":[{"assayid":1,"userid":4,"assay_docid":null,"diseasecourse":null,"isjointpain":null,"painpart":null,"isjointswelling":null,"swellingpart":null,"isdietchange":null,"isexercise":null,"esr":1,"crp":1,"ua":1,"ganyousanzhi":null,"totalcholesterol":null,"tmdasajzym":null,"basajzym":null,"cr":null,"cbc":null,"havetophus":null,"b_modeus":null,"havehypertension":null,"havediabetes":null,"haveheartdisease":null,"havehlp":null,"haveotherdisease":null,"hypertensionmedicine":null,"diabetesmedicine":null,"heartdiseasemedicine":null,"hlpmedicine":null,"otherdiseasemedicine":null,"gcsdosage":null,"colcdosage":null,"allopurinoldosage":null,"benzbromaronedosage":null,"nsaiddosage":null,"febuxostatdosage":null,"createtime":"2016-05-23T06:30:42.000Z","modifytime":"2016-05-30T09:22:36.457Z"}],"success":true,"type":"object list"}
```
>> 失败 : 参数错误 未授权

* 获取monthview对应的json

> URL : /admin/records/monthview/gets/:patientid/:start/:end
> 方法 : ALL
> 需求权限 : 1 5
> 参数 : /:patientid/:start/:end
>> 成功 get("http://localhost:2999/admin/records/monthview/gets/4/0/2?token=73abbcf9657844e5b3e36b46fab01e6c");
>> 

```json
 {"message":[{"患者ID":4,"患者姓名":"杜哲凯","医生姓名":"zhouqiao","病程(天)":1,"是否关节痛":"否","疼痛部位":"1","是否肿胀":"否","肿胀部位":"2","发作前是否有饮食变化":"否","发作前是否运动":"否","血沉（mm/h）":2,"C反应蛋白（mg/dL）":2,"尿酸（umol/L）":3,"甘油三酯（mmol/L）":3,"总胆固醇（mmol/L）":4,"天门冬氨酸氨基转移酶（U/L）":4,"丙氨酸氨基转移酶（U/L）":5,"肌酐（umol/L）":6,"血常规":"7","有无痛风石形成":"未定义","有无泌尿结石":"未定义","有无高血压":"否","有无糖尿病":"否","有无心脏病":"否","有无高脂血症":"否","有无其他未提及疾病":"否","高血压药物":"7","糖尿病药物":"7","心脏病药物":"6","高脂血症药物":"54","其他病症药物":"3","糖皮质激素剂量":1,"秋水仙碱剂量":1,"别嘌醇剂量":1,"苯溴马隆剂量":1,"非甾体抗炎药剂量":2,"非布司他剂量":3,"创建时间":"2016-06-02T02:55:35.000Z"},{"患者ID":4,"患者姓名":"杜哲凯","医生姓名":"zhouqiao","病程(天)":0,"是否关节痛":"否","疼痛部位":"","是否肿胀":"否","肿胀部位":"","发作前是否有饮食变化":"否","发作前是否运动":"否","血沉（mm/h）":0,"C反应蛋白（mg/dL）":0,"尿酸（umol/L）":0,"甘油三酯（mmol/L）":0,"总胆固醇（mmol/L）":0,"天门冬氨酸氨基转移酶（U/L）":0,"丙氨酸氨基转移酶（U/L）":0,"肌酐（umol/L）":0,"血常规":"","有无痛风石形成":"否","有无泌尿结石":"否","有无高血压":"否","有无糖尿病":"否","有无心脏病":"否","有无高脂血症":"否","有无其他未提及疾病":"否","高血压药物":"","糖尿病药物":"","心脏病药物":"","高脂血症药物":"","其他病症药物":"","糖皮质激素剂量":0,"秋水仙碱剂量":0,"别嘌醇剂量":0,"苯溴马隆剂量":0,"非甾体抗炎药剂量":0,"非布司他剂量":0,"创建时间":"2016-06-01T11:11:58.000Z"}],"success":true,"type":"object list"}
```


* 获取monthview对应的Excel表格文件

> select \* from monthview
> URL : /monthview/gets/sheet/:patientid
> 方法 : ALL
> 需求权限 : 1 5
> 参数 : .../sheet/**参数** 值为需要查询的patientid，例如/monthview/gets/sheet/4就是查询id为4的患者每月表格
>> 成功 : 下载 每月信息-id-id.xlsx 文件
>> 失败 : 参数错误 未授权




* 获取weekview对应的json

> URL : /admin/records/weekview/gets/:patientid/:start/:end
> 方法 : ALL
> 需求权限 : 1 5
> 参数 : /:patientid/:start/:end
>> 成功 get("http://localhost:2999/admin/records/weekview/gets/4/0/2?token=73abbcf9657844e5b3e36b46fab01e6c");
>> 

```json
{"message":[{"患者ID":4,"患者姓名":"杜哲凯","主食":"面","主食量":">500g","口味习惯":"中辣","饮食偏好":"豆类","饮酒习惯":"红酒","每日鱼肉":"undefined","每日海鲜":"251-500g","每日牛肉":"undefined","每日猪肉":"undefined","每日家禽":"undefined","每日内脏":"undefined","每日蔬菜":"undefined","每日豆制品":"undefined","每日鸡蛋":"3个","每日坚果":"301-400g","每日水果":"4个","每日食盐":"undefined","每日啤酒":"undefined","每日奶制品":"251-500ml","每日白酒":"51-100g","每日红酒":"1-50g","饮茶种类":"普洱茶","每日饮茶":"1杯","创建时间":"2016-05-19T12:27:38.000Z"},{"患者ID":4,"患者姓名":"杜哲凯","主食":"粥","主食量":"251-500g","口味习惯":"微辣","饮食偏好":"蔬菜","饮酒习惯":"白酒","每日鱼肉":"251-500g","每日海鲜":">500g","每日牛肉":"undefined","每日猪肉":"251-500g","每日家禽":">500g","每日内脏":"undefined","每日蔬菜":">500g","每日豆制品":"251-500g","每日鸡蛋":"4个","每日坚果":"301-400g","每日水果":"3个","每日食盐":"undefined","每日啤酒":"1-500ml","每日奶制品":">500ml","每日白酒":"1-50g","每日红酒":"51-100g","饮茶种类":"undefined","每日饮茶":"2杯","创建时间":"2016-05-14T14:27:58.000Z"}],"success":true,"type":"object list"}
```

* 获取weekview对应的xls文件

> URL : /admin/records/weekview/gets/sheet/:patientid
> 方法 : ALL
> 需求权限 : 1 5 
> 参数 : /:patientid
> 成功 : http://localhost:2999/admin/records/weekview/gets/sheet/4?token=73abbcf9657844e5b3e36b46fab01e6c
> 传输文件 每周信息-id-4.xlsx
