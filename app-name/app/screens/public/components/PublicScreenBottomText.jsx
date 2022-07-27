import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../../styles/colors'

export const PublicScreenBottomText = ({ onLinkPress, linkText, text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <Pressable onPress={onLinkPress}>
                <Text style={styles.linkText}>{linkText}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: COLORS.textColor,
        marginRight: 4,
    },
    linkText: {
        color: COLORS.secondary,
    },
    container: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
    },
})
