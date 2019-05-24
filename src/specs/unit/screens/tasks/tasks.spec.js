import React from 'react'
import { render } from 'react-testing-library'

import { Provider } from 'react-redux'

import { mockTasks, mockStore } from 'specs/helpers'

import Tasks, { handleTasks } from 'screens/tasks'

describe('[SCREENS] Tasks', () => {
  it('Should render correctly', () => {
    const { container } = render(
      <Provider store={mockStore({ tasks: { tasks: [] } })}>
        <Tasks createTask={jest.fn()} toggleTask={jest.fn()} />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })

  it('Should only return completed tasks', () => {
    const tasks = handleTasks(mockTasks, 'done')

    expect(tasks).toHaveLength(1)
  })

  it('Should only return tasks to do', () => {
    const tasks = handleTasks(mockTasks, 'todo')

    expect(tasks).toHaveLength(2)
  })
})
