import React from 'react'

const CharProfile = (quenta) => {
  let { name, description } = quenta

  return (
    <div>
      <h1>{ name }</h1>
      <p>{ description }</p>
    </div>
  )
}

export default CharProfile