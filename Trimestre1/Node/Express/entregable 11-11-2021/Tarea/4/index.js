const express = require('express')
const app = express()
const port = 3000

const ob = {1 : 'valor', 2: 'valor', 3:'valor'}
const entradas = Object.entries(ob);
let list = [];

function genList() {
  for (const key in entradas) {
    console.log(`${entradas[key]}`);  
    list.push(`<li>${entradas[key]}</li>`)
  }
}

genList()

app.get(`/body/:object`, function (req, res) {
  console.log('object = '+entradas)
  console.log('length = '+entradas.length)
  return res.send(`Tu objeto está aqui! ${list}`)
});

app.get('/:', (req, res) => {
    res.writeHead(404);
    res.send('Not Found');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})