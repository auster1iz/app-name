import { StyleSheet } from 'react-native'
import { COLORS } from './colors'
import { HEADER_HEIGHT } from './spaces'

export const HEADERS_COMMON_STYLES = StyleSheet.create({
    headerContainer: {
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: HEADER_HEIGHT,
        paddingHorizontal: 30,
        backgroundColor: COLORS.background,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
})
