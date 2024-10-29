class App {
    constructor(){
        this.photographerSection = document.querySelector('.photographer_section');
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
                this.photographerSection.appendChild(
                    Template.createUserCard()
                );
            });
    }    
}

const app = new App();
app.main();
