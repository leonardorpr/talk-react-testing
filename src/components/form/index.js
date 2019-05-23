import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { FormTask, Field, Button, Container } from './styles'

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (event, data) => {
    event.preventDefault()
    onSubmit(data)
  }

  return (
    <FormTask onSubmit={(event) => handleSubmit(event, { name, time })}>
      <Container>
        <Field
          placeholder='Nome da tarefa'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Field
          placeholder='Tempo estimado'
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
        <Button>Registrar</Button>
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
