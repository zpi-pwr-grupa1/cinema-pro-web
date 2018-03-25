import React, { Component } from 'react';
import './styles.scss';

const Page = (props) => (
  <div className="page_container">
    {props.children}
  </div>
);

export default Page;
