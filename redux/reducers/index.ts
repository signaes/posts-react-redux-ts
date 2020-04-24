import posts from './posts'
import users from './users'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    posts,
    users
})

export default rootReducer