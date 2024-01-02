exports.seed = function (knex) {
    return knex('library')
        // first delete all existing entries
        .del()
        .then(function () {
            // then insert the new entries
            return knex('library').insert([{
                    id: 1,
                    name: 'Bibliotheek Aartselaar',
                    city: 'Aartselaar',
                    shelves: 15
                },
                {
                    id: 2,
                    name: 'Bibliotheek Luchtbal',
                    city: 'Antwerpen',
                    shelves: 30
                },
                {
                    id: 3,
                    name: 'Bibliotheek De Poort',
                    city: 'Berchem',
                    shelves: 20
                },
                // ...
            ]);
        });
};