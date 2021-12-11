const { application } = require('express');
const express = require('express');

const router = express.Router();
const downloader = require('../controllers/download')

// Para Postman

router.get('/download',downloader.getListFiles);
router.get('/download/:name',downloader.download);

module.exports = router;