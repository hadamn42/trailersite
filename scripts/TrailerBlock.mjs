import { renderTemplate } from "./util.mjs";
import { playButton } from "./trailerPlay.mjs";

// returns the template HTML
function trailerTemplate(trailer){
    return `<li class="trailer-card">
        <a href="#" id = "${trailer.youtube_video_id}" 
            class="player-button">
         <div class="title-box"><img
            src="${trailer.thumbnail}"
            alt="${trailer.title}"
            />
            <p class="movie-title">${trailer.title}</p></div>
        </a>
    </li>
    `;
}


//builds the trailer list for the main page.
// list is the list of information
//clear is whether we need to clear the HTML content default is no because the main is blank on creation
export function trailerConstruct(list, clear="false"){
    const parentHTML =document.getElementById("trailer-list");
    
    // builds the the trailer using the template and necessary information
    renderTemplate(trailerTemplate, list, parentHTML, clear);
    
    //ensures that the <a> tage used does not open a new link but instead makes the 
    //player open for that specific trailer
    playButton();
}