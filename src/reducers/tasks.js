import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from "../actions/constants";

const TASKS = [];

const tasks = (state = TASKS, { type, id, text, is_completed }) => {
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