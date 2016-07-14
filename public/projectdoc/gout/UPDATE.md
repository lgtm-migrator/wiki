# 更新日志

## Update - 2016-7-14 

服务器gzip
简化html应用
使用easyui layout修改布局

APP引入天气

## Update - 2016-7-8 

/db/....../sheet 可以获取对应的表格文件

**重要**
彻底修改权限管理模块
权限管理精确到API
认证用户如果出现no auth 
请参看数据库中的authsview，看是否有相应权限

添加了新闻的CRUD界面
添加个人信息的修改界面

## Update - 2016-7-6 

开始编写单元测试
添加了/admin/db/:view/gets/:col/:value
将安卓项目纳入到版本管理，安卓开发IDE转化为Android Studio
修改了userinfo.html
添加了各视图的查看下载

## Update - 2016-7-5

/admin/db/:view/gets 数据库访问
/admin/db/:table/:op[/:id] 视图访问

/html/userinfo.html 查看用户信息

## Update - 2016-7-4

添加三个与APP新闻列表有关的API
添加一个新闻列表页面/app/news/render/新闻id
访问[这里](http://gout.suntao.science/app/news/render/1)查看实例

添加
/admin/records/month/get/:assayid
/admin/records/getmonthrecord
/admin/users/patientengview/gets/:keyword/:order/:start/:end
/admin/users/patientengview/gets/:order/:start/:end


## Update - 2016-7-3

添加两个APP相关的API
/app/current/version
/app/current/updateurl


添加三个记录相关的API
/admin/records/weekview/gets/sheet/:patientid
/admin/records/monthview/gets/:patientid/:start/:end
/admin/records/weekview/gets/:patientid/:start/:end


## Update - 2016-7-2

更新两个API表格文件下载API

/admin/users/patientview/gets/sheet
/admin/records/monthview/gets/sheet/:patientid
/admin/records/week/gets/sheet //可不用
/admin/records/month/gets/sheet //可不用

## Update - 2016-6-27

删除原型项目下的文档
修改根路径，重定向至此文档

## Update - 2016-6-25

代理服务器更换为Caddy，现在全站已经变成安全的HTTPS链接
文档位置迁移到 https://wiki.suntao.science/projectdoc/gout/

## Update - 2016-5-30 

**日常更新**

增加两个API
gettargetusermonthlyrecordlist 获取目标用户每月化验列表
updateusermonthlyrecord 更新每月化验列表
这两个API类似之前每周的API

## Update - 2016-5-23 

**日常更新**

增加两个API
addcurrentusermonthlyrecord 添加(当前用户)一条每月化验信息
getweekrecord 获取一条指定的每周习惯信息

**monthyassay表增加两个字段 createtime 和modifytime**

**将API移动到单独的文档中**


## Update - 2016-5-22 

**日常更新**

增加一个API - gettargetuserweekrecordlist  获取指定用户的每周信息 默认情况下返回当前用户前十条信息
修改一个API - getcurrentuserweekrecordlist 默认情况下获取最近的五条信息

## Update - 2016-5-19


三个与每周记录相关的移动Web页面大致完成
但是性能存在问题,考虑优化OR加载动画
另外week_news_list页面的文字需要居中显示

*** 

App使用WebView调用移动Web页面
App的Tab完成,Tab可以考虑加入图标

## Update - 2016-5-16

**日常更新**

增加[聊天子系统Demo](/html/chatdemo.html)
此原型需要开启两个页面, 页面先输入一个ID, 然后两个框中分别输入 目标ID 消息就可以发送消息了.
测试状态, 持久化未实现, 群发未实现, 认证未实现.
此子系统将被开源. 

**API改变**

Add API **updateuserweekrecord**, 用于更新用户每周记录


## Update - 2016-5-14

**日常更新** 

增加[微信端原型](/html/wechat.html),建议使用手机访问
增加Resource页面

**API改变**

增加一个新的API **getcurrentuserweekrecordlist**
**allpatientscount**被更改，增加一个keyword参数（可选），返回对应检索词下对应的条数。
**getpatientsdetailbypage**被更改(修复),原来该API是直接返回一个列表,现在返回标准message对象,message.message为原来返回的列表。

***

## Update - 2016-5-12

**日常更新**

陈少康提供一个[week_new页面](/html/week_news.html)
此页面有BUG,最后几个选项有关联请检查
该页面对于移动端的适配并不好,需要一些修改

Java主项目实现一个API

Java主项目修复了一个幽灵编码问题

***

## Update - 2016-5-10

**前端Web服务器部署完成**

将可使用
http://suntao.science:2999/
http://gout.suntao.science/
https://gout.suntao.science/
等URL访问本项目
请注意HTTPS协议下,浏览器/客户端会提示证书有问题,忽略即可
具体的知识可以搜索

> 反向代理 
> SSL证书

等关键词了解

**使用触发器维持患者数据完整性**

触发器由张俊晨贡献
当user表中插入数据时,当该条数据的用户类型为10,同时将在patientdetail表中插入一条相应空数据

```sql
delimiter #
create trigger trigger_user after insert
on user for each row
begin
    if new.usertypeid=10 then
        insert patientdetail(patientid)
        values (new.userid);
    end if;
end;#
delimiter ;
```

**Java 主项目更新**

基于Spring Boot框架的主项目,使用注解等方式配置项目

提供hibernate和mybatis两种持久化框架
hibernate用于简单实体的增删查改,mybatis用于网页的复杂表格(List<Map\>类型).

使用druid连接池,暂时不用考虑数据库连接性能问题

<pre>!!!请注意!!!
当前ssl配置被禁用,预计将使用前端Web服务器实现ssl而不是tomcat
Controller层只负责Session/Response等操作
Service层才负责具体的逻辑,具体可参看我实现的几个API
授权管理将使用Spring Security代替
当前所有的认证和token检验全部都在AuthFilter实现
</pre>



***


## Update - 2016-5-4

域名被修改,请自行百度如何[重新定位SVN](http://my.oschina.net/china008/blog/315883)

增加一个新的API addcurrentuserweekrecord 用于添加用户的每周习惯

修改一个API getpatientsdetailbypage 增加检索字段keyword **当前只针对realname进行检索**

数据库user.password 进行md5加密

API logout 被实现,调用之后session和token都会失效 ,需重新登录