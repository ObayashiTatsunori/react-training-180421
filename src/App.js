import React, { Component } from 'react';

class App extends Component {
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
              <div class="view">todo 1</div>
            </li>
            <li>
              <div class="view">todo 2</div>
            </li>
            <li>
              <div class="view">todo 3</div>
            </li>
          </ul>
        </section>
      </section>
    );
  }
}

export default App;
