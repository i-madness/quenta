import { combineReducers } from 'redux'
import { quentaReducer } from './quenta.reducer'
import { skillReducer } from './skill.reducer'
import { raceReducer } from './race.reducer'
import { charBookReducer } from './char-book.reducer'

export default combineReducers({
  // char book
  charBookReducer,
  // generator
  quentaReducer,
  skillReducer,
  raceReducer
})