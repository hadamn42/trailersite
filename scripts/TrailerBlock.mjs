import { renderTemplate } from "./util.mjs";

function trailerTemplate(trailer){
    return `<li class="trailer-card">
        <a href="../trailers/index.html?trailer=${trailer.id}">
         <div class="title-box"><img
            src="${trailer.thumbnail}"
            alt="${trailer.title}"
            />
       <h2 class="movie-title">${trailer.title}</h2></div>
        </a>
    </li>
    `;
}

export function trailerConstruct(list){
    const parentHTML =document.getElementById("trailer-list");
    renderTemplate(trailerTemplate, list, parentHTML);
    
}