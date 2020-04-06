import _ from 'lodash';
import {
    CREATE_POST,
    FETCH_POSTS,
    FETCH_POST,
    DELETE_POST
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, ..._.mapKeys(action.payload, 'id')}
        default:
            return state;
    }
}