//node开发服务器的阻塞情况
'use strict';
//v8对es6支持的情况分为三个级别：根本不支持，直接支持，严格模式支持

const http=require('http');
 
 let count=0;

const server=http.createServer((request,response)=>{
//此回调回在任何用户请求时触发

response.write(`你是第${count++}个访问用户`);
if(count===10){
    console.log(`你是煞笔么？`);
}

response.end();

});
server.listen(2080,(error)=>{
    if(error)throw error;
    console.log('成功启动2080端口');


})
