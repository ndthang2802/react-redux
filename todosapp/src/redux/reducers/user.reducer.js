import { LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_SUCCESS,REGISTER_ERROR } from "../action/types"

const initialState = {
    isLoggedIn: false,
    user : null
}

export const UserReducer = (state = initialState, action ) => {
        const { type,payload } = action
        switch (type) {
            case LOGIN_SUCCESS : 
                return {
                    ...state,
                    isLoggedIn : true,
                    user : payload,
                    login_success : true
                }
            case LOGIN_FAIL:
                return {
                    ...state,
                    isLoggedIn : false
                }
            case REGISTER_SUCCESS :
                return {
                    ...state,
                    isLoggedIn: true,
                    user : payload,
                    register_success : true
                }
            case REGISTER_ERROR : 
                return {
                    ...state,
                    error: payload
                }
            default:
                return state
        }

}