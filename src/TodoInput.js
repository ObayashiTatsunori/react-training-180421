import React from 'react';

class TodoInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newTodo: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input type="text" placeholder="new todo" onChange={this.handleChange} value={this.state.newTodo} />
      </form>
    );
  }
}

export default TodoInput;
