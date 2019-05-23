import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Task, Body, Indicator, Informations, Label, Time } from './styles'

const TodoItem = ({ done, label, time, toggle }) => {
  const [status, setStatus] = useState(done || false)

  const handleToggle = (status) => {
    setStatus(status)
    toggle(status)
  }

  return (
    <Task onDoubleClick={() => handleToggle(!status, toggle)}>
      <Indicator done={status} />
      <Body>
        <Informations>
          <Label>{label}</Label>
          <Time>{time}</Time>
        </Informations>
      </Body>
    </Task>
  )
}

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
