const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Get all libraries
app.get('/', async (req, res) => {
    try {
        const libraries = await db('libraries').select('*');
        res.json(libraries);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});

// Add a new library
app.post('/', async (req, res) => {
    const library = req.body;
    if (library.name.checkString() && library.address.checkString()) {
        try {
            const insertedIds = await db('libraries').insert(library);
            const newLibrary = await db('libraries').where('id', insertedIds[0]).first();
            res.json(newLibrary);
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

// Update a library by ID
app.put('/:id', async (req, res) => {
    const libraryId = req.params.id;
    const updatedLibrary = req.body;

    //check updatedLibrary
    if (updatedLibrary.name.checkString() && updatedLibrary.address.checkString()) {
        try {
            // Check if the library with the given ID exists
            const existingLibrary = await db('libraries').where('id', libraryId).first();

            if (!existingLibrary) {
                return res.status(404).json({
                    error: 'Library not found'
                });
            }

            // Update the library
            await db('libraries').where('id', libraryId).update(updatedLibrary);

            // Fetch and return the updated library
            const newLibrary = await db('libraries').where('id', libraryId).first();
            res.json(newLibrary);
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

// Delete a library by ID
app.delete('/:id', async (req, res) => {
    const libraryId = req.params.id;
    try {
        // Check if the library with the given ID exists
        const existingLibrary = await db('libraries').where('id', libraryId).first();

        if (!existingLibrary) {
            return res.status(404).json({
                error: 'Library not found'
            });
        }

        // Delete the library
        await db('libraries').where('id', libraryId).del();

        res.json(existingLibrary);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});

// Get a libary by ID
app.get('/:id', async (req, res) => {
    const libraryId = req.params.id;
    try {
        // Check if the library with the given ID exists
        const existingLibrary = await db('libraries').where('id', libraryId).first();

        if (!existingLibrary) {
            return res.status(404).json({
                error: 'Library not found'
            });
        }

        res.json(existingLibrary);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});

// Get all books in a library by library ID
app.get('/:id/books', async (req, res) => {
    const libraryId = req.params.id;
    try {
        // Check if the library with the given ID exists
        const existingLibrary = await db('libraries').where('id', libraryId).first();

        if (!existingLibrary) {
            return res.status(404).json({
                error: 'Library not found'
            });
        }

        // Fetch all books in the library
        const books = await db('books').where('library_id', libraryId).select('*');
        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});

module.exports = app;