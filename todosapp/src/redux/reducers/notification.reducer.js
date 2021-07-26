import { LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_SUCCESS, STOP_NOTIFICATION, ADD_TODO_SUCCESS, ADD_TODO_FAIL } from "../action/types"

const initialState = {
    message : '',
    type : ''
}

export const NotificationReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type){
        case LOGIN_SUCCESS :
            return {
                message : 'Login successfully',
                type    : 'success'
            }
        case LOGIN_FAIL : 
            return {
                message : 'Login failed',
                type    : 'dark'
            }
        case REGISTER_SUCCESS :
            return {
                message : 'Register successfully, please log in again',
                type    : 'success'
            }
        case STOP_NOTIFICATION :
            return {
                ...state,
                message : '',
                type : ''
            }
        case ADD_TODO_SUCCESS   :
            return {
                message : 'New todo added',
                type    : 'success'
            }
        case ADD_TODO_FAIL   :
                return {
                    message : 'Error, please try again',
                    type    : 'warning'
                }
        default:
            return state
    }
}