const express=require('express');
const bodyParser=require('body-parser');
const multer=require('multer');
const cookieParse=require('cookie-parser');
const cookieSession=require('cookie-session');
const static=require('express-static');
const consolidate=require('consolidate');
const mysql=require('mysql');

const db=mysql.createPool({host:'localhost',user:'root',password:'',database:'blog'});
//

var server=express();
//1.解析cookie
server.use(cookieParse('daasdasdasd'));
//2.使用session
var arr=[];
for(var i=0;i<100000;i++){
    arr.push('nihao'+Math.random());
}
server.use(cookieSession({
    name:'hello',
    keys:arr,
    maxAge:20*3600*1000
}));
//3.post数据。
server.use(multer({dest: './www/upload'}).any());
server.use(bodyParser.urlencoded({extended: false}));

// server.use('/',(req,res)=>{
//     console.log(req.body);
//     res.send('ok');

// })
//4.配置模板引擎
//输出上面东西
server.set('view engine','html');
//模板文件在哪
server.set('views','./templates');
//哪种模板引擎
server.engine('html',consolidate.ejs);
//接受用户请求
server.get('/',(req,res)=>{
    db.query("SELECT * FROM banner",(error,data)=>{
        if(error)throw error;
        //console.log(data);
     res.render('index.ejs',{banners:data});
    });
   
});

//4.static数据
server.use(static('./www'));
server.listen(8081);