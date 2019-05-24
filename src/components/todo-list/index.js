import React from 'react'
import PropTypes from 'prop-types'

import { TodoItem } from 'components'

import { Container, Title, List } from './styles'

const renderTasks = (tasks, toggle) => {
  const mappedTasks = tasks.map((task) => (
    <TodoItem key={task.id} done={task.done} label={task.name} time={task.time} toggle={() => toggle(task.id)} />
  ))

  return mappedTasks
}

const TodoList = ({ tasks, title, toggle }) => (
  <Container>
    <List>
      <Title>{title}</Title>
      {renderTasks(tasks, toggle)}
    </List>
  </Container>
)

TodoList.propTypes = {
  tasks: PropTypes.array,
  title: PropTypes.string,
  toggle: PropTypes.func
}

TodoList.defaultProps = {
  tasks: [],
  title: null,
  toggle: () => { }
}

export default TodoList
