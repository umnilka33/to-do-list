import React from 'react';
import ToDoItem from '../item';
import { ToDoListProps } from '../../common/types';

import './list.css';

const ToDoList = ({ tasksList, completeTask, removeTask }:ToDoListProps) => (
    <ul className="list">
        {tasksList.map(({ id, text, is_completed }) => (
            <ToDoItem
                id={id}
                key={id}
                text={text}
                is_completed={is_completed}
                completeTask={completeTask}
                removeTask={removeTask}
            />
        ))}
    </ul>
)

export default ToDoList;