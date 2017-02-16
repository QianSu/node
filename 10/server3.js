const express=require('express');
const cookieParser=require('cookie-parser');
var server=express();
server.use(cookieParser('dashdkj'));//解签名密钥
server.use('/',(req,res)=>{
    req.secret='dashdkj';
    res.cookie('user','suqian',{path:'/aaa',maxAge:7*24*3600*1000,signed:true});
    //无签名的cookie
   console.log(req.cookies);
 //签名的cookie 
  console.log(req.signedCookies);
    res.send('ok');

});
server.listen(8081);