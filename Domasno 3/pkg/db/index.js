const mongoose = require('mongoose');

const host='cluster0.0gbsm.mongodb.net';
const username = 'Lukas';
const password = 'Lukas123';
const dbname = 'my-first-base';

let DSN = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(
    DSN,
    err => {
        if(err) {
            return console.log('Could not connect to DB', err);
        }
        console.log('Succesfully connected to DB')
    }
);