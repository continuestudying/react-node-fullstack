import axios from 'axios';

import { FETCH_USER } from './types';

/**
 * Get Current User
 */
export const fetchUser = () => {
    return (dispatch) => {
        axios
            .get('api/current-user')
            .then(res => dispatch({type: FETCH_USER, payload: res}));
    }
}