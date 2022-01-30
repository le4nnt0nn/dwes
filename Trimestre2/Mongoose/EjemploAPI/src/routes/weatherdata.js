const express = require('express');
const WeatherDataController = require('../controllers/weatherdata');

const router = express.Router();

router.get('/', WeatherDataController.listall)
      .post('/', WeatherDataController.create)
      .get('/:key/:value', WeatherDataController.find, WeatherDataController.show)
      .put('/:key/:value', WeatherDataController.find, WeatherDataController.update)
      .delete('/:key/:value', WeatherDataController.find, WeatherDataController.deleted)

module.exports = router;