import React from 'react';
import AppBar from 'material-ui/AppBar';
import { MuiThemeProvider ,Paper } from "material-ui";
import PersistentDrawer from 'material-ui/Drawer';
import './styles.scss';
 
import Navigation from 'components/Navigation';

 const SideBar = (props) => (
   <MuiThemeProvider>
    <PersistentDrawer
     className="sidebar" 
     width={250}
     open={true} 
     docked={true}
    >
      <AppBar 
        title="Menu" style={{backgroundColor: "#363636"}} 
        showMenuIconButton={false}
      />
      <Navigation />
    </PersistentDrawer>
   </MuiThemeProvider>
 );

 export default SideBar;