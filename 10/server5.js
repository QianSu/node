///ccokie-session
const express=require('express');
const session=require('cookie-session');
const parser=require('cookie-parser');
var server=express();
server.use(parser());
 server.use(session({
     name:'haha',
     keys:['aa','bb','ccc'],
     maxAge:2*3600*1000
 }))
 server.use('/',(req,res)=>{

   console.log(req.cookies);
 //签名的cookie 
  console.log(req.signedCookies);

    res.send('你好');

 });


server.listen('8081');
