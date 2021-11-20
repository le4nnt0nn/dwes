const express = require('express');

const { rootController } = require('../controllers');
const fibonacciRouter = require('./fibonacci'); 

const router = express.Router();

router.get('/', rootController);
router.get('/fibonacci', fibonacciRouter);

module.exports = router;