import {combineReducers} from 'redux';

import {notificationReducer} from './notificationReducer';

// Combining the reducers
export default combineReducers({
  notifications: notificationReducer
});
