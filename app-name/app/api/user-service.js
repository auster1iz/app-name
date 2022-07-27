import { Alert } from 'react-native'
import { client } from './client'

class UserService {
    async login(email, password) {
        try {
            return await client.post('/login', { email, password })
        } catch (e) {
            Alert.alert('Error', e.response.data.message)
        }
    }

    async logout(token) {
        try {
            return await client.post('/logout', { token })
        } catch (e) {
            Alert.alert('Error', e.response.data.message)
        }
    }

    async registration(email, password, username) {
        try {
            return await client.post('/registration', { email, password, username })
        } catch (e) {
            Alert.alert('Error', e.response.data.message)
        }
    }
}

export const userService = new UserService()
