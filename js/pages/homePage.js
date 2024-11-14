class HomePage{
    constructor(){
        this.photographersApi = new PhotographerApi('./assets/data/photographers.json');
        this.photographersArray = []
        this.mediasArray = []
    }

    async getPhotographers() {
        const data = await this.photographersApi.get();
        const photographersData = data.photographers

        return photographersData
    }

	async displayData() {
        const photographerSection = document.querySelector('.photographer_section');
        this.photographersArray
        .map(photographer => new Photographer(photographer))
            .forEach(photographer => {
                const Template = new PhotographerTemplate(photographer);
                photographerSection.appendChild(
                    Template.createUserCard()
                );
            });    
	}

	async init(){
		this.photographersArray = await this.getPhotographers()
        this.displayData()
	}
}