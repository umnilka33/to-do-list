import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from './constants';

export const addTask = (id, text, is_completed) => ({
  type: ADD_TASK,
  id,
  text,
  is_completed
});

export const completeTask = id => ({
    type: COMPLETE_TASK,
    id
});

export const removeTask = id => ({
    type: REMOVE_TASK,
    id
});