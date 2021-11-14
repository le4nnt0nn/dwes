const express = require('express')
const app = express()
const port = 3000


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

app.get('/:n', function (req, res) {
    res.send(fizzBuzz(req.params.n));
});

app.get('/:', (req, res) => {
    res.writeHead(404);
    res.send('Not Found');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})