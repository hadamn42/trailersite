import { renderWithTemplate } from "./util.mjs";
import { searchButton } from "./searchButton.mjs";

export class HeaderFooter {
    constructor(main){
        this.main = main;
    }
    
    init(){
        let header;
        // main header has different paths needed, so I have it using a different template.
        // easier than trying to make more complicated code
        if (this.main == true){
            header = theHeaderMain();
        }else{
            header = theHeader();
        }

        let footer = theFooter();
        loadHeaderFooter(header, footer, this.main);        
    }
    

}

function loadHeaderFooter(headerTemp, footerTemp, main){

  
    
    const header = document.querySelector("#header-all");
    
    const footer = document.querySelector("#footer-all");
  
    
  
    renderWithTemplate(headerTemp, header);  
    renderWithTemplate(footerTemp, footer);
    searchButton(main);
  }

function theHeaderMain() {
return `<a href="./index.html">
<h1>Trailer Center</h1>
</a>
<form id="search-section">
    <label class="hide>Search</label>
    <input type="text" name="searchBar" id="search-bar" placeholder="search movie titles">  
    <button id="button-search" type="submit">
        <img src="./images/magnifying.svg" alt="Created by Daniel Bruce" id="search-icon"/>
    </button>
</form>`;

}

function theFooter(){
    return `&copy;2025 Adam Neil Humes | Created for WDD330`;
}

function theHeader() {
    return `<a href="../index.html">
    <h1>Trailer Center</h1>
    </a>
    <form id="search-section">
        <label class="hide>Search</label>
        <input type="text" name="searchBar" id="search-bar" placeholder="search movie titles">  
        <button id="button-search" type="submit">
            <img src="../images/magnifying.svg" alt="Created by Daniel Bruce" id="search-icon"/>
        </button>
    </form>`;
}