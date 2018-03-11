import React, { Component } from 'react';
import './App.css';

import Header from './components/header/header';
import TodoInput from './components/ToDoInput/todoinput';

import TodoItem from './components/todoitem/todoItem';


class App extends Component {

constructor(props) {
  super(props);

  this.state = {
    todos: [
      {id: 0, text: "Make react App", completed: false},
      {id: 1, text: "Test react App", completed: true},
      {id: 2, text: "Send react app to Bene Studio", completed: false},
    ],
    nextId: 3
  }

  this.addTodo = this.addTodo.bind(this);
  this.removeTodo = this.removeTodo.bind(this);
  this.doneTodo = this.doneTodo.bind(this);
  this.saveTodo = this.saveTodo.bind(this);
}

addTodo(todoText) {
  let todos = this.state.todos.slice();
  todos.push({id: this.state.nextId, text: todoText, comp: false});
  this.setState({
    todos: todos,
    nextId: ++this.state.nextId
  });
}

removeTodo(id){
  this.setState({
    todos: this.state.todos.filter(((todo, index) => todo.id !== id))
  })
}

doneTodo(id){
  this.setState({
    todos: this.state.todos.map((item) => {
      if ( item.id == id  ) {
        item.completed = !item.completed
      }
      return item;
    })
  })
}

saveTodo(id, text){
  console.log(id, text)
  this.setState({
    todos: this.state.todos.map((item) => {
      if ( item.id == id  ) {
        item.text = text;
      }
      return item;
    })
  })
}


  render() {
    return (
      <div className="App">
        <div className="toDoWrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
            <ul>
              {
                this.state.todos.map((todo) => {
                  return <TodoItem text={todo.text}
                  key={todo.id}
                  id={todo.id}
                  completed={todo.completed}
                  removeTodo={this.removeTodo}
                  doneTodo={this.doneTodo}
                  saveTodo={this.saveTodo}/>
                })
              }
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
