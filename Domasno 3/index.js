require('./pkg/db');

const express = require('express');
const movies = require('./handlers/movies')

const api = express();

api.use(express.json());

api.get('/api/movies', movies.getAll);
api.get('/api/movies/:id', movies.getOne);
api.post('/api/movies', movies.create);
api.put('/api/movies/:id', movies.update);
api.patch('/api/movies/:id', movies.updatePartial);
api.delete('/api/movies/:id', movies.remove);

api.listen(10000, err => {
    if(err) return console.log(err);
    return console.log('Servevr started on port 10000');
});