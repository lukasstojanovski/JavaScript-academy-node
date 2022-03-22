const files = require('../files');
const DATA_SOURCE = `${__dirname}/../../data`;

const addMovie = async (movie) => {
    try{
        let data = await files.readData(DATA_SOURCE);
        data.push(movie);
        await files.writeData(data, DATA_SOURCE);
    }catch (err) {
        throw err;
    };
};

const removeMovie = async (index) => {
    try{
        let data = await files.readData(DATA_SOURCE);
        let out = data.filter((_, i) => index !== i);
        await files.writeData(out, DATA_SOURCE);
    }catch (err) {
        throw err;
    }
};

const updateMovie = async (index, movie) => {
    try{
        let data = await files.readData(DATA_SOURCE);
        let out = data.map((m, i) => {
            if (index !== i) {
                m = movie; 
            }
            return m;
        });
        await files.writeData(out, DATA_SOURCE);
    }catch(err){
    throw err;
    }
};

const getAllMovies = async () => {
    try{
        let data = await files.readData(DATA_SOURCE);
        return data;
    }catch(err) {
        throw err;
    }
};

const getOne = async (index) => {
    try{
        let data = await files.readData(DATA_SOURCE);
        return data[index];
    }catch(err) {
        throw err;
    }
};

module.exports = {
    addMovie,
    removeMovie,
    updateMovie,
    getAllMovies,
    getOne
};