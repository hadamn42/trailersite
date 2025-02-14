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

// builds the URL to make the request to the omdb api
function buildUrl() {
    const thisUrl = window.location.href;
    const index = thisUrl.indexOf("=");
    const finalString = thisUrl.substring(index + 1);
    // it used a different api end and this worked the best
    return  "https://www.omdbapi.com/?apikey=d1259750&plot=full&i=" + finalString;
}

// Builds the movie page
export function infoBuild() {
   
    //Gets the omdgb api url
    const reqUrl = buildUrl();
   
    //requests the movie data from omdb api
    const movieDato = getMovieData(reqUrl);
   
    //the .then always seems to make this work better even when I use async
    movieDato.then(function(result){
        createPage(result);
        // console.log(result);
    });
}

//creates the movie page
function createPage(info){
    const parentElement = document.getElementById("info-block");
    
    //Sets the info in the url template
    const movieHtml = movieTemplate(info);
    parentElement.innerHTML = movieHtml;
}

// the class to be exported. I thought I would try it out
export class MovieBuild {
    init() {
        infoBuild();
    }
}