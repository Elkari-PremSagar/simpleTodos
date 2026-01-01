import {Component} from 'react'
import './index.css'

class AddTodo extends Component {
  state = {inputValue: ''}

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onAdd = () => {
    const {addTodo} = this.props
    const {inputValue} = this.state
    addTodo(inputValue)
    this.setState({inputValue: ''})
  }

  render() {
    const {inputValue} = this.state

    return (
      <div className="add-todo-container">
        <input
          type="text"
          className="todo-input"
          value={inputValue}
          onChange={this.onChangeInput}
          placeholder="Enter todo"
        />
        <button type="button" className="add-button" onClick={this.onAdd}>
          Add
        </button>
      </div>
    )
  }
}

export default AddTodo
