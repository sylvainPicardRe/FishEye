function sortMedias(critere, tab){
    let sortMedias;

    if(critere === 'date'){
        sortMedias = tab.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if(critere === 'titre'){
        sortMedias = tab.sort((a, b) => a.title.localeCompare(b.title));
    } else if(critere === 'popularite') {
        sortMedias = tab.slice().sort((a, b) => Number(b.likes) - Number(a.likes));
    } else {
        sortMedias = tab.sort
    }

    return sortMedias
}