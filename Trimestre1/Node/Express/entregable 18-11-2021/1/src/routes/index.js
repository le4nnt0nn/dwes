const express = require('express');

const { rootController } = require('../controllers');
const pingRouter = require('./ping'); 

const router = express.Router();

router.get('/', rootController);
router.get('/ping', pingRouter);

module.exports = router;