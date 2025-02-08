import { getMovieData, getTrailers } from "./util.mjs"
import { trailerConstruct } from "./TrailerBlock.mjs";

const url = "https://api.kinocheck.com/trailers/trending?language=en";
const movieUrl = "https://api.kinocheck.com/movies?imdb_id=tt10676052&language=en";
const trailerUrl = "https://api.kinocheck.com/trailer/jt9q/the-fantastic-four-first-steps-trailer-2025-marvel";
// const apiKey = 'YOUR_API_KEY';

const trailers = getTrailers(url);
trailers.then(function(result) {
    
    const array = Object.values(result);
    
    console.log(array[0].thumbnail);
    array.splice(25, 1);
    console.log(array);
    trailerConstruct(array);
});

// const movie = getTrailers(movieUrl);
// movie.then(function(result) {
//     console.log(result);
// });

// const trailer = getTrailers(trailerUrl);
// trailer.then(function(result) {
//     console.log(result);
// });
// const youtube = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=5xqUuTGkSQc&key=AIzaSyDHXMOVqCEY3vzkzT4welA41aE7HcwcILs";

// const omdb = "http://www.omdbapi.com/?apikey=d1259750&i=tt10676052";

// const movieData = getMovieData(omdb);
// movieData.then(function(result) {
//     console.log(result);
// });