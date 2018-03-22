import React, { Component } from 'react';
import './styles.scss';

const Form = (props) => (
  <div className="form_container">
    {props.children}
  </div>
);

export default Form;
