import React, { Component } from 'react';
import './styles.scss';
import { MuiThemeProvider } from "material-ui";
import RaisedButton from 'material-ui/RaisedButton';

const Header = (props) => (
  <MuiThemeProvider>
    <div className="header-container">
      {/*<button className="button">Zaloguj się</button>*/}
      <RaisedButton
        className="menu-button"
        onClick={ () => props.toggleSidebar() } >
        MENU
      </RaisedButton>
      <span>CinemaPro</span>
    </div>
  </MuiThemeProvider>
);

export default Header;
