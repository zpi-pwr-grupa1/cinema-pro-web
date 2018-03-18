import React, {Component} from 'react';
import Layout from './../../components/layout/Layout';
import Header from './../../components/layout/Header';
import User from "../User";
import {MuiThemeProvider} from "material-ui";
import SideBar from "../../components/layout/Sidebar";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sidebarOpen: false
		}
	}

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Layout
						sidebar={ <SideBar open={ this.state.sidebarOpen }/> }
						header={ <Header toggleSidebar={this.toggleSidebar.bind(this)}/> }
						content={ <User/> }
					/>
				</div>
			</MuiThemeProvider>
		)
	}

	toggleSidebar() {
		this.setState({
			...this.state,
			sidebarOpen: !this.state.sidebarOpen
		})
	}

}

export default App;
