import { ADD_TODO_SUCCESS, ADD_TODO_FAIL, LOAD_TODO_SUCCESS, LOAD_TODO_FAIL } from "./types";
import TodoService from "../../services/todo.service";
export function AddTodo(data,user){                    // update late
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
