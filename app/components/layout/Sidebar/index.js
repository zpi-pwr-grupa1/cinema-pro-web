import React from 'react';
import './styles.scss';
import PersistentDrawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {Paper} from "material-ui";

const SideBar = (props) => (
	<PersistentDrawer className="sidebar" width={200} open={ props.open } >
    <AppBar title="AppBar" />
		<Paper/>
	</PersistentDrawer>
);

export default SideBar;
