const express=require('express');
const cookieParser=require('cookie-parser');
var server=express();
server.use(cookieParser());//需要的话加签名的字符串
server.use('/',(req,res)=>{
   console.log(req.cookies);
    res.send('ok');

});
server.listen(8081);