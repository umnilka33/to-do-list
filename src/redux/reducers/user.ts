import { SET_USER, LOGOUT } from "../constants"

type userNameProps = {
    user: string
}

type userAuthProps = {
    type: (typeof SET_USER | typeof LOGOUT),
    payload: {
        name: string,
        token: string
    }
}

const currentUserData = localStorage.getItem('name') === null?{}:{name:localStorage.getItem('name'), token:localStorage.getItem('token')};
const defaultState = {
    currentUser: currentUserData,
    isAuth: localStorage.getItem('name') === null?false:true
}

export default function userReducer(state = defaultState, {type, payload}:userAuthProps) {
    switch (type) {
        case SET_USER:
            return {
                ...state,
                currentUser: payload,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('name');
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