const express = require('express')
const app = express()
const port = 3000

const object = {1 : 'valor', 2: 'valor', 3:'valor'}
const entradas = Object.entries(object);
// TODO - HACER EJERCICIO
app.get(`/body/:object`, function (req, res) {
    const entradas2 = Object.entries(req.params.object)
    console.log(entradas);
    for (let index = 0; index < entradas.length; index++) {
      console.log(index)
      res.send(`<li>${entradas[index]}</li>`)
    }
});

app.get('/:', (req, res) => {
    res.writeHead(404);
    res.send('Not Found');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})