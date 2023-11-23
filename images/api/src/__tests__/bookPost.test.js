// const request = require('supertest');
// const assert = require('assert');
// const knex = require('knex');
// const app = require('./../app.js');

// const db = knex(require('./../../knexfile').development);

// describe('GET /books', () => {
//     if('responds with json', async function() {
//         const response = await request(app).get('/books').set('Accept', 'application/json');
//         expect(response.status).toEqual(200);
//         expect(response.body.length).toBeGreaterThan(0);
        
//         await db('books').raw("BEGIN");

//         const books = await db('books').select('*');
//         expect(books.length).toEqual(response.body.length);
//     });
// });
test ("1+1=2", () => {
    //1+1=2
    expect(1+1).toBe(3);
})