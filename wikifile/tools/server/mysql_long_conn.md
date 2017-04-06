# 如何使MYSQL保持长连接

Note: 在node中使用mysql driver的时候，往往隔一段时间就会出错，提示mysql连接断掉了

## 原因

MYSQL内部有一个wait timeout变量，当一个mysql连接超过这个时间之后，server就会关闭这个链接

## 解决方式

1. 提高server的wait timeout
1. 每隔一段时间向服务器发送一个"select 1;"查询，重新开始超时计数
1. 使用连接池