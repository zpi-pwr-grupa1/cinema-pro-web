import React from 'react';
import Layout from './../../components/Layout';
import Header from './../../components/Header';
import User from "../User";
import {MuiThemeProvider} from "material-ui";
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';


const App = (props) => (
	<MuiThemeProvider>
		<Drawer width={200} open={false} >
			<AppBar title="AppBar" />
		</Drawer>
		<Layout
			header={
				<Header />
			}
			content={
				<User />
			}
		/>
	</MuiThemeProvider>

);

export default App;
