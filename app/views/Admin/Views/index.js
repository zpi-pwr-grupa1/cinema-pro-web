import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import CinemaList from 'views/Admin/CinemaList';
import AddCinema from 'views/Admin/AddCinema';

// /admin/*

const Views = (props) => (
  <Switch>
    <Route exact url="/kina" component={CinemaList} />
    <Route url="/kina/nowe_kino" component={AddCinema} />
    {/*<Route url="/kina/:idKina" component={Cinema} />*/}
  </Switch>
);

export default Views;
