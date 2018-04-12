import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import History from 'services/history';

// Views
// Guest
import HomeLayout from 'views/Default/Layout';

// Admin
import AdminLayout from 'views/Admin/Layout';
import Login from "views/Admin/Login";

class App extends Component {
	render() {
		return (
			<Router history={History}>
				<Switch>
          <Route path="/login" component={Login} />

					<Route path="/admin" component={AdminLayout} />
					<Route path="/" component={HomeLayout} exact />
					{/* <Route path="/operator" component={OperatorHome} exact />
					<Route path="/client" component={ClientHome} exact />
					<Route path="*" component={Page404} /> */}
				</Switch>
			</Router>
		)
	}
}

export default App;
