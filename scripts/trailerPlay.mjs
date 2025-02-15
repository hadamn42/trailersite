
// opens the trailer player with the appropriate video
export function playButton() {
    //we select all the trailer cards because they all have that class
    const trailerLink = document.querySelectorAll(".player-button");
    //ID of the hidden player
    const palyer = document.getElementById("player");
    
    //iterates through and listens to everything with the .player-button class
    //this was the easiest way to listen to them all that I have found 
    trailerLink.forEach((button) => {
        button.addEventListener("click", (event) => {

            // console.log(button.id);
            //prevents the <a> tag from working
            event.preventDefault();
            
            //changes the player class to show so we can see the player
            palyer.classList.replace("hide", "show");
            
            //the button's id is the youtube video id
            const newSrc= button.id;
            // console.log(newSrc);
            
            // puts the youtube video id into some template code to build the iframe with the appropriate video
            const playerHtml = trailerHtml(newSrc);
            
            // adds the iframe HTML to the player
            palyer.innerHTML = playerHtml;

    });
  });
}

function trailerHtml(trailerId){
    return `<iframe  
    src= "https://www.youtube.com/embed/${trailerId}" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}