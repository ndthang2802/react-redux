import { ADD_TODO_FAIL, ADD_TODO_SUCCESS, LOAD_TODO_FAIL, LOAD_TODO_SUCCESS } from "../action/types"

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
            default:
                return state
        }

}