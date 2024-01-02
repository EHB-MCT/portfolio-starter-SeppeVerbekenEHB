const request = require('supertest');
const assert = require('assert');
const knex = require('knex');
const app = require('./../app.js');
const express = require('express');

const db = knex(require('./../../knexfile').development);

const booksRoutes = require('./../routes/books.js');
app.use('/books', booksRoutes);

describe('POST /books', () => {
    test('should create a new book', async () => {
        const book = {
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            year: 1937
        };

        const response = await request(app)
            .post('/books')
            .send(book)
            .expect(200);

        console.log(response.body); // Log the response body
    });
});

//test the GET /books route
//check if the response is in JSON
//check if the response status is 200
//check if the response body is an array
//check if the response body is not empty
//check if the response body contains the same number of books as the database
describe('GET /books', () => {
    if ('responds with json', async function () {
            const response = await request(app).get('/books').set('Accept', 'application/json');
            expect(response.status).toEqual(200);
            expect(response.body.length).toBeGreaterThan(0);

            await db('books').raw("BEGIN");

            const books = await db('books').select('*');
            expect(books.length).toEqual(response.body.length);
        });
});

test("1+1=2", () => {
    //1+1=2
    expect(1 + 1).toBe(2);
})