import React from 'react'
import * as NameMode from '../../model/view/name-mode'
import { Genders } from '../../logic/name-generator'

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

export const NameTag = ({ name, mode, gender }) => {
  let genderClass
  switch (gender) {
    case Genders.FEMALE:
      genderClass = 'name-tag--female'
      break
    case Genders.MALE:
      genderClass = 'name-tag--male'
      break
    case Genders.OTHER:
      genderClass = 'name-tag--other-gender'
      break
    default:
      genderClass = ''
  }
  return (
    <div className={`name-tag ${genderClass}`} style={mode ? TagStyles[mode] : undefined}>
      {name}
    </div>
  )
}

// TODO this supposed to be connected to reducer
export const NameContainer = ({ names }) => {
  const tags = names.map((name, index) => <NameTag name={name.value} mode={name.mode} gender={name.gender} key={index}/>)
  return (
    <div id="name-container">
      {tags}
    </div>
  )
}