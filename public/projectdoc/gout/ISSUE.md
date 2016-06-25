# 问题

## week_news.html提交信息不完全问题

缺乏fishpd和beerpd字段

## MYSQL5.5 单独TIMESTAMP问题

**在增加weekhabit表中的createtime和updatetime时,报错**
> ERROR 1293: Incorrect table definition; there can be only one TIMESTAMP column with CURRENT_TIMESTAMP in DEFAULT or ON UPDATE clause

Mysql5.5之前
> One TIMESTAMP column in a table can have the current timestamp as the default value for initializing the column, as the auto-update value, or both. It is not possible to have the current timestamp be the default value for one column and the auto-update value for another column.
