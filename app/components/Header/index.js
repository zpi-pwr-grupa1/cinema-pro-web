import React, { Component } from 'react';
import './styles.scss';

const Header = (props) => (
  <div className="header-container">
    <span>CinemaPro</span>
    <i className="fas fa-video"/>
    {/*<button onClick={ () => props.toggleSidebar() }>toggle</button>*/}
  </div>
);

export default Header;
