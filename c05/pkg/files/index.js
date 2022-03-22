const fs = require('fs');

const readData = (source) => {
    return new Promise ((succes, fail) => {
        fs.readFile(`${source}.json`, 'utf-8', (err, data) => {
            if (err) return fail(err);
            let out = JSON.parse(data);
            return succes(out);
        });
    });
};

const writeData = (data, destination) => {
    return new Promise((succes, fail) => {
        let out = JSON.stringify(data);
        fs.writeFile(`${destination}`, out, err => {
            if(err) return fail(err);
            return succes;
        });
    });
};

module.exports = {
    readData,
    writeData
};