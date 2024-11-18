import { MediaTemplate } from "../templates/MediaTemplate.js";
import { FilterForm } from "../templates/FilterForm.js";
import { PhotographerApi } from "../Api/Api.js";
import { Photographer } from "../models/Photographer.js";
import {MediasFactory} from "../factories/MediasFactory.js";
import { PhotographerTemplate } from "../templates/PhotographerTemplate.js";
import { LikesTemplate } from "../templates/Likes.js";


export class PhotographerPage{
    constructor(){
        this.photographersApi = new PhotographerApi('./assets/data/photographers.json');
        this.photographersArray = [];
        this.mediasArray = [];
        this.photographer
        this.photographerId;
        this.allLikes;
    }

    async getPhotographerId(){
        let params = new URL(document.location).searchParams;
        let id = parseInt(params.get('id'));
        return id
    }

    async getPhotographers() {
        const data = await this.photographersApi.get();
        const photographersData = data.photographers

        return photographersData
    }

    async getPhotographer(id) {
        const photographerData = await this.photographersApi.getPhotographer(id);
        const photographer = new Photographer(photographerData) 
        return photographer
    }

    async getAllLikes() {
        let allLikes = 0;
        this.mediasArray
        .forEach((media) =>{
            if(media.photographerId === this.photographerId){
                allLikes += media.likes
            }
        });

        return allLikes 
    }

    async getMedias(photographerId) {
        const data = await this.photographersApi.get();
        const mediasData = data.media;

        let medias = [] 
        mediasData
        .map(media => new MediasFactory(media))
        .forEach((media) =>{
            if(media.photographerId === photographerId){
                medias.push(media)
            }
        }); 

        return medias;
    }

	async displayData() {
        const photographerHeader = document.querySelector('.photographer_header');
        const photographerMedia = document.querySelector('.medias-wrapper');
        const allLikesWrapper = document.getElementById("all-likes");
        const TemplatePhotographer = new PhotographerTemplate(this.photographer);
        const TemplateLikes = new LikesTemplate();
        
        // photographer header
        photographerHeader.appendChild(
            TemplatePhotographer.createUserHeader()
        )
        

        // medias gallery
        this.mediasArray.forEach((media, index) => {
            const TemplateMedias = new MediaTemplate(media)
            photographerMedia.appendChild(
                TemplateMedias.createMediaCard(index)
            )
        })

        // likes
        allLikesWrapper.appendChild(
            TemplateLikes.createAllLikesDOM(this.allLikes, this.photographer.price)
        )
        
        const likes = document.querySelectorAll('.like')

        likes.forEach(like => {
            like.addEventListener('click', ()=> {
                const allLikes = document.querySelector('.all-likes-content') 
                let pAllLikes = allLikes.children[0];
                const likeCount = like.querySelector('.like-counter');
                const id = like.getAttribute('data-id')
                let currentCount = parseInt(likeCount.textContent)

                const mediaElement = this.mediasArray.filter((media) => media.id == id)[0];

                if(mediaElement.canLike){
                    mediaElement.addLikes = 1;
                    mediaElement.canLike = false;
                    currentCount += 1;
                    this.allLikes += 1;
                    
                } else {
                    mediaElement.deleteLikes = 1;
                    mediaElement.canLike = true;
                    this.allLikes -= 1;
                    currentCount -= 1;
                }

                pAllLikes.textContent = this.allLikes;
                likeCount.textContent = currentCount;
            })
        })

        const Filter = new FilterForm(this.mediasArray)
        Filter.render()

	}

	async init(){
        this.photographersArray = await this.getPhotographers()
		this.photographerId = await this.getPhotographerId()
        this.photographer = await this.getPhotographer(this.photographerId)
		this.mediasArray = await this.getMedias(this.photographerId)
        this.allLikes = await this.getAllLikes()

        this.displayData()
	}
}