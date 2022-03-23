import { tasksListProps } from '../../components/list/list';

export type ToDoProps = {
    tasks: Array<tasksListProps>
    completeTask: Function
    removeTask: Function
}