class App {
    constructor(){
        this.mainWrapper = document.getElementById('main');
        this.photographersApi = new PhotographerApi('/data/photographers.json');
    }

    async main(){
        const data = await this.photographersApi.getPhotographers();
        const photographersData = data.photographers;
        console.log(this.photographersApi.getPhotographers())
        photographersData
            .map(photographer => new Photographer(photographer))
            .forEach(photographer => {
                const Template = new PhotographerTemplate(photographer);
                this.mainWrapper.appendChild(
                    Template.createUserCard()
                );
            });
    }    
}

const app = new App();
app.main();
