import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from '../constants';
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import axios from 'axios';
import { setUser } from '../reducers/user';
import { tasksListProps } from '../../common/types'
import '../api/fakeAPI'

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

export const login = (email: string, password: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email,
        password
      })
      if (response.data[0].code === 0) {
        await dispatch(setUser(response.data[0].userInfo))
        localStorage.setItem('name', response.data[0].userInfo.name);
        localStorage.setItem('token', response.data[0].userInfo.token);
      }
    } catch (e) {
      console.log('nothing works')
    }
  }
}
