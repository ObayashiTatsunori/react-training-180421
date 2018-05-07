import React from 'react';

class TodoList extends React.Component {

  render() {
    return (
      <ul className="todo-list">
        {this.props.list.map((item, index) => (
          <li key={index}>
            <div className="view" onClick={() => this.props.onClick(index)}>{item}</div>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
