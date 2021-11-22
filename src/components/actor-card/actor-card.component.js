import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import {useHistory} from "react-router-dom";

const ActorCardComponent = ({actor}) => {
    let history = useHistory();
    const getActorPage = () => {
        localStorage.setItem('actorId', actor.id)
        history.push("/ActorPage")
    }
    return (
        <Card sx={{height: 350, width: 175}} onClick={getActorPage}>

            <CardActionArea>

                {actor.image ?
                    <CardMedia
                        component="img"
                        height={250}
                        image={actor.image}
                        alt="no image"
                    />
                    :
                    <CardMedia
                        component="img"
                        height={150}
                        image='https://img1.freepng.ru/20180621/zso/kisspng-business-click-ecommerce-web-agency-service-plas-no-photo-5b2c4658462e10.8823241115296282482875.jpg'
                        alt="default pict"
                    />
                }

                <CardContent>
                    {actor.name ?
                        <Typography gutterBottom variant="h7" component="div">
                            <sapn className='items-text'><b>{actor.name}</b></sapn>
                        </Typography>
                        :
                        <></>

                    }

                    {actor.asCharacter ?
                        <Typography gutterBottom variant="h8" component="div">
                            <sapn className='items-text'>As Character: {actor.asCharacter}</sapn>
                        </Typography>
                        :
                        <></>

                    }

                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default ActorCardComponent;