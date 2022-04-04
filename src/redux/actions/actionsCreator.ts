import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from '../constants';
import { tasksListProps } from '../../common/types'

export const addTask = ({ id, text, is_completed }:tasksListProps) => ({
  type: ADD_TASK,
  id,
  text,
  is_completed
});

export const completeTask = (id:number) => ({
  type: COMPLETE_TASK,
  id
});

export const removeTask = (id:number) => ({
  type: REMOVE_TASK,
  id
});