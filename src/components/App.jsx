import React, { Component } from 'react';
//import CharProfile from './CharProfile'
import { connect } from 'react-redux'
import Quenta from '../model/quenta'
import store from '../store'
import { ACTION_TYPES } from '../reducers/quenta-reducer'

import './styles/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

//const quentas = 

/*quentas
  .map(q => ({ type: ACTION_TYPES.QUENTA_CREATED, payload: q }))
  .forEach(store.dispatch)*/

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quentas: props.store.quentaReducer.quentas
    }
  }

  render() {
    let {quentas} = this.state
    console.log(quentas)
    return (
      <div className="container-fluid App">
        <div className="row">
          <div className="col-sm-3 col-md-3 sidebar">
            <button className="btn btn-success" id="new-quenta-btn"><span className="glyphicon glyphicon-plus"></span> Новая квента</button>
            <ul className="nav nav-sidebar">
              {quentas.map((q, i) => <li key={i} className={i === 0 ? 'active' : ''}><a href="#">{q.name}</a></li>)}
            </ul>
          </div>
          <div className="col-sm-9 col-md-9 main">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ store: state }))(App)