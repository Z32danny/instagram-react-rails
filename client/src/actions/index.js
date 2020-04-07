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

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await rails.get('/posts');

        dispatch({
            type: FETCH_POSTS,
            payload: response.data
        });
    }
}

export const fetchPost = (id) => {
    return async (dispatch) => {
        const response = await rails.get(`/posts/${id}`);

        dispatch({
            type: FETCH_POST,
            payload: response.data            
        })
    }
}

export const deletePost = (id) => {
    return async (dispatch) => {
        await rails.delete(`/posts/${id}`);

        dispatch({
            type: DELETE_POST,
            payload: id
        });
    }
}