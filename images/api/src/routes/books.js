const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// Define a route to get all books
app.get('/books', async (req, res) => {
  try {
    const books = await db('books').select('*');
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }
});

// Define a route to add a new book
app.post('/', async (req, res) => {
  const book = req.body;
  if (book.title.checkString() && book.author.checkString() && book.year.checkString()) {
    try {
      const insertedIds = await db('books').insert(book);
      const newBook = await db('books').where('id', insertedIds[0]).first();
      res.json(newBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: 'Internal Server Error'
      });
    }
  } else {
    res.status(400).json({
      error: 'Bad Request'
    });
  }
});

// Define a route to update a book by ID
app.put('/books/:id', async (req, res) => {
  const bookId = req.params.id;
  const updatedBook = req.body;

  //check updatedBook
  if (updatedBook.title.checkString() && updatedBook.author.checkString() && updatedBook.year.checkString()) {
    try {
      // Check if the book with the given ID exists
      const existingBook = await db('books').where('id', bookId).first();

      if (!existingBook) {
        return res.status(404).json({
          error: 'Book not found'
        });
      }

      // Update the book
      await db('books').where('id', bookId).update(updatedBook);

      // Fetch and return the updated book
      const updatedBookData = await db('books').where('id', bookId).first();
      res.json(updatedBookData);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: 'Internal Server Error'
      });
    }
  } else {
    res.status(400).json({
      error: 'Bad Request'
    });
  }
});

// Define a route to delete a book by ID
app.delete('/books/:id', async (req, res) => {
  const bookId = req.params.id;

  try {
    // Check if the book with the given ID exists
    const existingBook = await db('books').where('id', bookId).first();

    if (!existingBook) {
      return res.status(404).json({
        error: 'Book not found'
      });
    }

    // Delete the book
    await db('books').where('id', bookId).del();

    res.json({
      message: 'Book deleted successfully'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }
});

// Define a route to find a book by ID
app.get('/books/:id', async (req, res) => {
  const bookId = req.params.id;

  try {
    // Fetch the book with the given ID
    const book = await db('books').where('id', bookId).first();

    if (!book) {
      return res.status(404).json({
        error: 'Book not found'
      });
    }

    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }
});

module.exports = app;