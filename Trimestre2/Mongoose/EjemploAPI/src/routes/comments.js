const express = require('express');
const CommentController = require('../controllers/comments');

const router = express.Router();

router.get('/', CommentController.listall)
      .post('/', CommentController.create)
      .get('/:key/:value', CommentController.find, CommentController.show)
      .put('/:key/:value', CommentController.find, CommentController.update)
      .delete('/:key/:value', CommentController.find, CommentController.deleted)

module.exports = router;