import React, { Component } from 'react';
import './NewToDo.css';

class NewToDo extends Component {

  render() {
    return(
      <div className="addTask">
        <input 
          type="text" 
          className="addInput" 
          onChange={this.props.inputOnChange} 
          value={this.props.inputValue}
          onKeyDown={this.props.waitEnter}
          autoFocus
        />
        <button className="btn newBtn" onClick={this.props.newTask}>Add new task</button>
        <button className="btn clearBtn" onClick={this.props.clearList}>Clear task List</button>
      </div>
    );
  };
}

export default NewToDo;
