import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import 'jest-styled-components'

import { Provider } from 'react-redux'
import store from 'store'

import Tasks from 'screens/tasks'

describe('[SCREENS] Tasks', () => {
  it('Should create a task', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <Tasks tasks={[]} />
      </Provider>
    )

    fireEvent.change(getByPlaceholderText('Task name'), { target: { value: 'Make Dinner' } })
    fireEvent.change(getByPlaceholderText('Estimated time'), { target: { value: 'Study Hard' } })
    fireEvent.click(container.querySelector('button'))

    expect(getByText('Make Dinner').innerHTML).toEqual('Make Dinner')
  })

  it('Should toggle a task', () => {
    const { container } = render(
      <Provider store={store}>
        <Tasks tasks={[]} />
      </Provider>
    )

    fireEvent.doubleClick(container.querySelector('#card'))
    expect(container.querySelector('#indicator')).toHaveStyleRule('background-color', '#2ECC71')
  })
})
