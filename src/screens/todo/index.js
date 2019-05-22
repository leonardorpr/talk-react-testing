import React from 'react'

import { TodoList } from 'components'

import { Container } from './styles'

const tasks = [
  { label: 'Fazer café', time: '5 minutos', done: false, toggle: () => { } },
  { label: 'Fazer trabalho', time: '15 minutos', done: false, toggle: () => { } },
  { label: 'Fazer talk', time: '3 minutos', done: false, toggle: () => { } },
  { label: 'Participar da daily', time: '7 minutos', done: false, toggle: () => { } },
]

const Todo = () => (
  <Container>
    <TodoList title='To Do' tasks={tasks} />
  </Container>
)

export default Todo
