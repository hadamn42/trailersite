import { getTrailers } from "./util.mjs"
import { trailerConstruct } from "./TrailerBlock.mjs";

export function switchButton(){
    const button = document.getElementById("switch");
    const url = "https://api.kinocheck.com/trailers/";
    button.addEventListener("click", function(){
        if(this.className=="latest"){
            const trailers = getTrailers(url, "trending");
            trailers.then(function(result) {
                
                const array = Object.values(result);
                
                // console.log(array[0].thumbnail);
                array.splice(25, 1);
                // console.log(array);
                trailerConstruct(array, "true");
            });
            button.classList.replace("latest", "trending");
        }else{
            const trailers = getTrailers(url, "latest");
            trailers.then(function(result) {
                
                const array = Object.values(result);
                
                // console.log(array[0].thumbnail);
                array.splice(25, 1);
                // console.log(array);
                trailerConstruct(array, "true");
            });
            button.classList.replace("trending", "latest");
        }
    });

}