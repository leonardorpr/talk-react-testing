import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators } from 'store/ducks/tasks'

import { TaskList, Form } from 'components'
import { Container, Wrapper } from './styles'

const handleTasks = (tasks, type) => {
  if (type === 'done') {
    return tasks.filter(task => task.done)
  }

  return tasks.filter(task => !task.done)
}

const Tasks = ({ tasks, createTask, toggleTask }) => (
  <Container>
    <Form onSubmit={(task) => createTask(task)} />
    <Wrapper>
      <TaskList title='To Do' tasks={handleTasks(tasks, 'todo')} toggle={(id) => toggleTask(id)} />
      <TaskList title='Done' tasks={handleTasks(tasks, 'done')} toggle={(id) => toggleTask(id)} />
    </Wrapper>
  </Container>
)

Tasks.propTypes = {
  tasks: PropTypes.array,
  createTask: PropTypes.func,
  toggleTask: PropTypes.func
}

const mapStateToProps = ({ tasks }) => ({ tasks: tasks.tasks })

const mapDispatchToProps = dispatch => ({
  createTask: bindActionCreators(Creators.createTask, dispatch),
  toggleTask: bindActionCreators(Creators.toggleTask, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
