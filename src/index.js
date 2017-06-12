import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/App'
import { Provider } from 'react-redux'
import CharProfile from './components/CharProfile'
import NewProfile from './components/NewProfile'
import store from './store'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={NewProfile}></IndexRoute>
        <Route path="quenta(/:name)" component={CharProfile}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
