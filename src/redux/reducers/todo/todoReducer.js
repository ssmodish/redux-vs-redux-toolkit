import { ADD_TODO, COMPLETE_TODO } from './actionsTypes'

const initialState = {
  todos: [],
}

const getId = (state) => state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: getId(state),
            title: action.payload,
            completed: false,
          },
        ],
      }
    case COMPLETE_TODO:
      return {
        todos: state.todos.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)),
      }
    default:
      return state
  }
}

export default todoReducer
