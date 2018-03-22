import React from 'react';
import './styles.scss';
import PersistentDrawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import { MuiThemeProvider ,Paper } from "material-ui";

const SideBar = (props) => (
  <MuiThemeProvider>
  	<PersistentDrawer className="sidebar" width={200} open={ props.isOpen } >
      <AppBar title="Menu" />
  		<Paper/>
  	</PersistentDrawer>
  </MuiThemeProvider>
);

export default SideBar;
