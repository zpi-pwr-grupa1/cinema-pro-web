import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import MainPage from 'views/Admin/MainPage/index';
import CinemaList from 'views/Admin/CinemaList/index';
import AddCinema from 'views/Admin/AddCinema/index';
import AddMovie from 'views/Admin/AddMovie/index';
import MovieList from 'views/Admin/MovieList/index';
import CinemaInfo from 'views/Admin/CinemaInfo/index';
import Showtimes from 'views/Admin/Showtimes/index';
import AddShowtime from 'views/Admin/AddShowtime/index';
import AddHall from 'views/Admin/AddHall/index';

// /admin/*

const Views = (props) => {
  return (
    <Switch>
      <Route exact path='/admin/' component={MainPage} />

      <Route exact path='/admin/cinemas' component={CinemaList} />
      <Route path='/admin/cinemas/new' component={AddCinema} />
      <Route path='/admin/cinemas/:id' component={AddCinema} />

      <Route exact path='/admin/movies' component={MovieList} />
      <Route path='/admin/movies/new' component={AddMovie} />
      <Route path='/admin/movies/:id' component={AddMovie} />

      <Route exact path='/admin/cinema/:id' component={CinemaInfo} />

      <Route exact path='/admin/showtimes' component={Showtimes} />
      <Route path ='/admin/showtimes/new' component={AddShowtime} />
      <Route path ='/admin/showtimes/:id' component={Showtimes} />

      <Route exact path='/admin/halls' component={AddHall} />
      <Route path='/admin/halls/new' component={AddHall} />
      <Route path='/admin/halls/:id' component={AddHall} />
    </Switch>
  )
};

export default Views;