const mysql=require('mysql');

//1.连接
//crcreateConnection(哪台服务器，用户名，密码，库)
var db=mysql.createConnection({host:'localhost',user:'root',password:'',database:'2016220'});

//2.查询
//query(干啥，回调);
db.query("SELECT * FROM `user_table`;",(error,data)=>{
    if(error)throw error;
    console.log(JSON.stringify(data));

})