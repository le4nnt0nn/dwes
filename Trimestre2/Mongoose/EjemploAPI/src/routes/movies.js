const express = require('express');
const MovieController = require('../controllers/movies');

const router = express.Router();

router.get('/', MovieController.listall)
      .post('/', MovieController.create)
      .get('/:key/:value', MovieController.find, MovieController.show)
      .put('/:key/:value', MovieController.find, MovieController.update)
      .delete('/:key/:value', MovieController.find, MovieController.deleted)

module.exports = router;