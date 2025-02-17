import { getStorage } from "./util.mjs";
import { resultConstruct } from "./buildResults.mjs";
import { HeaderFooter } from "./HeaderFooter.mjs";

// creates the header and footer for the page.
//false for it this not being the main page
const loaderHeaderFooter = new HeaderFooter(false);
loaderHeaderFooter.init();

// gets and parses the JSON results from local storage
const resultList = JSON.parse(getStorage("search"));
// console.log(resultList);

// takes the results from local storage and creates a list of results
resultConstruct(resultList);
