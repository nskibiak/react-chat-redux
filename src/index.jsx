import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/application.scss';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />,document.getElementById('root'));

const initialState = {
  messages: [],
  channels: [ 'general', 'react', 'paris' ],
  currentUser: prompt("Please enter a username") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};
