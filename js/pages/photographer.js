class PhotographerPage {
    constructor() {
        this.photographerWrapper = document.querySelector('.photograph-header');
        this.mediasWrapper = document.querySelector('.photograph-medias');
        this.lighboxWrapper = document.querySelector('.lighbox-modal');

        this.photographersApi = new PhotographerApi('./assets/data/photographers.json');
        this.mediasApi = new MediaApi('./assets/data/photographers.json');
    }
}