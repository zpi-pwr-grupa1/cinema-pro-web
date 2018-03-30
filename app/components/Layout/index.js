import React from 'react';
import './styles.scss';

<<<<<<< Updated upstream
const Layout = (props) => (
  <div className="main_containter">
=======
const Layout = (props) => {
  console.log(props, props.match)
  return (
  <div className="main-container">
>>>>>>> Stashed changes
    {props.sidebar}
    {props.header}
    {props.views}
  </div>
)};

export default Layout;
