import React, { createContext, useEffect, useRef, useState } from 'react'
import { Camera } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'

export const CameraScreenContext = createContext({})

export const CameraScreenProvider = ({ children }) => {
    const cameraRef = useRef()
    const [hasCameraPermission, setHasCameraPermission] = useState(false)
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(false)
    const [isBlackScreen, setIsBlackScreen] = useState(true)
    const [photo, setPhoto] = useState(null)

    useEffect(() => {
        requestPermissions().then(() => setIsBlackScreen(false))
    }, [])

    const requestPermissions = async () => {
        const cameraPermission = await Camera.requestCameraPermissionsAsync()
        const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync()
        setHasCameraPermission(cameraPermission.status === 'granted')
        setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted')
    }

    const resetPhoto = () => setPhoto(null)

    const savePhoto = async () => {
        await MediaLibrary.saveToLibraryAsync(photo.uri)
        setPhoto(null)
    }

    const takePhoto = async () => {
        const options = {
            quality: 1,
            base64: true,
            exif: false,
        }

        const newPhoto = await cameraRef.current.takePictureAsync(options)
        setPhoto(newPhoto)
    }

    return (
        <CameraScreenContext.Provider
            value={{ cameraRef, hasCameraPermission, hasMediaLibraryPermission, isBlackScreen, photo, resetPhoto, takePhoto, savePhoto }}
        >
            {children}
        </CameraScreenContext.Provider>
    )
}
