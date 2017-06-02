var express = require('express');
var request = require('request');
var http    = require('http');
var path    = require('path');
var fs      = require('fs');

var base = __dirname;
http.createServer(function (req, res) {
    if (req.url.indexOf('baidu') !== -1) {
        var theUrl = 'http://www.baidu.com';
        req.pipe(request(theUrl)).pipe(res);
    } else {
        var file = base + req.url;
        fs.readFile(file, function (err, data) {
            if (err) {
                res.writeHeader(404, {
                    'content-type': 'text/html;charset="utf-8"'
                });
                res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
                res.end();
            } else {
                res.writeHeader(200, {
                    'content-type': 'text/html;charset="utf-8"'
                });
                res.write(data);//将index.html显示在客户端
                res.end();
            }
        });

    }
}).listen(8899);