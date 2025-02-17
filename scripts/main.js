import { getTrailers } from "./util.mjs"
import { trailerConstruct } from "./TrailerBlock.mjs";
import { switchButton } from "./trailerSwitch.mjs";
import { HeaderFooter } from "./HeaderFooter.mjs";

// creates the header and footer for the page.
//true for it this being the main page
const loaderHeaderFooter = new HeaderFooter(true);
loaderHeaderFooter.init();

// the API url
const url = "https://api.kinocheck.com/trailers/";

// get the list of trailers from the API
const trailers = getTrailers(url);
trailers.then(function(result) {
    
    //takes the results, which are in an object of objects
    // then turns it into an array of objects
    const array = Object.values(result);
    
    // this last object is not necessary and will cause an error, so removed
    array.splice(25, 1);
    // console.log(array);

    // takes the array and builds the trailer list
    trailerConstruct(array);
});

//creates the switch button actions to switch between the "latest" and "trending"
switchButton();