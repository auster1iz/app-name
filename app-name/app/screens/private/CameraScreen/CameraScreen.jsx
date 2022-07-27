import React from 'react'
import { CameraScreenProvider } from '../../../context/CameraScreenContext'
import { CameraScreenContent } from './components/CameraScreenContent'

export const CameraScreen = () => {
    return (
        <CameraScreenProvider>
            <CameraScreenContent />
        </CameraScreenProvider>
    )
}
