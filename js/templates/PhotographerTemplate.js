class PhotographerTemplate {
    constructor(photographer){
        this._photographer = photographer;
    }

    createUserCard() {
        const article = document.createElement('article');

        const img = document.createElement( 'img' );
        img.setAttribute("src", this._photographer.portrait);
        img.setAttribute("alt",  this._photographer.name);

        const h2 = document.createElement( 'h2' );
        h2.textContent = this._photographer.name;

        const a = document.createElement( 'a' );
        a.setAttribute("href",  this._photographer.url);
        a.appendChild(img);
        a.appendChild(h2);

        const h3 = document.createElement( 'h3' );
        h3.setAttribute("class", "margin-small font-size-small");
        h3.textContent = this._photographer.localisation;

        const description = document.createElement( 'p' );
        description.setAttribute("class", "margin-small font-size-small");
        description.textContent = this._photographer.tagline;

        const pricing = document.createElement( 'p' );
        pricing.setAttribute("class", "margin-small font-size-small pricing");
        pricing.textContent = this._photographer.price + "€/jour";
        
        article.appendChild(a);
        article.appendChild(h3);
        article.appendChild(description);
        article.appendChild(pricing);
        return (article);
    }
}