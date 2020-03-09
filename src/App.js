import React, { Component } from 'react'
import Todos from './components/Todos'

import './App.css';

// States
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Wash dishes',
        completed: true
      },
      {
        id: 3,
        title: 'Fold laundry',
        completed: false
      }
    ]
  }

  // Component which calls to Todos component
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}

export default App;
