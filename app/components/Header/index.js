import React from 'react';
import './styles.scss';
import {MuiThemeProvider} from "material-ui";
import {Link} from "react-router-dom";
import {auth} from "services/auth";

const Header = (props) => (
  <MuiThemeProvider>
    <div className="header-container">
      <div>
				{!auth.user ?
					<div className="user-tabs"> 
						<Link to={'/login'} ><button className="button is-dark is-inverted is-outlined">Zaloguj się</button></Link>
						<Link to={'/register'} ><button className="button is-dark is-inverted is-outlined id-grouped">Zarejestruj się</button></Link>
					</div> : <div></div>}
        
        <div className="tabs">
          <button className="my-button is-inverted">Repertuar</button>
          <button className="my-button is-inverted">Cennik</button>
          <button className="my-button is-inverted">aa</button>
          <button className="my-button is-inverted">O nas</button>
        </div>
      </div>
      <Link className="logo is-inline-flex" to={'/'} >CinemaPro <i className="material-icons">movie</i></Link>
    </div>
  </MuiThemeProvider>
);

export default Header;
