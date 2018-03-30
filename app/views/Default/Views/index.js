import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './styles.scss';

const Views = (props) => (
  <div>
    <h2>Main page</h2>
	<h3>Wybierz swoje kino</h3>
	<form>
	  <select>
		//pobierać listę kin
		<option value="placeholder">Placeholder</option>
      </select>
	  <br />
	  <input type="submit" value="Wybieram" onclick="submitform" />
	  <script type="text/javascript">
		function submitform(){window.alert("Repertuar")}
	  </script>
	</form>
  </div>
);

export default Views;
