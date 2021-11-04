const http = require('http');
const fs = require('fs').promises;

const routes = {
    hola: (req, res) => {
        fs.readFile(__dirname + "/hola.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        });
    },
    caracola: (req, res) => {
        fs.readFile(__dirname + "/caracola.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        });
    },
    default: (req, res) => {
        req.statusCode = 404;
        res.end('Not Found');
    }
};

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    const path = req.url.split('/')[1];
    const controller = routes[path] || routes['default'];
    controller(req, res);
}).listen(4000);