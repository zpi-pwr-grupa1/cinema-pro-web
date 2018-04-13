import React from 'react';
import './styles.scss';
import PersistentDrawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

import Navigation from 'components/Navigation';

const SideBar = (props) => (
    <PersistentDrawer
     className="sidebar" 
     width={250}
     open={ props.isOpen } 
     docked={true}
     >
      <AppBar 
      title="Menu" style={{backgroundColor: "#363636"}} 
      showMenuIconButton={false}
      />
      <Navigation />
    </PersistentDrawer>
);

export default SideBar;
