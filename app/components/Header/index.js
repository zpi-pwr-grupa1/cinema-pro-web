import React from 'react';
import './styles.scss';
import {Link} from "react-router-dom";
import Button from "material-ui/es/Button/Button";

const Header = (props) => (
    <div className="header-container">
      {/*<button className="button">Zaloguj się</button>*/}
      <Button
        className="menu-button"
        onClick={ () => props.toggleSidebar() } >
        MENU
      </Button>
      <Link to={'/'} >CinemaPro <i className="material-icons">movie</i></Link>
    </div>
);

export default Header;
