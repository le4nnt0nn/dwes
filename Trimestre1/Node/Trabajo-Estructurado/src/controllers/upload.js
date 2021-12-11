const multer = require('multer')
const { dirNotes } = require('../helper')


// Define dónde van a ser guardadas las subidas
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, dirNotes + '/notes/')
    },
    filename: function (req, file, cb) {
        cb(null, `${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

// Un sólo archivo
exports.upload = upload.single('myFile')

// Varios archivos
exports.upload = upload.array('multiFiles')

exports.uploadFile = (req, res) => {
    res.json({ data: 'ARCHIVO SUBIDO' })
}