import './stylesheets/application.scss';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Redirect, Switch }
from 'react-router-dom';
import { createHistory as history } from 'history';

import MessagesReducer from './reducers/messages_reducer';
// import ChannelsReducer from './reducers/channels_reducer';
// import CurrentUserReducer from './reducers/current_user_reducer';
import SelectedChannelReducer from './reducers/selected_channel_reducer';

import App from './containers/App';

const identityReducer = (state = null) => state;

const initialState = {
  messages: [],
  channels: [ 'general', 'react', 'paris' ],
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`, // || prompt("Please enter a username")
  selectedChannel: 'general'
};

const reducers = combineReducers({
  messages: MessagesReducer,
  channels: identityReducer,
  currentUser: identityReducer,
  selectedChannel: SelectedChannelReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/:channel" component={App} />
        <Redirect from="/" to="/general" />
        </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);


