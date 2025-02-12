import { renderTemplate } from "./util.mjs";
import { playButton } from "./trailerPlay.mjs";


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

export function trailerConstruct(list, clear="false"){
    const parentHTML =document.getElementById("trailer-list");
    renderTemplate(trailerTemplate, list, parentHTML, clear);
    playButton();
}