import React, { Component } from 'react';
import './styles.scss';
import { MuiThemeProvider } from "material-ui";
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from "react-router-dom";
import {auth} from "services/auth";

const Header = (props) => (
  <MuiThemeProvider>
    <div className="header-container">
			{!auth.user ? <Link to={'/login'} ><RaisedButton className="login-btn">Zaloguj się</RaisedButton></Link> : <div></div>}
      <Link to={'/'} >CinemaPro <i className="material-icons">movie</i></Link>
    </div>
  </MuiThemeProvider>
);

export default Header;
