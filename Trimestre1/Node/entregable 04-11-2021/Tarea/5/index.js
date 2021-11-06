const http = require('http');
const fs = require('fs').promises;

const routes = {
    page: (req, res) => {
        fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        });
    },
    default: (req, res) => {
        fs.readFile(__dirname + "/error.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(404);
            res.end(contents);
        });
    }
};

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    const path = req.url.split('/')[1];
    const controller = routes[path] || routes['default'];
    controller(req, res);
}).listen(4000);