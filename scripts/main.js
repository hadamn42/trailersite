import { getMovieData, getTrailers } from "./util.mjs"
import { trailerConstruct } from "./TrailerBlock.mjs";
import { switchButton } from "./trailerSwitch.mjs";
// import { playButton } from "./trailerPlay.mjs";


// const url = "https://api.kinocheck.com/trailers/trending?language=en";
const url = "https://api.kinocheck.com/trailers/";
// const test2 = "?language=en";
// const movieUrl = "https://api.kinocheck.com/movies?imdb_id=tt10676052&language=en";
// const trailerUrl = "https://api.kinocheck.com/trailer/jt9q/the-fantastic-four-first-steps-trailer-2025-marvel";
// const apiKey = 'YOUR_API_KEY';

const trailers = getTrailers(url);
trailers.then(function(result) {
    
    const array = Object.values(result);
    
    // console.log(array[0].thumbnail);
    array.splice(25, 1);
    // console.log(array);
    trailerConstruct(array);
});

switchButton();


