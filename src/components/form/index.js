import React from 'react'
import PropTypes from 'prop-types'

import { FormTask, Field, Button, Container } from './styles'

const Form = ({ onSubmit }) => (
  <FormTask onSubmit={onSubmit}>
    <Container>
      <Field placeholder='Nome da tarefa' />
      <Field placeholder='Tempo estimado' />
      <Button>Registrar</Button>
    </Container>
  </FormTask>
)

Form.propTypes = {
  onSubmit: PropTypes.func
}

Form.defaultProp = {
  onSubmit: () => {}
}

export default Form
