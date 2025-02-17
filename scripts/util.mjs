import { searchButton } from "./searchButton.mjs";

// function to get the trailers 
export async function getTrailers(url, trailerType = "latest"){
    
    // builds the call url. probably didn't need the url as an argument. 
    const setUrl = url + trailerType + "?language=en";
    
    //grabs the title to let us know what we're looking at (latest or trending)
    const headerName = document.getElementById("trailers-title");

    // Set up to show whether it is latest or trending trailers
    headerName.innerHTML= trailerType.charAt(0).toUpperCase() + trailerType.slice(1) + " Trailers";
    
    // kinocheck uses this kind of fetch request\
    // omdb does not, whcih is why I didn't set up a single fetch
    // function for both to use.
    const response = await fetch(setUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });

    const data = await convertToJson(response);
    // console.log(data);
    return data;
}

// basic convert to JSON request
async function convertToJson(res) {
    if (res.ok){
        const yes = await res.json();
        return yes;
    } else {
        throw new Error('Network response was not ok ' + res.statusText);
    }
}

// function to call omdb API. doesn't use headers so I had to use a different function
export async function getMovieData(url){
    const response = await fetch(url);

    const data = await convertToJson(response);
    // console.log(data);
    return data;
}


//renders the template of whatever into the HTML of the page.
//both for the trailer and the search results
export function renderTemplate(templateFn, list, parentHTML, clear = false){
    const parentElement = parentHTML;

    // to prevent an error when a search returns nothing
    if (list === "none"){
        parentElement.innerHTML = "<p>No results returned.</p>";

    }else{
        const htmlString = list.map(templateFn);
        if (clear){
            parentElement.innerHTML = "";
        }
        parentElement.insertAdjacentHTML("afterbegin", htmlString.join(""));
    }
}


// getting and storing stuff from the local source to create the movie's page from the search results
export function getStorage(source){
    return localStorage.getItem(source);
}

export function setStorage(name, source){
    localStorage.setItem(name, source);
}


// adds the template html to the parent element
export function renderWithTemplate (temp, parentElement) {
    parentElement.innerHTML = temp;
  }

