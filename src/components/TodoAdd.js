import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux-toolkit/todo/todoSlice'

const TodoAdd = () => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState('')

  const onAddButtonClick = () => {
    if (!todo) return

    dispatch(addTodo(todo))
    setTodo('')
  }

  return (
    <div>
      <input type='text' placeholder='Start typing...' value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={onAddButtonClick}>Add Todo</button>
    </div>
  )
}

export default TodoAdd
