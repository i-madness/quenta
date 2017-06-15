import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/App'
import { Provider } from 'react-redux'
import CharProfile from './components/CharProfile'
import NewProfile from './components/NewProfile'
import store from './store'
import { getSkillsets } from './logic/skillset-provider'
import { getRaces } from './logic/race-provider'
import { ACTION_TYPES as skillActions } from './reducers/skill-reducer'
import { ACTION_TYPES as raceActions } from './reducers/race-reducer'
import './index.css'

getSkillsets().then(sets => store.dispatch({ type: skillActions.SKILLSETS_LOADED, payload: sets }))
getRaces().then(races => store.dispatch({ type: raceActions.RACES_LOADED, payload: races }))

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
