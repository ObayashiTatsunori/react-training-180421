import React, { Component } from 'react';
import TodoList from './TodoList';

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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { todoList, newTodo } = this.state;

    this.setState({
      todoList: todoList.concat([newTodo])
    });
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
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="new todo" onChange={this.handleChange} value={this.state.newTodo} />
          </form>
        </header>
        <section className="main">
          <TodoList list={this.state.todoList} onClick={this.handleClick} />
        </section>
      </section>
    );
  }
}

export default App;
