import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {editText: ''}

  componentDidMount() {
    const {todoDetails} = this.props
    this.setState({editText: todoDetails.title})
  }

  onChangeEdit = event => {
    this.setState({editText: event.target.value})
  }

  onSave = () => {
    const {todoDetails, updateTitle, toggleEdit} = this.props
    const {editText} = this.state
    updateTitle(todoDetails.id, editText)
    toggleEdit(todoDetails.id)
  }

  render() {
    const {todoDetails, deleteTodo, toggleComplete, toggleEdit} = this.props
    const {editText} = this.state
    const {id, title, isCompleted, isEditing} = todoDetails

    return (
      <li className="todo-item">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => toggleComplete(id)}
        />

        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={this.onChangeEdit}
            className="edit-input"
          />
        ) : (
          <p className={isCompleted ? 'completed todo-title' : 'todo-title'}>
            {title}
          </p>
        )}

        {isEditing ? (
          <button type="button" onClick={this.onSave} className="action-btn">
            Save
          </button>
        ) : (
          <button
            type="button"
            onClick={() => toggleEdit(id)}
            className="action-btn"
          >
            Edit
          </button>
        )}

        <button
          type="button"
          className="delete-btn"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
