import { FilterMediasAdapter } from "../adapters/FilterMediasAdapters.js"
import { MediaTemplate } from "./MediaTemplate.js"

export class FilterForm {
    constructor(Medias) {
        this.Medias = Medias

        this.$wrapper = document.createElement( 'div' )
        this.$filterFormWrapper = document.querySelector( '.filter-form-wrapper' )
        this.$mediasWrapper = document.querySelector( '.medias-wrapper' )
    }

    async filterMedias(criterion){
        this.clearMediasWrapper()

        const AdaptedFilterLib = new FilterMediasAdapter(criterion, this.Medias)
        const FilteredMedias = await AdaptedFilterLib.filterByCriteria()

        FilteredMedias.forEach(Media => {
            const Template = new MediaTemplate(Media)
            this.$mediasWrapper.appendChild(Template.createMediaCard(1))
        })
    }

    onChangeFilter() {
        this.$wrapper
            .querySelector('form')
            .addEventListener('change', e => {
                const criterion = e.target.value
                this.filterMedias(criterion)
            })
    }

    clearMediasWrapper() {
        this.$mediasWrapper.innerHTML = ""
    }

    render() {
        const filterForm = `
            <form class="filter-form" action="#" method="POST">
                <label for="filter-select">Trier par :</label>
                <select name="filter-select" id="filter-select">
                    <option value="popularite">Popularité</option> 
                    <option value="date">Date</option> 
                    <option value="titre">Titre</option> 
                </select>
            </form>
        `

        this.$wrapper.innerHTML = filterForm
        this.onChangeFilter()

        this.$filterFormWrapper.appendChild(this.$wrapper)
    }
}