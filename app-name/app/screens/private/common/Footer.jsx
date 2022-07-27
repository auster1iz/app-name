import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../../styles/colors'
import { FOOTER_HEIGHT } from '../../../styles/spaces'
import { useNavigationStore } from '../../../store/navigation-store'

export const Footer = () => {
    const { isHomeScreen, isCameraScreen, isUserProfileScreen, navigateToHomeScreen, navigateToCameraScreen, navigateToUserProfileScreen } =
        useNavigationStore()

    return (
        <View style={styles.container}>
            <Pressable onPress={navigateToHomeScreen}>
                <View style={[styles.dotsWrapper, isHomeScreen && styles.dotsWrapperHighlighted]}>
                    <Text style={[styles.textDefault, isHomeScreen && styles.textHighlighted]}>H</Text>
                </View>
            </Pressable>
            <Pressable onPress={navigateToCameraScreen}>
                <View style={[styles.dotsWrapper, isCameraScreen && styles.dotsWrapperHighlighted]}>
                    <Text style={[styles.textDefault, isCameraScreen && styles.textHighlighted]}>C</Text>
                </View>
            </Pressable>
            <Pressable onPress={navigateToUserProfileScreen}>
                <View style={[styles.dotsWrapper, isUserProfileScreen && styles.dotsWrapperHighlighted]}>
                    <Text style={[styles.textDefault, isUserProfileScreen && styles.textHighlighted]}>U</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: FOOTER_HEIGHT,
        backgroundColor: COLORS.background,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
    },
    dotsWrapper: {
        paddingVertical: 8,
        paddingHorizontal: 20,
    },
    dotsWrapperHighlighted: {
        borderTopWidth: 2,
        borderTopColor: COLORS.white,
    },
    textDefault: {
        color: COLORS.navButtons,
        fontSize: 20,
        fontWeight: '900',
    },
    textHighlighted: {
        color: COLORS.white,
    },
})
