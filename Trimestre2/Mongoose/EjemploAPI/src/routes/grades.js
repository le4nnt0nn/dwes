const express = require('express');
const GradeController = require('../controllers/grades');

const router = express.Router();

router.get('/', GradeController.listall)
      .post('/', GradeController.create)
      .get('/:key/:value', GradeController.find, GradeController.show)
      .put('/:key/:value', GradeController.find, GradeController.update)
      .delete('/:key/:value', GradeController.find, GradeController.deleted)

module.exports = router;