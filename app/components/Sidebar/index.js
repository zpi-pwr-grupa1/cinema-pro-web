import React from 'react';
import AppBar from 'material-ui/AppBar';
import { MuiThemeProvider ,Paper } from "material-ui";
import PersistentDrawer from 'material-ui/Drawer';
import './styles.scss';
 
import Navigation from 'components/Navigation';

const styles = {
  appbar: {
    backgroundColor: "#363636",
    height: 115,
    paddingTop: 30,
    paddingLeft: 70,
  }
};

 const SideBar = (props) => (
   <MuiThemeProvider>
    <PersistentDrawer
     className="sidebar" 
     width={200}
     open={true} 
     docked={true}
    >
      <AppBar 
        title="Menu" style={styles.appbar}
        showMenuIconButton={false}
      />
      <Navigation />
    </PersistentDrawer>
   </MuiThemeProvider>
 );

 export default SideBar;