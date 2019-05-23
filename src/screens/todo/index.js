import React from 'react'

import { TodoList, Form } from 'components'

import { Container, Wrapper } from './styles'

const tasks = [
  { label: 'Fazer café', time: '5 minutos', done: false, toggle: () => { } },
  { label: 'Fazer trabalho', time: '15 minutos', done: false, toggle: () => { } },
  { label: 'Fazer talk', time: '3 minutos', done: false, toggle: () => { } },
  { label: 'Participar da daily', time: '7 minutos', done: false, toggle: () => { } }
]

const Todo = () => (
  <Container>
    <Form />
    <Wrapper>
      <TodoList title='To Do' tasks={tasks} />
      <TodoList title='Done' tasks={tasks} />
    </Wrapper>
  </Container>
)

export default Todo
