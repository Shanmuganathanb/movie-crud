import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    movieName : String,
    rating: Number,
    cast: [String],
    genre: String,
    releaseDate: Date,
});

const Movie = mongoose.model('movie', movieSchema);
export default Movie