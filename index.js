var express = require('express');
var server = express();
var port = process.env.PORT || 8080;

server.use(express.static(__dirname+'/public'));

server.get('/', function(req, res)
{
  res.sendFile('public/html/index.html', {root: __dirname});
});

server.listen(port, function()
{
  console.log("now listening on port "+ port);
});
