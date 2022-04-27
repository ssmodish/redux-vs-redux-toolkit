import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

const getId = (state) => state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: getId(state),
        title: action.payload,
        completed: false,
      }

      state.todos.push(newTodo)
    },
    completeTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload)
      todo.completed = !todo.completed
    },
  },
})

export const { addTodo, completeTodo } = todoSlice.actions

export default todoSlice.reducer
