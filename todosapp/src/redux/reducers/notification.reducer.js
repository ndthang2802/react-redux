import { LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_SUCCESS, STOP_NOTIFICATION, ADD_TODO_SUCCESS, ADD_TODO_FAIL,
         DELETE_TODO_SUCCESS, DELETE_TODO_FAIL, MARKDONE_TODO_FAIL, MARKDONE_TODO_SUCCESS,EMPTY_DELETE_WARNING,
         EMPTY_ADD_WARNING, EDIT_TODO_FAIL, EDIT_TODO_SUCCESS } from "../action/types"

const initialState = {
    message : '',
    type : ''
}

export const NotificationReducer = (state = initialState, action) => {
    const { type } = action

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
        case DELETE_TODO_SUCCESS   :
            return {
                message : 'Deleted',
                type    : 'success'
            }
        case DELETE_TODO_FAIL   :
                return {
                    message : 'Item deleted error, please try again',
                    type    : 'warning'
                }
        case MARKDONE_TODO_SUCCESS   :
            return {
                message : 'Done !',
                type    : 'success'
            }
        case MARKDONE_TODO_FAIL   :
                return {
                    message : 'Item deleted error, please try again',
                    type    : 'warning'
                }
        case EMPTY_DELETE_WARNING   :
            return {
                message : 'Nothing to clear',
                type    : 'warning'
            }
        case EMPTY_ADD_WARNING   :
            return {
                message : 'Please, enter a todo',
                type    : 'warning'
            }
        case EDIT_TODO_SUCCESS   :
            return {
                message : 'Editted !',
                type    : 'success'
            }
        case EDIT_TODO_FAIL   :
                return {
                    message : 'Edit error, please try again',
                    type    : 'warning'
                }
                
        default:
            return state
    }
}