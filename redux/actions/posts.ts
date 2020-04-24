import { getPosts } from '../../api/posts'

enum PostsActionType {
   FETCH_POSTS, 
   LOADED_POSTS,
   ERROR_POSTS
}

export interface PostsAction {
    type: PostsActionType;
    payload?: any;
}

export type ActionFunc = (payload?: any) => PostsAction

export const FETCH_POSTS = PostsActionType.FETCH_POSTS
export const LOADED_POSTS = PostsActionType.LOADED_POSTS
export const ERROR_POSTS = PostsActionType.ERROR_POSTS


export const loadedPosts: ActionFunc = (posts) => ({
    type: LOADED_POSTS,
    payload: { posts }
})

export const errorPosts: ActionFunc = (error) => ({
    type: ERROR_POSTS,
    payload: { error }
})

export const fetchPosts = () => async dispatch => {
    dispatch({ type: FETCH_POSTS }) 

    try {
        const { data: posts } = await getPosts();

        dispatch(loadedPosts(posts))
    } catch (err) {
        dispatch(errorPosts(err))
    }
}