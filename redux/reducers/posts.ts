
import {
   PostsAction,
   LOADED_POSTS,
   ERROR_POSTS, 
   FETCH_POSTS
} from '../actions/posts';

export interface Post {
    title: string;
    author: string;
    body: string;
}

interface PostsState {
    posts?: Post[];
    error?: any;
    isFetching: boolean;
    hasFetched: boolean;
}

const initialState: PostsState = {
    posts: [],
    error: null,
    isFetching: false,
    hasFetched: false
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                isFetching: true
            }
        case LOADED_POSTS:
            return {
                ...state,
                posts: action.payload.posts,
                isFetching: false,
                hasFetched: true
            }
        case ERROR_POSTS:
            return {}
        default:
            return {...state}
    }
}

export default postsReducer
