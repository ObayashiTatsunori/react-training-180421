import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todoList: [
        'House keeping',
        'Answer the survey',
        'Water the plants'
      ],
      newTodo: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      newTodo: event.target.value
    });
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
          <input type="text" placeholder="new todo" onChange={this.handleChange} value={this.state.newTodo} />
        </header>
        <section className="main">
          <ul className="todo-list">
            {this.state.todoList.map((item, index) => (
              <li key={index}>
                <div className="view" onClick={this.handleClick}>{item}</div>
              </li>
            ))}
          </ul>
        </section>
      </section>
    );
  }
}

export default App;
