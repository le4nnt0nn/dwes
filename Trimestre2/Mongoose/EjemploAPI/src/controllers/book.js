function getBook(req, res) {
    res.send('Get a random book');
  }

  function createBook(req, res) {
    console.log(req.body);
    const { book } = req.body;
    res.send(`Add a book: ${book}`);
  }

  function updateBook(req, res) {
    res.send('Update the book');
  }

  module.exports = {
    getBook,
    createBook,
    updateBook,
  }