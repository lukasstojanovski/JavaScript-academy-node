const mongoose = require('mongoose');
const config = require("../config");
console.log(config.get("db"))
const host= config.get("db").host;
const username = config.get("db").username;
const password = config.get("db").password;
const dbname = config.get("db").dbname;

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