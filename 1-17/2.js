// var argv=process.argv;

// console.log(argv);
 var argvs=process.argv.slice(2);

 switch(argvs[0]){
     case 'init':
     console.log('你需要INIT');
     break;
     case 'install':
     var installPackName=argvs[1];
     console.log('你在安装'+installPackName);
     break;
     case 'uninstall':
     console.log('uninstall');
     break;
 }