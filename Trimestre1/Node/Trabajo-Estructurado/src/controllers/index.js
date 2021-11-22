function rootController(req, res) {
    res.status(200).send('Bienvenid@ al servidor de notas!')
}

module.exports = {
    rootController,
}