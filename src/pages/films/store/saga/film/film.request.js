export async function getPostersRatingsTrailer(tittle,filmID) {
    const request = await fetch(`https://imdb-api.com/en/API/${tittle}/k_x5rujntk/${filmID}`);
    const data = await request.json()
    return data;
}
export async function getFilmInfo(filmID) {
    const request = await fetch(`https://imdb-api.com/en/API/Title/k_x5rujntk/${filmID}/FullActor`);
    const data = await request.json()
    return data;
}
export async function getFilmImages(filmID) {
    const request = await fetch(`https://imdb-api.com/en/API/Images/k_x5rujntk/${filmID}/Short`);
    const data = await request.json()
    return data;
}