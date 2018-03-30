import React from 'react';
import './styles.scss';

const Layout = (props) => (
  <div className="main-container">
    {props.sidebar}
    {props.header}
    {props.views}
    {props.footer}
  </div>
);

export default Layout;
