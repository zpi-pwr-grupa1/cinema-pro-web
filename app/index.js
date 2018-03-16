import React from 'react';
import { render } from 'react-dom';

//import NameForm from 'components/UserRegisterForm'
import App from 'containers/App';

render(<App />, document.getElementById('app'));
//render (<NameForm />, document.getElementById('form'));


module.hot.accept();
