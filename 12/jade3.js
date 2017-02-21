const jade=require('jade');

var str=jade.renderFile('./views/5.jade',
{pretty:true,name:'suqian',json:{width:'20px',height:'50px'},arr:['nihao','red']
});

console.log(str);