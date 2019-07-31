import { orderBy } from 'lodash'

const InitialState = {
  skillsets: [],
  currentQuentaSkills: []
}

export const ACTION_TYPES = {
  SKILLSETS_LOADED: 'SKILLSETS_LOADED',
  SKILLSET_ADDED: 'SKILLSET_ADDED',
  QUENTA_ADD_SKILL: 'QUENTA_ADD_SKILL',
  QUENTA_REMOVE_SKILL: 'QUENTA_REMOVE_SKILL',
  QUENTA_CLEAR_SKILLS: 'QUENTA_CLEAR_SKILLS'
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
    case ACTION_TYPES.QUENTA_ADD_SKILL: {
      if (state.currentQuentaSkills.find(skill => skill === action.payload)) {
        return state
      }
      return {
        ...state,
        currentQuentaSkills: orderBy([...state.currentQuentaSkills, action.payload], ['level'])
      }
    }
    case ACTION_TYPES.QUENTA_REMOVE_SKILL: {
      return {
        ...state,
        currentQuentaSkills: orderBy(state.currentQuentaSkills.filter(skill => skill.name !== action.payload), ['level'])
      }
    }
    case ACTION_TYPES.QUENTA_CLEAR_SKILLS: {
      return {
        ...state,
        currentQuentaSkills: []
      }
    }
    default: {
      return state
    }
  }
}