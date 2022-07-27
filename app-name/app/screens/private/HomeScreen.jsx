import React from 'react'
import { StyleSheet, Text } from 'react-native'
import shallow from 'zustand/shallow'
import { useUserStore } from '../../store/user-store'
import { COLORS } from '../../styles/colors'
import { PrivateScreensCommonLayout } from './common/PrivateScreensCommonLayout'

export const HomeScreen = () => {
    const { user } = useUserStore(({ user }) => ({ user }), shallow)
    return <PrivateScreensCommonLayout>{user && <Text style={styles.text}>Welcome {user.username}</Text>}</PrivateScreensCommonLayout>
}

const styles = StyleSheet.create({
    text: {
        color: COLORS.textColor,
        fontSize: 26,
    },
})
