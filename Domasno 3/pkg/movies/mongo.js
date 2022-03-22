const mongoose = require('mongoose');

const Movie = mongoose.model(
    'movies',
    {
        name: String,
        premiere: Date,
        genre: String,
        actors: Array,
        awards: Array,
        director: String
    },
    'movies'
);

const addMovie = async (movie) => {
    let m = new Movie(movie);
    return await m.save();
};

const removeMovie = async (id) => {
    return await Movie.deleteOne({_id: id});
};

const updateMovie = async (id, movie) => {
    return await Movie.updateOne({_id: id}, movie);
};

const getAllMovies = async () => {
    return await Movie.find({});
};

const getOne = async (id) => {
    return await Movie.findOne({_id: id});
};

module.exports = {
    addMovie,
    removeMovie,
    updateMovie,
    getAllMovies,
    getOne
};