const jade=require('jade');

var str=jade.renderFile('./views/9.jade',{pretty:true,content:'<div>你好世界<div>'});

console.log(str);