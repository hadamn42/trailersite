
import { MovieBuild } from "./MovieBuild.mjs";
import { HeaderFooter } from "./HeaderFooter.mjs";

// creates the header and footer for the page.
//false for it this not being the main page
const loaderHeaderFooter = new HeaderFooter(false);
loaderHeaderFooter.init();

// creates the movie info on the page
const movie = new MovieBuild();
movie.init();