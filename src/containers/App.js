import React, { Component } from 'react';
import Form from './form'
import List from './list'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      todos: [
        {value: 'Clean Kitchen', done: false},
        {value: 'Laundry', done: true},
      ]
    }
  }

  handleChange = (evt) => {
    this.setState({inputValue: evt.target.value})
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const newTodo = {
      value: this.state.inputValue,
      done: false
    };
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({
      todos,
      inputValue: ''
    })
  }

  handleClick = (index) => {
    const todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({
      todos
    })
  }

  handleDelete = (index) => {
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App">
        <Form
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <List
          todos={this.state.todos}
          handleClick={this.handleClick}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
} 

export default App;
