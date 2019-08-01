import React from 'react'
import * as NameMode from '../../model/view/name-mode'

import './NameContainer.scss'

const TagStyles = {
  [NameMode.CHARACTER]: {
    backgroundColor: '#286958',
    color: '#fff'
  },
  [NameMode.OBJECT]: {
    backgroundColor: '#3a4f69',
    color: '#fff'
  }
}

export const NameTag = ({ name, mode }) => {
  return (
    <div className="name-tag" style={mode ? TagStyles[mode] : undefined}>
      {name}
    </div>
  )
}

// TODO this supposed to be connected to reducer
export const NameContainer = ({ names }) => {
  const tags = names.map(n => <NameTag name={n.value} mode={n.mode} />)
  return (
    <div id="name-container">
      {tags}
    </div>
  )
}