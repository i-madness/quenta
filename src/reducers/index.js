import { combineReducers } from 'redux'
import { quentaReducer } from './quenta-reducer'
import { skillReducer } from './skill-reducer'
import { raceReducer } from './race-reducer'

export default combineReducers({
  quentaReducer,
  skillReducer,
  raceReducer
})