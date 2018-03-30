import React, { Component } from 'react';
import './styles.scss';

const Header = (props) => (
<<<<<<< Updated upstream
  <div className="header_container">
    CinemaPro
    <button onClick={ () => props.toggleSidebar() }>toggle</button>
=======
  <div className="header-container">
    <span>CinemaPro</span>
    <i className="fa fa-video"/>
    {/* <button onClick={ () => props.toggleSidebar() }>toggle</button> */}
>>>>>>> Stashed changes
  </div>
);

export default Header;
