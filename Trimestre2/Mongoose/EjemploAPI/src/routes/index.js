const express = require('express');

const { rootController, nameController } = require('../controllers');
const bookRouter = require('./book'); 
const flyRouter = require('./fly'); 

const router = express.Router();

router.get('/', rootController);
router.get('/name', nameController);
router.use('/book', bookRouter);
router.use('/fly', flyRouter);

module.exports = router;