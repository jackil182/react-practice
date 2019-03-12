import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Form from '../Form/Form';

import './App.css';
import AllTasks from '../TaskView/AllTasks';
import CompletedTasks from '../TaskView/CompletedTasks';
import IncompleteTasks from '../TaskView/IncompleteTasks';

class App extends Component {
  state = {
    id: '',
    text: '',
    taskArr: [],
    editedInput: '',
    filter: null
  };

  inputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  formSubmit = e => {
    e.preventDefault();

    if (!this.state.text) return;

    let taskItem = {
      id: Date.now(),
      text: this.state.text,
      edit: false,
      completed: false
    };

    this.setState(prev => ({
      taskArr: [taskItem, ...prev.taskArr],
    }));

    this.setState({
      text: ''
    });
  };

  deleteTask = ({ target }) => {
    const taskArrAfterDeletion = this.state.taskArr.filter(
      el => el.id !== Number(target.dataset.id)
    );
    this.setState({
      taskArr: taskArrAfterDeletion
    });
  };

  toggleEdit = ({ target }) => {
    let editText = this.state.taskArr.find(
      el => el.id === Number(target.dataset.id)
    ).text;
    const updatedTaskArr = this.state.taskArr.map(el =>
      el.id === Number(target.dataset.id) ? { ...el, edit: true } : {...el, edit: false}
    );
    this.setState({
      taskArr: updatedTaskArr,
      editedInput: editText
    });
  };

  editTask = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  cancelEdit = ({ target }) => {
    const updatedTaskArr = this.state.taskArr.map(el =>
      el.id === Number(target.dataset.id) ? { ...el, edit: false } : el
    );
    this.setState({
      taskArr: updatedTaskArr
    });
  };

  submitEdit = ({ target }) => {
    const updatedTaskArr = this.state.taskArr.map(el =>
      el.id === Number(target.dataset.id)
        ? { ...el, edit: false, text: this.state.editedInput }
        : el
    );
    this.setState({
      taskArr: updatedTaskArr
    });
  };

  doTask = ({ target }) => {
    const updatedTaskArr = this.state.taskArr.map(el =>
      el.id === Number(target.dataset.id)
        ? { ...el, completed: !el.completed }
        : el
    );
    this.setState({
      taskArr: updatedTaskArr
    });
  };

  showAllTasks = () => {
    this.setState({
      filter: null
    });
  };

  showCompleted = () => {
    this.setState({
      filter: true
    });
  };

  showIncomplete = () => {
    this.setState({
      filter: false
    });
  };

  render() {
    const { text, taskArr, editedInput, filter } = this.state;

    return (
      <div className="wrapper">
        <Header />
        <Form
          text={text}
          inputChange={this.inputChange}
          formSubmit={this.formSubmit}
          showAllTasks={this.showAllTasks}
          showCompleted={this.showCompleted}
          showIncomplete={this.showIncomplete}
        />

        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <AllTasks
                taskArr={taskArr}
                filter={filter}
                doTask={this.doTask}
                deleteTask={this.deleteTask}
                toggleEdit={this.toggleEdit}
                inputChange={this.inputChange}
                cancelEdit={this.cancelEdit}
                submitEdit={this.submitEdit}
                editTask={this.editTask}
                editedInput={editedInput}
              />
            )}
          />
          <Route
            path="/completed"
            render={props => (
              <CompletedTasks
                taskArr={taskArr}
                filter={filter}
                doTask={this.doTask}
                deleteTask={this.deleteTask}
                toggleEdit={this.toggleEdit}
                inputChange={this.inputChange}
                cancelEdit={this.cancelEdit}
                submitEdit={this.submitEdit}
                editTask={this.editTask}
                editedInput={editedInput}
              />
            )}
          />
          <Route
            path="/incomplete"
            render={props => (
              <IncompleteTasks
                taskArr={taskArr}
                filter={filter}
                doTask={this.doTask}
                deleteTask={this.deleteTask}
                toggleEdit={this.toggleEdit}
                inputChange={this.inputChange}
                cancelEdit={this.cancelEdit}
                submitEdit={this.submitEdit}
                editTask={this.editTask}
                editedInput={editedInput}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
