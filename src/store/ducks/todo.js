import { createActions, createReducer } from 'reduxsauce'

// Action types & creators
export const { Types, Creators } = createActions({
  createTask: ['task'],
  toggleTask: ['id']
})

// Handlers
const INITIAL_STATE = { todos: [] }

const createTask = (state = INITIAL_STATE, action) => ({ todos: [...state.todos, action.task] })

const toggleTask = (state = INITIAL_STATE, action) => {
  const mappedTodos = state.todos.map((todo) => {
    if (todo.id === action.id) {
      todo.done = !todo.done
    }

    return todo
  })

  return ({ todos: mappedTodos })
}

// Reducer
export default createReducer(INITIAL_STATE, {
  [Types.CREATE_TASK]: createTask,
  [Types.TOGGLE_TASK]: toggleTask
})
