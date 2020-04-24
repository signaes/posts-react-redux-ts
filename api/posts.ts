import axios from 'axios'
import { API } from '../constants'

export const getPosts = () => axios.get(API.posts)
export const getUsers = () => axios.get(API.users)