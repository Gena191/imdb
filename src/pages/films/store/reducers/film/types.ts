//f reducer
export const ADD_FILM_POSTER = "ADD_FILM_POSTER"
export const ADD_FILM_INFO = "ADD_FILM_INFO"
export const ADD_FILM_TRAILER = "ADD_FILM_TRAILER"
export const ADD_FILM_RATINGS = "ADD_FILM_RATINGS"
export const ADD_FILM_IMAGES = "ADD_FILM_IMAGES"
export const DROP_FILM = "DROP_FILM"

//interface reducer
export interface IFilmInfoColl{
    poster:string
    filminfo:IFilmInfo
    filmtrailer:string
    filmratings:IFilmRatings
    filmimages:{url:string}[]
}
export interface IFilmRatings{
    imDb?:string
    metacritic?:string
    theMovieDb?:string
    rottenTomatoes?:string
    tV_com?:string
    filmAffinity?:string


}
export interface IFilmInfo{
poster?:string
    year?:string
    releaseDate?:string
    runtimeMins?:string
    plot?:string
    actorList?:IActor[]
}
export interface IActor{
    id?:string
    image?:string
    name?:string
    asCharacter?: string
}

//interface actions reducer
export interface IPosterAction{
    type: typeof ADD_FILM_POSTER
    payload: string
}
export interface IFilmInfoAction{
    type: typeof ADD_FILM_INFO
    payload: IFilmInfo
}

export interface IFilmTrailerAction{
    type: typeof ADD_FILM_TRAILER
    payload: string
}
export interface IFilmRatingsAction{
    type: typeof ADD_FILM_RATINGS
    payload: IFilmRatings
}

export interface IFilmImagesAction{
    type: typeof ADD_FILM_IMAGES
    payload: {url:string}[]
}
export interface IDropFilm{
    type: typeof DROP_FILM

}
export type FilmPageAction = IPosterAction | IFilmInfoAction | IFilmTrailerAction | IFilmRatingsAction | IFilmImagesAction | IDropFilm

//h-f watcher
export const LOAD_FILM_INFO = "LOAD_HOME_FILMS"




