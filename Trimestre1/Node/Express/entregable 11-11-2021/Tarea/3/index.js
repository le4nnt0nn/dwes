const express = require('express')
const app = express()
const port = 3000

const numberToArray = (num) => {
    const res = [];
    while (num) {
        const last = num % 10;
        res.unshift(last);
        num = Math.floor(num / 10);
    };
    return res;
};

function cont(accumulator, a) {
    return accumulator + a;
}

app.get(`/query/:n`, function (req, res) {
    console.log(numberToArray(req.params.n))
    const arrayNum = numberToArray(req.params.n)
    res.send('Suma: '+ arrayNum.reduce(cont, 0))
    
});

app.use(function (req, res) {
    req.params = 100;
    const arrayNum = numberToArray(req.params)
    res.send('Suma (default 100): '+ arrayNum.reduce(cont, 0))
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})