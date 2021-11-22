import React, {useEffect} from 'react';
import './actor.page.scss';
import FilmCardComponent from "../../components/films/film-card.component";
import {useTypedSelector} from "../../store/useTypedSelector";
import {IActorinfo} from "./store/reducers/types";
import {addActorInfo} from "./store/saga/actor.actions";
import {useDispatch} from "react-redux";

const ActorPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(addActorInfo(localStorage.getItem('actorId')))

    }, []);
    const actorinfo: IActorinfo = useTypedSelector(state => state.actorPage.actorinfo)
    return (
        <div className="actor-page">
            <div className="actor-page-2">
                <div className="image-summary">

                    {actorinfo.image === "" ?
                        <></>
                        :
                        <img className="image"
                             src={actorinfo.image}
                        />
                    }

                    {actorinfo.summary === "" ?
                        <div className="summary">

                            <> <h1 className='headlines'>No summary:</h1></>
                        </div>
                        :
                        <div className="summary">
                            <h1 className='headlines'>Summary:</h1>
                            {actorinfo.summary}
                        </div>
                    }
                </div>
                <div className="bio">

                    {actorinfo.name === null ?
                        <></>
                        :
                        <div>
                            <h1>{actorinfo.name}</h1>
                        </div>
                    }

                    {actorinfo.role === null || actorinfo.role === "" ?
                        <></>
                        :
                        <div>
                            <h3>Role: {actorinfo.role}</h3>
                        </div>
                    }

                    {actorinfo.birthDate === null || actorinfo.birthDate === "" ?
                        <></>
                        :
                        <div>
                            <h3>Brith date: {actorinfo.birthDate}</h3>
                        </div>
                    }

                    {actorinfo.deathDate === null || actorinfo.deathDate === "" ?
                        <></>
                        :
                        <div>
                            <h3>Death date: {actorinfo.deathDate}</h3>
                        </div>
                    }

                    {actorinfo.awards === null || actorinfo.awards === "" ?
                        <></>
                        :
                        <div>
                            <h3>Awards: {actorinfo.awards}</h3>
                        </div>
                    }

                    {actorinfo.height === null || actorinfo.height === "" ?
                        <></>
                        :
                        <div>
                            <h3>Height: {actorinfo.height}</h3>
                        </div>
                    }
                </div>

                {!actorinfo.knownFor || actorinfo.knownFor.length === 0 ?
                    <></>
                    :
                    <div>
                        <h1 className='headlines'>Known for:</h1>
                        <div className="known-for">
                            {actorinfo.knownFor.map(film => {

                                if (film.title) {
                                    return (
                                        <div className='film-card1'>
                                            <FilmCardComponent film={film} key={film.id}
                                            />
                                        </div>
                                    )
                                } else {
                                    return (
                                        <></>
                                    )
                                }
                            })}
                        </div>
                    </div>}
            </div>
        </div>
    );
}
export default ActorPage;