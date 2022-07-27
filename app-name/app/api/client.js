import axios from 'axios'

export const BASE_URL = 'http://192.168.0.101:5000/api'

export const client = axios.create({
    baseURL: BASE_URL,
})
