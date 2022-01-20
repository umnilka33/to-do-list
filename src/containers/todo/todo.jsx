import React, { Component } from 'react'
import { connect } from 'react-redux';

import { addTask, completeTask, removeTask } from '../../actions/actionsCreator'
import ToDoInput from '../../components/input/input'
import ToDoList from '../../components/list/list';
import './todo.css'

class ToDo extends Component {
    
    state = {
        inputText: ''
    }

    handleInputChange = ({ target: { value } }) => {
        this.setState({
            inputText: value,
        })
    }

    handleAddTask = ({ key }) => {
        if (key === 'Enter') {
            const { inputText } = this.state;
            if (inputText.length > 1) {
                /* add task */
                const { addTask } = this.props;
                addTask((new Date()).getTime(), inputText, false);

                /* clean input */
                this.setState({
                    inputText: '',
                })
            }
        }
    }
    
    render() {
        const { inputText } = this.state;
        const { tasks, completeTask, removeTask } = this.props;
        const isTasksExist = tasks && tasks.length > 0;
        return (
            <div>
                <ToDoInput onChange={this.handleInputChange} onKeyPress={this.handleAddTask} value={inputText} />
                {isTasksExist && <ToDoList tasksList={tasks} completeTask={completeTask} removeTask={removeTask} />}
            </div>
        )
    }
}

export default connect(state => ({
    tasks: state.tasks,
}), { addTask, completeTask, removeTask })(ToDo);