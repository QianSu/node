const path=require('path');

var str='c://www/123/a.html';
var json=path.parse(str);
console.log(json);
// { root: 'c:/',
//   dir: 'c://www/123',
//   base: 'a.html',
//   ext: '.html',
//   name: 'a' }
