const jade=require('jade');

var str=jade.renderFile('./views/3.jade',{pretty:true});

console.log(str);