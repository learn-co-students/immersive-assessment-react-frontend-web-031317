import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './stylesheets/index.css';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" component={App} />
		</Switch>
	</BrowserRouter>,
  document.getElementById('root')
);
