import React, { Component } from 'react';

class App extends Component {
  render() {
    const todoList = [
      'House keeping',
      'Answer the survey',
      'Water the plants'
    ];

    return (
      <section class="todoapp">
        <header class="header">
          <h1>todos</h1>
          <input type="text" placeholder="new todo" />
        </header>
        <section class="main">
          <ul class="todo-list">
            <li>
              <div class="view">{todoList[0]}</div>
            </li>
            <li>
              <div class="view">{todoList[1]}</div>
            </li>
            <li>
              <div class="view">{todoList[2]}</div>
            </li>
          </ul>
        </section>
      </section>
    );
  }
}

export default App;
