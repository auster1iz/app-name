import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../styles/colors'
import { FOOTER_HEIGHT } from '../../styles/spaces'
import { PrivateScreensCommonLayout } from './common/PrivateScreensCommonLayout'

export const UserProfileScreen = () => {
    return (
        <PrivateScreensCommonLayout>
            <View style={styles.screen_wrapper}>
                <Text style={styles.text}>User Profile Screen</Text>
            </View>
        </PrivateScreensCommonLayout>
    )
}

const styles = StyleSheet.create({
    screen_wrapper: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: FOOTER_HEIGHT,
        backgroundColor: COLORS.background,
    },
    text: {
        color: COLORS.textColor,
        fontSize: 26,
    },
})
