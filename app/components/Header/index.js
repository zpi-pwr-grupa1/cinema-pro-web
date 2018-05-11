import React from 'react';
import './styles.scss';
import {MuiThemeProvider} from "material-ui";
import {Link, NavLink} from "react-router-dom";
import {auth} from "services/auth";
import {cinema} from "services/cinema";

const Header = (props) => (
  <MuiThemeProvider>
    <div className="header-container">
      <div>
				{!auth.user ?
					<div className="user-tabs"> 
						<Link to={'/login'} ><button className="button is-dark is-inverted is-outlined">Zaloguj się</button></Link>
						<Link to={'/register'} ><button className="button is-dark is-inverted is-outlined id-grouped">Załóż konto</button></Link>
					</div> : <div></div>}

				{
					cinema.current ?
						<div className="tabs">
							<NavLink exact to="/home" className="my-button is-inverted">Strona główna</NavLink>
							<NavLink exact to="/repertoire" className="my-button is-inverted">Repertuar</NavLink>
							<NavLink exact to="/tickets" className="my-button is-inverted">Cennik</NavLink>
							<NavLink exact to="/repeire" className="my-button is-inverted">O nas</NavLink>
						</div> : ""
				}
      </div>
			
			{
				cinema.current 
					? <Link className="cinema is-inline-flex has-text-right" to={'/'} >{cinema.current.name}<i className="material-icons">movie</i></Link>
					: <Link className="logo is-inline-flex" to={'/'} >CinemaPro <i className="material-icons">movie</i></Link>
			}
    </div>
  </MuiThemeProvider>
);

export default Header;
