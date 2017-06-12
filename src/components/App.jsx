import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import './styles/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const displayNewBtn = () => ({ display: window.location.hash === '#/' ? 'none' : '' })

class App extends Component {
  render() {
    let { quentas } = this.props.store.quentaReducer
    return (
      <div className="container-fluid App">
        <div className="row">
          <div className="col-sm-3 col-md-3 sidebar">
            <Button bsClass="btn btn-success" id="new-quenta-btn" style={displayNewBtn()}><span className="glyphicon glyphicon-plus"></span> Новая квента</Button>
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