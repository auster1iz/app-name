import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../styles/colors'

export const MyButton = ({ onPress, title, small }) => {
    const makeButtonSmall = small ? { paddingVertical: 6, paddingHorizontal: 12 } : { paddingVertical: 13, paddingHorizontal: 16 }
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Text style={[styles.button, makeButtonSmall]}>{title}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        textAlign: 'center',
        color: COLORS.textColor,
        fontSize: 16,
        fontWeight: '500',
    },
    container: {
        backgroundColor: COLORS.secondary,
        borderRadius: 8,
    },
})
