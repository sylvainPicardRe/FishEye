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

    createUserHeader() {
        const photographerHeader = document.createElement( 'div' );
        photographerHeader.setAttribute('class', 'photographer_header');

        const divInfo = document.createElement( 'div' );
        divInfo.setAttribute('class', "infos_profile");

        const divImg = document.createElement( 'div' ); 
        divImg.setAttribute('class', "image_profile");

        const divBtn = document.createElement( 'div' ); 
        divBtn.setAttribute('class', "contact");
        
        const h1 = document.createElement( 'h1' );
        h1.textContent = this._photographer.name;

        const localisation = document.createElement( 'p' );
        localisation.setAttribute("class", "localisation");
        localisation.textContent = this._photographer.localisation;

        const description = document.createElement( 'p' );
        description.setAttribute("class", "description");
        description.textContent = this._photographer.tagline;

        const buttonContact = document.createElement( 'button' );
        buttonContact.setAttribute("class", "contact_button");
        buttonContact.setAttribute("onclick", "displayModal()");
        buttonContact.textContent = "Contactez-moi";

        const img = document.createElement( 'img' );
        img.setAttribute("src", this._photographer.portrait);
        img.setAttribute("alt",  this._photographer.name);

        divInfo.appendChild(h1);
        divInfo.appendChild(localisation);
        divInfo.appendChild(description);

        divBtn.appendChild(buttonContact)

        divImg.appendChild(img);

        photographerHeader.appendChild(divInfo);
        photographerHeader.appendChild(divBtn);
        photographerHeader.appendChild(divImg);
        
        return (photographerHeader);
    }
}