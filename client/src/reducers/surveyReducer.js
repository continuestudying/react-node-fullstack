import { HANDLE_SUBMIT } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case HANDLE_SUBMIT:
            return action.payload || false;
        default:
            return state;
    }
}