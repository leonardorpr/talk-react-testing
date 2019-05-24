import { task } from 'specs/helpers'

import reducer, { createTask, toggleTask, Types } from 'store/ducks/tasks'

describe('[DUCKS] Tasks', () => {
  const store = { tasks: [] }
  const storeSeed = { tasks: [task] }
  const expected = { name: 'Make Coffee', id: 1, time: '5 minutes', done: true }

  it('Should create a new task', () => {
    const create = createTask(store, { task })

    expect(create).toEqual({ tasks: [task] })
  })

  it('Should toggle the task status', () => {
    const toggle = toggleTask(storeSeed, { id: 1 })

    expect(toggle).toEqual({ tasks: [expected] })
  })

  it('Should handle CREATE_TASK action', () => {
    expect(reducer(store, { type: Types.CREATE_TASK, task })).toEqual({ tasks: [task] })
  })

  it('should handle TOGGLE_TASK action', () => {
    expect(reducer(storeSeed, { type: Types.TOGGLE_TASK, id: 1 })).toEqual({ tasks: [{ ...expected, done: false }] })
  })
})
