class MediaVideo {
    constructor(data) {
        this._id = data.id;
        this._photographerId = data.photographerId
        this._title = data.title
        this._video = data.video
        this._likes = data.likes
        this._date = data.date
        this._price = data.price
        this._canLike = true
    }
    
    get id() {
        return this._id
    }

    get photographerId() {
        return this._photographerId
    }

    get title() {
        return this._title
    }

    get video() {
        return this._video
    }

    get type() {
        return 'video'
    }

    get src() {
        return `<video><source src="./assets/images/medias/${this._video}"></video>`
    }

    get likes() {
        return this._likes
    }

    get date() {
        return this._date
    }

    get price() {
        return this._price
    }
    set likes(like) {
        this._likes += like; 
    }
    
    set canLike(bool){
        if(!bool){
            this._canLike = false
        } else {
            this._canLike = true
        }
    }
}