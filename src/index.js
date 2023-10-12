const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const app = express();
const port = 3000;

// Knex.js configuration
const knexConfig = require('../knexfile'); // Assuming knexfile.js is in the same directory

// Initialize Knex.js with the configuration
const db = knex(knexConfig.development);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define a route to get all books
app.get('/books', async (req, res) => {
  try {
    const books = await db('books').select('*');
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define a route to add a new book
app.post('/books', async (req, res) => {
  const { title, author, year } = req.body;
  try {
    const insertedIds = await db('books').insert({ title, author, year });
    const newBook = await db('books').where('id', insertedIds[0]).first();
    res.json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/', (request, response) => {
  response.send('Hello World');
});

app.listen(port, (err) => {
  if (!err) {
    console.log('Server is running on port 3000');
  } else {
    console.log(err);
  }
});