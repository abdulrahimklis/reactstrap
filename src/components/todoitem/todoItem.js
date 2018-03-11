import React from 'react';
import './todoItem.css'

export default class TodoItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      newText: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({newText: event.target.value});
  }

  removeTodo(id){
    this.props.removeTodo(id);
  }

  doneTodo(id){
    this.props.doneTodo(id);
  }

  editTodo(id){
    this.setState({
      editing: true
    })
  }

  saveTodo(id, text){
    this.setState({
      editing: false
    })
    this.props.saveTodo(id, text);
  }

  editable(id, text) {
      if (!this.state.editing) {
        return (text)
      } else {
        return (
          <span>
          <input className="input_edit" type='text' defaultValue={text} onChange={this.handleChange} />
            <button className="button_edit" onClick={(e)=> this.saveTodo(id, this.state.newText)}>Save</button>
          </span>
        )
      }
  }

  buttons() {
    if (!this.state.editing) {
      return (
        <span>
          <button className="editTodo" onClick={(e)=> this.editTodo(this.props.id)}>edit</button>
          <button className="doneTodo" onClick={(e)=> this.doneTodo(this.props.id)}>done</button>
        </span>
      )
    }
  }

  render() {
    const editing = false;
    let classes = `toDoWrapper ${this.props.completed ? 'completed' : ''}`;
    return(
      <div className={classes}>
        <button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id)}>remove</button>
        {this.editable(this.props.id, this.props.text)}
        {this.buttons()}
      </div>
    );
  }
}
