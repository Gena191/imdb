import {
    LOAD_FILM_INFO
} from '../../reducers/film/types'

export function addFilmInfo(filmId:string| null) {
    return {
        type: LOAD_FILM_INFO,
        payload: {
            filmId
        }
    }
}