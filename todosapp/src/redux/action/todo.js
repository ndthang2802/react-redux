import { ADD_TODO_SUCCESS, ADD_TODO_FAIL, LOAD_TODO_SUCCESS, LOAD_TODO_FAIL, 
         DELETE_TODO_SUCCESS, DELETE_TODO_FAIL,MARKDONE_TODO_FAIL,MARKDONE_TODO_SUCCESS,
         EDIT_TODO_SUCCESS, EDIT_TODO_FAIL } from "./types";
import TodoService from "../../services/todo.service";
export function AddTodo(data,user){  
    return async function AddThunk(dispatch){
        var response = await TodoService.Add(data,user)
        if ( response.status === 200 ) {
            response = await response.json()
            dispatch({ type: ADD_TODO_SUCCESS, payload : response })
        }
        else {
            dispatch ({ type: ADD_TODO_FAIL, payload : response  })
        }
    }
}

export function DeleteTodo(data,user){  
    return async function DeleteThunk(dispatch){
        var response = await TodoService.Delete(data,user)
        if ( response.status === 200 ) {
            response = await response.json()
            dispatch({ type: DELETE_TODO_SUCCESS, payload : response })
        }
        else {
            dispatch ({ type: DELETE_TODO_FAIL, payload : response  })
        }
    }
}

export function LoadTodo(user){
    return async function LoadThunk(dispatch){
        var response = await TodoService.Load(user)
        if (response.status === 200) {
            response = await response.json()
            dispatch({ type: LOAD_TODO_SUCCESS, payload : response })
        }
        else {
            dispatch({ type: LOAD_TODO_FAIL, payload : response })
        }
    }
}

export function MarkCompleted(data,user){  
    return async function MarkCompletedThunk(dispatch){
        var response = await TodoService.Completed(data,user)
        if ( response.status === 200 ) {
            response = await response.json()
            dispatch({ type: MARKDONE_TODO_SUCCESS, payload : response })
        }
        else {
            dispatch ({ type: MARKDONE_TODO_FAIL, payload : response  })
        }
    }
}


export function EditTodoTitle(data,user){  
    return async function EditTodoTitleThunk(dispatch){
        var response = await TodoService.Edit(data,user)
        if ( response.status === 200 ) {
            response = await response.json()
            dispatch({ type: EDIT_TODO_SUCCESS, payload : response })
        }
        else {
            dispatch ({ type: EDIT_TODO_FAIL, payload : response  })
        }
    }
}