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


// function sortMedias(critere, tab){
//     let sortMedias;

//     if(critere === 'date'){
//         sortMedias = tab.sort((a, b) => new Date(a.date) - new Date(b.date));
//     } else if(critere === 'titre'){
//         sortMedias = tab.sort((a, b) => a.title.localeCompare(b.title));
//     } else {
//         sortMedias = tab
//     }

//     afficherMedias(sortMedias) 
// }

// function afficherMedias(Medias) {
//     const photoList = document.querySelector(".medias-wrapper");
//     photoList.innerHTML = ''; // Réinitialiser la liste

//     console.log(Medias)
}

const app = new App();
app.main();
