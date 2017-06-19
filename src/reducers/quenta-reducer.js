const InitialState = {
  quentas: [],
  quentaToEdit: undefined,
  error: undefined
}

export const ACTION_TYPES = {
  QUENTA_CREATED: 'QUENTA_CREATED',
  QUENTA_DELETE: 'QUENTA_DELETE',
  QUENTA_START_EDITING: 'QUENTA_START_EDITING'
}

/**
 * Возвращет объект состояния в соответствии с выполнением определённых действий с квентами
 */
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
    case ACTION_TYPES.QUENTA_START_EDITING: {
      return {
        ...state,
        quentaToEdit: action.payload
      }
    }
    default: {
      return state
    }
  }
}