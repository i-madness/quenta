import { combineReducers } from 'redux'
import { quentaReducer } from './quenta-reducer'
import { skillReducer } from './skill-reducer'

export default combineReducers({
  quentaReducer,
  skillReducer
})