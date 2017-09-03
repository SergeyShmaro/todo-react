import React, { Component } from 'react';
import './ToDoTable.css';

class ToDoTable extends Component {

	toJSXArray = () => {
		if(this.props.state.tasks.length === 0)
		{
			return(
				<li>
					<p>There are no tasks yet</p>
				</li>
			);
		}
		return (
			this.props.state.tasks.map((item, index) => {
        const checkId = "check" + index;
				if(!item.checked) {
					return(
						<li key={index}>
							<input type="checkbox" id={checkId} checked={item.checked} 
							   		 onChange={this.props.change(index)}/>
							<label htmlFor={checkId}>{item.task}</label>
						</li>
					);
				} else {
					return(
						<li key={index} className="crossed">
							<input type="checkbox" id={checkId} checked={item.checked}/>
							<label htmlFor={checkId}>{item.task}</label>
						</li>
					)
				}
			})
		);
	}

	render() {
		return(
		  <ul className="toDoList">
     		{
     			this.toJSXArray()
     		}
     	</ul>
    );
	}
}

export default ToDoTable;
