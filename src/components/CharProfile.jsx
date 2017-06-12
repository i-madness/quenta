import React, { Component } from 'react'
import { connect } from 'react-redux'

class CharProfile extends Component {
  render() {
    let { quentas } = this.props.store.quentaReducer
    //debugger
    let currenQuenta = quentas.find(q => q.name === this.props.location.pathname.split('/').slice(-1)[0])
    if (currenQuenta) {
      return (
        <div>
          <h1>{currenQuenta.name}</h1>
          <p>{currenQuenta.description}</p>
        </div>
      )
    } else {
      return (
        <div>
          Профиль персонажа не найден
        </div>
      )
    }
  }
}

export default connect(state => ({ store: state }))(CharProfile)