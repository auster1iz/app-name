import React, { useContext } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { MyButton } from '../../../common-ui/MyButton'
import { CameraScreenContext } from '../../../../context/CameraScreenContext'
import { CAMERA_SCREEN_COMMON } from '../../../../styles/camera-screen-common'

export const PhotoView = () => {
    const { photo, hasMediaLibraryPermission, savePhoto, resetPhoto } = useContext(CameraScreenContext)

    return (
        <View style={CAMERA_SCREEN_COMMON.cameraContainer}>
            <Image style={styles.image} source={{ uri: `data:image/jpg;base64,${photo.base64}` }} />
            <View style={CAMERA_SCREEN_COMMON.buttonContainer}>
                {hasMediaLibraryPermission && (
                    <View style={styles.photoControllers}>
                        <MyButton title="reset" onPress={resetPhoto} small />
                        <View style={styles.buttonWithMargin}>
                            <MyButton title="save" onPress={savePhoto} small />
                        </View>
                    </View>
                )}
                {!hasMediaLibraryPermission && <MyButton title="reset" onPress={resetPhoto} small />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
    },
    photoControllers: {
        flexDirection: 'row',
    },
    buttonWithMargin: {
        marginLeft: 40,
    },
})
