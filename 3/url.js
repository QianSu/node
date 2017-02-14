const urlModel = require('url');

var detial=urlModel.parse('http://localhost:8080/aa?user=dasd&password=dasd',true);

console.log(detial.query);
