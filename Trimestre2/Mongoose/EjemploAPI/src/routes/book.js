const express = require('express');

const bookController = require('../controllers/book');

const router = express.Router();

router.route('/')
  .get(bookController.getBook)
  .post(bookController.createBook)
  .put(bookController.updateBook);

module.exports = router;