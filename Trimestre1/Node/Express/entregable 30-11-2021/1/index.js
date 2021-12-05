const bcrypt = require("bcrypt");
const express = require("express")
const app = express()
const port = 3000;

const hash = '$2b$05$emcUjS2uekm95IK/5XL9ge36B3f7JA/9ThTfL4LobQUYe/AZrEr8y';

app.get('/admin', function (req, res, next) {
    res.status(401).send({
        code: 401, message: 'Acceso restringido, por favor, incluya la palabra secreta en el parámetro password en la cabecera de la petición'
    });
})

app.get('/admin/password', function (req, res, next) {
    res.status(401).send({
        code: 401, message: 'Acceso restringido, por favor, incluya la palabra secreta en el parámetro password en la cabecera de la petición'
    });
})

app.get('/admin/password/*', function (req, res, next) {
    res.status(401).send({
        code: 401, message: 'Acceso restringido, por favor, incluya la palabra secreta en el parámetro password en la cabecera de la petición'
    });
})

async function passwordHashTest(password) {
    const hash = await bcrypt.hash(password, 5);
  
    const result = await bcrypt.compare(password, hash);
    console.log(result);
}

app.get('/admin/password:secret', function (req, res, next) {
    const secret = req.params.secret;
    passwordHashTest(hash)
    if (bcrypt.compareSync(password, hash)===true) next('route')
    else next()
}, function (req, res, next) {
    res.status(401).send({
        code: 401, message: 'Acceso restringido, por favor, incluya la palabra secreta en el parámetro password en la cabecera de la petición'
    });
})

app.get('/admin/password:secret', function (req, res, next) {
    res.status(200)
    res.send('Bienvenid@, disfrute del contenido')
})

app.use('/', function (req, res, next) {
    res.send('Hash correcto!')
})

/**
 * app.use('/', function (req, res, next) {
    res.send('Para acceder a admin, escriba /admin')
})
 */

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
