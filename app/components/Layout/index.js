import React from 'react';
import './styles.scss';

const Layout = (props) => (
  <div className="main_containter">
    {props.header}
    {props.content}
  </div>
);

export default Layout;
