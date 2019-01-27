import { authLogin, authLogout } from "../actionTypes"

const initialState = {
    isAuthenticated: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case authLogin:
            return { ...state, isAuthenticated: true }

        case authLogout:
            return { ...state, isAuthenticated: false }
        default:
            return state
    }
}