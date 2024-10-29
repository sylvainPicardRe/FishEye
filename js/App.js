class App {
    constructor(){
        this.main = document.getElementById('main');
        this.photographersApi = new PhotographersApi('/data/photographers.json');
    }

    async main(){
        const photographersData = await this.photographersApi.getPhotographers();

        photographersData
            .map(photographer => new Photographer(photographer))
            .forEach(photographer => {
                const Template = new PhotographerCard(photographer)
                this.main.appendChild(
                    Template.createPhotographerCard()
                )
            });
    }    
}

const app = new App()
app.main()