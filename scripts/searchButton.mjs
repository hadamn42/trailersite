import { getMovieData, setStorage } from "./util.mjs";

// the API address we are requesting from
// there's probably a safer way to use the API key
// but they didn't want that.
const omdbUrl = "https://www.omdbapi.com/?apikey=d1259750&s=";


//the main1 arguement explained later on when used
export function searchButton(main1) {

    const form = document.getElementById("search-section");
    const searchData = document.getElementById("search-bar");
    
    // form event listener. submit is best listener
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
   


        // prepares the search value to be entered into the url
        const movieReq = prepSearch(searchData.value);
        
        //creates the request url using the search value and the base api
        const searchUrl = omdbUrl + movieReq;

        //submits the results
        const searchResults = getMovieData(searchUrl);
        
        //tests and stores the search results so they can be used later
        searchResults.then(function(results){
            let testResults = results.Search
            
            //tests the search results to see if invalid
            if (testResults === undefined){
                testResults = "none";
            }
            
            // stores the data regardless
            const rexults = JSON.stringify(testResults);
            setStorage("search", rexults);


            // because accessing the correct page is different on the main page, I came up with these to change them properly
            //main1 is a boolean that describes whether this request comes from the main page
            if(main1 == true){
                window.location.href = "./search/index.html";
            }else{
                window.location.href = "../search/index.html";
            }
        });
        
        
    });
}

//replaces spaces with + to prepare for seraching more than one word
function prepSearch(data) {
    return data.replace(/ /g, "+");
}