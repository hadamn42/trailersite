import { getMovieData, setStorage, getStorage } from "./util.mjs";

const omdbUrl = "https://www.omdbapi.com/?apikey=d1259750&s=";

export function searchButton() {
    // const sb = document.getElementById("button-search");
    const form = document.getElementById("search-section");
    const searchData = document.getElementById("search-bar");
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
   



        const movieReq = prepSearch(searchData.value);
        const searchUrl = omdbUrl + movieReq;

        const searchResults = getMovieData(searchUrl);
        searchResults.then(function(results){
            let testResults = results.Search
            
            if (testResults === undefined){
                testResults = "none";
            }   
            const rexults = JSON.stringify(testResults);
            setStorage("search", rexults);
            // const test = getStorage("search");
            // const readable = JSON.parse(test);
            // console.log(readable);
            window.location.href = "../search/index.html";

        });
        
        
    });
}

function prepSearch(data) {
    return data.replace(/ /g, "+");
}