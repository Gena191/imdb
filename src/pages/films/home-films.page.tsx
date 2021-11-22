import React, {useEffect} from "react";
import {useDispatch} from "react-redux";

import FilmListComponent from "../../components/films/film-list.component"

import "./home-films.page.scss"
import {addComingTopFilms} from "./store/saga/home-films/home-films.actions";
import {IFilms} from "./store/utils/home-films.utils"
import {useTypedSelector} from "../../store/useTypedSelector"
import {addFilmInfo} from "./store/saga/film/film.actions";
interface homeFilmsProps {
    title: string
}


const HomeFilmsPage: React.FC<homeFilmsProps> = ({title}) => {
    const dispatch = useDispatch()

    const films:IFilms[] = useTypedSelector(state => state.films.films)

    useEffect(() => {

        dispatch(addComingTopFilms())

    }, []);

    const top25films:IFilms[]  = useTypedSelector(state => state.films.top25films)
    const comingsoonfilms:IFilms[]  = useTypedSelector(state => state.films.comingsoonfilms)


    return (
        <>

            {
                title === "" && films.length === 0 ?
                    <div className='headlines'>
                        <h1>Find a movie for your self!</h1>
                    </div>
                    :
                    <FilmListComponent films={films}
                                       header={"Search results:"}/>
            }

            <FilmListComponent films={comingsoonfilms} header={"Coming Soon:"}/>


            <FilmListComponent films={top25films} header={"Top 25 films:"}/>


        </>);
}
export default HomeFilmsPage;