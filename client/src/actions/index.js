import axios from 'axios';

import { FETCH_USER, HANDLE_SUBMIT } from './types';


/**
 * Get Current User
 */
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current-user');
    dispatch({type: FETCH_USER, payload: res.data});        
}

/**
 * Handle token that is received from Stripe
 */
export const handleToken = (token) => {
    return (dispatch) => {
        axios.post('/api/stripe', token).then((res) => {
            dispatch({type: FETCH_USER, payload: res.data});
        });
    }
}

export const handleSubmit = (survey) => {
    
    return (dispatch) =>  {
        console.log('values sent to server: ', survey);
        axios.post('/api/surveys', { ...survey }).then(res => {
            dispatch({type: HANDLE_SUBMIT, payload: res.data});
        });
    }
}