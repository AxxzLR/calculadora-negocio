export const actionTypes = {
    SET_ACTUAL_ROUTE: 'SET_ACTUAL_ROUTE',
    SET_NEXT_ROUTE: 'SET_NEXT_ROUTE',
    SET_LAST_SESSION: 'SET_LAST_SESSION',
    SET_USER_SESSION: 'SET_USER_SESSION',
    DELETE_USER_SESSION: 'DELETE_USER_SESSION',
    CLEAR_NEXT_ROUTE: 'CLEAR_NEXT_ROUTE',
}

export const setActualRoute = payload => ({
    type: actionTypes.SET_ACTUAL_ROUTE,
    payload,
})
export const setNextRoute = payload => ({
    type: actionTypes.SET_NEXT_ROUTE,
    payload,
})

export const clearNextRoute = payload => ({
    type: actionTypes.CLEAR_NEXT_ROUTE,
    payload,
})

export const setUserSession = payload => ({
    type: actionTypes.SET_USER_SESSION,
    payload,
})

export const deleteUserSession = payload => ({
    type: actionTypes.DELETE_USER_SESSION,
    payload,
})