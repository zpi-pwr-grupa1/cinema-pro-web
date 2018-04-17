import React, { Component } from 'react';
import './styles.scss';
import { MuiThemeProvider } from "material-ui";
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from "react-router-dom";

const Header = (props) => (
  <MuiThemeProvider>
    <div className="header-container">
      <Link to={'/login'} ><button className="button is-dark is-inverted is-outlined">Zaloguj się</button></Link>
      <Link to={'/'} >CinemaPro <i className="material-icons">movie</i></Link>
    </div>
  </MuiThemeProvider>
);

export default Header;
