import { getMovieData, getTrailers } from "./util.mjs"
import { trailerConstruct } from "./TrailerBlock.mjs";
import { switchButton } from "./trailerSwitch.mjs";
import { searchButton } from "./searchButton.mjs";

const url = "https://api.kinocheck.com/trailers/";

const trailers = getTrailers(url);
trailers.then(function(result) {
    
    const array = Object.values(result);
    
    // console.log(array[0].thumbnail);
    array.splice(25, 1);
    // console.log(array);
    trailerConstruct(array);
});

switchButton();
searchButton();


const movieSearch ="http://www.omdbapi.com/?apikey=d1259750&s=plankton";
const movieData = getMovieData(movieSearch);
// movieData.then(function(result) {
    
//     result.Search.map((item) => {
//         console.log(item);
//     });
// });
movieData.then(function(result) {
    
    // console.log(result.Search);
    const razzy = JSON.stringify(result.Search);
    // console.log(razzy);

    localStorage.setItem("search", razzy);
    const test = localStorage.getItem("search");
    const test1 = JSON.parse(test);
    // console.log(test1[0]);

});