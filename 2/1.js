const fs=require('fs');
const path=require('path');

fs.readFile(path.join(__dirname,'1.txt'),(error,data)=>{

    console.log(data.toString());

})
fs.writeFile(path.join(__dirname,'1.txt'),'你好世界');