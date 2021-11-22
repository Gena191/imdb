import {
    ADD_FILM_POSTER,
    ADD_FILM_INFO,
    ADD_FILM_TRAILER,
    ADD_FILM_RATINGS,
    ADD_FILM_IMAGES,
    DROP_FILM,
    IFilmInfoColl, FilmPageAction
} from './types'


const defaultState :IFilmInfoColl= {
    poster:  "",
    filminfo: {},
    filmtrailer: "",
    filmratings: {},
    filmimages:[],
}




export const FilmReducer = (state = defaultState, action:FilmPageAction):IFilmInfoColl => {
    switch (action.type) {
        case ADD_FILM_POSTER:
            return {...state, poster:  action.payload}
        case ADD_FILM_INFO:
            return {...state, filminfo: action.payload}
        case ADD_FILM_TRAILER:
            return {...state, filmtrailer:  action.payload}
        case ADD_FILM_RATINGS:
            return {...state, filmratings: action.payload}
        case ADD_FILM_IMAGES:
            return {...state, filmimages:action.payload}
        case DROP_FILM:
            return {...state, poster:"",filminfo: {},filmtrailer: "", filmratings: {},filmimages:[],}

        default:
            return state
    }
}

