const jade=require('jade');

var str=jade.renderFile('./views/4.jade',{pretty:true,name:'suqian'});

console.log(str);