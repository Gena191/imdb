import React from "react";
import "./film-list.component.scss"
import FilmCardComponent from "./film-card.component";
import {IFilms} from "../../pages/films/store/utils/home-films.utils"

interface IFilmListComponent {
    films: IFilms[]
    header: string
}

const FilmListComponent: React.FC<IFilmListComponent> = ({films, header}) => {

    return (
        <div>
            {films === null || films === undefined || films.length === 0 ?
                <></>
                :
                <div className='back-film-list0   '>
                    <div className='back-film-list'>
                        <div className='headlines'><h1>{header}</h1></div>
                        <div className='film-list-search'>
                            <div className='film-list-search2'>

                                {films.map(film => {
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
                        </div>
                    </div>
                    :
                    <></>
                </div>
            }
        </div>
    );
}
export default FilmListComponent;