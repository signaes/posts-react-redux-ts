import {
   LOADED_USERS,
   ERROR_USERS, 
   FETCH_USERS
} from '../actions/users';

export interface User {
    id: number;
    name: string;
}

interface UsersState {
    users?: User[];
    error?: any;
    isFetching: boolean;
    hasFetched: boolean;
}

const initialState: UsersState = {
    users: [],
    error: null,
    isFetching: false,
    hasFetched: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                isFetching: true
            }
        case LOADED_USERS:
            console.log('LOADED_USERS', action)
            return {
                ...state,
                users: action.payload.users,
                isFetching: false,
                hasFetched: true
            }
        case ERROR_USERS:
            return {}
        default:
            return {...state}
    }
}

export default usersReducer