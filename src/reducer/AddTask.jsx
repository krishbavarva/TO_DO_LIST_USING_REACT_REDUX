// src/reducers/taskReducer.js

import { ADD_TASK } from '../action-creater/Type';

const initialState = {
  tasksList: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasksList: [...state.tasksList, action.payload]
      };
    default:
      return state;
  }
};

export default taskReducer;
