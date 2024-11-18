import { HomePage } from "./pages/homePage.js";
import { PhotographerPage } from "./pages/photographerPage.js";

class App {
    constructor(){
        this.page;
    }

    async main(){
        const currentPage = window.location.pathname;
        if(currentPage.includes('/photographer.html')){
            this.page = new PhotographerPage
        } else {
            this.page = new HomePage
        }

        this.page.init();
    }    
}

const app = new App();
app.main();
