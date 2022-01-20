import React, { Component } from 'react';
import { connect } from 'react-redux';
import './task-detail.css';

class TaskDetail extends Component {
  state = {
    task: {},
  }
  componentDidMount() {
    const id = this.props.match.params.id || '';
    console.log("id", id)
  }

  render() {
      console.log(this.props)
    /*const { post } = this.state;
    const { title, body } = post;

    return (
      <Fragment>
        <h1>Task</h1>
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </Fragment>
    );*/
    return (
        <h2>Определить таск </h2>
    )
  }
};

export default connect(state => ({
    tasks: state.tasks,
}))(TaskDetail);