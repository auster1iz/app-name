import React, { useContext } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Camera } from 'expo-camera'
import { CameraScreenContext } from '../../../../context/CameraScreenContext'
import { COLORS } from '../../../../styles/colors'
import { CAMERA_SCREEN_COMMON } from '../../../../styles/camera-screen-common'

export const CameraView = () => {
    const { cameraRef, takePhoto } = useContext(CameraScreenContext)
    return (
        <Camera style={CAMERA_SCREEN_COMMON.cameraContainer} ref={cameraRef}>
            <Pressable style={CAMERA_SCREEN_COMMON.buttonContainer} onPress={takePhoto}>
                <View style={styles.cameraButton}>
                    <Text style={CAMERA_SCREEN_COMMON.text}>Snap</Text>
                </View>
            </Pressable>
        </Camera>
    )
}

const styles = StyleSheet.create({
    cameraButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        height: 64,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: COLORS.white,
    },
})
