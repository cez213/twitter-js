var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));

app.get('/', function(req, res){
  res.send('Server Listening');
});

var server = app.listen(3000, function(){

  var host = server.address().address;
  var port = server.address().port;

  console.log('App lisening at http://%s:%s', host, port);
});