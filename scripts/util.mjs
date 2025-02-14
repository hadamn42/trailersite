import { searchButton } from "./searchButton.mjs";

export async function getTrailers(url, trailerType = "latest"){
    const setUrl = url + trailerType + "?language=en";
    const headerName = document.getElementById("trailers-title");
    headerName.innerHTML= trailerType.charAt(0).toUpperCase() + trailerType.slice(1) + " Trailers";
    // console.log(setUrl)
    const response = await fetch(setUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // 'X-Api-Key': apiKey,
            // 'X-Api-Host': 'api.kinocheck.com'
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

export async function getMovieData(url){
    const response = await fetch(url);

    const data = await convertToJson(response);
    // console.log(data);
    return data;
}

export function renderTemplate(templateFn, list, parentHTML, clear = false){
    const parentElement = parentHTML;

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

export function getStorage(source){
    return localStorage.getItem(source);
}

export function setStorage(name, source){
    localStorage.setItem(name, source);
}

// export async function loadHeaderFooter(){

  
//     const headerTemp = await loadTemplate("../partials/header.html");
//     const header = document.querySelector("#header-all");
//     const footerTemp = await loadTemplate("../partials/footer.html");
//     const footer = document.querySelector("#footer-all");
  
    
  
//     renderWithTemplate(headerTemp, header);  
//     renderWithTemplate(footerTemp, footer);
//     searchButton();
//   }

export function renderWithTemplate (temp, parentElement) {
    parentElement.innerHTML = temp;
  }

  async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template;
  }