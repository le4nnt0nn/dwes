const express = require('express');

const { flyController, flyName } = require('../controllers/fly');

const router = express.Router();

router.get('/*fly', flyController);
router.get('/*fly/:name', flyName);

module.exports = router;




