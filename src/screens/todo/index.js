import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators } from 'store/ducks/todo'

import { TodoList, Form } from 'components'
import { Container, Wrapper } from './styles'

const handleTodos = (todos, type) => {
  if (type === 'done') {
    return todos.filter(todo => todo.done)
  }

  return todos.filter(todo => !todo.done)
}

const Todo = ({ todos, createTask, toggleTask }) => (
  <Container>
    <Form onSubmit={(prop) => createTask(prop)} />
    <Wrapper>
      <TodoList title='To Do' tasks={handleTodos(todos, 'todo')} toggle={(id) => toggleTask(id)} />
      <TodoList title='Done' tasks={handleTodos(todos, 'done')} toggle={(id) => toggleTask(id)} />
    </Wrapper>
  </Container>
)

Todo.propTypes = {
  todos: PropTypes.array,
  createTask: PropTypes.func,
  toggleTask: PropTypes.func
}

const mapStateToProps = ({ todo }) => ({ todos: todo.todos })

const mapDispatchToProps = dispatch => ({
  createTask: bindActionCreators(Creators.createTask, dispatch),
  toggleTask: bindActionCreators(Creators.toggleTask, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
