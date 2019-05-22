import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import 'jest-styled-components'

import TodoItem from 'components/todo-item'

describe('[COMPONENTS] TodoItem', () => {
  it('Should render correctly', () => {
    const { container } = render(<TodoItem time='15 minutos' label='Fazer café' done toggle={jest.fn()} />)
    expect(container).toMatchSnapshot()
  })

  it('Should check if a task is not completed', () => {
    const { container } = render(<TodoItem time='15 minutos' label='Fazer café' done={false} toggle={jest.fn()} />)
    expect(container.querySelector('#task-situation')).toHaveStyle('background-color: #DA493A')
  })

  it('Should check if a task is completed', () => {
    const { container } = render(<TodoItem time='15 minutos' label='Fazer café' done toggle={jest.fn()} />)
    expect(container.querySelector('#task-situation')).toHaveStyle('background-color: #2ECC71')
  })

  it('Should complete the task when it was clicked 2 times', () => {
    const { container } = render(<TodoItem time='15 minutos' label='Fazer café' done={false} toggle={jest.fn()} />)
    expect(container.querySelector('#task-situation')).toHaveStyle('background-color: #2ECC71')
  })
})
