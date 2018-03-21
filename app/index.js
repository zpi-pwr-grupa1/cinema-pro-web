import React from 'react';
import { render } from 'react-dom';
import App from 'containers/App';
import './styles.scss'
import 'config'

render(<App />, document.getElementById('app'));

// module.hot.accept();
