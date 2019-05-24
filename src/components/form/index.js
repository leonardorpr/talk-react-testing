import React, { useState } from 'react'
import PropTypes from 'prop-types'

import uuid from 'uuid/v1'

import { FormTask, Field, Button, Container } from './styles'

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (event, data) => {
    event.preventDefault()
    onSubmit(data)
    resetFields()
  }

  const resetFields = () => {
    setName('')
    setTime('')
  }

  return (
    <FormTask onSubmit={(event) => handleSubmit(event, { id: uuid(), name, time })}>
      <Container>
        <Field
          placeholder='Task name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Field
          placeholder='Estimated time'
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
        <Button>Create</Button>
      </Container>
    </FormTask>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func
}

Form.defaultProp = {
  onSubmit: () => { }
}

export default Form
