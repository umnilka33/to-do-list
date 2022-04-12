import { SET_USER, LOGOUT } from "../constants"

type userNameProps = {
    user: string
}

type userAuthProps = {
    type: (typeof SET_USER | typeof LOGOUT),
    payload: string
}

const defaultState = {
    currentUser: {},
    isAuth: false
}

export default function userReducer(state = defaultState, {type, payload}:userAuthProps) {
    switch (type) {
        case SET_USER:
            console.log('im in a set user', payload)
            return {
                ...state,
                currentUser: payload,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        default:
            return state
    }
}


export const setUser = (user:userNameProps) => ({type: SET_USER, payload: user});
export const logout = () => ({type: LOGOUT});