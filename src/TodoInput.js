import React from 'react';

class TodoInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newTodo: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { newTodo } = this.state;
    this.props.onSubmit(newTodo);
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
