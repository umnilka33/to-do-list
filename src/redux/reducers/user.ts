import { SET_USER, LOGOUT } from "../constants"
import { userNameProps, userAuthProps } from '../../common/types'

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