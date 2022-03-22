const mongoose = require('mongoose');

const host ='';
const username = '';
const password = '';
const dbname = 'my-first-base';

let DSN = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`; 

mongoose.connect(
    DSN,
    {useNewUrlParser: true, useUnifiedTopology: true},
    err => {
        if(err) {
            return vonsole.log('Could not connect to DB', err);
        }
        console.log('Successfully connected to DB');
    }
);
