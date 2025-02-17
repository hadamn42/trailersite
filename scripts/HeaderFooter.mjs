import { renderWithTemplate } from "./util.mjs";
import { searchButton } from "./searchButton.mjs";

// creates the header and footer
export class HeaderFooter {
    constructor(main){
        
        // some of the header stuff doesn't work calling the files because it is on a different level.
        // This boolean helps reslove this
        this.main = main;
    }
    
    init(){
        let header;
        // main header has different paths needed, so I have it using a different template.
        // easier than trying to make more complicated code
        if (this.main == true){
            // calls the function to get the header for the main page
            header = theHeaderMain();
        }else{

            // calls the function to get the header on the other pages
            header = theHeader();
        }

        // calls the function to get the footer
        let footer = theFooter();
        
        // calls the function to add the header and footer
        // also adds the search button functionality
        // search button functionality has the same issue
        // so we need to add this boolean to the search function
        loadHeaderFooter(header, footer, this.main);        
    }
    

}

// adds the header and footer to the page
// also activates the search button (listener)
function loadHeaderFooter(headerTemp, footerTemp, main){

  
    // gets the header and footer for insertion
    const header = document.querySelector("#header-all");
    
    const footer = document.querySelector("#footer-all");
  
    
    // functions that build the header and the footer
    renderWithTemplate(headerTemp, header);  
    renderWithTemplate(footerTemp, footer);
    
    // calls the search button's functionality after the header is built
    // the search feature is in the header, so this makes sense
    searchButton(main);
  }

// returns the header for the main page
function theHeaderMain() {
    return `<a href="./index.html">
    <h1>Trailer Center</h1>
    </a>
    <form id="search-section">

            <input type="text" name="searchBar" id="search-bar" placeholder="search movie titles" title="search-bar"> 
            <button id="button-search" type="submit">
                <img src="./images/magnifying.svg" alt="Created by Daniel Bruce" id="search-icon"/>
            </button>

    </form>`;

}

// returns the footer for all pages
function theFooter(){
    return `&copy;2025 Adam Neil Humes | Created for WDD330`;
}


// returns the header for all other pages
function theHeader() {
    return `<a href="../index.html">
    <h1>Trailer Center</h1>
    </a>
    <form id="search-section">
        <input type="text" name="searchBar" id="search-bar" placeholder="search movie titles" title="search-bar">  
        <button id="button-search" type="submit">
            <img src="../images/magnifying.svg" alt="Created by Daniel Bruce" id="search-icon"/>
        </button>
    </form>`;
}