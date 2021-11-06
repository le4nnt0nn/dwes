const querystring = require("querystring");
const http = require("http");

function fizzBuzz(n) {
  const result = [];

  for (let index = 0; index < n; index++) {
    if (index % 3 === 0) {
      result.push("fizz");
    } else if (index % 5 === 0) {
      result.push("buzz");
    } else {
      result.push(index);
    }
  }

  return result || n;
}

http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/json");
    const n = req.url;
    switch (n) {
      case `${n}`:
        const q = querystring.parse(`n=${n.split("/").join("")}`);
        res.writeHead(200);
        res.end(`${fizzBuzz(q.n)}`);
        break;
      case "default":
        res.writeHead(404);
        res.end("Not Found");
        break;
    }
  })
  .listen(4000);
