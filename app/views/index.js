import React, {Component} from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import History from 'services/history';
// Client
import ClientLayout from 'views/Client/Layout/index';
// Guest
import HomeLayout from 'views/Guest/Layout';
// Admin
import AdminLayout from 'views/Admin/Layout/index';
import {auth} from "services/auth";

class App extends Component {

	constructor() {
		super()
		auth.init(History)
	}

	render() {
		return (
			<Router history={History}>
				<Switch>
					<Route path="/admin" component={AdminLayout} />
          <Route path="/client" component={ClientLayout} />
					<Route path="/" component={HomeLayout} />
					{/* <Route path="/operator" component={OperatorHome} exact />
					<Route path="/client" component={ClientHome} exact />
					<Route path="*" component={Page404} /> */}
				</Switch>
			</Router>
		)
	}
}

export default App;
