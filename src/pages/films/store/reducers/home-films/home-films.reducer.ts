import {ADD_FILMS, ADD_TOP25_FILMS, ADD_COMING_SOON_FILMS, IFilmColl, FilmAction,} from './types'

const defaultState:IFilmColl = {
    films:[],
    top25films: [],
    comingsoonfilms: [],

}

export const HomeFilmsReducer = (state = defaultState, action:FilmAction):IFilmColl => {
    switch (action.type) {
        case ADD_FILMS:
            return {...state, films: action.payload}

        case ADD_TOP25_FILMS:
            return {...state, top25films: action.payload}
        case ADD_COMING_SOON_FILMS:
            return {...state, comingsoonfilms: action.payload}

        default:
            return state
    }
}


