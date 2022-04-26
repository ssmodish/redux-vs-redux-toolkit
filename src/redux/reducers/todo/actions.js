import { ADD_TODO, COMPLETE_TODO } from './actionsTypes'

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
})

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: id,
})
