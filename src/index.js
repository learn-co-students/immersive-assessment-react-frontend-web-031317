import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './stylesheets/index.css';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// When you clone down this project,
// the component <AccountContainer /> will have an initial default state.
//  Use this data to get the functionality of the app working.
//  Once that is complete, you can replace that initial state
//  with data you fetch from this provided API endpoint.


////


//User Stories:

// As a user, you should be able to see a table of transactions.
//
// As a user, you should be able to enter text into an input field
// and dynamically filter the list of transactions by either
// description or category as you type.
