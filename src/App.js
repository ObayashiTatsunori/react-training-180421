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
      <section class="todoapp">
        <header class="header">
          <h1>todos</h1>
          <input type="text" placeholder="new todo" />
        </header>
        <section class="main">
          <ul class="todo-list">
            <li>
              <div class="view" onClick={this.handleClick}>{this.state.todoList[0]}</div>
            </li>
            <li>
              <div class="view">{this.state.todoList[1]}</div>
            </li>
            <li>
              <div class="view">{this.state.todoList[2]}</div>
            </li>
          </ul>
        </section>
      </section>
    );
  }
}

export default App;
