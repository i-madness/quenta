import React, { Component } from 'react'

export default class CharProfile extends Component {
  //let { name, description } = quenta

  render() { 
    return (
      <div>
        <h1>{ this.props.quenta.name }</h1>
        <p>{ this.props.quenta.description }</p>
      </div>
    )
  }
}