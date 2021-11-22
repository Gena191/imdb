import {createStore, combineReducers, applyMiddleware} from "@reduxjs/toolkit";
import {FilmReducer} from "../pages/films/store/reducers/film/film.reducer"
import { composeWithDevTools } from 'redux-devtools-extension';

import {HomeFilmsReducer} from "../pages/films/store/reducers/home-films/home-films.reducer";
import {ActorPageReducer} from "../pages/actors/store/reducers/actors.reducer";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from './global-watcher.saga'

const sagaMiddleware=createSagaMiddleware();

const rootReducer=combineReducers({
films:HomeFilmsReducer,
filmPage:FilmReducer,
actorPage:ActorPageReducer
 })
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof rootReducer>
