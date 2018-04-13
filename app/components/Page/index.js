import React, { Component } from 'react';
import './styles.scss';
import { MuiThemeProvider } from "material-ui";

const Page = (props) => (
  <MuiThemeProvider>
    <div className={`page-container ${props.class}`}>
      {props.children}
    </div>
  </MuiThemeProvider>

);

export default Page;
