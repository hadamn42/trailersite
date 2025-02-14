
import { MovieBuild } from "./MovieBuild.mjs";
import { HeaderFooter } from "./HeaderFooter.mjs";


const loaderHeaderFooter = new HeaderFooter(false);
loaderHeaderFooter.init();


const movie = new MovieBuild();

movie.init();