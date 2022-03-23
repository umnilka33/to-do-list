import React, { useState } from 'react'
import { connect } from 'react-redux';

import { addTask, completeTask, removeTask } from '../../redux/actions/actionsCreator'
import ToDoInput from '../../components/input'
import ToDoList from '../../components/list';
import { tasksListProps } from '../../components/list/list';
import './todo.css'

function ToDoC({ addTask, completeTask, removeTask, tasks }: { addTask: Function; completeTask: Function;removeTask: Function;tasks: Array<tasksListProps>}) {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    const handleAddTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (inputText.length > 1) {
                /* add task */
                console.log(addTask({id:(new Date()).getTime(), text: inputText, is_completed: false}));

                /* clean input */
                setInputText('');
            }
        }
    }

    console.log('tasks: ', tasks)
    const isTasksExist = tasks && tasks.length > 0;

    return (
        <div className='task-container'>
            <ToDoInput onChange={handleInputChange} onKeyPress={handleAddTask} value={inputText} />
            {isTasksExist && <ToDoList tasksList={tasks} completeTask={completeTask} removeTask={removeTask} />}
        </div>
    )
}

const ToDo = connect((state: {tasks: Array<tasksListProps>}) => ({
    tasks: state.tasks
}), { addTask, completeTask, removeTask })(ToDoC)
export default ToDo 
