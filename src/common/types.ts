import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from "../redux/constants";

/* * * All files types * * */

export type ToDoInputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
    value: string
}

export type ToDoItemProps = {
    id: number
    text: string
    is_completed: boolean
    completeTask: Function
    removeTask:  Function
}

export type ToDoListProps = {
    tasksList: Array<tasksListProps>
    completeTask: Function
    removeTask: Function
}

export type tasksListProps = {
    id: number,
    text: string,
    is_completed: boolean
}

export type TaskDetailProps = {
    taskId?: number,
    tasks: Array<tasksListProps>
}

export type ToDoProps = {
    tasks: Array<tasksListProps>
    completeTask: Function
    removeTask: Function
}

export type tasksProps = {
    type: (typeof ADD_TASK | typeof REMOVE_TASK | typeof COMPLETE_TASK)
    id: number
    text: string
    is_completed: boolean
}

export type TitleProps = {
    title: string
}