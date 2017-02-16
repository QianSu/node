//基础用法
const express=require('express');

var server=express();
server.use('/a.html',(req,res)=>{
    res.send('abc');
});
server.use('/b.html',(req,res)=>{
    res.send('abc');
});
server.listen(8081);