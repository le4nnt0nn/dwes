var animals = require('./animals')
const express = require('express')
const app = express()
const port = 3000

// ...

app.use('/animals', animals)


app.use(function (req, res) {
    res.send({
        "code": 404,
        "error": "Not Found",
        "message": "Error: Path not found"
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
