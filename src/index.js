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