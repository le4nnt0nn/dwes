const { application } = require('express');
const express = require('express');
const { authJWT } = require('../utils/auth')

const router = express.Router();
const uploader = require('../controllers/upload')

// Para Postman

router.post('/upload', authJWT, uploader.upload, uploader.uploadFile);

module.exports = router;