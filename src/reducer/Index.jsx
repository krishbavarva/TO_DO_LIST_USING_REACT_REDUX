// src/reducers/index.js

import { combineReducers } from 'redux';
import taskReducer from './AddTask';

const rootReducer = combineReducers({
  tasks: taskReducer

});

export default rootReducer;
