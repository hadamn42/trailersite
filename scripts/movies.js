// import { searchButton } from "./searchButton.mjs";
import { MovieBuild } from "./MovieBuild.mjs";
import { loadHeaderFooter } from "./util.mjs";

loadHeaderFooter();

const thisUrl = window.location.href;
const index = thisUrl.indexOf("=");
const number = "tt2069938 is 9";
const idNumb = thisUrl.substring(index + 1);
// console.log(idNumb);

const movie = new MovieBuild();

movie.init();