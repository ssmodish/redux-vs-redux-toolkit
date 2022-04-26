import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos)
  return (
    <ul className='todo-list'>
      {todos && todos.length > 0 ? todos.map((todo) => <Todo key={todo.id} todo={todo} />) : 'Empty todo list...'}
    </ul>
  )
}

export default TodoList
