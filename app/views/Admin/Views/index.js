import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import MainPage from 'views/Admin/MainPage';
import CinemaList from 'views/Admin/CinemaList';
import AddCinema from 'views/Admin/AddCinema';
import AddMovie from 'views/Admin/AddMovie';
import MovieList from 'views/Admin/MovieList';

// /admin/*

const Views = (props) => {
  console.log('views props', props)
  return (
    <Switch>
      <Route exact path='/admin/' component={MainPage} />

      <Route exact path='/admin/cinemas' component={CinemaList} />
      <Route path='/admin/cinemas/new' component={AddCinema} />
      <Route path='/admin/cinemas/:id' component={AddCinema} />

      <Route exact path='/admin/movies' component={MovieList} />
      <Route path='/admin/movies/new' component={AddMovie} />
    </Switch>
  )
};

export default Views;
