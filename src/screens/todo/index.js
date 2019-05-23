import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators } from 'store/ducks/todo'

import { TodoList, Form } from 'components'
import { Container, Wrapper } from './styles'

const Todo = ({ doneTasks, todoTasks, createTask, toggleTask }) => (
  <Container>
    <Form onSubmit={(prop) => createTask(prop)} />
    <Wrapper>
      <TodoList title='To Do' tasks={todoTasks} />
      <TodoList title='Done' tasks={doneTasks} />
    </Wrapper>
  </Container>
)

Todo.propTypes = {
  doneTasks: PropTypes.array,
  todoTasks: PropTypes.array,
  createTask: PropTypes.func,
  toggleTask: PropTypes.func
}

const mapStateToProps = ({ todo }) => ({ doneTasks: todo.done, todoTasks: todo.todo })

const mapDispatchToProps = dispatch => ({
  createTask: bindActionCreators(Creators.createTask, dispatch),
  toggleTask: bindActionCreators(Creators.toggleTask, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
