import React from 'react'
import { render } from 'react-testing-library'
import 'jest-styled-components'

import { mockTasks } from 'specs/helpers'

import TaskList, { renderTasks } from 'components/task-list'

describe('[COMPONENTS] TaskList', () => {
  it('Should render correctly', () => {
    const { container } = render(<TaskList tasks={mockTasks} title='Done' toggle={jest.fn()} />)
    expect(container).toMatchSnapshot()
  })

  it('Should return correct title', () => {
    const { container } = render(<TaskList tasks={mockTasks} title='Done' toggle={jest.fn()} />)
    expect(container.querySelector('h3').textContent).toEqual('Done')
  })

  it('Should list all tasks', () => {
    const tasks = renderTasks(mockTasks, jest.fn())
    expect(tasks).toHaveLength(3)
  })
})
