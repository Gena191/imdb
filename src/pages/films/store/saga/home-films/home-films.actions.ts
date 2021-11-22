import {
    LOAD_HOME_FILMS,
    LOAD_SEARCH_RES,
} from '../../reducers/home-films/types'

export function addFilms(tittle:string) {
    return {
        type: LOAD_SEARCH_RES,
        payload: {
            tittle
        }
    }
}

export function addComingTopFilms() {
    return {
        type: LOAD_HOME_FILMS,

    }
}

