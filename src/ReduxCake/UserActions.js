
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./ActionList"
import Axios from 'axios';

export const fetchUserRequset = ( ) => {
    return {
        type:FETCH_USER_REQUEST
    }
}

export const fetchUserData = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload:users
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload:error
    }
}

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequset)
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users=response.data
            dispatch(fetchUserData(users))
        })
        .catch(error =>{
            const errormsg=error.message
            dispatch(fetchUserFailure(errormsg))
        })

    }
}


