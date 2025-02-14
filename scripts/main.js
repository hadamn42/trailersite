import { getMovieData, getTrailers } from "./util.mjs"
import { trailerConstruct } from "./TrailerBlock.mjs";
import { switchButton } from "./trailerSwitch.mjs";
import { HeaderFooter } from "./HeaderFooter.mjs";


const loaderHeaderFooter = new HeaderFooter(true);
loaderHeaderFooter.init();

const url = "https://api.kinocheck.com/trailers/";

const trailers = getTrailers(url);
trailers.then(function(result) {
    
    const array = Object.values(result);
    
    array.splice(25, 1);
    // console.log(array);
    trailerConstruct(array);
});

switchButton();