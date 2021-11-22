import {spawn} from "redux-saga/effects"


import {loadHomePage} from "../pages/films/store/saga/home-films/home-films.saga";
import {loadFilmPage} from "../pages/films/store/saga/film/film.saga";
import {loadActorPage} from "../pages/actors/store/saga/actor.saga";

export function* rootWatcher() {

    yield spawn(loadHomePage)
    yield spawn(loadFilmPage)
    yield spawn(loadActorPage)

}
