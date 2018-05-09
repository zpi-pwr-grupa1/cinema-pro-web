import React from 'react';
import {Route, Switch} from 'react-router-dom';

import ClientInfo from 'views/Client/ClientInfo/index';
import Tickets from "views/Shared/Tickets";

const Views = (props) => {
  return (
    <Switch>
      <Route exact path='/client' component={ClientInfo} />

      <Route exact path='/admin/tickets' component={Tickets} />

    </Switch>
  )
};

export default Views;
