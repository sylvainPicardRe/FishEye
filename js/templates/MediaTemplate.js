class MediaTemplate {
    constructor(media){
        this._media = media;
    }

    createMediaCard() {
        const divCard = document.createElement( 'div' );
        divCard.setAttribute('class', 'media_card');

        divCard.innerHTML = this._media.src;

        const titleCard = document.createElement( 'p' );
        titleCard.textContent = this._media.title;

        const likesCard = document.createElement( 'p' );
        likesCard.textContent = this._media.likes;

        const i = document.createElement( 'i' );
        i.setAttribute('class', 'fa-solid fa-heart');
        
        const divLikes = document.createElement( 'div' );
        divLikes.setAttribute('class', 'like');

        divLikes.appendChild(likesCard);
        divLikes.appendChild(i);

        const divInfoCard = document.createElement( 'div' );
        divInfoCard.setAttribute('class', 'infos_card');
        
        divInfoCard.appendChild(titleCard);
        divInfoCard.appendChild(divLikes);

        divCard.appendChild(divInfoCard);

        return divCard
        

    }
}
