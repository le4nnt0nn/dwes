const multer = require('multer')
const { dirUtils } = require('../utils/helper')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, dirUtils + '/notes/')
    },
    filename: function(req, file, cb) {
        cb(null, `${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

exports.upload = upload.single('myFile')

exports.upload = upload.array('multiFiles')

exports.uploadFile = (req, res) => {
    res.json({data: 'ARCHIVO SUBIDO'})
}