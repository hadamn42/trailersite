import { renderTemplate } from "./util.mjs";

function resultsTemplate(result){
    return `<li class="result-card">
        <a href="./movies/index.html?movie=${result.imdbID}" id = "${result.imdbID}">
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

export function resultConstruct(list){
    const parentHTML = document.getElementById("results-list");
    renderTemplate(resultsTemplate, list, parentHTML, "true");

}