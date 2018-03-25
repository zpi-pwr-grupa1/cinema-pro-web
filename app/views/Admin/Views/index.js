import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import CinemaList from 'views/Admin/CinemaList';
import AddCinema from 'views/Admin/AddCinema';

// /admin/*

const Views = (props) => (
  <Switch>
    <Route exact url="/kino" component={CinemaList} />
    <Route url="/kino/new" component={AddCinema} />
    {/*<Route url="/kina/:idKina" component={Cinema} />*/}
  </Switch>
);

export default Views;
