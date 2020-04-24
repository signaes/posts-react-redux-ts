import axios from 'axios'
import { API } from '../constants'

export const getPosts = () => axios.get(API.posts)
const getUsers = () => axios.get(API.users)