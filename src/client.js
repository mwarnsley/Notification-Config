import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import 'babel-polyfill';

// Importing the middleware and thunks
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// Import the routing things for react router
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// Import combined reducers
import reducers from './reducers/index';

// Import Components to use in client.js file
import Notifications from './components/Notifications';
import CardContainer from './components/Notifications/CardContainer';
import ManageContainer from './components/Notifications/ManageContainer';
import CreateContainer from './components/Notifications/CreateContainer';
import UpdateContainer from './components/Notifications/UpdateContainer';

// Create the middleware logger for showing logs and including the thunks
const middleware = applyMiddleware(thunk, logger);
// Create the store passing in the reducer
const store = createStore(reducers, middleware);
// Creating a routes variable for better readability
const Routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Notifications}>
        <IndexRoute component={CardContainer} />
        <Route path="/manage" component={ManageContainer} />
        <Route path="/create" component={CreateContainer} />
        <Route path="/update/:id" component={UpdateContainer} />
      </Route>
    </Router>
  </Provider>
);

render (
  Routes, document.getElementById('app')
)
