import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Task, Body, Indicator, Informations, Label, Time } from './styles'

const TaskItem = ({ done, label, time, toggle }) => {
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

TaskItem.propTypes = {
  done: PropTypes.bool,
  label: PropTypes.string,
  time: PropTypes.string,
  toggle: PropTypes.func
}

TaskItem.defaultProps = {
  done: false,
  label: '',
  time: '',
  toggle: () => {}
}

export default TaskItem
