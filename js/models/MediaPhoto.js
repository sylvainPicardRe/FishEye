class MediaPhoto {
    constructor(data) {
        this._id = data.id;
        this._photographerId = data.photographerId
        this._title = data.title
        this._image = data.image
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

    get image() {
        return this._image
    }

    get type(){
        return 'img'
    }

    get src() {
        return `<img src="./assets/images/medias/${this._image}">`
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

    get canLike(){
        return this._canLike
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