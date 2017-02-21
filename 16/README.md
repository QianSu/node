## 连接池
const db=mysql.createPool({host: 'localhost', user: 'root', password: '123456', database: 'blog'});

> 注意此项目的设计流程，后台。与语法的应用。

- UPDATE 表 SET 字段=值
- UPDATE 表 SET 字段=值 WHERR ID=xxx