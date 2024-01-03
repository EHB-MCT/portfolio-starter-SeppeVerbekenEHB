const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const app = express();

// Knex.js configuration
const knexConfig = require('../knexfile'); // Assuming knexfile.js is in the same directory

// Initialize Knex.js with the configuration
const db = knex(knexConfig.development);

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.json());

// Routes
const booksRoutes = require('./routes/books.js');
app.use('/books', booksRoutes);

const librariesRoutes = require('./routes/libraries.js');
app.use('/libraries', librariesRoutes);

// Default route
app.get('/', (request, response) => {
    response.send('Hello World test');
});

module.exports = app;