import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from "../constants";
import { tasksListProps } from '../../components/list/list'

type tasksProps = {
    type: (typeof ADD_TASK | typeof REMOVE_TASK | typeof COMPLETE_TASK)
    id: number
    text: string
    is_completed: boolean
}

export type stateTasks = tasksListProps[];

const initialState: stateTasks = [{id:12, text: 'test', is_completed: false}];

const tasks = (state = initialState, {type, id, text, is_completed}: tasksProps):stateTasks => {
    switch (type) {
        case ADD_TASK:
            return [
                ...state, {
                    id,
                    text,
                    is_completed,
                }
            ];
        case REMOVE_TASK:
            return [...state].filter(task => task.id !== id);
        case COMPLETE_TASK:
            return [...state].map(task => {
                if (task.id === id) {
                    task.is_completed = !task.is_completed;
                }
                return task;
            });
        default:
            return state;
    }
}

export default tasks;