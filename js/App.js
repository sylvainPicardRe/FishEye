class App {
    constructor(){
        this.mainWrapper = document.getElementById("main");
        this.allLikesWrapper = document.getElementById("all-likes");
        this.photographersApi = new PhotographerApi('./assets/data/photographers.json');
        this.allLikes = 0;
        this.price = 0;
    }

    async main(){

        const data = await this.photographersApi.get();
        const photographersData = data.photographers;
        
        const currentPage = window.location.pathname;
        
        if(currentPage.includes('/photographer.html')) {
            const photographerMedia = document.createElement('div');
            photographerMedia.setAttribute('class', 'photographer_media thumbnails');

            const contactHeader = document.querySelector('.contact_header');

            const carousel = document.querySelector('.carousel');

            let params = new URL(document.location).searchParams;
            let photographerId = parseInt(params.get('id'));
            
            const photographerData = await this.photographersApi.getPhotographer(photographerId);
            this.price = photographerData.price
            
            const photographer = new Photographer(photographerData) 
            const Template = new PhotographerTemplate(photographer);
            this.mainWrapper.appendChild(
                Template.createUserHeader()
            )

            contactHeader.appendChild(
                Template.getUserName()
            )

            const mediasData = data.media;
            let i = 0;
            mediasData
            .map(media => new MediasFactory(media))
            .forEach(media => {
                if(media.photographerId === photographerId){
                    this.allLikes += media._likes
                    const Template = new MediaTemplate(media);

                    photographerMedia.appendChild(
                        Template.createMediaCard(i)
                    )
                    carousel.appendChild(
                        Template.createCarouselCard(i)
                    )
                    i++;
                    setupLikes(media)
                    
                }
            })

            this.mainWrapper.appendChild(photographerMedia);

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
        
        carousel();
        const Template = new Likes(this.allLikes, this.price);
        this.allLikesWrapper.appendChild(Template.createAllLikesDOM());
    }    
}

function setupLikes(media) {
    const likes = document.querySelectorAll('.like');
    likes.forEach((like, index) => {
        like.addEventListener('click', () => {
            media[index].likes += 1; // Augmentez le nombre de likes
            console.log(`Likes pour le média ${media[index].title}: ${media[index].likes}`);
        });
    });
}

const app = new App();
app.main();
