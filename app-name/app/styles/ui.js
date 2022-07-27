import { StyleSheet } from 'react-native'
import { COLORS } from './colors'

export const UIStyles = StyleSheet.create({
    input: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 13,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
        fontSize: 16,
        color: COLORS.textColor,
    },
})
