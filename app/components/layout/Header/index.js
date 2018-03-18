import React, {Component} from 'react';
import './styles.scss';

const title = 'CinemaPro';

const Header = (props) => (
  <div className="header_container">
    {title}
    <button onClick={ () => props.toggleSidebar() }>toggle</button>
  </div>
);

export default Header;
