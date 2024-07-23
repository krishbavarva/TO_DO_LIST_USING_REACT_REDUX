

import { ADD_TASK } from './Type';

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task
  };
};

