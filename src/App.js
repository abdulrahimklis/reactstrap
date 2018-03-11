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
      {id: 0, text: "Contact Bene Studio", completed: true},
      {id: 1, text: "Send CV to Bene studio", completed: true},
      {id: 2, text: "Make To-Do App for Bene Studio", completed: true},
      {id: 3, text: "Make To-Do App", completed: true},
      {id: 4, text: "Skype interview", completed: false},
      {id: 5, text: "Online Coding", completed: false},
      {id: 6, text: "Start working at BeneStudio", completed: false},
      {id: 7, text: "Visit Tunisia with Medina", completed: false},
      {id: 8, text: "Visit Medina with Medina", completed: false},
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
