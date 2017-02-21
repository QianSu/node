const jade=require('jade');

var str=jade.renderFile('./views/8.jade',{pretty:true,arr:['aa','bb','ccc']});

console.log(str);