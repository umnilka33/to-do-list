import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

const ToDoInput = ({ value, onChange, onKeyPress }) => (
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

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
}

ToDoInput.defaultProps = {
  onChange: () => { },
  onKeyPress: () => { },
  value: '',
}

export default ToDoInput;