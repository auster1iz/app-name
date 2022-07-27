import { StyleSheet } from 'react-native'
import { FOOTER_HEIGHT } from './spaces'
import { COLORS } from './colors'

export const CAMERA_SCREEN_COMMON = StyleSheet.create({
    screen_wrapper: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: FOOTER_HEIGHT,
        backgroundColor: COLORS.background,
    },
    text: {
        fontSize: 16,
        color: COLORS.textColor,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 30,
    },
    cameraContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
