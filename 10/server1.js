const express=require('express');
//cookie
var server=express();

server.use('/aaa/a.html',(req,res)=>{
    res.cookie('user','suqian',{path:'/aaa',maxAge:7*24*3600*1000})
    res.send('ok');

});
server.listen(8081);