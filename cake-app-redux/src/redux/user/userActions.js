import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./userTypes"
import axios from 'axios'
export const fetchUserRequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess=()=>{
    return{
        type:FETCH_USER_SUCCESS
    }
}

export const fetchUserFailure=()=>{
    return{
        type:FETCH_USER_FAILURE
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
      dispatch(fetchUserRequest())
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          // response.data is the users
          const users = response.data
          dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchUserFailure(error.message))
        })
    }
  }
