import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

// Todo Component which calls to TodoItem component
class Todos extends Component {
  render () {
    return this.props.todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} markComplete= {this.props.markComplete} delTodo={this.props.delTodo} />
    ))
  }
}

// PropTypes (Good Practice) Should match name of the class
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
