class Api {
    /**
     * 
     * @param {string} url
     */

    constructor(url) {
        this._url = url;
    }

    async get(){
        try {
            const res = await fetch(this._url);
            const data = await res.json();
            return data
        } catch(err) {
            console.log('erreur', err);
            return [];
        }
    }
}

class PhotographerApi extends Api {
    /**
     * 
     * @param {string} url
     */
    constructor(url) {
        super(url);
    }

    async getPhotographers() {
        return await this.get();
    }

    // async getPhotographer(photographerId){
    //     try {
    //         const result = await this.getPhotographers();
    //         const photographer = result.photographers.find(p => p.id === photographerId);
    //         return photographer;
    //     } catch(err) {
    //         console.log('erreur', err);
    //         return [];
    //     }
    // }
}

class PhotographerApi extends Api {
    /**
     * 
     * @param {string} url
     */
    constructor(url) {
        super(url);
    }

    async getPhotographers() {
        return await this.get();
    }

    // async getPhotographer(photographerId){
    //     try {
    //         const result = await this
}