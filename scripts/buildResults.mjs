import { renderTemplate } from "./util.mjs";

// the Template of the search results
function resultsTemplate(result){
    return `<li class="result-card">
        <a href="../movies/index.html?movie=${result.imdbID}" id = "${result.imdbID}">
            <div class = "poster">
                <img
                    src="${result.Poster}"
                    onError="this.onerror=null;this.src='../images/noimage.jpg';this.alt='Created by clamchowder';"
                    alt="${result.Title}"/>
            </div> 
            <div class = "result-info">
                <h3>${result.Title}</h3>
            </div>
        </a>
    </li>
    `;
}

// function to add the resutls already created into a list into the parent HTML
export function resultConstruct(list){

    // calls the parent HTML
    const parentHTML = document.getElementById("results-list");

    // calls the function to run the array of results into the appropriate template, 
    // then add those results into the parent HTML
    renderTemplate(resultsTemplate, list, parentHTML, "true");

}