import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { userService } from '../api/user-service'
import { useUserStore } from '../store/user-store'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)

    const { setUser, removeUser } = useUserStore()

    useEffect(() => {
        checkIsUserLoggedIn()
    }, [])

    const login = async ({ email, password }) => {
        try {
            setIsLoading(true)
            const { data } = await userService.login(email, password)
            await setAuthData(data)
        } catch (e) {
            console.log('Error', e)
        } finally {
            setIsLoading(false)
        }
    }

    const registration = async ({ email, password, username }) => {
        try {
            setIsLoading(true)
            const { data } = await userService.registration(email, password, username)
            await setAuthData(data)
        } catch (e) {
            console.log('Error', e)
        } finally {
            setIsLoading(false)
        }
    }

    const logout = async () => {
        const token = await AsyncStorage.getItem('userToken')
        const { status } = await userService.logout(token)
        if (status === 200) {
            await AsyncStorage.removeItem('userToken')
            setUserToken(null)
            removeUser()
        }
    }

    const checkIsUserLoggedIn = async () => {
        try {
            setIsLoading(true)
            const userData = await AsyncStorage.getItem('userData')
            if (userData) setUser(JSON.parse(userData))
            const token = await AsyncStorage.getItem('userToken')
            if (token) setUserToken(token)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    const setAuthData = async (data) => {
        if (data.user) {
            const userData = JSON.stringify(data.user)
            await AsyncStorage.setItem('userData', userData)
            setUser(data.user)
        }
        if (data.token) {
            await AsyncStorage.setItem('userToken', data.token)
            setUserToken(data.token)
        }
    }

    return <AuthContext.Provider value={{ login, logout, registration, isLoading, userToken }}>{children}</AuthContext.Provider>
}
