//express_demo.js 文件
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "客户端页面.html" );
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://localhost:8081")
 
})
