const fs = require("fs");
const { dirUtils } = require('../utils/helper')
const baseUrl = "http://localhost:3000/download/";

// Coge toda la lista de ficheros disponibles con su enlace de descarga
const getListFiles = (req, res) => {
    const directoryPath = dirUtils + "/notes/";

    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            res.status(500).send({
                message: "Fue imposible escanear ninguna nota!",
            });
        }

        let fileInfos = [];

        files.forEach((file) => {
            fileInfos.push({
                name: file,
                url: baseUrl + file,
            });
        });

        res.status(200).send(fileInfos);
    });
};

// Descarga los ficheros usando los parámetros
const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = dirUtils + "/notes/";

    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "No se puede descargar la nota. " + err,
            });
        }
    });
};

module.exports = {
    getListFiles,
    download,
};