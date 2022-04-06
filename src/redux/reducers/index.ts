import { combineReducers } from 'redux';
import tasks from './tasks';
import userReducer from './user';

const rootReducer = combineReducers({
    tasks: tasks,
    user: userReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;