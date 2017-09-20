import React, { Component } from 'react';
import './ToDoTable.css';

class ToDoTable extends Component {

  emptyRender = () => {
    return (
      <ul className="toDoList">
        <li>
          <p>There are no tasks yet</p>
        </li>
      </ul>
    );
  }

  normalRender = () => {
    const jsxarr = this.props.state.tasks.map((item, index) => {
      const checkId = "check" + index;
      if (!item.checked) {
        return (
          <li key={index}>
            <input type="checkbox" id={checkId} checked={item.checked} 
                    onChange={this.props.change(index)}/>
            <label htmlFor={checkId}>{item.task}</label>
          </li>
        );
      } else {
        return (
          <li key={index} className="crossed">
            <input type="checkbox" id={checkId} checked={item.checked}/>
            <label htmlFor={checkId}>{item.task}</label>
          </li>
        )
      }
    })
    return (
      <ul className="toDoList">
        {jsxarr}
      </ul>
    );
  }

  render = () => {
    if (this.props.state.tasks.length === 0) {
      return this.emptyRender();
    } else {
      return this.normalRender();
    }
  }
}

export default ToDoTable;
