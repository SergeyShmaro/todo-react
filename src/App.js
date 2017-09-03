import React, { Component } from 'react';
import ToDoTable from './ToDoTable';
import NewToDo from './NewToDo';
import './App.css';

class App extends Component {

  state = {
    tasks: [],
    inputValue: ''
  }

  addTask = () => {
    if(this.state.inputValue) {
      this.setState({
        tasks: [...this.state.tasks,{task: this.state.inputValue, checked:false}],
        inputValue: ''
      });
      document.querySelector('.addInput').focus();
    }
  }

  inputOnChange = (e) => {
    if(e.target.value.replace(/(^\s*)/g, '') === e.target.value) {
      this.setState({
        inputValue: e.target.value
      });
    }
  }

  waitEnter = (e) => {
    if(e.keyCode === 13) {
      this.addTask();
    }
  }

  clearList = () => {
    this.setState({tasks:[]});
  }

  checkOnChange = (i) => (e) => {
    let newTasks = this.state.tasks;
    newTasks[i].checked = e.target.checked
    this.setState({
      tasks: newTasks
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="toDoListWrap">
          <ToDoTable state={this.state} change={this.checkOnChange}/>
        </div>
        <NewToDo newTask={this.addTask} 
                 inputOnChange={this.inputOnChange}
                 inputValue={this.state.inputValue}
                 clearList={this.clearList}
                 waitEnter={this.waitEnter}>
        </NewToDo>
      </div>
    );
  }
}

export default App;
