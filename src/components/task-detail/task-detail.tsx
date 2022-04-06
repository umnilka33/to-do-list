import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { tasksListProps, TaskDetailProps } from '../../common/types'

function TaskDetailC(props: TaskDetailProps) {
    const [taskId, setTaskId] = useState(0);
    const [tasks, setTasks] = useState<Array<tasksListProps>>([{ id: 0, text: '', is_completed: false }]);
    const [text, setText] = useState('');
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        const details = getTaskDetails(taskId, tasks);
        setTaskId(props.taskId?props.taskId:0);
        setTasks(props.tasks);
        setText(details.text);
        setIsDone(details.isDone);
    });
    
    return (
        <Fragment>
            <h1>Task</h1>
            <h2>Task ID: {taskId}</h2>
            <p>Text: {text}</p>
            <p>Status: {isDone ? 'Complete' : 'In work'}</p>
        </Fragment>
    )
};

const getTaskDetails = (taskId: number, tasks:Array<tasksListProps>) => {
   for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === taskId) {
            return {
                text: tasks[i].text,
                isDone: tasks[i].is_completed
            }
        }
    }
    return {
        text: 'no text',
        isDone: false
    }
}

const GetTaskIDC = (props: TaskDetailProps) => {
    let tasks = props.tasks;

    const params = useParams();
    const taskId = Number(params.id);
    return (
        <TaskDetailC taskId={taskId} tasks={tasks} />
    );
}

const TaskDetail = connect((state:TaskDetailProps) => ({tasks: state.tasks}))(TaskDetailC);
const GetTaskID = connect((state: any) => ({tasks: state.tasks}))(GetTaskIDC)
export { TaskDetail, GetTaskID } 