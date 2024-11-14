class FilterMediasAdapter {
    constructor(Medias, criterion){
        this.Medias = Medias
        this.criterion = criterion
    }

    async filterByCriteria() {
        return await Filter.filterByCriteria(this.Medias, this.criterion)
    }
}