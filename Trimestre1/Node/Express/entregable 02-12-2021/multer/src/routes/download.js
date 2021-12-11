const { application } = require('express');
const express = require('express');

const router = express.Router();
const downloader = require('../controllers/download')

// Para Postman

router.get('/files',downloader.getListFiles);
router.get('/files/:name',downloader.download);

module.exports = router;