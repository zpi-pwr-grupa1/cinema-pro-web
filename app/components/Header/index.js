import React, { Component } from 'react';
import './styles.scss';
import { MuiThemeProvider } from "material-ui";
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from "react-router-dom";
import {auth} from "services/auth";

const Header = (props) => (
  <MuiThemeProvider>
    <div className="header-container">
    <div className="buttons">
			{!auth.user ? <Link to={'/login'} ><button className="button is-dark is-inverted is-outlined is-grouped">Zaloguj się</button></Link> : <div></div>}
      {!auth.user ? <Link to={'/register'} ><button className="button is-dark is-inverted is-outlined id-grouped">Rejestracja</button></Link> : <div></div>}
    </div>
      <Link to={'/'} >CinemaPro <i className="material-icons">movie</i></Link>
    </div>
  </MuiThemeProvider>
);

export default Header;
