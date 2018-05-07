import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './styles.scss';
import Home from "views/Guest/Home";
import Login from "views/Guest/Login";
import Register from "views/Guest/Register";

const Views = (props) => (
  <Switch>

    <Route exact path="/login" component={Login} />
    
    <Route exact path='/register' component={Register} />

    <Route exact path='/' component={Home} />


  </Switch>
);

export default Views;
