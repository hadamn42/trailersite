export function playButton() {
    const trailerLink = document.querySelectorAll(".player-button");
    const palyer = document.getElementById("player");
    const trial1 = document.querySelector("a");
    trailerLink.forEach((button) => {
        button.addEventListener("click", (event) => {
            // buttonId = button.id;
            // console.log(button.id);
            event.preventDefault();
            palyer.classList.replace("hide", "show");
            const newSrc= button.id;
            console.log(newSrc);
            const playerHtml = trailerHtml(newSrc);
            palyer.innerHTML = playerHtml;

    });
  });
}

function trailerHtml(trailerId){
    return `<iframe width="1280" height="640" 
    src= "https://www.youtube.com/embed/${trailerId}" 
    title="this DEEP BLACK CRACK … is a BIG problem for CRAIGIE BOY!" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}