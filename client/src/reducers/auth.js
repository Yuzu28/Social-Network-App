//auth reducers
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR
  } from '../actions/types';

const initialState = {
    //store token in localStorage
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loadings: true,
    user: null
}

export default function(state = initialState, action){

    //destructure
    const{ type, payload } = action;
    switch(type){
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload //include detail about the user
            }

        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false //got the respose and is loaded
            }
        
        case REGISTER_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false //got the respose and is loaded

            }
        
        default:
            return state

    }

}