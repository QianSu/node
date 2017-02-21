const ejs=require('ejs');

ejs.renderFile('./views/1.html',{name:'suqian'},(error,data)=>{
    console.log(data);
})