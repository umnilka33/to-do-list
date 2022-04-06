import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from '../constants';
import { tasksListProps } from '../../common/types'
import { setUser } from '../reducers/user';
import { Dispatch } from 'redux';
import axios from 'axios';

type loginProps = {
  email: string,
  password: string
}

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

export const login =  ({ email, password }:loginProps) => {
  console.log('e:', email, ' p:', password)
  return async (dispatch:Dispatch<any>) => {
      try {
          const response = await axios.post(`http://localhost:5000/api/auth/login`, {
              email,
              password
          })
          console.log('IT works', response.data.user)
          dispatch(setUser(response.data.user))
          //localStorage.setItem('token', response.data.token)
      } catch (e) {
          //alert(e.response.data.message)
          console.log('nothing works')
      }
  }
}