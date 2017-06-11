const InitialState = {
  quentas: [],
  error: undefined
}

export const ACTION_TYPES = {
  QUENTA_CREATED: 'QUENTA_CREATED',
  QUENTA_DELETE: 'QUENTA_DELETE'
}

export function quentaReducer(state = InitialState, action) {
  switch (action.type) {
    case ACTION_TYPES.QUENTA_CREATED: {
      return { 
        ...state, 
        quentas: [...state.quentas, action.payload]
      }
    }
    case ACTION_TYPES.QUENTA_DELETE: {
      return {
        ...state,
        quentas: state.quentas.filter(q => !q.equals(action.payload))
      }
    }
    default: {
      return state
    }
  }
}