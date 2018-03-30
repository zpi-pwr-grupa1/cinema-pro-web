import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './styles.scss';

const Views = (props) => (
  <div>
    <h2>Main page</h2>
	<h3>Wybierz swoje kino</h3>
	<form>
	  <select>
		<option value="placeholder">Placeholder</option>
      </select>
	</form>
  </div>
);

export default Views;
