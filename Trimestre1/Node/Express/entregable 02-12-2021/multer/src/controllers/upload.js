const multer = require('multer')
const { dirUtils } = require('../utils/helper')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, dirUtils + '/notes/')
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

exports.upload = upload.single('myFile')

exports.uploadFile = (req, res) => {
    res.json({data: 'ARCHIVO SUBIDO'})
}