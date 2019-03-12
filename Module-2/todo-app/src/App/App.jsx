import React, { Component } from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';
import List from '../List/List';

// import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

class App extends Component {
    state = {
        id: "",
        text: "",
        taskArr: [],
        editInput: '',
        filter: null,
    }

    inputChange = ({target}) => {
        this.setState({
            [target.name]: target.value,
        })
    }

    formSubmit = (e) => {
        e.preventDefault();

        if(!this.state.text) return;

        let taskItem = {
            id: Date.now(),
            text: this.state.text,
            edit: false,
            completed: false,
        }

        this.setState(prev => ({
            taskArr: [...prev.taskArr, taskItem]
        }))

        this.setState({
            text: "",
        })
    }

    deleteTask = ({target}) => {
        const taskArrAfterDeletion = this.state.taskArr.filter(el => el.id !== Number(target.dataset.id));
        this.setState({
            taskArr: taskArrAfterDeletion,
        })
    }

    toggleEdit = ({target}) => {
        let editText = this.state.taskArr.find(el => el.id === Number(target.dataset.id)).text;
        const updatedTaskArr = this.state.taskArr.map(el => el.id === Number(target.dataset.id) ? {...el, edit: true} : el);
        this.setState({
            taskArr: updatedTaskArr,
            editInput: editText,
        })
    }

    editTask = ({target}) => {
        this.setState({
        [target.name]: target.value,
        })
    }

    cancelEdit = ({target}) => {
        const updatedTaskArr = this.state.taskArr.map(el => el.id === Number(target.dataset.id) ? {...el, edit: false}  : el);
        this.setState({
            taskArr: updatedTaskArr,
        })
    }

    submitEdit = ({target}) => {
        const updatedTaskArr = this.state.taskArr.map(el => el.id === Number(target.dataset.id) ? {...el, edit: false, text: this.state.editInput} : el);
        this.setState({
            taskArr: updatedTaskArr,
        })
    }

    doTask = ({target}) => {
        const updatedTaskArr = this.state.taskArr.map(el => el.id === Number(target.dataset.id) ? {...el, completed: !el.completed} : el);
        this.setState({
            taskArr: updatedTaskArr,
        })
    }

    showAllTasks = () => {
        this.setState({
            filter: null,
        })
    }

    showCompleted = () => {
        this.setState({
            filter: true,
        })
    }

    showIncomplete = () => {
        this.setState({
            filter: false,
        })
    }

    render() {
        const {text, taskArr, editInput, filter} = this.state;
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
                <List 
                    taskArr={taskArr} 
                    doTask={this.doTask}
                    deleteTask={this.deleteTask} 
                    toggleEdit={this.toggleEdit} 
                    inputChange={this.inputChange} 
                    cancelEdit={this.cancelEdit} 
                    submitEdit={this.submitEdit} 
                    editTask={this.editTask} 
                    editInput={editInput}
                    filter={filter} 
                    />
            </div>
        );
    }
}

export default App;