# 数据 - 数据库

- 关系型数据库：
  + MySQL、Oracle、SQLServer、Access、db2、fox pro

> MySQL：
+ 免费、中小网站
+ 优点：性能非常不错
+ 缺点：集群、容灾稍微弱一些

> Oracle：
+ 挺贵、大型应用、金融级
+ 优点：性能非常不错、集群、容灾非常强
+ 缺点：挺贵

> Server端：
+ 数据存在

> Client端：
+ 管理工具、Node

------

> Server安装
-------

> 数据基本概念：
>>两种单位：
1. 库：文件夹-用来管理，本身没法存数据
2. 表：文件-存数据的

> 表-Excel：
+ 行-一条数据
+ 列(字段、域)-一个数据项

-------------------------------

> 用户名
> 密码

+ 主键：唯一、性能高
	唯一标识符

---------------------------------

> server：
> client：
+ Navicat-管理工具
+ NodeJS-程序

------------------------------------------------------------------------------

1. 库-管理，存不了数据
2. 表-存数据
3. 字段-列
4. 行-一条数据

## 关系型数据库：

- Node.js不支持mysql
- npm
- 服务端
- 客户端
  + node的mysql模块

  1. 连接
  2. 查询

## SQL:
> 4大查询语句--增删改查.
1. 增-INSERT 
   + INSERT INTO 表 (字段列表) VALUES(值列表)
   + INSERT INTO `user-table`(`ID`,`username`,`password`) VALUES(0,'suqian', '123456'); 
2. 删
3. 改 
4. 查
   + SELECT 什么 FROM 表
   + SELECT * FROM `user_table`; 
## SQL标准写法：
1. 关键字大写
2. 库、表、字段需要加上``

1. 下载mysql模块(client)
2. 连接	var db=mysql.createConnection(host, port, user, password, database)	//?
3. 查询db.query(SQL, (err, data)=>{})
4. SQL语句 增删改查