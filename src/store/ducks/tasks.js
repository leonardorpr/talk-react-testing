import { createActions, createReducer } from 'reduxsauce'

// Action types & creators
export const { Types, Creators } = createActions({
  createTask: ['task'],
  toggleTask: ['id']
})

// Handlers
const INITIAL_STATE = { tasks: [] }

const createTask = (state = INITIAL_STATE, action) => ({ tasks: [...state.tasks, action.task] })

const toggleTask = (state = INITIAL_STATE, action) => {
  const mappedTasks = state.tasks.map((task) => {
    if (task.id === action.id) {
      task.done = !task.done
    }

    return task
  })

  return ({ tasks: mappedTasks })
}

// Reducer
export default createReducer(INITIAL_STATE, {
  [Types.CREATE_TASK]: createTask,
  [Types.TOGGLE_TASK]: toggleTask
})
