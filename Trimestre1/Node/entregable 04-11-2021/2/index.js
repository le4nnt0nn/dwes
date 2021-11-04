const http = require('http');
const fs = require('fs').promises;


http.createServer(function (req, res) {
  fs.readFile(__dirname + "/index.html")
  .then(contents => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(contents);
})
}).listen(3000);