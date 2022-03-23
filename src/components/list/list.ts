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
