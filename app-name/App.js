import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { AppNavigator } from './app/navigation/AppNavigator'
import { AuthProvider } from './app/context/AuthContext'

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <AuthProvider>
                <AppNavigator />
            </AuthProvider>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
})
