const { application } = require('express');
const express = require('express');

const router = express.Router();
const uploader = require('../controllers/upload')

// Para Postman

router.post('/upload', uploader.upload, uploader.uploadFile);

module.exports = router;