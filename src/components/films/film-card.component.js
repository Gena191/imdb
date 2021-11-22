import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import {useHistory} from "react-router-dom";

const FilmCardComponent = ({film}) => {
    let history = useHistory()
    const getFilmPage = () => {
        localStorage.setItem('filmId', film.id)
        history.push("/FilmPage")
    }

    return (
        <Card sx={{height: 600, width: 250}} onClick={getFilmPage}>
            <CardActionArea>

                {film.image ?
                    <CardMedia
                        component="img"
                        height={300}
                        image={film.image}
                        alt="no image"

                    />
                    :
                    <CardMedia
                        component="img"
                        height={300}
                        image='https://img1.freepng.ru/20180621/zso/kisspng-business-click-ecommerce-web-agency-service-plas-no-photo-5b2c4658462e10.8823241115296282482875.jpg'
                        alt="default pict"

                    />
                }

                <CardContent>
                    {film.rank ?
                        <Typography gutterBottom variant="h6" component="div">
                            <div className='items-text'>Rank: {film.rank}</div>
                        </Typography>
                        :
                        <></>

                    }

                    {film.title &&
                    <Typography gutterBottom variant="h5" component="div">
                        <div className='items-text'>{film.title}</div>
                    </Typography>
                    }

                    {film.year ?
                        <Typography variant="body2" color="text.secondary">
                            Year: {film.year}
                        </Typography>
                        :
                        <></>
                    }

                    {film.releaseState ?
                        <Typography variant="body2" color="text.secondary">
                            Release state: {film.releaseState}
                        </Typography>
                        :
                        <></>
                    }

                    {film.runtimeMins ?
                        <Typography variant="body2" color="text.secondary">
                            Running time in minutes : {film.runtimeMins}
                        </Typography>
                        :
                        <></>
                    }

                    {film.description ?
                        <Typography variant="body2" color="text.secondary">
                            Description: {film.description}
                        </Typography>
                        :
                        <></>

                    }

                    {film.role ?
                        <Typography variant="body2" color="text.secondary">
                            Role: {film.role}
                        </Typography>
                        :
                        <></>
                    }
                </CardContent>
            </CardActionArea>
        </Card>

    );
}
export default FilmCardComponent;