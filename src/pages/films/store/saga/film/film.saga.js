import {put, takeEvery, call, fork} from "redux-saga/effects"


import {
    ADD_FILM_POSTER,
    ADD_FILM_TRAILER,
    ADD_FILM_RATINGS,
    ADD_FILM_IMAGES,
    ADD_FILM_INFO,
    LOAD_FILM_INFO,
} from '../../reducers/film/types'

import {
    getPostersRatingsTrailer,
    getFilmInfo,
    getFilmImages
} from "./film.request";
import {editLink, pushImages} from "../../utils/film.utils";




export function* loadPosters(action) {



    try {
        const filmId = action.payload.filmId
        const posters = yield call(getPostersRatingsTrailer, 'Posters', filmId);
        yield put({type: ADD_FILM_POSTER, payload: posters.posters[0].link})
    } catch (e) {
        console.log(e)
    }
}

export function* loadFilmInfo(action) {


    try {
        const filmId = action.payload.filmId
        const info = yield call(getFilmInfo, filmId);
        yield put({type: ADD_FILM_INFO, payload: info})
    } catch (e) {
        console.log(e)
    }
}

export function* loadRatings(action) {


    try {
        const filmId = action.payload.filmId
        const ratings = yield call(getPostersRatingsTrailer, 'Ratings', filmId);
        yield put({type: ADD_FILM_RATINGS, payload: ratings})
    } catch (e) {
        console.log(e)
    }
}

export function* loadImages(action) {


    try {
        const filmId = action.payload.filmId
        const images = yield call(getFilmImages, filmId);
        yield put({type: ADD_FILM_IMAGES, payload: pushImages(images.items)})
    } catch (e) {
        console.log(e)
    }
}

export function* loadYouTubeTrailer(action) {


    try {
        const filmId = action.payload.filmId
        const trailer = yield call(getPostersRatingsTrailer, 'YouTubeTrailer', filmId);
        yield put({type: ADD_FILM_TRAILER, payload: editLink(trailer.videoUrl)})}
    catch (e) {
        console.log(e)
    }
}


function* loaderFilmInfo(action) {

    yield fork(loadPosters,action);
    yield fork(loadFilmInfo,action);
    yield fork(loadRatings,action);
    yield fork(loadImages,action);
    yield fork(loadYouTubeTrailer,action);

}


export function* loadFilmPage() {
     yield takeEvery(LOAD_FILM_INFO, loaderFilmInfo)

}
