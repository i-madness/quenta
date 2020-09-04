import { ACTION_TYPES } from './char-book.actions'


const initialState = {
  charEntries: [],
  currentLocale: 'en'
}

// technically is not required but eventually I might implement more advanced functionality in the app
export function charBookReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.ENTRIES_LOADED: {
      return {
        ...state,
        charEntries: action.payload
      }
    }
    case ACTION_TYPES.LOCALE_CHANGED: {
      return {
        ...state,
        currentLocale: action.payload
      }
    }
    default:
      return state
  }
}