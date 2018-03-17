import React from 'react';

import Layout from './../../components/Layout';
import Header from './../../components/Header';
import User from "../User";

const App = (props) => (
	<Layout 
    header={
      <Header />
    }
		content={
			<User />
		}
	/>

);

export default App;
