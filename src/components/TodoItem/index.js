import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteUser} = props
  const {title, id} = todoDetails

  const onDelete = () => {
    onDeleteUser(id)
  }

  return (
    <li className="todo-item">
      <p className="todo-title">{title}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
