import { getMovieData } from "./util.mjs";

function movieTemplate(result){
    return `<section id="movie-container">
    <div id = "movie-posters"><img
        src="${result.Poster}"
        onError="this.onerror=null;this.src='../images/noimage.jpg';this.alt='Created by clamchowder';"
        alt="${result.Title}"/></div>
    <div id="movie-table">
        <p class="movie-left">Title</p> <p class="movie-right">${result.Title}</p>
        <p class="movie-left">Release Date</p> <p class="movie-right">${result.Released}</p>
        <p class="movie-left">Plot Summary</p> <div id="movie-summary"><p class="movie-right">${result.Plot}</p></div>
        <p class="movie-left">Rated</p> <p class="movie-right">${result.Rated}</p>
        <p class="movie-left">Run Time</p> <p class="movie-right">${result.Runtime}</p>
        <p class="movie-left">Main Cast</p> <p class="movie-right">${result.Actors}</p>
        <p class="movie-left">Director</p> <p class="movie-right">${result.Director}</p>
        <p class="movie-left">Writer</p> <p class="movie-right">${result.Writer}</p>
    </div>
    </section>
    `;
}

function buildUrl() {
    const thisUrl = window.location.href;
    const index = thisUrl.indexOf("=");
    const finalString = thisUrl.substring(index + 1);
    return  "https://www.omdbapi.com/?apikey=d1259750&plot=full&i=" + finalString;
}

export function infoBuild() {
    const reqUrl = buildUrl();
    const movieDato = getMovieData(reqUrl);
    movieDato.then(function(result){
        createPage(result);
        // console.log(result);
    });
}

function createPage(info){
    const parentElement = document.getElementById("info-block");
    const movieHtml = movieTemplate(info);
    parentElement.innerHTML = movieHtml;
}

export class MovieBuild {
    init() {
        infoBuild();
    }
}