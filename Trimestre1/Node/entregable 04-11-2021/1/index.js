const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<html><body><h1 style="text-align: center">Hello World!</h1></body></html>');
  res.end();
}).listen(4000);