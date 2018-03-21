import React, { Component } from 'react';
import './styles.scss';

const Input = (props) => (
  <div className="input-wrapper">
    <input
      className=`input input__${props.type}`
      type={props.type}
      name={props.name}
      onChange={props.onChange}
    />
  </div>
);

Input.defaultProps = {
  type: "text",
  name: "",
}

export default Input;
