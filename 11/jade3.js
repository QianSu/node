const jade=require('jade');
const fs=require('fs');
var str=jade.renderFile('./jade/1.jade',{pretty:true});

fs.writeFile('./build/test.html',str);
console.log(str);
