import {ActorPageAction, ADD_ACTOR_INFO, DROP_ACTOR_INFO, IActor, } from "./types"


const defaultState: IActor = {
    actorinfo:{}
}


export const ActorPageReducer = (state = defaultState, action: ActorPageAction):IActor => {

    switch (action.type) {
        case ADD_ACTOR_INFO:
            return {...state, actorinfo: action.payload}
        case DROP_ACTOR_INFO:
            return {...state, actorinfo: {}}

        default:
            return state
    }
}

