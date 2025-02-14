import { getStorage } from "./util.mjs";
import { resultConstruct } from "./buildResults.mjs";
import { HeaderFooter } from "./HeaderFooter.mjs";


const loaderHeaderFooter = new HeaderFooter();
loaderHeaderFooter.init();

const resultList = JSON.parse(getStorage("search"));
// console.log(resultList);
resultConstruct(resultList);
