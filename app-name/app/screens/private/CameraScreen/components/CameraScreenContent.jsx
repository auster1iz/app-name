import React, { useContext } from 'react'
import { View } from 'react-native'
import { PrivateScreensCommonLayout } from '../../common/PrivateScreensCommonLayout'
import { CameraScreenContext } from '../../../../context/CameraScreenContext'
import { CAMERA_SCREEN_COMMON } from '../../../../styles/camera-screen-common'
import { PermissionNotGranted } from './PermissionNotGranted'
import { PhotoView } from './PhotoView'
import { CameraView } from './CameraView'

export const CameraScreenContent = () => {
    const { hasCameraPermission, photo } = useContext(CameraScreenContext)

    if (!hasCameraPermission) {
        return (
            <PrivateScreensCommonLayout>
                <PermissionNotGranted />
            </PrivateScreensCommonLayout>
        )
    }

    return (
        <PrivateScreensCommonLayout>
            <View style={CAMERA_SCREEN_COMMON.screen_wrapper}>{photo ? <PhotoView /> : <CameraView />}</View>
        </PrivateScreensCommonLayout>
    )
}
