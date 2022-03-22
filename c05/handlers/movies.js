const movies = require('../pkg/movies');
const validator = require('../pkg/movies/validate')

const getAll = async (req, res) => {
    try {
        let ms = await moviesMongo.getAllMovies();
        return res.status(200).send(ms);
    }catch(err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const getOne = async (req, res) => {
    try {
        let ms = await movies.getOne(req.params.id)
        return res.status(200).send(ms)
    }catch(err){
        console.log(err)
        return res.status(500).send("Internal Server Error")
    }
};

const create = async (req, res) => {
    try{
        await validator.validate(req.body, validator.Movie);
        let m = await movies.addMovie(req.body);
        return res.status(201).send(m);
    }catch(err) {
        console.log(err)
        return res.status(500).send('Internal Server Error')
    }
};

const update = async (req, res) => {
    try{
        await moviesMongo.updateMovie(req.params.id, req.body);
        return res.status(204).send("Movie updated")
    }catch(err) {
        console.log(err)
        return res.status(500).send('Internal Server Error')
    }
};

const updatePartial = async (req, res) => {
    try{
        await moviesMongo.updateMovie(req.params.id, req.body)
        return res.status(200).send("Succes")
    }catch(err) {
        console.log(err)
        return res.status(500).send('Internal Server Error')
    }
};


const remove = async (req, res) => {
    try{
        await moviesMongo.removeMovie(req.params.id);
        return res.status(200).send("Deleted")
    }catch(err) {
        console.log(err)
        return res.status(500).send('Internal Server Error')
    }
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove

}