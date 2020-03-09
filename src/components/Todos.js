import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

// Todo Component which calls to TodoItem component
class Todos extends Component {
  markComplete = () => {
    console.log(`${'PLACEHOLDER'} Marked Complete`)
  }


  render () {
    console.log(this.props.todos)
    return this.props.todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} markComplete= {this.markComplete} />
    ))
  }
}

// PropTypes (Good Practice) Should match name of the class
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
