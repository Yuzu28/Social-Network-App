//auth reducers
import{ 
    REGISTER_SUCCESS,
    REGISTER_FAIL
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
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false //got the respose and is loaded
            }
        
        case REGISTER_FAIL:
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