import { getTrailers } from "./util.mjs"
import { trailerConstruct } from "./TrailerBlock.mjs";

//switches between the latest trailers and trending trailers from kinocheck
export function switchButton(){
    //grabs the button's id. I switched classes because I'm weird. 
    const button = document.getElementById("switch");
   
   //url of the kinocheck api. will work for both
    const url = "https://api.kinocheck.com/trailers/";
   
    button.addEventListener("click", function(){
        
        //checks to see whether the class is latest or trending
        // default is latest
        if(this.className=="latest"){

            //gets the object that contains all the objects
            const trailers = getTrailers(url, "trending");
            
            // the .then is something I saw in the kino check api
            // I've always had issue with async funcitons not working
            // 100% of the time. but adding this afterwards and 0 issues
            trailers.then(function(result) {
                
                //this changes the object of objects into a useable array
                const array = Object.values(result);
                
                // console.log(array[0].thumbnail);
                // the last array object is some information and not a trailer
                // So it gets removed
                array.splice(25, 1);
                // console.log(array);
                //contrstucts the trailer stuff
                trailerConstruct(array, "true");
            });

            // replaces the class to the new class
            button.classList.replace("latest", "trending");
        }else{

            // repeat, but changes to latest instead of trending
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