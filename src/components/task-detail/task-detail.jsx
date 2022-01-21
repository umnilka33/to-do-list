import React, { Component, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import './task-detail.css';

const getTaskDetails = (taskId, tasks) => {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == taskId) {
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

class TaskDetail extends Component {
    state = {
        id: '',
        tasks: {},
        text: '',
        isDone: false,
    }

    componentDidMount() {
        this.setState({ 
            id: this.props.taskId,
            tasks: this.props.tasks 
        })
    }

    
  
    render() {
        const { id, tasks, text, isDone } = this.state;
        const details = getTaskDetails(id, tasks);
      return (
        <Fragment>
            <h1>Task</h1>
            <h2>Task ID: {id}</h2>
            <p>Text: {details.text}</p>
            <p>Status: {details.isDone? 'Complete' : 'In work'}</p>
        </Fragment>
      );
    }
  };
  

function GetTaskID(prop){
    let tasks = prop.tasks;
    	
    // получаем параметры
    const params = useParams();
    const taskId = params.id;
    
    console.log(params)
    return (
        <TaskDetail taskId={taskId} tasks={tasks} />
    );
}

//export default TaskDetail;
export default connect(state => ({
    tasks: state.tasks,
}))( GetTaskID, TaskDetail);