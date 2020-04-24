import { getPosts } from '../../api/posts'
import { ReduxAction, ActionCreatorFunc } from './types'

type PostsActionTypes = 'FETCH_POSTS' | 'LOADED_POSTS' | 'ERROR_POSTS' 
const PostsActionType = {
   FETCH_POSTS: 'FETCH_POSTS', 
   LOADED_POSTS: 'LOADED_POSTS',
   ERROR_POSTS: 'ERROR_POSTS'
}

export type PostsAction = ReduxAction<PostsActionTypes>

export const FETCH_POSTS = (PostsActionType.FETCH_POSTS as PostsActionTypes)
export const LOADED_POSTS = (PostsActionType.LOADED_POSTS as PostsActionTypes)
export const ERROR_POSTS = (PostsActionType.ERROR_POSTS as PostsActionTypes)

export const loadedPosts: ActionCreatorFunc<PostsAction> = (posts) => ({
    type: LOADED_POSTS,
    payload: { posts }
})

export const errorPosts: ActionCreatorFunc<PostsAction> = (error) => ({
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