import {put, takeEvery, call, fork} from "redux-saga/effects"
import {getComingTopFilms} from "./home-films.request"
import {getSearchFilms} from "./home-films.request"
import {
    ADD_COMING_SOON_FILMS,
    ADD_FILMS,
    ADD_TOP25_FILMS,
    LOAD_HOME_FILMS,
    LOAD_SEARCH_RES
} from '../../reducers/home-films/types'

export function* loadComingSoonFilm() {
    try{
    const comingSoon = yield call(getComingTopFilms, 'ComingSoon');

    yield put({type:ADD_COMING_SOON_FILMS,payload: comingSoon.items})
    }catch (e){
        console.log(e)
    }
}

export function* loadTop25Film() {
    try{
    const top25 = yield call(getComingTopFilms, 'Top250Movies');

    yield put({type:ADD_TOP25_FILMS,payload: top25.items.slice(0,25)})
    }catch (e){
        console.log(e)
    }
}


function* loaderHomePage() {
    yield fork(loadComingSoonFilm);

    // yield fork(loadTop25Film);

}

export function* loadSearchFilms(action) {


    try {
        const tittle= action.payload.tittle
        const search = yield call(getSearchFilms, tittle);

        yield put({type: ADD_FILMS, payload: search.results})
    }catch (e){
        console.log(e)
    }
}
export function* loadHomePage() {
    yield takeEvery(LOAD_HOME_FILMS,loaderHomePage)
    yield takeEvery(LOAD_SEARCH_RES,loadSearchFilms)
}

