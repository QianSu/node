const fs=require('fs');
const path=require('path');
const http=require('http');

var server=http.createServer((req,res)=>{
  //  console.log(path.join(__dirname,'www',req.url))
    fs.readFile(path.join(__dirname,'www',req.url),(error,data)=>{
        if(error){
        res.write('404');

        }else{
        res.write(data);
       res.end();
        };
      

    });


})
server.listen('8080');


