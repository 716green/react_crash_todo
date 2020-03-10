import React, { Component } from 'react'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

import './App.css'

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

  // Toggle Complete
  markComplete = (id, title) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  // Delete Todo
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  // Component which calls to Todos component
  render () {
    console.log(this.state.todos)
    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <AddTodo />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    )
  }
}

export default App
