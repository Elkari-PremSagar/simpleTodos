import {Component} from 'react'
import TodoItem from '../TodoItem'
import AddTodo from '../AddTodo'
import './index.css'

const initialTodosList = [
  {id: 1, title: 'Book the ticket for today evening'},
  {id: 2, title: 'Rent the movie for tomorrow movie night'},
  {id: 3, title: 'Confirm the slot for the yoga session tomorrow morning'},
  {id: 4, title: 'Drop the parcel at Bloomingdale'},
  {id: 5, title: 'Order fruits on Big Basket'},
  {id: 6, title: 'Fix the production issue'},
  {id: 7, title: 'Confirm my slot for Saturday Night'},
  {id: 8, title: 'Get essentials for Sunday car wash'},
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList.map(todo => ({
      ...todo,
      isCompleted: false,
      isEditing: false,
    })),
  }

  deleteTodo = id => {
    this.setState(prev => ({
      todosList: prev.todosList.filter(todo => todo.id !== id),
    }))
  }

  toggleComplete = id => {
    this.setState(prev => ({
      todosList: prev.todosList.map(todo =>
        todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo,
      ),
    }))
  }

  toggleEdit = id => {
    this.setState(prev => ({
      todosList: prev.todosList.map(todo =>
        todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo,
      ),
    }))
  }

  updateTitle = (id, newTitle) => {
    this.setState(prev => ({
      todosList: prev.todosList.map(todo =>
        todo.id === id ? {...todo, title: newTitle} : todo,
      ),
    }))
  }

  addTodo = inputValue => {
    if (inputValue.trim() === '') return

    const words = inputValue.trim().split(' ')
    const lastWord = Number(words[words.length - 1])
    const count = Number.isInteger(lastWord) ? lastWord : 1
    const title = Number.isInteger(lastWord)
      ? words.slice(0, -1).join(' ')
      : inputValue

    const newTodos = Array.from({length: count}, () => ({
      id: Date.now() + Math.random(),
      title,
      isCompleted: false,
      isEditing: false,
    }))

    this.setState(prev => ({
      todosList: [...prev.todosList, ...newTodos],
    }))
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>

          <AddTodo addTodo={this.addTodo} />

          <ul className="todos-list">
            {todosList.map(todo => (
              <TodoItem
                key={todo.id}
                todoDetails={todo}
                deleteTodo={this.deleteTodo}
                toggleComplete={this.toggleComplete}
                toggleEdit={this.toggleEdit}
                updateTitle={this.updateTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
