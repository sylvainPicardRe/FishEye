export class Filter {
    /**
     * 
     * @param {string} criterion
     * @param {array} Medias
     * @returns
     */

    static async filterByCriteria(criterion, Medias) {
        await new Promise(resolve => setTimeout(resolve, 200))

        let sortMedias = []

        if(criterion === 'popularite') {
            sortMedias = Medias.sort((a, b) => Number(b.likes) - Number(a.likes));
        } else if (criterion === 'date'){
            sortMedias = Medias.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (criterion === 'titre'){
            sortMedias = Medias.sort((a, b) => a.title.localeCompare(b.title));
        } else {
            return Medias
        }
        
        return sortMedias
    }
}