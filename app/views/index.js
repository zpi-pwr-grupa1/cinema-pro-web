import React, {Component} from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import History from 'services/history';
// Views
// Guest
import HomeLayout from 'views/Guest/Layout';
// Admin
import AdminLayout from 'views/Admin/Layout/index';

class App extends Component {
	render() {
		return (
			<Router history={History}>
				<Switch>
					<Route path="/admin" component={AdminLayout} />
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
