const fs = require('fs');
const express = require('express')

const readFile = (source) => {
    return new Promise((succes, fail) => {
        fs.readFile(`${source}.json`, 'utf-8', (data,err) => {
            if(err) return fail(err);
            let out = JSON.parse(data);
            return succes(out);
        });
    });
};

const writeData = (data, destionation) => {
    return new Promise((succes, fail) => {
        fs.writeFile(`${destionation}.json`, data, err => {
            if(err) return fail(err);
            return succes();
        });
    });
};

const api = express();

api.use(express.json());

api.get('/users', async (req, res) => {
    try{
        let data = await readData('./users');
        res.status(200).send(data);
    }catch(err){
        console.log(err)
        res.status(500).send('internal server error');
    }
});

api.listen(10000, err => {
    if(err) return console.log(err);
    console.log('Server succesfully started on port 10000')
})