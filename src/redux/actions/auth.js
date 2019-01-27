import axios from "axios"
import { authLogin, authLogout } from "../actionTypes"

export const AuthLogin = (content, history) => {
    return (dispatch, getState) => {
        axios({
            method: 'post',
            url: '/login',
            data: {
                email: content.email,
                password: content.password
            }
        }) // post 
            .then((response) => {
                localStorage.setItem('token', response.data.token) // Save token to local storage
                dispatch({
                    type: authLogin
                }) // change state isAthenticated to TRUE
                history.push('/dashboard') // Redirect to dashboard 
            })
            .catch((err) => console.log(err))
    }
}

export const AuthLogout = history => {
    localStorage.removeItem('token');
    return {
        type: authLogout
    }
}