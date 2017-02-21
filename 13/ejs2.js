const ejs = require('ejs');

ejs.renderFile('./views/2.html', {
    json: {
        arr: [
            { user: 'blue', pass: '123456' },
            { user: 'zhangsan', pass: '654321' },
            { user: 'xiaoming', pass: '999999' },
        ]
    }
}, function (err, data) {
    console.log(data);
});
