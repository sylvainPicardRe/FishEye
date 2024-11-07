class Likes{
    constructor(allLikes, price){
        this._allLikes = allLikes;
        this._price = price;
    }

    createAllLikesDOM(){
        const div = document.createElement( 'div' );
        div.setAttribute('class', 'likes-price')
        
        const divAllLikes = document.createElement( 'div' );
        divAllLikes.setAttribute('class', 'all-likes-content')
        const divPrice = document.createElement( 'div' );
        
        const pAllLikes = document.createElement( 'p' );
        pAllLikes.textContent = this._allLikes;
        
        const i = document.createElement( 'i' );
        i.setAttribute('class', 'fa-solid fa-heart');
        
        const pPrice = document.createElement( 'p' );
        pPrice.textContent = `${this._price}€ / jour`;
        
        divAllLikes.appendChild(pAllLikes);
        divAllLikes.appendChild(i);
        
        divPrice.appendChild(pPrice);
        
        div.appendChild(divAllLikes);
        div.appendChild(divPrice);
        
        return div;
    }
}