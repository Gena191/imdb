import {
    LOAD_ACTOR_INFO
} from '../reducers/types'

export function addActorInfo(actorId:string|null) {
    return {
        type: LOAD_ACTOR_INFO,
        payload: {
            actorId
        }
    }
}