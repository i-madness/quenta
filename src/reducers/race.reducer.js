const InitialState = {
  races: []
}

export const ACTION_TYPES = {
  RACES_LOADED: 'RACES_LOADED'
}

export function raceReducer(state = InitialState, action) {
  switch (action.type) {
    case ACTION_TYPES.RACES_LOADED: {
      return {
        ...state,
        races: [...action.payload]
      }
    }
    default: {
      return state
    }
  }
}