const querystring = require('querystring');
const http = require('http');

http
  .createServer((req, res) => {
    res.setHeader('Content-Type', 'text/json');
    const name = req.url;
    switch (req.url) {
      case `${name}`:
        var q = querystring.parse(`name=${name.split('/').join('')}`);
        res.writeHead(200);
        res.end(`Hello ${q.name} !`);
        break;
      case 'default':
        res.writeHead(404);
        res.end('Not Found');
        break;
    }
  })
  .listen(4000);
