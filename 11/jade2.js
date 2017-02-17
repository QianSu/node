const jade=require('jade');

var str=jade.renderFile('./jade/1.jade',{pretty:true});
console.log(str);
