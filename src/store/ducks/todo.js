import { createActions, createReducer } from 'reduxsauce'

// Action types & creators
export const { Types, Creators } = createActions({
  createTask: ['task'],
  toggleTask: ['id']
})

// Handlers
const INITIAL_STATE = { done: [], todo: [] }

const createTask = (state = INITIAL_STATE, action) => console.log('action', action)

const toggleTask = (state = INITIAL_STATE, action) => console.log('actionToggle', action)

// Reducer
export default createReducer(INITIAL_STATE, {
  [Types.CREATE_TASK]: createTask,
  [Types.TOGGLE_TASK]: toggleTask
})
