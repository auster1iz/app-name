import { StyleSheet } from 'react-native'
import { COLORS } from './colors'

export const PUBLIC_SCREENS_COMMON_STYLES = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
    },
    content: {
        width: '100%',
        paddingHorizontal: 30,
    },
    buttonContainer: {
        marginTop: 30,
    },
})
