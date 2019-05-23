import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { FormTask, Field, Button, Container } from './styles'

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const [time, setTime] = useState('')

  return (
    <FormTask onSubmit={() => onSubmit({ name, time })}>
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
