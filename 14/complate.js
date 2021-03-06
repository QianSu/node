const express=require('express');
const bodyParser=require('body-parser');
const multer=require('multer');
const cookieParse=require('cookie-parser');
const cookieSession=require('cookie-session');
const static=require('express-static');
const consolidate=require('consolidate');


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
server.set('views','./views');
//哪种模板引擎
server.engine('html',consolidate.ejs);
//接受用户请求
server.get('/index',(req,res)=>{
    res.render('ejs1.html',{name:'suqian'});
});
//4.static数据
server.listen(8081);