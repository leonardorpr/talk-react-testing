import React from 'react'
import PropTypes from 'prop-types'

import { Task, Body, Indicator, Informations, Label, Time } from './styles'

const TodoItem = ({ done, label, time, toggle }) => (
  <Task onDoubleClick={toggle}>
    <Indicator done={done} />
    <Body>
      <Informations>
        <Label>{label}</Label>
        <Time>{time}</Time>
      </Informations>
    </Body>
  </Task>
)

TodoItem.propTypes = {
  done: PropTypes.bool,
  label: PropTypes.string,
  time: PropTypes.string,
  toggle: PropTypes.func
}

TodoItem.defaultProps = {
  done: false
}

export default TodoItem
