const InitialState = {
  skillsets: []
}

export const ACTION_TYPES = {
  SKILLSETS_LOADED: 'SKILLSETS_LOADED',
  SKILLSET_ADDED: 'SKILLSET_ADDED'
}

export function skillReducer(state = InitialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SKILLSETS_LOADED: {
      return {
        ...state,
        skillsets: [...action.payload]
      }
    }
    case ACTION_TYPES.SKILL_ADDED: {
      return {
        ...state,
        skillsets: [...state.skillsets, action.payload]
      }
    }
    default: {
      return state
    }
  }
}