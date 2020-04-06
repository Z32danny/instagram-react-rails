import rails from '../apis/rails';
import {
    CREATE_POST,
    FETCH_POSTS,
    FETCH_POST,
    DELETE_POST
} from './types';

export const createPost = (formValues)=> {
    return async (dispatch, getState) => {
        
    }
}

export const fetchPosts = ()=> {
    return async (dispatch) => {
        const response = await rails.get('/posts');

        dispatch({
            type: FETCH_POSTS,
            payload: response.data
        });
    }
}