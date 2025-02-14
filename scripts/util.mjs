import { searchButton } from "./searchButton.mjs";

// function to get the trailers 
export async function getTrailers(url, trailerType = "latest"){
    const setUrl = url + trailerType + "?language=en";
    const headerName = document.getElementById("trailers-title");

    // Set up to show whether it is latest or trending trailers
    headerName.innerHTML= trailerType.charAt(0).toUpperCase() + trailerType.slice(1) + " Trailers";
    // kinocheck uses this kind of fetch request
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



export function renderWithTemplate (temp, parentElement) {
    parentElement.innerHTML = temp;
  }

  async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template;
  }