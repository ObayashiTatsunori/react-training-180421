import React from 'react';

class TodoInput extends React.Component {

  handleChange(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="new todo" onChange={this.handleChange} value={this.state.newTodo} />
      </form>
    );
  }
}

export default TodoInput;
