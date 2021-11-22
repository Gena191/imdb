import React, {useState} from "react";
import HomeFilmsPage from "./pages/films/home-films.page";
import FilmPage from "./pages/films/film.page";
import AppBarComponent from "./components/app-bar/app-bar.component";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    BrowserRouter
} from "react-router-dom";
import ActorPage from "./pages/actors/actor.page";
import {addFilmInfo} from "./pages/films/store/saga/film/film.actions";
import {useDispatch} from "react-redux";



const App:React.FC = () => {

    let [title, setTt] = useState<string>("");



    return (
        <BrowserRouter>
        <div className='App'>

            <>

                <Router>

                    <AppBarComponent setTt={setTt}/>
                    <Switch>

                        <Route exact path="/" >
                            <HomeFilmsPage title={title}/>
                        </Route>

                        <Route path="/FilmPage" component={FilmPage}/>

                        <Route path="/ActorPage" component={ActorPage}>

                        </Route>
                        <Route path="/Error"/>
                        <Redirect to="/"/>
                    </Switch>


                </Router>

            </>

        </div>
        </BrowserRouter>
            );
}
export default App;


