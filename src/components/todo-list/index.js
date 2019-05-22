import React from 'react'
import PropTypes from 'prop-types'

import { TodoItem } from 'components'

import { Container, Title } from './styles'

const renderTasks = (tasks) => {
  const mappedTasks = tasks.map(task => (
    <TodoItem done={task.done} label={task.label} time={task.time} toggle={() => { }} />
  ))

  return mappedTasks
}

const TodoList = ({ tasks, title }) => (
  <Container>
    <Title>{title}</Title>
    {renderTasks(tasks)}
  </Container>
)

TodoList.propTypes = {
  tasks: PropTypes.array,
  title: PropTypes.string
}

TodoList.defaultProps = {
  tasks: [],
  title: null
}

export default TodoList
