const express = require('express')
const app = express()
const port = 3000


// TODO - HACER EJERCICIO
app.get(`/body/:object`, function (req, res) {
    console.log(req.params.object);
    res.send(`<ul>
                <li>${req.params.object}</li>
                <li></li>
            </ul>`)
});

app.get('/:', (req, res) => {
    res.writeHead(404);
    res.send('Not Found');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})