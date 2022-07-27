import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { CameraScreenContext } from '../../../../context/CameraScreenContext'
import { CAMERA_SCREEN_COMMON } from '../../../../styles/camera-screen-common'

export const PermissionNotGranted = () => {
    const { isBlackScreen } = useContext(CameraScreenContext)

    return (
        <View style={CAMERA_SCREEN_COMMON.screen_wrapper}>
            {!isBlackScreen && <Text style={CAMERA_SCREEN_COMMON.text}>Permission for camera not granted. Please change this in settings.</Text>}
        </View>
    )
}
