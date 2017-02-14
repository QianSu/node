const query=require('querystring');
var json=query.parse('foo=bar&abc=xyz&hello=123');
console.log(json);