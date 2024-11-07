class MediaTemplate {
    constructor(media){
        this._media = media;
    }

    createMediaCard(position) {
        const divCard = document.createElement( 'div' );
        divCard.setAttribute('class', 'media_card');
        
        const divMedia = document.createElement ('div');
        divMedia.setAttribute('onclick', `openImage(${position})`)
        
        divMedia.innerHTML = this._media.src;

        const titleCard = document.createElement( 'p' );
        titleCard.textContent = this._media.title;

        const likesCard = document.createElement( 'p' );
        likesCard.setAttribute('class', 'like-counter');
        likesCard.textContent = this._media.likes;

        const i = document.createElement( 'i' );
        i.setAttribute('class', 'fa-solid fa-heart');
        
        const divLikes = document.createElement( 'div' );
        divLikes.setAttribute('class', 'like');
        divLikes.setAttribute('data-id', `${position}`);

        divLikes.appendChild(likesCard);
        divLikes.appendChild(i);

        const divInfoCard = document.createElement( 'div' );
        divInfoCard.setAttribute('class', 'infos_card');
        
        divInfoCard.appendChild(titleCard);
        divInfoCard.appendChild(divLikes);

        divCard.appendChild(divMedia);
        divCard.appendChild(divInfoCard);

        return divCard;
    }

    createCarouselCard(position){
        const li = document.createElement( 'li' );
        li.setAttribute('class', `carousel-item item-${position}`);

        if(position > 0){
            li.style.display = "none";
        }

        const divPrevBtn = document.createElement( 'div' );
        divPrevBtn.setAttribute('role', 'button');
        divPrevBtn.setAttribute('class', 'controls controls-left');

        const divNextBtn = document.createElement( 'div' );
        divNextBtn.setAttribute('role', 'button');
        divNextBtn.setAttribute('class', 'controls controls-right');

        const spanPrevBtn = document.createElement( 'span' );
        spanPrevBtn.setAttribute('class', 'img prev-image');
        spanPrevBtn.setAttribute('aria-hidden', 'true');

        const spanNextBtn = document.createElement( 'span' );
        spanNextBtn.setAttribute('class', 'img next-image');
        spanNextBtn.setAttribute('aria-hidden', 'true');

        const iPrevBtn = document.createElement( 'i' );
        iPrevBtn.setAttribute('class', 'fa-solid fa-chevron-left');
        
        const iNextBtn = document.createElement( 'i' );
        iNextBtn.setAttribute('class', 'fa-solid fa-chevron-right');

        const divSrc = document.createElement( 'div' );
        divSrc.setAttribute('class', 'carousel-media')
        divSrc.innerHTML = this._media.src;
        
        spanPrevBtn.appendChild(iPrevBtn);
        spanNextBtn.appendChild(iNextBtn);

        divPrevBtn.appendChild(spanPrevBtn);
        divNextBtn.appendChild(spanNextBtn);

        // li.appendChild(divPrevBtn);
        li.appendChild(divSrc);
        // li.appendChild(divNextBtn);
        return li;
    }

    // TODO incrémenter le nombre de likes une seule fois 
    // TODO piste : setteur qui vérifie si le média a déjà était liker

}
