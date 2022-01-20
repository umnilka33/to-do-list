import React from 'react';
import PropTypes from 'prop-types';

import './list.css';
import ToDoItem from '../item/item';

const ToDoList = ({ tasksList, completeTask, removeTask }) => (
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

ToDoList.propTypes = {
    tasksList: PropTypes.array,
    completeTask: PropTypes.func,
    removeTask: PropTypes.func,
}

ToDoList.defaultProps = {
    tasksList: [],
    completeTask: () => {},
    removeTask: () => {},
}

export default ToDoList;