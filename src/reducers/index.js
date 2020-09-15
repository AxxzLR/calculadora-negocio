import { actionTypes } from '../actions'
import config from '../utils/config'
const reducer = (state, action) => {
    state.lastSession = Date.now()
    switch (action.type) {
        case actionTypes.SET_ACTUAL_ROUTE:
            return {
                ...state,
                appSession: {
                    ...state.appSession,
                    actualRoute: action.payload,
                    nextRoute: {}
                }
            }
        case actionTypes.SET_NEXT_ROUTE:
            return {
                ...state,
                appSession: {
                    ...state.appSession,
                    nextRoute: action.payload
                }
            }
        case actionTypes.CLEAR_NEXT_ROUTE:
            return {
                ...state,
                appSession: {
                    ...state.appSession,
                    nextRoute: {}
                }
            }
        case actionTypes.SET_USER_SESSION:
            return {
                ...state,
                userSession: {
                    ...action.payload
                }
            }
        case actionTypes.DELETE_USER_SESSION:
            return config.INITIAL_STATE
        default:
            return state
    }
}

export default reducer