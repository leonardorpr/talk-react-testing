import React from 'react'
import PropTypes from 'prop-types'

import { TaskItem } from 'components'

import { Container, Title, List } from './styles'

const renderTasks = (tasks, toggle) => {
  const mappedTasks = tasks.map((task) => (
    <TaskItem key={task.id} done={task.done} label={task.name} time={task.time} toggle={() => toggle(task.id)} />
  ))

  return mappedTasks
}

const TaskList = ({ tasks, title, toggle }) => (
  <Container>
    <List>
      <Title>{title}</Title>
      {renderTasks(tasks, toggle)}
    </List>
  </Container>
)

TaskList.propTypes = {
  tasks: PropTypes.array,
  title: PropTypes.string,
  toggle: PropTypes.func
}

TaskList.defaultProps = {
  tasks: [],
  title: null,
  toggle: () => { }
}

export default TaskList
