import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todoList: [
        { title: 'House keeping', completed: false },
        { title: 'Answer the survey', completed: false },
        { title: 'Water the plants', completed: false },
      ],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(newTodo) {
    const { todoList } = this.state;

    this.setState({
      todoList: todoList.concat([{
        title: newTodo,
        completed: false,
      }])
    });
  }

  handleClick(index) {
    const { todoList } = this.state;

    todoList[index].completed = !todoList[index].completed;

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
