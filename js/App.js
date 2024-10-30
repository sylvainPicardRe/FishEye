class App {
    constructor(){
        this.mainWrapper = document.getElementById("main");
        this.photographersApi = new PhotographerApi('/data/photographers.json');
    }

    async main(){

        const data = await this.photographersApi.get();
        const photographersData = data.photographers;

        
        const currentPage = window.location.pathname;
        
        if(currentPage.includes('/photographer.html')) {
            const photographerMedia = document.createElement('div');
            photographerMedia.setAttribute('class', 'photographer_media');

            const contactHeader = document.querySelector('.contact_header');

            let params = new URL(document.location).searchParams;
            let photographerId = parseInt(params.get('id'));
            
            const photographerData = await this.photographersApi.getPhotographer(photographerId);
            
            const photographer = new Photographer(photographerData) 
            const Template = new PhotographerTemplate(photographer);
            this.mainWrapper.appendChild(
                Template.createUserHeader()
            )

            contactHeader.appendChild(
                Template.getUserName()
            )

            const mediasData = data.media;
            mediasData
            .map(media => new MediasFactory(media))
            .forEach(media => {
                if(media.photographerId === photographerId){
                    const Template = new MediaTemplate(media);
                    photographerMedia.appendChild(
                        Template.createMediaCard()
                    )
                }
            })
            this.mainWrapper.appendChild(photographerMedia)
        } else {
            const photographerSection = document.querySelector('.photographer_section');
            photographersData
            .map(photographer => new Photographer(photographer))
            .forEach(photographer => {
                const Template = new PhotographerTemplate(photographer);
                photographerSection.appendChild(
                    Template.createUserCard()
                );
            });
        }
        
    }    
}

const app = new App();
app.main();
