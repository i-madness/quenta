import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import './styles/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const currentPageIsHome = () => window.location.hash === '#/'

class App extends Component {
  render() {
    let { quentas } = this.props.store.quentaReducer
    let qLinks = quentas
      .map((q, i) => (
        <li key={i} className={window.location.hash.match('.*' + q.name) ? 'active' : ''}>
          <Link to={`quenta/${q.name}`}>{q.name}</Link>
        </li>)
      )

    return (
      <div className="container-fluid App">
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3 sidebar">
            <Button bsClass="btn btn-success" id="new-quenta-btn" onClick={() => window.location.hash = "/"} 
              style={{display: currentPageIsHome() ? 'none' : '' }}>
              <span className="glyphicon glyphicon-plus"></span>
            </Button>
            <Button bsClass="btn" id="settings-btn" style={{ borderRadius: currentPageIsHome() ? '0 0 10px 10px' : '0 0 10px 0' }}>
              <span className="glyphicon glyphicon-cog"></span>
            </Button>
            <ul className="nav nav-sidebar" id="quenta-linklist">
              {qLinks}
            </ul>
          </div>

          <div className="col-sm-9 col-md-9 col-lg-9 main">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ store: state }))(App)