import React from 'react'
import { StyleSheet, View } from 'react-native'
import { HEADER_HEIGHT } from '../../../styles/spaces'
import { COLORS } from '../../../styles/colors'
import { PrivateHeader } from './PrivateHeader'
import { Footer } from './Footer'

export const PrivateScreensCommonLayout = ({ children }) => {
    return (
        <View style={styles.container}>
            <PrivateHeader />
            <View style={styles.content}>{children}</View>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: HEADER_HEIGHT,
        backgroundColor: COLORS.background,
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
