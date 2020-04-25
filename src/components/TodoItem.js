import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component which cycles through the titles of the states in app.js
export class TodoItem extends Component {
    // Dynamic Styling
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

markComplete = (e) => {
  //console.log(this.props)
}
  render () {
    const { id, title } = this.props.todo;
    // uses events with checkboxes
    return (
      <div style={ this.getStyle() }>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind( this,id )} /> {' '}
            { title }
            {/* DELETE BUTTON (and JSX comment) */}
            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

// PropTypes (Good Practice) Should match name of the class
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
