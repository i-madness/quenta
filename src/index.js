import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/App'
import { Provider } from 'react-redux'
import CharProfile from './components/CharProfile'
import NewProfile from './components/NewProfile'
import store from './store'
import { getSkillsets } from './logic/skillset-provider'
import { ACTION_TYPES as skillActions } from './reducers/skill-reducer'
import './index.css'

getSkillsets().then(sets => store.dispatch({ type: skillActions.SKILLSETS_LOADED, payload: sets }))

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={NewProfile}></IndexRoute>
        <Route path="quenta/:name" component={CharProfile}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
