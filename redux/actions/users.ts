import { getUsers } from '../../api/posts'
import { ReduxAction, ActionCreatorFunc } from './types'

type UsersActionTypes = 'FETCH_USERS' | 'LOADED_USERS' | 'ERROR_USERS' 
const UsersActionType = {
   FETCH_USERS: 'FETCH_USERS', 
   LOADED_USERS: 'LOADED_USERS',
   ERROR_USERS: 'ERROR_USERS'
}

export type UsersAction = ReduxAction<UsersActionTypes>

export const FETCH_USERS = (UsersActionType.FETCH_USERS as UsersActionTypes)
export const LOADED_USERS = (UsersActionType.LOADED_USERS as UsersActionTypes)
export const ERROR_USERS = (UsersActionType.ERROR_USERS as UsersActionTypes)

export const loadedUsers: ActionCreatorFunc<UsersAction> = (users) => ({
    type: LOADED_USERS,
    payload: { users }
})

export const errorUsers: ActionCreatorFunc<UsersAction> = (error) => ({
    type: ERROR_USERS,
    payload: { error }
})

export const fetchUsers = () => async dispatch => {
    dispatch({ type: FETCH_USERS }) 

    try {
        const { data: users } = await getUsers();

        dispatch(loadedUsers(users))
    } catch (err) {
        dispatch(errorUsers(err))
    }
}