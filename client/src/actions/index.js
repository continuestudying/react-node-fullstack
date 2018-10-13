import axios from 'axios';

import { FETCH_USER } from './types';

/**
 * Get Current User
 */
// export const fetchUser = () => {
//     return (dispatch) => {
//         axios
//             .get('api/current-user')
//             .then(res => dispatch({type: FETCH_USER, payload: res}));
//     }
// }

/**
 * Get Current User
 */
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current-user');
    dispatch({type: FETCH_USER, payload: res});        
}
