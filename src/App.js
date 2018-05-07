import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todoList: [
        'House keeping',
        'Answer the survey',
        'Water the plants'
      ],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(newTodo) {
    const { todoList } = this.state;

    this.setState({
      todoList: todoList.concat([newTodo])
    });
  }

  handleClick(index) {
    const { todoList } = this.state;

    todoList[index] += ' (DONE)';

    this.setState({
      todoList
    });
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodoInput onSubmit={this.handleSubmit} />
        </header>
        <section className="main">
          <TodoList list={this.state.todoList} onClick={this.handleClick} />
        </section>
      </section>
    );
  }
}

export default App;
