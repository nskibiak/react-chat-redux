import './stylesheets/application.scss';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import MessagesReducer from './reducers/messages_reducer';
import ChannelsReducer from './reducers/channels_reducer';

import App from './containers/App';

const reducers = combineReducers({
  messages: MessagesReducer,
  channels: ChannelsReducer,
  currentUser: prompt("Please enter a username") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// const initialState = {
//   messages: [],
//   channels: [ 'general', 'react', 'paris' ],
//   currentUser: prompt("Please enter a username") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
//   selectedChannel: 'general'
// };
