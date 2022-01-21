import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './item.css';

const ToDoItem = ({ id, text, is_completed, completeTask, removeTask }) => (
    <li className="item">
        <div className="checkboxes__item">
            <label className="checkbox style-d">
                <input onClick={() => completeTask(id)} type="checkbox" defaultChecked={is_completed ? 'checked' : ''} />
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">
                    <span className={is_completed ? 'completed' : ''}><Link to={`/${id}`} helloprop={111}>{text}</Link></span>
                    <div onClick={() => removeTask(id)} className="fas fa-times" >&#10006;</div>
                </div>
            </label>
        </div>
    </li>
)

ToDoItem.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    is_completed: PropTypes.bool,
    removeTask: PropTypes.func,
}

ToDoItem.defaultProps = {
    id: 0,
    text: '',
    is_completed: false,
    removeTask: () => {},
}

export default ToDoItem;
