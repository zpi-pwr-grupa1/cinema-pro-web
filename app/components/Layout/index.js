import React from 'react';
import './styles.scss';

const Layout = (props) => (
  <div className="main_containter">
    {props.sidebar}
    {props.header}
    {props.views}
  </div>
);

export default Layout;
