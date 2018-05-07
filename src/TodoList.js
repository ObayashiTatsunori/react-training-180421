import React from 'react';

class TodoList extends React.Component {

  render() {
    return (
      <ul className="todo-list">
        {this.state.todoList.map((item, index) => (
          <li key={index}>
            <div className="view" onClick={this.handleClick}>{item}</div>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
