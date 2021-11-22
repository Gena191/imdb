import {call, put, takeEvery} from "redux-saga/effects";
import {LOAD_ACTOR_INFO, ADD_ACTOR_INFO, DROP_ACTOR_INFO} from "../reducers/types";
import {getActorInfo} from "./actor.request";

export function* loadActorInfo(action) {

    yield put({type: DROP_ACTOR_INFO})
    try {
        const actorId = action.payload.actorId
        const actorInfo = yield call(getActorInfo, actorId);
        yield put({type: ADD_ACTOR_INFO, payload: actorInfo})
    } catch (e) {
        console.log(e)
    }
}

export function* loadActorPage() {

    yield takeEvery(LOAD_ACTOR_INFO, loadActorInfo)

}