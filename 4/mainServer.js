const http=require('http');
const querystring=require('querystring');
const fs=require('fs');
const urlLib=require('url');
const path=require('path');
const read=require('readline');


var server=http.createServer((req,res)=>{
    //GET
    var urlJson=urlLib.parse(req.url,true);
    var url=urlJson.pathname;
    var GET=urlJson.query;
    //POST
    var str='';
    //post的数据一段一段的传输
        req.on('data',(data)=>{
            str+=data;

        });
        //end的一步到达。
         req.on('end',()=>{
             var POST=querystring.parse(str)

           fs.writeFile(path.join(__dirname,'www','1.txt'),POST);
         });

});

server.listen('8080');