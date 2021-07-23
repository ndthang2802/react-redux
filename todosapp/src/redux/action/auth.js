import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_ERROR } from "./types";
import AuthService from '../../services/auth.service'
export function Register(data){                    // update late
    return async function RegisterThunk(dispatch){
        var response = await AuthService.Register(data)
        if ( response.status === 201 ) {
            response = await response.json()
            dispatch({ type: REGISTER_SUCCESS, payload : response })
        }
        else {
            dispatch ({ type: REGISTER_ERROR, payload : response  })
        }
    }
}

export function Login(data){
    return async function LoginThunk(dispatch){
        var response = await AuthService.Login(data)
        if (response.status === 200){
            response = await response.json()
            dispatch({ type : LOGIN_SUCCESS, payload : response })
        }
        else {
            dispatch({ type : LOGIN_FAIL, payload : response })
        }
    }
}