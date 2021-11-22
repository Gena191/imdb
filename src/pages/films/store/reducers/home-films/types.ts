//h-f reducer
import {IFilms} from "../../utils/home-films.utils";

export const ADD_FILMS = "ADD_FILMS"
export const ADD_TOP25_FILMS ="ADD_TOP25_FILMS"
export const ADD_COMING_SOON_FILMS ="ADD_COMING_SOON_FILMS"

//interface reducer
export interface IFilmColl{
    films:IFilms[]
    top25films:IFilms[]
    comingsoonfilms:IFilms[]
}

//interface actions reducer
export interface IFilmAction{
    type: typeof ADD_FILMS
    payload: IFilms[]
}
export interface IFilmTop25Action{
    type: typeof ADD_TOP25_FILMS
    payload: IFilms[]
}

export interface IFilmComingSoonAction{
    type: typeof ADD_COMING_SOON_FILMS
    payload: IFilms[]
}


export type FilmAction = IFilmAction | IFilmTop25Action | IFilmComingSoonAction



//h-f watcher
export const LOAD_HOME_FILMS = "LOAD_HOME_FILMS"
export const LOAD_SEARCH_RES = "LOAD_SEARCH_RES"



