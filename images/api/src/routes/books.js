function initEndPoints(app, db){
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
        const book = req.body;
        if(book.title.checkString() && book.author.checkString() && book.year.checkString()) {
            try {
            const insertedIds = await db('books').insert(book);
            const newBook = await db('books').where('id', insertedIds[0]).first();
            res.json(newBook);
            } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            }
        } else {
            res.status(400).json({ error: 'Bad Request' });
        }
    });
}