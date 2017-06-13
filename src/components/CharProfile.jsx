import React, { Component } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import store from '../store'
import { ACTION_TYPES as QuentaActions } from '../reducers/quenta-reducer'

class CharProfile extends Component {
  constructor(props) {
    super(props)
    let { quentas } = this.props.store.quentaReducer
    this.currenQuenta = quentas.find(q => q.name === this.props.location.pathname.split('/').slice(-1)[0])
    this.removeProfile = this.removeProfile.bind(this)
  }

  removeProfile() {
    store.dispatch({ type: QuentaActions.QUENTA_DELETE, payload: this.currenQuenta })
    this.props.router.push("/")
  }

  render() {
    if (this.currenQuenta) {
      return (
        <div>
          <h1>{this.currenQuenta.name}</h1>
          <p>{this.currenQuenta.description}</p>
          
          <ButtonGroup justified>
            <Button className="btn btn-primary" href="#">Редактировать квенту</Button>
            <Button className="btn btn-danger" onClick={this.removeProfile} href="#">Удалить квенту</Button>
          </ButtonGroup>
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