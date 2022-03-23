import React from 'react';
import { ToDoItemProps } from './item';
import { Link } from 'react-router-dom';
import './item.css';

const ToDoItem = ({ id = 0, text = '', is_completed = false, completeTask, removeTask }:ToDoItemProps) => (
    <li className="item">
        <div className="checkboxes__item">
            <label className="checkbox style-d">
                <input onClick={() => completeTask(id)} type="checkbox" defaultChecked={is_completed} />
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">
                    <div className={is_completed ? 'completed' : ''}><Link to={`/task/${id}`}>{text}</Link></div>
                </div>
                <div onClick={() => removeTask(id)} className='delete'>&#10006;</div>
            </label>
        </div>
    </li>
)

export default ToDoItem;
