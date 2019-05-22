import React from 'react'

import { FormTask, Field, Button, Container } from './styles'

const Form = () => (
  <FormTask>
    <Container>
      <Field placeholder='Nome da tarefa' />
      <Field placeholder='Tempo estimado' />
      <Button>Registrar</Button>
    </Container>
  </FormTask>
)

export default Form
