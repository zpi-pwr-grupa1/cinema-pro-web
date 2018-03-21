import React, { Component } from 'react';
import './styles.scss';

const Header = (props) => (
  <div className="header_container">
    CinemaPro
    <button onClick={ () => props.toggleSidebar() }>toggle</button>
  </div>
);

export default Header;
