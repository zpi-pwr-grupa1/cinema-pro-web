import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './styles.scss';
import Home from "views/Guest/Home";
import Login from "views/Guest/Login";
import Repertoire from "views/Guest/Repertoire";
import HallReservation from "views/Guest/Repertoire/HallReservation";
import Register from "views/Guest/Register";
import Tickets from "views/Shared/Tickets";
import AboutUs from "views/Guest/AboutUs";
import MovieInfo from "views/Admin/MovieInfo";

const Views = (props) => (
  <Switch>

    <Route exact path="/login" component={Login} />
    <Route exact path="/repertoire" component={Repertoire} />
    <Route exact path="/repertoire/reservation/:id" component={HallReservation} />
    <Route exact path="/tickets" component={Tickets} />
    <Route exact path="/about_us" component={AboutUs} />
    <Route exact path='/register' component={Register} />
		<Route path='/movie/info/:id' component={MovieInfo} />

      <Route exact path='/' component={Home} />

  </Switch>
);

export default Views;
