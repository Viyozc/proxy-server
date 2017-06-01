var express = require('express');
var request = require('request');
var app = express();
app.use('/', function(req, res) {
    console.log(req.url);
    var outUrl = 'http://localhost:80/' + req.url;
    //配置接口规则：如请求带有api时，转向api跨域接口。
    if(req.url.indexOf('api') !== -1){
        outUrl = 'http://hzmozhi.com:85/' + req.url;
    }
    req.pipe(request(outUrl)).pipe(res);
});
app.listen(process.env.PORT || 3000);