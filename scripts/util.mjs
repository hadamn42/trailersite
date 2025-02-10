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
    const htmlString = list.map(templateFn);
    if (clear){
        parentElement.innerHTML = "";
    }
    parentElement.insertAdjacentHTML("afterbegin", htmlString.join(""));
}