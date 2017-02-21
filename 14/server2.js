const express=require('express');
const multer=require('multer');
const pathLib=require('path');
const fs=require('fs');
var objMulter=multer({dest:'./www/upload'});
var server=express();
server.use(objMulter.any());
server.use('/',(req,res)=>{
     var newName=req.files[0].path+pathLib.parse(req.files[0].originalname).ext;
    fs.rename(req.files[0].path,newName,(error)=>{
console.log('成功');

    })
    
    // [ { fieldname: 'f1',
    // originalname: '孩子.jpg',
    // encoding: '7bit',
    // mimetype: 'image/jpeg',
    // destination: './www/upload',
    // filename: 'ab614d1623bf8369053bb97077be334b',
    // path: 'www\\upload\\ab614d1623bf8369053bb97077be334b',
    // size: 5667 } ]

    res.send('ok');

})
server.listen(8081);