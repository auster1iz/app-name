import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../styles/colors'

export const AppLogo = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.logoText, styles.whiteText]}>App</Text>
            <View style={styles.logoView}>
                <Text style={[styles.logoText, styles.blackText]}>Name</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logoText: {
        fontSize: 23,
        fontWeight: 'bold',
    },
    whiteText: {
        color: COLORS.textColor,
    },
    blackText: {
        color: COLORS.black,
    },
    logoView: {
        marginLeft: 4,
        paddingHorizontal: 4,
        backgroundColor: COLORS.secondary,
        borderColor: COLORS.secondary,
        borderWidth: 1,
        borderRadius: 4,
    },
    container: {
        flexDirection: 'row',
    },
})
