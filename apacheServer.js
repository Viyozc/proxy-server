var express = require('express');
var request = require('request');
var app = express();
app.use('/', function(req, res) {
    console.log(req.url);
    var outUrl = 'http://localhost:80/dimondMall/admin' + req.url;
    if(req.url.indexOf('api') !== -1){
        outUrl = 'http://hzmozhi.com:85/' + req.url;
    }
    req.pipe(request(outUrl)).pipe(res);
});
app.listen(3000);