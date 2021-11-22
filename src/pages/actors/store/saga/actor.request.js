export async function getActorInfo(actorId) {
    const request = await fetch(`https://imdb-api.com/en/API/Name/k_x5rujntk/${actorId}`);
    const data = await request.json()
    return data;
}