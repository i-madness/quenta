import React, { Component } from 'react';
import CharProfile from './CharProfile'
import Quenta from '../model/quenta'
import store from '../store'
import { ACTION_TYPES } from '../reducers/quenta-reducer'

import './styles/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const quents = [
  new Quenta("Alice", "Who the fuck is Alice?"),
  new Quenta("Румпельштильцхен", "Who the fuck is Румпельштильцхен?"),
  new Quenta("Квазимодо", "Who the fuck is Квазимодо?"),
]

let actions = quents
  .map(q => ({ type: ACTION_TYPES.QUENTA_CREATED, payload: q }))
  .forEach(store.dispatch)

export default class App extends Component {
  render() {
    console.log(store)
    return (
      <div className="container-fluid App">
        <div className="row">
          <div className="col-sm-3 col-md-3 sidebar">
            <button className="btn btn-success" id="new-quenta-btn"><span className="glyphicon glyphicon-plus"></span> Новая квента</button>
            <ul className="nav nav-sidebar">
              { quents.map( (q, i) => <li key={i} className={q.active ? 'active' : ''}><a href="#">{q.name}</a></li> ) }              
            </ul>
          </div>
          <div className="col-sm-9 col-md-9 main">
            { CharProfile({ name: 'Alice', description: 'Who the fuck is Alice?!' }) }
          </div>
        </div>
      </div>
    );
  }
}