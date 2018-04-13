import React, { Component } from 'react';
import './styles.scss';

const Page = (props) => (
  <div className={`page-container ${props.class}`}>
    {props.children}
  </div>

);

export default Page;
