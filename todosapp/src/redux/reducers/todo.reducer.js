import { ADD_TODO_FAIL, ADD_TODO_SUCCESS, LOAD_TODO_FAIL, LOAD_TODO_SUCCESS, DELETE_TODO_SUCCESS, DELETE_TODO_FAIL, MARKDONE_TODO_SUCCESS, MARKDONE_TODO_FAIL, EDIT_TODO_SUCCESS, EDIT_TODO_FAIL } from "../action/types"

const initialState = {
    todolist : [],
    donelist : []
}

export const TodoReducer = (state = initialState, action ) => {
        const { type,payload } = action
        switch (type) {
            case ADD_TODO_SUCCESS : 
                return {
                    ...state,
                    todolist : payload.todolist,
                    donelist : payload.donelist
                    
                }
            case ADD_TODO_FAIL:
                return {
                    ...state,
                }
            case LOAD_TODO_SUCCESS :
                return {
                    ...state,
                    todolist : payload.todolist,
                    donelist : payload.donelist
                }
            case LOAD_TODO_FAIL : 
                return {
                    ...state,
                }
            case DELETE_TODO_SUCCESS :
                return {
                    ...state,
                    todolist : payload.todolist,
                }
            case DELETE_TODO_FAIL : 
                return {
                    ...state,
                }
            case MARKDONE_TODO_SUCCESS :
                return {
                    ...state,
                    todolist : payload.todolist,
                }
            case MARKDONE_TODO_FAIL : 
                return {
                    ...state,
                }
            case EDIT_TODO_SUCCESS :
                return {
                    ...state,
                    todolist : payload.todolist,
                }
            case EDIT_TODO_FAIL : 
                return {
                    ...state,
                }
            default:
                return state
        }

}