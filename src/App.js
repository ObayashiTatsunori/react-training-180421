import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todoList: [
        'House keeping',
        'Answer the survey',
        'Water the plants'
      ]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { todoList } = this.state;

    todoList[0] += ' (DONE)';

    this.setState({
      todoList
    });
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input type="text" placeholder="new todo" />
        </header>
        <section className="main">
          <ul className="todo-list">
            <li>
              <div className="view" onClick={this.handleClick}>{this.state.todoList[0]}</div>
            </li>
            <li>
              <div className="view">{this.state.todoList[1]}</div>
            </li>
            <li>
              <div className="view">{this.state.todoList[2]}</div>
            </li>
          </ul>
        </section>
      </section>
    );
  }
}

export default App;
