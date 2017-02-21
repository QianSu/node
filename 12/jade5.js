const jade=require('jade');

var str=jade.renderFile('./views/7.jade',{pretty:true,a:10,b:12});

console.log(str);