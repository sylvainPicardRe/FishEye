class App {
    constructor(){
        this.page;
    }

    async main(){
        // const data = await this.photographersApi.get();
        // const photographersData = data.photographers;
        
        const currentPage = window.location.pathname;
        if(currentPage.includes('/photographer.html')){
            this.page = new PhotographerPage
        } else {
            this.page = new HomePage
        }

        this.page.init();
        
        // if(currentPage.includes('/photographer.html')) {
        //     const photographerHeader = document.querySelector('.photographer_header');
        //     const photographerMedia = document.querySelector('.medias-wrapper');
            
        //     const contactHeader = document.querySelector('.contact_header');
            
        //     const carouselWrapper = document.querySelector('.carousel');

        //     let params = new URL(document.location).searchParams;
        //     let photographerId = parseInt(params.get('id'));
            
        //     const photographerData = await this.photographersApi.getPhotographer(photographerId);
        //     this.price = photographerData.price
            
        //     const photographer = new Photographer(photographerData) 
        //     const Template = new PhotographerTemplate(photographer);
        //     photographerHeader.appendChild(
        //         Template.createUserHeader()
        //     )

        //     contactHeader.appendChild(
        //         Template.getUserName()
        //     )

        //     const mediasData = data.media;
        //     let i = 0;
        //     mediasData
        //     .map(media => new MediasFactory(media))
        //     .forEach(media => {
        //         if(media.photographerId === photographerId){
        //             this.mediasArray.push(media)
        //             this.allLikes += media._likes
        //             const Template = new MediaTemplate(media);

        //             photographerMedia.appendChild(
        //                 Template.createMediaCard(i)
        //             )
        //             carouselWrapper.appendChild(
        //                 Template.createCarouselCard(i)
        //             )
        //             i++;                    
        //         }
        //     })
            
        //     const TemplateLikes = new Likes(this.allLikes, this.price);
        //     carousel();
        //     this.allLikesWrapper.appendChild(TemplateLikes.createAllLikesDOM());

        //     const likes = document.querySelectorAll('.like')
            
        //     likes.forEach(like => {
        //         like.addEventListener('click', ()=> {
        //             const allLikes = document.querySelector('.all-likes-content') 
        //             let pAllLikes = allLikes.children[0];
        //             const likeCount = like.querySelector('.like-counter');
        //             const id = like.getAttribute('data-id')
        //             let currentCount = parseInt(likeCount.textContent)

        //             const mediaElement = this.mediasArray.filter((media) => media.id == id)[0];

        //             if(mediaElement.canLike){
        //                 mediaElement.addLikes(1);
        //                 mediaElement.setCanLike(false);
        //                 currentCount += 1;
        //                 this.allLikes += 1;
                        
        //             } else {
        //                 mediaElement.deleteLikes(1);
        //                 mediaElement.setCanLike(true);
        //                 this.allLikes -= 1;
        //                 currentCount -= 1;
        //             }

        //             pAllLikes.textContent = this.allLikes;
        //             likeCount.textContent = currentCount;
        //         })
        //     })

        //     document.getElementById("sort-select").addEventListener("change", (event) => {
        //         sortMedias(event.target.value, this.mediasArray);
        //     });

        // } else {
        //     const photographerSection = document.querySelector('.photographer_section');
        //     photographersData
        //     .map(photographer => new Photographer(photographer))
        //     .forEach(photographer => {
        //         const Template = new PhotographerTemplate(photographer);
        //         photographerSection.appendChild(
        //             Template.createUserCard()
        //         );
        //     });
        // }
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
