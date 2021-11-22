


export async function getComingTopFilms(tittle) {
    const request = await fetch(`https://imdb-api.com/en/API/${tittle}/k_x5rujntk`);
    const data = await request.json()
    return data;
}

export async function getSearchFilms(tittle) {
    const request = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_x5rujntk/${tittle}`);
    const data = await request.json()
    return data;
}