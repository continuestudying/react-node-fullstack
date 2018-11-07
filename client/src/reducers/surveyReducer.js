import { HANDLE_SUBMIT, FETCH_SURVEYS } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case HANDLE_SUBMIT:
            return action.payload || false;
        case FETCH_SURVEYS: 
            return action.payload;
        default:
            return state;
    }
}