class App {
    constructor(){
        this.mainWrapper = document.getElementById("main");
        this.allLikesWrapper = document.getElementById("all-likes");
        this.photographersApi = new PhotographerApi('./assets/data/photographers.json');
        this.allLikes = 0;
        this.price = 0;
        this.mediasArray = []
        this.currentLike;
        this.canLike = true;
    }

    async main(){

        const data = await this.photographersApi.get();
        const photographersData = data.photographers;
        
        const currentPage = window.location.pathname;
        
        if(currentPage.includes('/photographer.html')) {
            const photographerMedia = document.createElement('div');
            photographerMedia.setAttribute('class', 'photographer_media thumbnails');
            
            const contactHeader = document.querySelector('.contact_header');
            
            const carouselWrapper = document.querySelector('.carousel');

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
                    this.mediasArray.push(media)
                    this.allLikes += media._likes
                    const Template = new MediaTemplate(media);

                    photographerMedia.appendChild(
                        Template.createMediaCard(i)
                    )
                    carouselWrapper.appendChild(
                        Template.createCarouselCard(i)
                    )
                    i++;                    
                }
            })
            
            const TemplateLikes = new Likes(this.allLikes, this.price);
            carousel();
            this.mainWrapper.appendChild(photographerMedia);
            this.allLikesWrapper.appendChild(TemplateLikes.createAllLikesDOM());

            const likes = document.querySelectorAll('.like')
            likes.forEach(like => {
                like.addEventListener('click', ()=> {
                    const allLikes = document.querySelector('.all-likes-content') 
                    let pAllLikes = allLikes.children[0];
                    const likeCount = like.querySelector('.like-counter');
                    const id = like.getAttribute('data-id')
                    let currentCount = parseInt(likeCount.textContent)
                    let mediaElement = {}
                    this.mediasArray.forEach((media, index)=>{
                        if(id == index){
                            mediaElement = media
                        }
                    })
                    if(mediaElement.canLike){
                        mediaElement.likes = 1;
                        mediaElement.canLike = false
                        currentCount += 1;
                        this.allLikes += 1
                        pAllLikes.textContent = this.allLikes;
                        likeCount.textContent = currentCount;
                    } else {
                        mediaElement.likes = -1
                        mediaElement.canLike = true
                        this.allLikes -= 1
                        currentCount -= 1;
                        pAllLikes.textContent = this.allLikes;
                        likeCount.textContent = currentCount;
                    }
                })
            })

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
