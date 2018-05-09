import React from 'react';
import './TodoList.css';

class TodoList extends React.Component {

  render() {
    return (
      <ul className="todo-list">
        {this.props.list.map((item, index) => (
          <li key={index} className={item.completed ? 'completed' : ''}>
            <div className="view" onClick={() => this.props.onClick(index)}>{item.title}</div>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
