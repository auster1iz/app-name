import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../../styles/colors'
import { HEADERS_COMMON_STYLES } from '../../../styles/headers-common'
import { AppLogo } from '../../common-ui/AppLogo'

export const PublicHeader = ({ screenTitle }) => {
    return (
        <View style={HEADERS_COMMON_STYLES.headerContainer}>
            <Text style={styles.headerText}>{screenTitle}</Text>
            <AppLogo />
        </View>
    )
}

const styles = StyleSheet.create({
    headerText: {
        color: COLORS.textColor,
        fontSize: 23,
        fontWeight: 'bold',
    },
})
