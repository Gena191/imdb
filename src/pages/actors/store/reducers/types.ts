//a reducer


export const ADD_ACTOR_INFO="ADD_ACTOR_INFO"
export const DROP_ACTOR_INFO="DROP_ACTOR_INFO"
//interface reducer
export interface IActor{
    actorinfo:IActorinfo
}

export interface IActorinfo{
    id?:string
    name?:string
    image?:string
    summary?:string
    role?:string
    birthDate?:string
    deathDate?:string | null
    awards?:string
    height?:string
    knownFor?:IKnownFor[]
}
export  interface IKnownFor{
    id?:string
    title?:string
    year?:string
    role?:string
    image?:string
}

//interface actions reducer
export interface IActorsAction{
    type: typeof ADD_ACTOR_INFO
    payload: IActorinfo
}
export interface IDropActorsAction{
    type: typeof DROP_ACTOR_INFO

}
export type ActorPageAction = IDropActorsAction | IActorsAction




//a watcher
export const LOAD_ACTOR_INFO="LOAD_ACTOR_INFO"