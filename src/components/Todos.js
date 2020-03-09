import React, { Component } from 'react'

class Todos extends Component {

    state = {
        Todos: [
          {
            id: 1,
            title: 'take out the trash',
            completed: false
          },
          {
            id: 1,
            title: 'take out the trash',
            completed: false
          },
          {
            id: 1,
            title: 'take out the trash',
            completed: false
          },
        ]
      }

  render () {
    return (
      <div>
        <h1>Todos.js</h1>
      </div>
    )
  }
}

export default Todos;
