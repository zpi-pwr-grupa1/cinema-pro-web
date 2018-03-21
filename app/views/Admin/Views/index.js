import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import CinemaList from 'views/Admin/CinemaList';

// /admin/*

const Views = (props) => (
  <Switch>
    <Route url="/kina" component={CinemaList} />
    {/*<Route url="/kina/:idKina" component={Cinema} />*/}
  </Switch>
);

export default Views;
