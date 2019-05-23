import React from 'react'
import PropTypes from 'prop-types'

import { TodoItem } from 'components'

import { Container, Title, List } from './styles'

const renderTasks = (tasks) => {
  const mappedTasks = tasks.map((task, index) => (
    <TodoItem key={index} done={task.done} label={task.name} time={task.time} toggle={() => { }} />
  ))

  return mappedTasks
}

const TodoList = ({ tasks, title }) => (
  <Container>
    <List>
      <Title>{title}</Title>
      {renderTasks(tasks)}
    </List>
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
