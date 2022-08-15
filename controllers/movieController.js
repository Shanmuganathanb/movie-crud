import asyncHandler from 'express-async-handler'
import Movie from '../models/movieSchema.js'

// @desc    Add Movie
// @route   POST /movie/add
// @access  Public
const addMovie = asyncHandler(async (req, res) => {

    const { movieName, rating, cast, genre, releaseDate } = req.body;

    const movie = await Movie.findOne({ movieName: movieName })
    
    if (movie) {
        res.status(400)
        throw new Error('Movie already exists')
    } else {
        const movieObject = new Movie({
            movieName : movieName,
            rating: rating,
            cast: cast,
            genre: genre,
            releaseDate: releaseDate,
        });
        const result = await movieObject.save()
        res.status(201).json({id: result._id})
    }
})

// @desc    All Movie
// @route   GET /movie/all
// @access  Public
const allMovie = asyncHandler(async (req, res) => {

    const movie = await Movie.find({ })
    res.status(200)
    if (movie) {
        res.json(movie);
    } else {
        res.json({})
    }
})

// @desc    Update Movie
// @route   GET /movie/:id/update
// @access  Private
const updateMovie = asyncHandler(async (req, res) => {
    const movie = await Movie.findOne({ _id: req.params.id })
    res.status(200)
    if (movie) {
        Object.keys(req.body).map(item => {
            movie[item] = req.body[item]
        })
        const updatedMovie = await movie.save()
        res.json({ message: "Movie successfully updated"})
    } else {
        res.status(400)
        throw new Error('No movie exists with this ID')
    }
})


// @desc    All Movie
// @route   DELETE /movie/:id/delete
// @access  Private
const deleteMovie = asyncHandler(async (req, res) => {
    const movie = await Movie.findOne({ _id: req.params.id })
    if (movie) {
        const resp = await Movie.deleteOne({ _id: req.params.id } )
        res.status(200)
        res.json({ message: "Movie successfully deleted"})
    } else {
        res.status(400)
        throw new Error('No movie exists with this ID')
    }
})

export {
    addMovie,
    allMovie,
    updateMovie,
    deleteMovie,
}
