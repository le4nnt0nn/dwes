const express = require('express')
const app = express()
const port = 3000

app.get(`/params/:name`, function (req, res) {
    res.send('Hola '+ req.params.name)
});

app.get('/:', (req, res) => {
    res.writeHead(404);
    res.send('Not Found');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

