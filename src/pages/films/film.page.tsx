import React, {useEffect} from 'react';

import './film.page.scss';
import SimpleImageSlider from "react-simple-image-slider";
import ActorCardComponent from "../../components/actor-card/actor-card.component";
import {useTypedSelector} from "../../store/useTypedSelector"
import { IFilmInfo, IFilmRatings} from "./store/reducers/film/types";
import {useDispatch} from "react-redux";
import {addFilmInfo} from "./store/saga/film/film.actions";








const FilmPage: React.FC = () => {

    const dispatch=useDispatch()


    useEffect(() => {

        dispatch(addFilmInfo(localStorage.getItem('filmId')))

    }, []);

    const poster: string = useTypedSelector(state => state.filmPage.poster)


    const filminfo: IFilmInfo = useTypedSelector(state => state.filmPage.filminfo)


    const filmratings: IFilmRatings = useTypedSelector(state => state.filmPage.filmratings)


    const filmtrailer: string = useTypedSelector(state => state.filmPage.filmtrailer)


    const filmimages: { url: string }[] = useTypedSelector(state => state.filmPage.filmimages)



    // @ts-ignore
    // @ts-ignore
    return (
        <div className="film-page">
            <div className="film-page-2">
                <div className="poster-plot">
                    <div>
                        <img className="poster"
                             src={poster}
                        />


                    </div>
                    {filminfo.plot === "" ?
                        <div className="plot">

                            <> <h1 className='headlines'>No plot:</h1></>
                        </div>
                        :
                        <div className="plot">
                            <h1 className='headlines'>Plot:</h1>
                            {filminfo.plot}
                        </div>
                    }
                </div>

                {Object.keys(filminfo).length === 0 ?
                    <></>
                    :
                    <div>
                        {filminfo.releaseDate === "" || filminfo.releaseDate === null ?
                            <></>
                            :
                            <p><b>Release date:</b> {filminfo.releaseDate} </p>
                        }
                        {filminfo.runtimeMins === "" || filminfo.runtimeMins === null ?
                            <></>
                            :
                            <p><b>Run time mins:</b> {filminfo.runtimeMins} </p>
                        }
                    </div>
                }
                {Object.keys(filmratings).length === 0 ?
                    <></>
                    :
                    <div>
                        <h1 className='headlines'>Ratings:</h1>
                        <div className='Ratings'>

                            {filmratings.imDb === "" ?
                                <></>
                                :
                                <p><b>imDb:</b> {filmratings.imDb} </p>
                            }
                            {filmratings.metacritic === "" ?
                                <></>
                                :
                                <p><b>metacritic:</b> {filmratings.metacritic} </p>
                            }
                            {filmratings.theMovieDb === "" ?
                                <></>
                                :
                                <p><b>theMovieDb:</b> {filmratings.theMovieDb} </p>
                            }
                            {filmratings.rottenTomatoes === "" ?
                                <></>
                                :
                                <p><b>rottenTomatoes:</b> {filmratings.rottenTomatoes} </p>
                            }
                            {filmratings.tV_com === "" ?
                                <></>
                                :
                                <p><b>tV_com:</b> {filmratings.tV_com} </p>
                            }
                            {filmratings.filmAffinity === "" ?
                                <></>
                                :
                                <p>f<b>ilmAffinity:</b> {filmratings.filmAffinity} </p>
                            }
                        </div>
                    </div>
                }


                {!filmimages.length ?
                    <></>
                    :
                    <div>
                        <h1 className='headlines'>Photo from the film:</h1>
                        <div className='image-slider'>

                            <div className='slider'>

                                <SimpleImageSlider
                                    // className='slider'
                                    width={1000}
                                    height={700}
                                    images={filmimages}
                                    showBullets={true}
                                    showNavs={true}

                                />
                            </div>
                        </div>
                    </div>

                }


                {filmtrailer === "" ?
                    <></>
                    :
                    <div>
                        <h1 className='headlines'>Trailer:</h1>
                        <div className='film-trailer'>

                            < iframe className='film-trailer-video' src={`https://www.youtube.com/embed/${filmtrailer}`}
                                     title="YouTube video player" frameBorder="0"
                                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                     allowFullScreen/>
                        </div>
                    </div>

                }

                {
                    !filminfo.actorList ?
                        <></>
                        :
                        <div>
                            <h1 className='headlines'>Actors:</h1>
                            <div className="actor-list">
                                {filminfo.actorList.map(actor => {
                                        if (actor.image !== "https://imdb-api.com/images/original/nopicture.jpg")
                                            return (


                                                <div className="actor-card"><ActorCardComponent actor={actor}/></div>

                                            )
                                    }
                                )
                                }
                            </div>
                        </div>
                }


            </div>
        </div>

    );


}
export default FilmPage;