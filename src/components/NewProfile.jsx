import React, { Component } from 'react'
import store from '../store'
import Quenta from '../model/quenta'

export default class NewProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
    this.onNameChange = this.onNameChange.bind(this)
  }

  onNameChange(e) {
    console.log(e)
    store.dispatch({type:'QUENTA_CREATED', payload: new Quenta(e.target.value, `Math.random()`)})
    this.setState({
      ...this.state,
      name: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.onNameChange}/>
        <input value={this.state.description} />
      </div>
    )
  }

}