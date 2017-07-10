import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers/index.js'

const middleware = applyMiddleware(thunk, createLogger())
const store = createStore(reducer, middleware)
const persistToLocalStorage = () => {
  let state = store.getState()
  let { quentas } = state.quentaReducer
  localStorage.setItem('quentas', JSON.stringify(quentas))
}

store.subscribe(persistToLocalStorage)

export default store