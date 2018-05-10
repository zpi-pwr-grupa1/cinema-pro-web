import React from 'react';
import './styles.scss';
import AppBar from 'material-ui/AppBar';
import {Drawer, MuiThemeProvider} from "material-ui";

import Navigation from 'components/Navigation';
import {auth} from "services/auth";

const SideBar = (props) => {

	if (!auth.user) {
		return ''
	}
	return (
		<MuiThemeProvider>
			<Drawer
				style={{minWidth: '170px'}}
				className="sidebar"
				width={170}
				open={true}
				docked={true}
			>
				<AppBar
					title={<i className='material-icons'>menu</i>} style={{backgroundColor: "#363636"}}
					showMenuIconButton={false}
				/>
				<Navigation/>
			</Drawer>
		</MuiThemeProvider>
	)
};

export default SideBar;
