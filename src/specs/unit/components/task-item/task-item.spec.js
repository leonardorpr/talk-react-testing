import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import 'jest-styled-components'

import TaskItem from 'components/task-item'

describe('[COMPONENTS] TaskItem', () => {
  it('Should render correctly', () => {
    const { container } = render(<TaskItem time='15 minutes' label='Make Coffee' done toggle={jest.fn()} />)
    expect(container).toMatchSnapshot()
  })

  it('Should check if a task is not completed', () => {
    const { container } = render(<TaskItem time='15 minutes' label='Make Coffee' done={false} toggle={jest.fn()} />)
    expect(container.querySelector('#indicator')).toHaveStyleRule('background-color', '#DA493A')
  })

  it('Should check if a task is completed', () => {
    const { container } = render(<TaskItem time='15 minutes' label='Make Coffee' done toggle={jest.fn()} />)
    expect(container.querySelector('#indicator')).toHaveStyleRule('background-color', '#2ECC71')
  })

  it('Should complete the task when it was clicked 2 times', () => {
    const { container } = render(<TaskItem time='15 minutes' label='Make Coffee' done={false} toggle={jest.fn()} />)
    fireEvent.doubleClick(container.querySelector('#card'))
    expect(container.querySelector('#indicator')).toHaveStyleRule('background-color', '#2ECC71')
  })
})
