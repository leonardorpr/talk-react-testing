import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'

import Form from 'components/form'

describe('[COMPONENTS] Form', () => {
  it('Should render correctly', () => {
    const { container } = render(<Form onSubmit={jest.fn()} />)
    expect(container).toMatchSnapshot()
  })

  it('Should return if onSubmit was called successfully', () => {
    const onSubmit = jest.fn()

    const { container } = render(<Form onSubmit={onSubmit} />)
    fireEvent.click(container.querySelector('button'))
    expect(onSubmit).toHaveBeenCalled()
  })

  it('Should return field value', () => {
    cleanup()

    const { getByPlaceholderText } = render(<Form onSubmit={jest.fn()} />)
    fireEvent.change(getByPlaceholderText('Task name'), { target: { value: 'Make Dinner' } })
    fireEvent.change(getByPlaceholderText('Estimated time'), { target: { value: '30 minutes' } })

    expect(getByPlaceholderText('Task name').value).toEqual('Make Dinner')
    expect(getByPlaceholderText('Estimated time').value).toEqual('30 minutes')
  })

  it('Should return the fields blank', () => {
    cleanup()
    const onSubmit = jest.fn()

    const { container, getByPlaceholderText } = render(<Form onSubmit={onSubmit} />)
    fireEvent.change(getByPlaceholderText('Task name'), { target: { value: 'Make Dinner' } })
    fireEvent.change(getByPlaceholderText('Estimated time'), { target: { value: '30 minutes' } })

    fireEvent.click(container.querySelector('button'))
    expect(getByPlaceholderText('Task name').value).toEqual('')
    expect(getByPlaceholderText('Estimated time').value).toEqual('')
  })
})
