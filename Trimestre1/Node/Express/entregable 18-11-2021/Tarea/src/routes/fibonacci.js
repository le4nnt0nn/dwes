const express = require('express');

const { fibonacciController } = require('../controllers/fibonacci');

const router = express.Router();

router.get('/fibonacci', fibonacciController);

module.exports = router;