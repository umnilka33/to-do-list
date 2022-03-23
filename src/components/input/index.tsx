import React from 'react';
import { ToDoInputProps } from './input';

import './input.css';

const ToDoInput = ({ value = '', onChange, onKeyPress }:ToDoInputProps) => (
  <div className="input-wrapper">
    <div className="input">
      <input
        type="text"
        id="input"
        className="input-text"
        placeholder="Add your task"
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress} />
    </div>
  </div>
);

export default ToDoInput;