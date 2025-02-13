import { getStorage, loadHeaderFooter } from "./util.mjs";
import { searchButton } from "./searchButton.mjs";
import { resultConstruct } from "./buildResults.mjs";


const resultList = JSON.parse(getStorage("search"));
// console.log(resultList);
resultConstruct(resultList);
loadHeaderFooter();
// searchButton();