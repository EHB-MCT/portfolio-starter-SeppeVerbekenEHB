exports.seed = function (knex) {
    return knex('students')
        // first delete all existing entries
        .del()
        .then(function () {
            // then insert the new entries
            return knex('books').insert([{
                    id: 1,
                    name: 'The Hunger Games',
                    author: 'Suzanne Collins',
                    year: 2008
                },
                {
                    id: 2,
                    name: 'Harry Potter and the Order of the Phoenix',
                    author: 'J.K. Rowling',
                    year: 2003
                },
                {
                    id: 3,
                    name: 'To Kill a Mockingbird',
                    author: 'Harper Lee',
                    year: 1960
                },
                // ...
            ]);
        });
};