import { PhotographersApi } from "../Api/Api.js";
import { Photographer } from "../models/Photographer.js";
import { PhotographerCard } from "../templates/PhotographerCard.js";

class IndexPage {
	constructor() {
		// Get data
		this.photographersApi = new PhotographersApi("./assets/json/FishEyeData.json");
		// Get element
		this.photographersListWrapper = document.querySelector(".photographer_section");
	}
	// Render photographer list
	async photographer() {
		const photographerData = await this.photographersApi.getPhotographers();
		photographerData
			.map((photographer) => new Photographer(photographer))
			.forEach((photographer) => {
				const template = new PhotographerCard(photographer);
				this.photographersListWrapper.appendChild(template.createPhotographerCard());
			});
	}
}

const index = new IndexPage();